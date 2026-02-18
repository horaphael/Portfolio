# Portfolio Raphaël

Portfolio personnel développé avec React, Vite et Tailwind CSS.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React

## Lancer en local

Prérequis:

- Node.js 18+ (Node.js 20 recommandé)
- npm

Installation et démarrage:

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:5174`.

## Build production

```bash
npm run build
npm run preview
```

Le build est généré dans le dossier `dist/`.

## Déploiement GitHub Pages

Le projet est configuré pour un déploiement automatique via GitHub Actions.

Fichiers concernés:

- `vite.config.js` avec `base: '/Portfolio/'`
- `.github/workflows/deploy-pages.yml`

### Étapes

1. Push le projet sur la branche `main`.
2. Sur GitHub: `Settings` -> `Pages` -> `Source`, sélectionner `GitHub Actions`.
3. Vérifier l'onglet `Actions` et attendre la fin du workflow `Deploy to GitHub Pages`.
4. Le site sera publié sur:
   `https://horaphael.github.io/Portfolio/`

## Personnalisation

Les données principales (infos perso, projets, compétences) sont dans:

- `src/data/portfolioData.js`

Tu peux modifier ce fichier pour mettre à jour le contenu du portfolio.
