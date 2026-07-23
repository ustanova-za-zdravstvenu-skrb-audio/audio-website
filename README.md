# Ustanova AUDIO — website

Web stranica Ustanove za zdravstvenu skrb „AUDIO” izgrađena u Astro frameworku. Stranice su statičke, a novosti su Markdoc datoteke u GitHub repozitoriju koje se uređuju kroz Git-based CMS.

- **Domena:** https://audio.hr
- **Hosting:** GitHub Pages
- **CMS:** [Pages CMS](https://app.pagescms.org/)
- **Novosti:** `src/content/novosti/*.mdoc`
- **Slike novosti:** `public/images/novosti/`
- **CMS podaci (traka / tim / usluge):** `src/data/*.json`

## Lokalni razvoj

```bash
npm install
npm run dev
npm run build
npm run preview
```

Lokalni website dostupan je na `http://127.0.0.1:4321`.

## Uređivanje sadržaja

1. Otvori `https://app.pagescms.org/` i prijavi se GitHub računom (ili idi na `/admin`).
2. Odaberi repozitorij ove stranice.
3. Uredi:
   - **Novosti** — dodaj/uredi/obriši objavu,
   - **Obavijesna traka** — poruka na vrhu svih stranica,
   - **Tim** — liječnici i medicinske sestre,
   - **Usluge (naslovnica)** — popis usluga na naslovnici.
4. Spremi promjenu — Pages CMS je zapisuje u GitHub, a GitHub Actions automatski objavljuje stranicu.

Konfiguracija CMS-a nalazi se u `.pages.yml`.

## Deploy

Workflow `.github/workflows/deploy-pages.yml` gradi i objavljuje svaki commit na `main` (Pages source = GitHub Actions). Aktivira se repozitorijskom varijablom `ENABLE_GITHUB_PAGES=true`, a subpath/domenu određuju `PAGES_BASE_PATH` i `PAGES_SITE_URL`.

Trenutne vrijednosti (staging na GitHub Pages project URL-u):

- `ENABLE_GITHUB_PAGES=true`
- `PAGES_BASE_PATH=audio-website`
- `PAGES_SITE_URL=https://roko222211.github.io`

Za prelazak na `audio.hr`: postavi custom domenu u Settings → Pages, `PAGES_BASE_PATH=` (prazno) i `PAGES_SITE_URL=https://audio.hr`, pa pokreni deploy.

Za prelazak na pravu domenu:

1. u Settings → Pages postaviti custom domenu (`audio.hr`);
2. postaviti `PAGES_BASE_PATH=/` i `PAGES_SITE_URL=https://audio.hr`;
3. pokrenuti workflow i provjeriti deploy;
4. tek nakon uspješnog deploya prebaciti DNS.
