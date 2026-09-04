# Rajat Nimje Portfolio

Static portfolio site for GitHub Pages. The Vite build produces the deployable HTML, CSS, and JavaScript files in `dist/`.

## Run locally

Prerequisite: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

The workflow builds the site with npm and publishes the generated `dist/` folder. Vite automatically uses the repository name as the Pages base path in GitHub Actions, so project Pages URLs load assets correctly.
