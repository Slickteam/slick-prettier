# Slick Prettier

[![npm version](https://img.shields.io/npm/v/@slickteam/prettier.svg)](https://www.npmjs.com/package/@slickteam/prettier)
[![license](https://img.shields.io/npm/l/@slickteam/prettier.svg)](https://github.com/Slickteam/slick-prettier/blob/main/LICENSE)

Configuration Prettier partageable pour les projets Slickteam.

Cette bibliothèque permet d'utiliser Prettier avec une configuration prédéfinie, sans avoir à créer de fichier `.prettierrc` dans chaque projet.

## Installation

```bash
npm install -D @slickteam/prettier
```

Ou avec pnpm :

```bash
pnpm add -D @slickteam/prettier
```

## Configuration

Dans votre `package.json`, ajoutez :

```json
{
  "prettier": "@slickteam/prettier"
}
```

Puis ajoutez les scripts de formatage :

```json
{
  "scripts": {
    "prettier": "slick-prettier --cache --check .",
    "prettier:fix": "slick-prettier --cache --write ."
  }
}
```

> **Note** : La commande `slick-prettier` est un wrapper autour de `prettier` qui utilise automatiquement le fichier `.prettierignore` du package (ignorant `dist`, `build`, `node_modules` et les fichiers lock).

## Options de formatage

Cette configuration applique les règles suivantes :

| Option          | Valeur | Description                    |
| --------------- | ------ | ------------------------------ |
| `singleQuote`   | `true` | Utilise les guillemets simples |
| `trailingComma` | `all`  | Virgule finale partout         |
| `semi`          | `true` | Point-virgule en fin de ligne  |
| `tabWidth`      | `2`    | Indentation de 2 espaces       |
| `printWidth`    | `140`  | Largeur maximale de ligne      |
| `endOfLine`     | `auto` | Fin de ligne automatique       |

### Tri des imports

Le plugin `@trivago/prettier-plugin-sort-imports` est inclus et configuré pour trier automatiquement les imports dans cet ordre :

1. Imports absolus avec alias `@/`
2. Imports relatifs parents (`../`)
3. Imports relatifs locaux (`./`)

## Personnalisation

Pour étendre ou surcharger la configuration, créez un fichier `.prettierrc.mjs` :

```js
import slickPrettier from '@slickteam/prettier';

export default {
  ...slickPrettier,
  printWidth: 100,
};
```

## Licence

[MIT](LICENSE) © [Slickteam](https://slickteam.fr)
