import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  {
    files: ['packages/**/*.{js,ts,mjs,jsx,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off'
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
