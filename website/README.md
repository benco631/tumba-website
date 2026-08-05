# Tumba Landing Page

Plain static site: `index.html` + `assets/` (images, fonts, and the `dc-runtime`
JS that mounts the interactive bits). Hand-editable — this is no longer a
generated/bundled single-file export.

`index.html` was previously a self-contained "bundler" export (base64 assets
inlined as JSON, unpacked into blob URLs at runtime behind a placeholder
splash screen). That splash screen was the large flashing "T" users saw on
every load. It's been unbundled into this plain file + `assets/` structure so
the page renders directly with no unpack step.

The page still loads React 18.3.1 UMD from `unpkg.com` at runtime (see the
`<script>` in `assets/`'s `dc-runtime` bundle) to power small interactive
bits (mobile nav, hover states, level/QR selectors, the contact form). That
needs internet access to render correctly.

To update the site, edit `index.html` and `assets/` directly and push to
`main`. The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`)
deploys the `website/` folder as-is to GitHub Pages — no build step.
