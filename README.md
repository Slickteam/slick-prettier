# Slick Prettier

Available on npmjs.org : [@slickteam/prettier](https://www.npmjs.com/package/@slickteam/prettier)

## Usage

- Install dependency

```bash
npm i -D @slickteam/prettier @trivago/prettier-plugin-sort-imports
```

- In `package.json`, add configuration of prettier :

```json
{
  "prettier": "@slickteam/prettier"
}
```

- In `package.json`, add commands :

```json
{
  "scripts": {
    "prettier": "prettier --cache --check .",
    "prettier:fix": "prettier --cache --write ."
  }
}
```
