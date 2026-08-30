# NeuroIsh Studio (password-locked Pages site)

A working studio for Ishsirjan — calendar, scripts, outreach — published as a **separate** GitHub Pages project. It does **not** replace [ishsirjan.github.io](https://ishsirjan.github.io) (the portfolio).

The public URL only shows a lock. The calendar and scripts stay behind a password.

## Public URL (after you create the GitHub repo)

Name the repository `neuroish-studio` (private). Then Pages will be:

**https://ishsirjan.github.io/neuroish-studio/**

Do not name the repo `ishsirjan.github.io`. That is already the portfolio.

In the new repo: **Settings → Pages → Source: GitHub Actions**.

Password (change it): `ish-private`

Set `NEXT_PUBLIC_STUDIO_PASSWORD` in GitHub → Settings → Secrets and Variables → Actions if you want a different password on the live site. GitHub Pages is a public host; anyone with the URL *and* the password can open the studio. Do not post either.

## Local

```bash
npm install
npm run dev
```

[http://127.0.0.1:43147](http://127.0.0.1:43147)

## What is inside

Shortcut calendar (shoot / post / script), frequencies, spoken scripts, outreach drafts. About seven hours a week. Both podcasts sign off: **I am Ish. ishsirjan.github.io.**
