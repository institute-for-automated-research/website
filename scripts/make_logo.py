#!/usr/bin/env python3
"""
Generate the Institute for Automated Research logo: a recursive-loop ring
(automation + adversarial self-verification) wrapping a serif "IAR" monogram.

Brand-locked: ink #1a1a1a, paper #fafaf7, sepia accent #5a3d2b, and the
P052 typeface (the URW Palatino clone the site's serif stack falls back to).
"IAR" is emitted as outline paths via fontTools, so the SVG carries no font
dependency.

Outputs (in brand/):
  logo.svg            transparent, ink mark + wordmark-less monogram
  logo-accent.svg     same, ring in sepia accent
  favicon.svg         square, tight crop, transparent
  favicon-32.png      browser tab
  favicon-180.png     apple-touch-icon
  favicon-512.png     PWA / large
  og.png              1200x630 social card on paper
  preview.png         contact sheet for review (light + dark, many sizes)
"""

import math
import os

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from PIL import Image, ImageDraw, ImageFont

# ---- brand constants --------------------------------------------------------
INK = "#1a1a1a"
PAPER = "#fafaf7"
ACCENT = "#5a3d2b"
FONT_OTF = "/usr/share/fonts/opentype/urw-base35/P052-Bold.otf"

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "brand")
os.makedirs(OUT, exist_ok=True)

# ---- geometry: the recursive loop ------------------------------------------
# Canvas is a 100x100 viewBox, centre (50,50).
CX = CY = 50.0
R = 38.0          # ring radius
SW = 3.4          # ring stroke width
GAP_DEG = 46.0    # opening at the top of the ring
A_TOP = -90.0     # screen angle of 12 o'clock (0=east, +clockwise, y-down)


def pt(angle_deg, radius=R):
    a = math.radians(angle_deg)
    return CX + radius * math.cos(a), CY + radius * math.sin(a)


def loop_path():
    """Open ring drawn clockwise, ending just before the top gap."""
    a_start = A_TOP + GAP_DEG / 2.0          # right edge of the gap
    a_end = A_TOP - GAP_DEG / 2.0 + 360.0    # left edge of the gap (full sweep)
    x0, y0 = pt(a_start)
    x1, y1 = pt(a_end)
    # large-arc, sweep=1 (clockwise on a y-down canvas)
    return f"M {x0:.3f} {y0:.3f} A {R} {R} 0 1 1 {x1:.3f} {y1:.3f}"


def arrowhead():
    """Triangle at the terminal (left edge of the gap), along the tangent."""
    a_end = A_TOP - GAP_DEG / 2.0
    tipx, tipy = pt(a_end)
    a = math.radians(a_end)
    # clockwise tangent direction = (-sin a, cos a)
    hx, hy = -math.sin(a), math.cos(a)
    # perpendicular
    px, py = -hy, hx
    L, W = 7.6, 5.0
    bx, by = tipx - hx * L, tipy - hy * L
    p1 = (bx + px * W / 2, by + py * W / 2)
    p2 = (bx - px * W / 2, by - py * W / 2)
    return (f"M {tipx:.3f} {tipy:.3f} "
            f"L {p1[0]:.3f} {p1[1]:.3f} "
            f"L {p2[0]:.3f} {p2[1]:.3f} Z")


# ---- the IAR monogram as outline paths --------------------------------------
def monogram_svg():
    """Return (svg_path_d, transform) placing letterspaced 'IAR' centred."""
    font = TTFont(FONT_OTF)
    upm = font["head"].unitsPerEm
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()

    letters = "IAR"
    tracking = 0.12  # of em, optical letterspacing for a monogram
    advances, d_parts, x_cursor = [], [], 0.0
    for ch in letters:
        gname = cmap[ord(ch)]
        pen = SVGPathPen(glyph_set)
        glyph_set[gname].draw(pen)
        # shift this glyph by x_cursor (font units, y-up)
        d_parts.append((x_cursor, pen.getCommands()))
        adv = glyph_set[gname].width
        advances.append(adv)
        x_cursor += adv + tracking * upm

    total_w = x_cursor - tracking * upm  # trailing track removed
    # cap height for vertical centring
    cap = font["OS/2"].sCapHeight if hasattr(font["OS/2"], "sCapHeight") else 0.7 * upm

    # target: glyph block ~ 0.46 of the ring diameter
    target_h = 2 * R * 0.40
    scale = target_h / cap
    tx = CX - (total_w * scale) / 2.0
    ty = CY + (cap * scale) / 2.0  # baseline (y-down canvas, flip y)

    body = []
    for x_off, d in d_parts:
        body.append(
            f'<g transform="translate({tx + x_off*scale:.4f} {ty:.4f}) '
            f'scale({scale:.6f} {-scale:.6f})">'
            f'<path d="{d}"/></g>'
        )
    return "\n    ".join(body)


def build_svg(ring_color=INK, text_color=INK, bg=None, pad=6):
    vb = f"{-pad} {-pad} {100 + 2*pad} {100 + 2*pad}"
    bg_rect = (f'<rect x="{-pad}" y="{-pad}" width="{100+2*pad}" '
               f'height="{100+2*pad}" fill="{bg}"/>' if bg else "")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" \
role="img" aria-label="Institute for Automated Research">
  <title>Institute for Automated Research</title>
  {bg_rect}
  <g fill="none" stroke="{ring_color}" stroke-width="{SW}" \
stroke-linecap="round">
    <path d="{loop_path()}"/>
  </g>
  <path d="{arrowhead()}" fill="{ring_color}"/>
  <g fill="{text_color}">
    {monogram_svg()}
  </g>
</svg>
'''


# ---- write SVGs -------------------------------------------------------------
variants = {
    "logo.svg": build_svg(INK, INK, None, pad=6),
    "logo-accent.svg": build_svg(ACCENT, INK, None, pad=6),
    "favicon.svg": build_svg(INK, INK, None, pad=2),
}
for name, svg in variants.items():
    with open(os.path.join(OUT, name), "w") as f:
        f.write(svg)


# ---- raster rendering (Pillow draws the same geometry; same P052 font) ------
def render(size, ring_rgb, text_rgb, bg_rgb=None, pad_frac=0.06, ss=4):
    """Render the mark to a Pillow image at `size` px (supersampled)."""
    S = size * ss
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0) if bg_rgb is None else bg_rgb)
    d = ImageDraw.Draw(img)
    pad = pad_frac * S

    def P(ang, rad=R):
        a = math.radians(ang)
        return (pad + (CX + rad * math.cos(a)) / 100 * (S - 2 * pad),
                pad + (CY + rad * math.sin(a)) / 100 * (S - 2 * pad))

    sw = SW / 100 * (S - 2 * pad)
    # ring (arc) — Pillow angles: 0=east, +clockwise
    a0 = A_TOP + GAP_DEG / 2.0
    a1 = A_TOP - GAP_DEG / 2.0 + 360.0
    box = [pad + (CX - R) / 100 * (S - 2 * pad),
           pad + (CY - R) / 100 * (S - 2 * pad),
           pad + (CX + R) / 100 * (S - 2 * pad),
           pad + (CY + R) / 100 * (S - 2 * pad)]
    d.arc(box, a0, a1, fill=ring_rgb, width=int(round(sw)))

    # arrowhead
    a_end = A_TOP - GAP_DEG / 2.0
    tip = P(a_end)
    a = math.radians(a_end)
    hx, hy = -math.sin(a), math.cos(a)
    px, py = -hy, hx
    Lp = 7.6 / 100 * (S - 2 * pad)
    Wp = 5.0 / 100 * (S - 2 * pad)
    bx, by = tip[0] - hx * Lp, tip[1] - hy * Lp
    d.polygon([tip,
               (bx + px * Wp / 2, by + py * Wp / 2),
               (bx - px * Wp / 2, by - py * Wp / 2)], fill=ring_rgb)

    # IAR via the actual P052 font
    letters = "IAR"
    target_h = 2 * R * 0.40 / 100 * (S - 2 * pad)
    fs = int(target_h / 0.7)
    font = ImageFont.truetype(FONT_OTF, fs)
    # letterspacing by drawing glyphs individually
    track = int(0.12 * fs)
    widths = [d.textbbox((0, 0), c, font=font)[2] for c in letters]
    total = sum(widths) + track * (len(letters) - 1)
    asc, desc = font.getmetrics()
    cx0 = pad + (S - 2 * pad) / 2 - total / 2
    # vertical optical centre on cap height
    cap_box = d.textbbox((0, 0), "I", font=font)
    cap_h = cap_box[3] - cap_box[1]
    cy0 = pad + (S - 2 * pad) / 2 - cap_h / 2 - cap_box[1]
    x = cx0
    for c, w in zip(letters, widths):
        d.text((x, cy0), c, font=font, fill=text_rgb)
        x += w + track

    return img.resize((size, size), Image.LANCZOS)


def hx(c):
    c = c.lstrip("#")
    if len(c) == 3:
        c = "".join(ch * 2 for ch in c)
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))


INK_RGB, PAPER_RGB, ACC_RGB = hx(INK), hx(PAPER), hx(ACCENT)

render(32, INK_RGB, INK_RGB).save(os.path.join(OUT, "favicon-32.png"))
render(180, INK_RGB, INK_RGB).save(os.path.join(OUT, "favicon-180.png"))
render(512, INK_RGB, INK_RGB).save(os.path.join(OUT, "favicon-512.png"))

# OG card: mark + wordmark on paper
og = Image.new("RGBA", (1200, 630), PAPER_RGB + (255,))
mark = render(360, INK_RGB, INK_RGB, pad_frac=0.02)
og.alpha_composite(mark, (140, 135))
od = ImageDraw.Draw(og)
title_f = ImageFont.truetype(FONT_OTF, 72)
sub_f = ImageFont.truetype("/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf", 26)
od.text((560, 230), "Institute for", font=title_f, fill=INK_RGB)
od.text((560, 312), "Automated Research", font=title_f, fill=INK_RGB)
sub = "ADVERSARIALLY-VERIFIED SCIENTIFIC REASONING"
od.text((562, 412), sub, font=sub_f, fill=hx("#888"))
og.convert("RGB").save(os.path.join(OUT, "og.png"), quality=92)

# ---- contact sheet for human review ----------------------------------------
sheet = Image.new("RGB", (1100, 560), PAPER_RGB)
sd = ImageDraw.Draw(sheet)
lbl = ImageFont.truetype("/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf", 18)
sd.text((40, 28), "Recursive loop + IAR  —  on paper #fafaf7", font=lbl, fill=hx("#888"))
xpos = 40
for s in (32, 64, 128, 256):
    m = render(s, INK_RGB, INK_RGB)
    sheet.paste(m, (xpos, 70 + (256 - s)), m)
    sd.text((xpos, 340), f"{s}px", font=lbl, fill=hx("#888"))
    xpos += s + 48
# accent variant
m = render(256, ACC_RGB, INK_RGB)
sheet.paste(m, (xpos, 70), m)
sd.text((xpos, 340), "accent ring", font=lbl, fill=hx("#888"))

# dark strip
sd.rectangle([40, 380, 1060, 540], fill=hx("#1a1a1a"))
sd.text((56, 388), "on dark", font=lbl, fill=hx("#888"))
xp = 60
for s in (48, 96):
    m = render(s, hx("#fafaf7"), hx("#fafaf7"))
    sheet.paste(m, (xp, 420 + (96 - s)), m)
    xp += s + 40
m = render(96, ACC_RGB, hx("#fafaf7"))
sheet.paste(m, (xp, 420), m)
sheet.save(os.path.join(OUT, "preview.png"))

print("wrote:", ", ".join(sorted(os.listdir(OUT))))
