/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 140,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  importOrder: ['^@/(.*)$', '^[../]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
