# EDXR Website

The website for EDXR — a 501(c)(3) nonprofit team of faculty and students creating educational experiences in VR/AR, video, AI, and making.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**. Statically exported to `out/` and deployed automatically to **GitHub Pages** at [edxr.io](https://edxr.io).

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To produce the static site that GitHub Pages serves:

```bash
npm run build
# Output goes to ./out
```

---

## Project structure

```
edxr-website/
├── src/
│   ├── app/                     # Routes (App Router)
│   │   ├── page.tsx             # Home
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── showcase/page.tsx    # Student & alumni work
│   │   ├── give/page.tsx
│   │   ├── layout.tsx           # Root layout, fonts, metadata
│   │   └── globals.css          # Design tokens + base styles
│   ├── components/              # Reusable UI
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── pillar-card.tsx
│   │   ├── project-card.tsx
│   │   └── student-card.tsx
│   └── lib/                     # Editable content
│       ├── projects.ts          # ← Edit projects here
│       └── students.ts          # ← Edit student work here
├── public/
│   ├── CNAME                    # edxr.io custom domain
│   └── .nojekyll                # Bypass Jekyll on GitHub Pages
├── .github/workflows/deploy.yml # Auto-deploys on push to main
├── next.config.mjs              # Static export configured
├── tailwind.config (v4 inline)  # Tokens live in globals.css
└── package.json
```

---

## Editing content

Most of what you'll change day-to-day lives in two places:

- **Projects**: `src/lib/projects.ts` — add objects to the `projects` array.
- **Student work**: `src/lib/students.ts` — same pattern.
- **Page copy**: edit the corresponding `.tsx` in `src/app/`.

The `give` page has a placeholder donation URL (`https://example.com/give`) — swap that for your real giving platform link (Donorbox, Givebutter, Stripe Checkout, etc.) once it's set up.

---

## Design system

The aesthetic — "warm workshop meets digital studio" — is defined as CSS variables in `src/app/globals.css`:

- **Cream / parchment** canvas with deep ink text
- **Terracotta** primary, **teal** for the XR/tech accent, **honey** for highlights
- **Fraunces** display serif (variable, with optical and SOFT axes)
- **Manrope** for body, **JetBrains Mono** for small labels

To re-color the whole site, change the `--color-*` variables in the `@theme` block at the top of `globals.css`.

---

## Deployment to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment automatically on every push to `main`.

### One-time setup

1. **Create a GitHub repo** and push this code to it.
2. **Repo Settings → Pages → Build and deployment → Source:** set to **"GitHub Actions"**.
3. **DNS for edxr.io**:
   - At your domain registrar, set `A` records on the apex (`edxr.io`) to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - And a `CNAME` for `www` pointing to `<your-github-username>.github.io`.
4. **Repo Settings → Pages → Custom domain:** enter `edxr.io` and enable "Enforce HTTPS" once GitHub provisions the cert (5–15 minutes).
5. Push to `main`. The workflow builds and deploys.

The `public/CNAME` file in this repo already contains `edxr.io`, so the custom domain persists across deploys.

---

## Working with Claude Code

To continue building this with Claude Code:

```bash
cd edxr-website
claude
```

A few prompts that work well:

- "Add a `news/` route with an index page and an MDX-based post template."
- "Create an individual project detail page at `/projects/[slug]/` using `generateStaticParams` so it stays statically exportable."
- "Add an Open Graph image generator at `app/opengraph-image.tsx`."
- "Wire up a Donorbox or Givebutter embed to the Give page."

When asking Claude Code to add features, mention:
- This site is statically exported (`output: "export"`) — anything that requires a server (API routes, server actions, ISR) won't work without rearchitecting.
- All content for projects/students lives in `src/lib/`.
- Design tokens are in `src/app/globals.css` under the `@theme` block.

---

## License

© EDXR. All rights reserved.
