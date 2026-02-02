#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, '..');

const ignorePath = join(packageRoot, '.prettierignore');

// Trouve le binaire prettier
const require = createRequire(import.meta.url);
const prettierBin = join(dirname(require.resolve('prettier')), 'bin', 'prettier.cjs');

const args = process.argv.slice(2);

// Ajoute --ignore-path seulement si l'utilisateur n'en a pas déjà spécifié un
if (!args.includes('--ignore-path')) {
  args.unshift('--ignore-path', ignorePath);
}

const child = spawn(process.execPath, [prettierBin, ...args], {
  stdio: 'inherit',
});

child.on('close', (code) => {
  process.exit(code);
});
