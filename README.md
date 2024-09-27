# Slick Prettier

## Usage

- Install dependency

```bash
npm i -D @slickteam/prettier
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
