# Manu — Cybersecurity Portfolio

A responsive static portfolio built with HTML5, CSS3, and vanilla JavaScript. It has no build step, backend, API keys, or framework dependency.

## Files

- `index.html` — page structure, SEO metadata, and page content
- `style.css` — visual design, responsive layout, and reduced-motion support
- `script.js` — editable skills, project data, learning timeline, contact links, and mobile navigation

## Run locally

1. Keep all three files in the same folder.
2. Open `index.html` in a modern browser.
3. For a local development server, use the VS Code Live Server extension, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

The website can also work when opening `index.html` directly. An internet connection is only needed for the optional Google Fonts import.

## Customize your portfolio

Open `script.js` and edit the `portfolioData` object.

### Contact links

Fill in `portfolioData.contact`:

```js
contact: {
  email: "your-public-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  social: ""
}
```

Use only contact information you are comfortable sharing publicly.

### Projects

Each project supports:

- `title`, `description`, `technologies`
- `status`: use honest labels such as `Planning`, `In Progress`, or `Completed`
- `statusClass`: use `planning` for the muted planning badge, or an empty string for the default badge
- `github`: full repository URL, or `""` if none exists
- `demo`: full live demo URL, or `""` if none exists

Links are only shown when valid HTTP or HTTPS URLs are supplied. Empty links are displayed as unavailable, not fake buttons. Never claim a project is complete until it is genuinely completed.

### Skills and learning journey

Edit the `skills` and `journey` arrays in `script.js`. The current entries are learning areas and planned milestones, not claims of completed training or professional experience.

### SEO

Update the title and description in the `<head>` of `index.html` when you want a different public name or focus. Add an actual deployed website URL to Open Graph metadata if desired.

## Publish using GitHub and Vercel

1. Create a GitHub repository, for example `manu-cybersecurity-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Commit the files.
4. Sign in to [Vercel](https://vercel.com/) using GitHub.
5. Choose **Add New → Project** and import your repository.
6. Keep the framework preset as **Other** (or static site if shown).
7. Leave the build command and output directory empty/default; this project requires no build process.
8. Click **Deploy**. After deployment, open the Vercel URL and test the mobile menu, navigation, and links.
9. To update the site, edit the files and push a new commit to GitHub. Vercel will redeploy the project.

## Before sharing publicly

- Add your real email and professional profile links.
- Add repository/demo links only after they exist.
- Update project status honestly.
- Add certifications only after earning them.
- Test the page on a phone and desktop.

## Visual previews

The `previews/` folder contains desktop and mobile design-reference images so you can review the intended visual style before publishing. These are static visual previews, not screenshots of a live deployment, and they are not required for the website to run.
