import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginStylistic from '@stylistic/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-simple-import-sort';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  },
  {
    ignores: [
      '**/.prettierrc.json',
      '**/tsconfig.json',
      '**/eslint.config.mjs',
      '**/next.config.mjs',
      '**/postcss.config.mjs',
      '**/next-env.d.ts',
      '**/tailwind.config.ts',
      '**/bin/',
      '**/build/',
      '**/obj/',
      '**/out/',
      '**/.next/',
    ],
  },
  {
    name: 'eslint/recommended',
    rules: {
      ...js.configs.recommended.rules,

      'no-useless-rename': 'error',

      // Naming Conventions
      'no-underscore-dangle': ['error', { allow: ['_id', '__dirname'] }],
    },
  },
  {
    name: 'eslint/stylistic',
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      ...pluginStylistic.configs['recommended-flat'].rules,
      // Custom Rules (Not covered by plugins)

      '@stylistic/semi': 'off',
      '@stylistic/spaced-comment': [
        'error',
        'always',
        { exceptions: ['-', '+'] },
      ],
      // Whitespace and Punctuation (Style Rules)
      '@stylistic/arrow-parens': 'off',
      '@stylistic/indent': ['off', 2],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/member-delimiter-style': ['error'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      '@stylistic/space-before-function-paren': [
        'error',
        { asyncArrow: 'always', named: 'never' },
      ],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/jsx-closing-tag-location': 'error',
    },
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    name: 'typescript',
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unsafe-assignment': ['off'],
      '@typescript-eslint/require-await': ['off'],
    },
  },
  {
    name: 'react/jsx-runtime',
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs['jsx-runtime'].rules,
      'react/self-closing-comp': ['error', { component: true, html: false }],
      'react/jsx-curly-brace-presence': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': pluginHooks,
    },
    rules: pluginHooks.configs.recommended.rules,
  },
  {
    name: 'next/core-web-vitals',
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  ...pluginTailwind.configs['flat/recommended'],
  {
    name: 'project-custom',
    plugins: {
      's-import': pluginImport,
      tailwindcss: pluginTailwind,
    },
    rules: {
      's-import/imports': [
        'error',
        {
          groups: [
            ['^.+\\.s?css$'],

            ['^react'],
            ['^hono'],
            ['^@?\\w'],
            ['^'],
            ['@/(.*)'],
            ['^[./]'],
          ],
        },
      ],
      's-import/exports': 'error',

      'tailwindcss/classnames-order': 'error',
    },
  },
  eslintConfigPrettier,
];
