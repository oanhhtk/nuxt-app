import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import nuxt from 'eslint-plugin-nuxt'
import prettier from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  // 👉 Global ignore block — KHÔNG có `files`
  {
    ignores: [
      'node_modules',
      '.nuxt',
      '.output',
      'dist',
      'coverage',
      // '**/.*' // ✅ Ignore dotfiles (e.g. .env, .eslintrc.js, .gitignore)
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        defineNuxtConfig: 'readonly',
        useState: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      vue,
      nuxt,
      prettier,
    },
    rules: {
      curly: 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/no-unused-components': 'error',
      'vue/no-unused-vars': 'error',
      // 'prettier/prettier': 'error',
      // Vue template rules
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', { singleline: 1, multiline: 1 }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'prettier/prettier': 'error',
    },
  },
]
