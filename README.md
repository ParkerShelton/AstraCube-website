# SpaceCraft website

A single-page site for alpha testers. Everything is in `index.html` (no build
step). The only thing it loads from the internet is fonts from Google Fonts.

## Open it

- **Quickest:** double-click `index.html` and it opens in your browser.
- **Like a real web server** (closer to how it behaves once hosted):

      cd website
      python -m http.server 8000

  then open <http://localhost:8000>.

## Add screenshots

1. Put images in `website/screenshots/`.
2. At the top of the `<script>` in `index.html`, fill in:
   - `HERO_IMAGE`: replaces the drawn hero scene (wide, 1920x1080 or bigger).
   - `WORLD_SHOTS`: one per world family; replaces that drawn panel (about 4:5).
   - `SCREENSHOTS`: a list of `{ src, caption }`; the Screenshots section
     appears once it has anything in it.

## Sign-up link

Set `SIGNUP_URL` (same place) to a form or Discord invite and a
"Request an invite" button appears. Left empty, the page tells people to ask
you directly.

## Put it online

It's a static page, so any static host works:

- **Netlify / Cloudflare Pages:** point it at this repo with `website` as the
  publish directory, or drag the folder onto Netlify's deploy page.
- **GitHub Pages:** Pages only serves the repo root or `/docs`, so either
  move this folder to `docs/` or add a Pages workflow that uploads `website/`.

`.gdignore` keeps Godot from importing anything in this folder.
