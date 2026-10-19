# Portfolio — Florian Jove Garcia

Portfolio personnel construit avec Next.js App Router, React, TypeScript, Tailwind CSS et Framer Motion. Le contenu du portfolio est centralisé dans `src/data/portfolio.ts`.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Vérifications

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Déploiement GitHub Pages

Le dépôt publie le site à l’adresse `https://fjg67.github.io/florian-portfolio/`. Le workflow GitHub Actions construit l’export statique Next.js et le déploie sur GitHub Pages à chaque push sur `main`.

Pour l’activer dans GitHub, ouvrir **Settings → Pages** et choisir **GitHub Actions** comme source de déploiement.

Build local de l’export configuré pour GitHub Pages :

```bash
GITHUB_PAGES=true NEXT_PUBLIC_SITE_URL=https://fjg67.github.io npm run build
touch out/.nojekyll
```

L’export est généré dans `out/`.

Le formulaire de contact ouvre le logiciel e-mail de la personne qui visite le site. Aucun service d’envoi backend n’est configuré.

## Structure principale

- `src/app/` : routes, layout, métadonnées, sitemap et robots.
- `src/components/` : navigation, terminal, animations, carte sociale et sections.
- `src/data/portfolio.ts` : informations du profil, compétences, expériences, projets et formations.
- `.github/workflows/deploy.yml` : build et déploiement GitHub Pages.
