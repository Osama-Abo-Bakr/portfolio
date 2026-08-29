#!/usr/bin/env python3
"""Generate the site's imagery.

There is no photography for this portfolio, and the Loire reference's
photographs are motion-blurred monochrome anyway — that treatment, not the
photography, is what carries its composition. So: pose an articulated
machine figure from a joint skeleton, seed a particle field from its
silhouette, advect the particles through smoothed noise, and duotone the
result into the forest palette.

    python3 scripts/generate-imagery.py

Writes into public/img/. Deterministic — each plate is seeded, so a rerun
reproduces the same images.
"""
import math
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "img")

FOREST_DARK = (30, 36, 29)
FOREST_LIGHT = (226, 229, 216)
WHITE_DARK = (150, 158, 146)
WHITE_LIGHT = (252, 252, 250)


# ---------------------------------------------------------------- noise

def smooth_noise(h, w, scale, rng):
    """Value noise: a random lattice, bicubic-upsampled, then blurred."""
    small = rng.random((max(2, h // scale), max(2, w // scale)))
    img = Image.fromarray((small * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
    return np.asarray(img.filter(ImageFilter.GaussianBlur(scale / 3))) / 255.0


# ---------------------------------------------------------------- figure

def _cap(d, p, q, r):
    d.line([p, q], fill=255, width=int(r * 2))
    for c in (p, q):
        d.ellipse([c[0] - r, c[1] - r, c[0] + r, c[1] + r], fill=255)


def _pt(o, ang, ln):
    return (o[0] + math.cos(ang) * ln, o[1] + math.sin(ang) * ln)


# Angles run clockwise from +x: pi/2 is straight down, -pi/2 straight up.
# shoulderL, elbowL, shoulderR, elbowR, hipL, kneeL, hipR, kneeR, lean
POSES = {
    "stride": (2.00, 2.50, 0.95, 0.30, 1.10, 1.50, 2.05, 2.55, 0.08),
    "reach":  (2.20, 2.62, -0.35, -0.78, 1.25, 1.55, 1.98, 2.32, -0.12),
    "guard":  (1.35, 0.55, 0.58, -0.10, 1.34, 1.66, 1.92, 1.58, 0.03),
}


def machine(h, w, pose="stride", scale=1.0, cx=0.5, cy=0.54, flip=False):
    """A posed machine silhouette. Blocky joints read as machine, not man."""
    m = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(m)
    u = h * 0.052 * scale
    ox, oy = w * cx, h * cy
    sL, eL, sR, eR, hL, kL, hR, kR, lean = POSES[pose]
    if flip:
        sL, sR = math.pi - sR, math.pi - sL
        eL, eR = math.pi - eR, math.pi - eL
        hL, hR = math.pi - hR, math.pi - hL
        kL, kR = math.pi - kR, math.pi - kL
        lean = -lean

    pelvis = (ox + lean * u * 2, oy + 1.7 * u)
    chest = (ox - lean * u, oy - 1.5 * u)
    neck = (ox - lean * u * 1.6, oy - 2.9 * u)
    _cap(d, pelvis, chest, u * 1.15)
    _cap(d, chest, neck, u * 0.85)

    hx, hy = neck[0] - lean * u, neck[1] - u * 1.35
    d.rounded_rectangle([hx - u*0.95, hy - u*1.15, hx + u*0.95, hy + u*0.75], u*0.34, fill=255)
    d.rectangle([hx - u*0.16, hy - u*2.05, hx + u*0.16, hy - u*1.1], fill=255)
    d.ellipse([hx - u*0.34, hy - u*2.4, hx + u*0.34, hy - u*1.75], fill=255)

    for sh, a1, a2 in (((chest[0] - u*1.05, chest[1] - u*0.25), sL, eL),
                       ((chest[0] + u*1.05, chest[1] - u*0.25), sR, eR)):
        el = _pt(sh, a1, u * 1.95)
        wr = _pt(el, a2, u * 1.80)
        _cap(d, sh, el, u * 0.50)
        _cap(d, el, wr, u * 0.40)

    for hp, a1, a2 in (((pelvis[0] - u*0.80, pelvis[1]), hL, kL),
                       ((pelvis[0] + u*0.80, pelvis[1]), hR, kR)):
        kn = _pt(hp, a1, u * 2.30)
        an = _pt(kn, a2, u * 2.20)
        _cap(d, hp, kn, u * 0.60)
        _cap(d, kn, an, u * 0.46)
        d.rounded_rectangle([an[0]-u*0.75, an[1]-u*0.16, an[0]+u*0.55, an[1]+u*0.42], u*0.14, fill=255)

    return np.asarray(m.filter(ImageFilter.GaussianBlur(h * 0.006))) / 255.0


# ---------------------------------------------------------------- plate

def duotone(lum, dark, light, gamma=0.9):
    l = (np.clip(lum, 0, 1) ** gamma)[..., None]
    return (np.array(dark) * (1 - l) + np.array(light) * l).astype(np.uint8)


def plate(w, h, seed, pose="stride", scale=1.15, cx=0.5, cy=0.54, flip=False,
          steps=30, amp=1.35, drift=0.45, spd=0.0036, n=150000, blur=1.0,
          dark=FOREST_DARK, light=FOREST_LIGHT, fig_weight=2.8, gamma=0.9,
          figure=True):
    rng = np.random.default_rng(seed)
    density = smooth_noise(h, w, max(6, h // 9), rng) * 0.5 * 0.28 + 0.014
    if figure:
        density = density + machine(h, w, pose, scale, cx, cy, flip) * fig_weight

    ang = (smooth_noise(h, w, max(8, h // 7), rng) - 0.5) * amp
    flat = density.ravel(); flat = flat / flat.sum()
    idx = rng.choice(flat.size, size=n, p=flat)
    y = (idx // w).astype(float) + rng.normal(0, 1.2, n)
    x = (idx % w).astype(float) + rng.normal(0, 1.2, n)

    acc = np.zeros((h, w))
    speed = h * spd * (0.45 + rng.random(n))
    for s in range(steps):
        yi = np.clip(y.astype(int), 0, h - 1); xi = np.clip(x.astype(int), 0, w - 1)
        a = ang[yi, xi] + drift
        x += np.cos(a) * speed; y += np.sin(a) * speed * 0.5
        np.add.at(acc, (np.clip(y.astype(int), 0, h-1), np.clip(x.astype(int), 0, w-1)),
                  (1.0 - s / steps) ** 1.25)

    norm = np.clip(acc / (np.percentile(acc, 99.5) + 1e-9), 0, 1)
    norm = np.asarray(Image.fromarray((norm * 255).astype(np.uint8))
                      .filter(ImageFilter.GaussianBlur(blur))) / 255.0
    return Image.fromarray(duotone(np.clip(norm * 1.18, 0, 1), dark, light, gamma))


def circle_mask(im):
    w, h = im.size
    m = Image.new("L", (w * 4, h * 4), 0)
    ImageDraw.Draw(m).ellipse([0, 0, w * 4, h * 4], fill=255)
    out = im.convert("RGBA")
    out.putalpha(m.resize((w, h), Image.LANCZOS))
    return out


def save(im, name, quality=84):
    path = os.path.join(OUT, name)
    if name.endswith(".png"):
        im.save(path, optimize=True)
    else:
        im.convert("RGB").save(path, quality=quality, optimize=True, progressive=True)
    print(f"  {name:22} {os.path.getsize(path)//1024:>5} KB")


def main():
    os.makedirs(OUT, exist_ok=True)
    print("generating imagery…")

    # Hero: figure kept small in frame so the joints never resolve at full
    # bleed, but not so smeared that it stops reading as a figure. Sits
    # right of centre, the way the reference crops its athlete.
    save(plate(1800, 1100, 104, "stride", scale=0.95, cx=0.60, cy=0.53,
               steps=34, amp=1.55, spd=0.0040, n=240000, blur=1.4), "hero.jpg")

    for i, (seed, pose, flip) in enumerate([(211, "stride", False), (212, "reach", True), (213, "guard", False)]):
        save(plate(420, 300, seed, pose, scale=1.25, steps=34, amp=1.6, spd=0.004,
                   n=70000, blur=1.0, flip=flip), f"thumb-{i+1}.jpg")

    save(plate(1000, 1240, 301, "reach", scale=1.05, cx=0.5, cy=0.5, flip=True,
               steps=34, amp=1.5, spd=0.0038, n=190000, blur=1.2), "approach.jpg")

    for i, (seed, pose, flip) in enumerate([(401, "stride", False), (402, "guard", True), (403, "reach", False)]):
        save(plate(820, 600, seed, pose, scale=1.15, steps=32, amp=1.4, spd=0.0036,
                   n=120000, blur=1.0, flip=flip), f"domain-{i+1}.jpg")

    save(plate(1100, 680, 501, "guard", scale=1.0, cx=0.48, steps=36, amp=1.6,
               spd=0.0042, n=150000, blur=1.2), "stage-lead.jpg")
    for i, (seed, pose, flip) in enumerate([(502, "stride", True), (503, "reach", False), (504, "guard", False)]):
        save(plate(560, 420, seed, pose, scale=1.2, steps=30, amp=1.4, spd=0.0036,
                   n=80000, blur=1.0, flip=flip), f"stage-{i+1}.jpg")

    # The circle sits on .band-deep, so its own dark has to be that exact
    # value or the mask edge shows as a ring.
    save(circle_mask(plate(860, 860, 601, "reach", scale=1.05, cy=0.5, steps=32,
                           amp=1.5, spd=0.0038, n=150000, blur=1.1,
                           dark=(38, 45, 37))), "orbit.png")

    # Portrait: head and shoulders. At scale s the head centre lands at
    # h*(cy - 0.221*s), so cy is solved to put it a third of the way down.
    save(plate(1000, 1240, 704, "guard", scale=2.2, cx=0.50, cy=0.81, steps=24,
               amp=0.95, spd=0.0026, n=200000, blur=1.3), "portrait.jpg")

    print("done.")


if __name__ == "__main__":
    main()
