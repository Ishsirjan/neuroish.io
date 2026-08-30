# NeuroIsh Studio

A public website and one-month content studio for **Ishsirjan Kaur Chandok** — neuroimaging engineer at IGMM–CNRS, BioIsh host, and the person behind [@neuroish.fr](https://www.instagram.com/neuroish.fr/).

This is not a generic creator planner. It is built from [ishsirjan.github.io](https://ishsirjan.github.io), the Alzheimer’s radiomics paper, public Kremer-lab science, GitHub projects (AIDOC, Dravet, leakage audits), and a week that still has to belong to the lab.

After this repo is on GitHub, GitHub Pages publishes the site automatically from `main`.

Expected public URL (if the repository is named `neuroish-studio` under `Ishsirjan`):

**https://ishsirjan.github.io/neuroish-studio/**

## What is on the site

- **You** — the facts the plan is grounded in, plus voice rules
- **Frequency** — why two podcasts are fortnightly, why Instagram is 3 reels/week, why LinkedIn is the highest-leverage channel you already have
- **September 2026 calendar** — every day, timed, with links into scripts
- **Scripts** — four full podcasts (BioIsh × 2, Chardi Kala × 2), science explainers, recent papers, project walkthroughs, science news, LinkedIn posts
- **Outreach** — twelve first touches and the Thursday follow-ups, copy-ready

Cadence in one line: **~7 hours a week**. 2 neuroscience episodes, 2 Sikhi episodes, 13 reels (cross-posted to Facebook), 8 LinkedIn posts, 12 outreach notes.

Both podcasts sign off: **I am Ish. ishsirjan.github.io.**

## Run it locally

```bash
npm install
npm run dev
```

Opens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

Production build (static files in `out/`):

```bash
npm run build
npx --yes serve out
```

Checkboxes stay in this browser (`localStorage`). Nothing is uploaded.

## Put it on GitHub Pages

1. Create a GitHub repository (suggested name: `neuroish-studio`). Do not use `ishsirjan.github.io` — that is already the portfolio.
2. Push `main`.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. The workflow in `.github/workflows/pages.yml` builds the static site and publishes it.

The Action sets the base path from the repository name, so `https://<you>.github.io/<repo>/` works without extra config.

## The two shows

| Show | What it is | September |
| --- | --- | --- |
| **BioIsh** | Neuroscience methods podcast | 8 Sep · 22 Sep |
| **Chardi Kala** | Sikhi as khoj, not a TED merge with fMRI | 15 Sep · 29 Sep |
| **NeuroIsh** | Instagram, Facebook, YouTube Shorts, LinkedIn | Mon/Wed/Fri reels · Tue/Fri LinkedIn |

Sikhi does not live on the neuroscience grid. It lives on the second podcast, plus stories if you want them.

## Honest limits

Scripts cite public papers and public lab pages. They do **not** invent unpublished CNRS results. Ask Eric before you speak about internal pipelines in any detail — there is a drafted note for that on 22 September.

This is science communication, not clinical advice.
