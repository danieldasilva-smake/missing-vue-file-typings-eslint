/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig*.json",
    parser: {
      js: "@typescript-eslint/parser",
      jsx: "@typescript-eslint/parser",
      cjs: "@typescript-eslint/parser",
      mjs: "@typescript-eslint/parser",
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",
      cts: "@typescript-eslint/parser",
      mts: "@typescript-eslint/parser",
      "<template>": "espree",
    },
  },
  rules: {
    "@typescript-eslint/no-unsafe-argument": "error",
  },
};
