import sortImportsPlugin from '@trivago/prettier-plugin-sort-imports';

/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 140,
  plugins: [sortImportsPlugin],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  importOrder: ['^@/(.*)$', '^[../]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
