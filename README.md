# timwjdeboer.github.io

Personal website and blog of **Tim de Boer** — AI engineer at Delphyr, working on safe medical AI. Based in Amsterdam.

Live at: **https://timm877.github.io** (or your custom domain once DNS is set up)

---

## Why this site exists

I write about the intersection of artificial intelligence and the human body: brain-computer interfaces, retrieval-augmented generation, and the hard work of making clinical AI trustworthy. This site collects that writing in one place, alongside a bio and CV, so it doesn't disappear behind corporate blog archives or Medium paywalls.

The design goal was clean and clinical, suited for a healthcare and AI audience, without feeling like a generic portfolio template.

---

## Stack

Plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies beyond Google Fonts. Drop the folder in a GitHub repo and enable Pages.

- `index.html` — home: hero, recent posts, contact
- `about.html` — bio, experience, education, skills
- `blog.html` — writing index with topic grouping and tag filter
- `posts/` — five re-typeset articles (BCI, RAG, three Delphyr Engineering pieces)
- `css/site.css` — design system: clinical cool palette, editorial typography
- `js/site.js` — dark mode toggle (persisted), scroll fade-ins, reading progress bar, tag filter
- `assets/` — profile photo, BCI thesis PDF, favicon

---

## GitHub Pages setup

1. Push this folder to a GitHub repo named `Timm877.github.io`
2. Go to **Settings > Pages**, set Source to `main` branch, root `/`
3. The site goes live at `https://timm877.github.io`

### Custom domain (optional)

To use a domain like `timwjdeboer.nl`:

1. Create a file named `CNAME` in the root with just the domain on one line:
   ```
   timwjdeboer.nl
   ```
2. At your DNS provider, add an `A` record pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Or a `CNAME` record pointing `www` to `timm877.github.io`
3. Back in GitHub Pages settings, enter the custom domain and enable "Enforce HTTPS"

DNS propagation takes up to 24 hours. GitHub will provision the SSL certificate automatically.

---

## Design decisions

**Palette** — moved from the original warm earthy terracotta to a cool clinical blue (`#1d4ed8`) on off-white. The target audience is clinicians and technical readers, so the design leans precise and structured rather than editorial-warm.

**Typography** — Newsreader (serif) for headings (authoritative, readable at large sizes), Public Sans (sans-serif) for body (clean, modern), JetBrains Mono for labels and metadata (precise, technical).

**Dark mode** — persists via `localStorage`. Follows system preference on first visit.

**No build step** — the site works as static files. This is intentional: it keeps the project simple to maintain and eliminates CI complexity for what is ultimately a personal site updated a few times a year.

---

## Adding a new post

1. Copy one of the existing post files in `posts/`
2. Update the title, description, tags, date, reading time, and body content
3. Add it to the list in `blog.html` and the "recent posts" list in `index.html`
4. Push and it's live

---

## Favicon

Drop your favicon file at `assets/favicon.png`. All pages already reference it via:
```html
<link rel="icon" type="image/png" href="assets/favicon.png" />
```
For posts (one directory deep), the path is `../assets/favicon.png`.
