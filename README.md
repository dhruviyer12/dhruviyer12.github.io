# dhruviyer12.github.io

My portfolio, built with React and Vite.

## Editing

- **Projects:** `src/projects.js`. Each entry becomes a card on the landing page and its own page at `/projects/<slug>`.
- **Intro, coursework, toolkit:** `src/site.js`.
- **Images:** put them in `images/` and reference them as `/images/<file>`.
- **Look:** `src/styles.css` (colors and corners are the variables at the top).

## Running it locally

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Publishing

Every commit to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Check the Actions tab for progress.
