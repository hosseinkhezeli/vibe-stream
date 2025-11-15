// eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Apply Prettier compatibility and TypeScript plugin
  {
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "react-refresh/only-export-components": "warn"
    }
  },

  // Optional global ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),

  // Apply Prettier last to disable conflicting formatting rules
  prettier
]);
