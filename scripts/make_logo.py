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
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Offset
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
    tracking = 0.06  # of em, optical letterspacing for a monogram

    # Lay glyphs out at their x offsets, capturing both the draw commands
    # and the *true ink* bounding box (BoundsPen) so centring is optical,
    # not metrics-based (side bearings / overshoot would otherwise bias it).
    d_parts, x_cursor = [], 0.0
    bx0 = by0 = float("inf")
    bx1 = by1 = float("-inf")
    for ch in letters:
        gname = cmap[ord(ch)]
        pen = SVGPathPen(glyph_set)
        glyph_set[gname].draw(pen)
        d_parts.append((x_cursor, pen.getCommands()))

        bp = BoundsPen(glyph_set)
        glyph_set[gname].draw(TransformPen(bp, Offset(x_cursor, 0)))
        if bp.bounds:
            gx0, gy0, gx1, gy1 = bp.bounds
            bx0, by0 = min(bx0, gx0), min(by0, gy0)
            bx1, by1 = max(bx1, gx1), max(by1, gy1)

        x_cursor += glyph_set[gname].width + tracking * upm

    ink_w, ink_h = bx1 - bx0, by1 - by0
    ink_cx, ink_cy = (bx0 + bx1) / 2.0, (by0 + by1) / 2.0

    # Fit the *ink* box inside the ring with breathing room: width ≤ 0.60·D,
    # height ≤ 0.34·D, scale by the binding dimension.
    scale = min((2 * R * 0.60) / ink_w, (2 * R * 0.34) / ink_h)

    # Map the ink-box centre exactly onto the ring centre. Glyph space is
    # y-up; canvas is y-down, hence the y flip in the inner scale.
    tx = CX - ink_cx * scale
    ty = CY + ink_cy * scale

    body = []
    for x_off, d in d_parts:
        body.append(
            f'<g transform="translate({tx + x_off*scale:.4f} {ty:.4f}) '
            f'scale({scale:.6f} {-scale:.6f})">'
            f'<path d="{d}"/></g>'
        )
    return "\n    ".join(body)


_MONO = monogram_svg()  # deterministic; compute the outline paths once


def build_svg(ring_color=INK, text_color=INK, bg=None, pad=6, style=""):
    vb = f"{-pad} {-pad} {100 + 2*pad} {100 + 2*pad}"
    bg_rect = (f'<rect x="{-pad}" y="{-pad}" width="{100+2*pad}" '
               f'height="{100+2*pad}" fill="{bg}"/>' if bg else "")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" \
role="img" aria-label="Institute for Automated Research">
  <title>Institute for Automated Research</title>{style}
  {bg_rect}
  <g fill="none" stroke="{ring_color}" stroke-width="{SW}" \
stroke-linecap="round">
    <path d="{loop_path()}"/>
  </g>
  <path d="{arrowhead()}" fill="{ring_color}"/>
  <g fill="{text_color}">
    {_MONO}
  </g>
</svg>
'''


# An adaptive favicon: ink on light UI, paper on dark UI — one file, no JS.
ADAPTIVE_STYLE = (
    '\n  <style>:root{color:%s}'
    '@media(prefers-color-scheme:dark){:root{color:%s}}</style>'
) % (INK, PAPER)

# ---- write SVGs -------------------------------------------------------------
variants = {
    # standalone marks
    "logo.svg":         build_svg(INK,    INK,   None, pad=6),
    "logo-dark.svg":    build_svg(PAPER,  PAPER, None, pad=6),  # for dark bg
    "logo-accent.svg":  build_svg(ACCENT, INK,   None, pad=6),
    # favicons
    "favicon.svg":      build_svg("currentColor", "currentColor", None,
                                  pad=2, style=ADAPTIVE_STYLE),
    "favicon-light.svg": build_svg(INK,   INK,   None, pad=2),
    "favicon-dark.svg":  build_svg(PAPER, PAPER, None, pad=2),
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

    # IAR via the actual P052 font. Draw onto a private layer, crop to the
    # true ink bbox, then paste dead-centre on the ring centre — so the
    # monogram is optically centred regardless of font side bearings.
    letters = "IAR"
    inner = S - 2 * pad
    w_target = 2 * R * 0.60 / 100 * inner
    h_target = 2 * R * 0.34 / 100 * inner

    def text_layer(fs):
        f = ImageFont.truetype(FONT_OTF, fs)
        tr = int(round(0.06 * fs))
        tmp = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        td = ImageDraw.Draw(tmp)
        x = S * 0.2
        for c in letters:
            td.text((x, S * 0.2), c, font=f, fill=text_rgb)
            x += td.textbbox((0, 0), c, font=f)[2] + tr
        return tmp, tmp.getbbox()

    fs = int(h_target / 0.7) or 1
    layer, bb = text_layer(fs)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    fs = int(fs * min(w_target / tw, h_target / th))
    layer, bb = text_layer(fs)
    glyphs = layer.crop(bb)
    gw, gh = glyphs.size
    img.alpha_composite(
        glyphs,
        (int(round(pad + inner / 2 - gw / 2)),
         int(round(pad + inner / 2 - gh / 2))),
    )

    return img.resize((size, size), Image.LANCZOS)


def hx(c):
    c = c.lstrip("#")
    if len(c) == 3:
        c = "".join(ch * 2 for ch in c)
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))


INK_RGB, PAPER_RGB, ACC_RGB = hx(INK), hx(PAPER), hx(ACCENT)
FAINT = hx("#888")
SANS = "/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf"

# Favicons — ink for light UI, paper for dark UI
for sz in (32, 180, 512):
    render(sz, INK_RGB, INK_RGB).save(os.path.join(OUT, f"favicon-{sz}.png"))
    render(sz, PAPER_RGB, PAPER_RGB).save(
        os.path.join(OUT, f"favicon-{sz}-dark.png"))


def make_og(bg_rgb, fg_rgb, faint_rgb):
    """Centred lockup: mark + two-line title + subtitle, as one block."""
    W, H = 1200, 630
    og = Image.new("RGBA", (W, H), bg_rgb + (255,))
    od = ImageDraw.Draw(og)
    title_f = ImageFont.truetype(FONT_OTF, 76)
    sub_f = ImageFont.truetype(SANS, 24)

    l1, l2 = "Institute for", "Automated Research"
    sub = "A D V E R S A R I A L L Y - V E R I F I E D   R E A S O N I N G"
    b1 = od.textbbox((0, 0), l1, font=title_f)
    b2 = od.textbbox((0, 0), l2, font=title_f)
    bs = od.textbbox((0, 0), sub, font=sub_f)
    text_w = max(b2[2] - b2[0], bs[2] - bs[0])
    line_h = 88
    text_h = line_h * 2 + 28 + (bs[3] - bs[1])

    mark_sz = 300
    gap = 64
    group_w = mark_sz + gap + text_w
    gx = (W - group_w) // 2
    gy_mark = (H - mark_sz) // 2
    gy_text = (H - text_h) // 2

    mark = render(mark_sz, fg_rgb, fg_rgb, pad_frac=0.04)
    og.alpha_composite(mark, (gx, gy_mark))

    tx = gx + mark_sz + gap
    od.text((tx, gy_text), l1, font=title_f, fill=fg_rgb)
    od.text((tx, gy_text + line_h), l2, font=title_f, fill=fg_rgb)
    od.text((tx, gy_text + line_h * 2 + 28), sub, font=sub_f, fill=faint_rgb)
    return og.convert("RGB")


make_og(PAPER_RGB, INK_RGB, FAINT).save(
    os.path.join(OUT, "og.png"), quality=92)
make_og(INK_RGB, PAPER_RGB, FAINT).save(
    os.path.join(OUT, "og-dark.png"), quality=92)

# ---- contact sheet for human review ----------------------------------------
sheet = Image.new("RGB", (1120, 760), PAPER_RGB)
sd = ImageDraw.Draw(sheet)
lbl = ImageFont.truetype(SANS, 18)

# light row (ink on paper) — a centre guide proves the monogram is centred
sd.text((40, 26), "Light  —  ink on paper #fafaf7", font=lbl, fill=FAINT)
xpos = 40
for s in (32, 64, 128, 256):
    m = render(s, INK_RGB, INK_RGB)
    y = 64 + (256 - s) // 2
    sheet.paste(m, (xpos, y), m)
    sd.line([(xpos + s / 2, 64), (xpos + s / 2, 64 + 256)],
            fill=hx("#d8d8d0"), width=1)          # centre guide
    sheet.paste(m, (xpos, y), m)
    sd.text((xpos, 336), f"{s}px", font=lbl, fill=FAINT)
    xpos += s + 56
m = render(256, ACC_RGB, INK_RGB)
sheet.paste(m, (xpos, 64), m)
sd.text((xpos, 336), "accent ring", font=lbl, fill=FAINT)

# dark row (paper on ink)
sd.rectangle([0, 376, 1120, 600], fill=INK_RGB)
sd.text((40, 388), "Dark  —  paper on ink #1a1a1a", font=lbl, fill=FAINT)
xp = 40
for s in (32, 64, 128, 192):
    m = render(s, PAPER_RGB, PAPER_RGB)
    sheet.paste(m, (xp, 420 + (192 - s) // 2), m)
    sd.text((xp, 580), f"{s}px", font=lbl, fill=FAINT)
    xp += s + 56
m = render(192, ACC_RGB, PAPER_RGB)
sheet.paste(m, (xp, 420), m)
sd.text((xp, 580), "accent ring", font=lbl, fill=FAINT)

# OG thumbnails
sd.text((40, 614), "OG cards (1200×630, centred lockup)", font=lbl, fill=FAINT)
ogl = make_og(PAPER_RGB, INK_RGB, FAINT).resize((480, 252), Image.LANCZOS)
ogd = make_og(INK_RGB, PAPER_RGB, FAINT).resize((480, 252), Image.LANCZOS)
sheet.paste(ogl, (40, 642))
sheet.paste(ogd, (560, 642))
sheet.save(os.path.join(OUT, "preview.png"))

print("wrote:", ", ".join(sorted(os.listdir(OUT))))
