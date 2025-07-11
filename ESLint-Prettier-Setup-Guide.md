# 🛠️ ESLint & Prettier Setup Guide for Nuxt 3

This guide helps you configure **ESLint v9+ (flat config)**, **Prettier**, and optional **lint-staged + Husky** for code quality and auto-formatting in a Nuxt 3 project.

> ✅ Compatible with ESLint 9.x+ flat config  
> ✅ Uses Nuxt’s built-in config helper `@nuxt/eslint-config`

---

## 1. 📦 Install Dependencies

Install ESLint 9+, Prettier, and required plugins:

```bash
npm install -D \
  eslint@^9 \
  @nuxt/eslint-config \
  @eslint/js \
  eslint-plugin-nuxt \
  eslint-plugin-vue \
  eslint-plugin-prettier \
  prettier \
  @typescript-eslint/parser \
  vue-eslint-parser

# Format on commit
npm install -D husky lint-staged
```

## 2. ✅ ESLint Configuration

ESLint v9 flat config is used via `eslint.config.js`

Highlights:

- Flat config array format (export default [])
- Uses vue-eslint-parser as the top-level parser
- Integrates with @typescript-eslint/parser for TypeScript in .vue files
- Applies Nuxt and Vue best practices
- Includes Prettier via eslint-plugin-prettier

## 4. 🧪 Scripts in package.json

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts,.vue",
  "lint:fix": "eslint . --ext .js,.ts,.vue --fix"
}
```

## 5. 🪝 (Optional) Git Hooks with Husky

```bash
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
"lint-staged": {
  "*.{js,ts,vue}": "eslint --fix"
}
```

### Workflow

```bash

# Development
npm run dev
#### Lint code
npm run lint
#### Auto fix error
npm run lint:fix
#### Format code
npm run format



# Before Commit
bash# Check lint
npm run lint

#### Check format
npm run format:check
#### Type check
npm run type-check
```
