# timdeboer.dev

Personal website of Tim de Boer — AI engineer at Delphyr, Amsterdam. Built with plain HTML, CSS, and JS. No framework, no build step.

Live at [timdeboer.dev](https://timdeboer.dev) via GitHub Pages.

---

## Local dev

Requires Docker.

```bash
docker compose up
```

Opens on [localhost:8080](http://localhost:8080).

---

## Structure

| Path | What |
|---|---|
| `index.html` | Homepage |
| `about.html` | CV, skills, talks |
| `blog.html` | Blog index with tag filter |
| `posts/` | Individual post pages |
| `assets/` | Images and PDFs |
| `css/site.css` | Design system, dark mode, layout |
| `js/site.js` | Dark mode toggle, scroll animations, blog filter |

---

## CI

A GitHub Action runs on the 1st of every month and checks all HTML links for dead URLs. Can also be triggered manually from the Actions tab.
