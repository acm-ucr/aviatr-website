import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["dist/*"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: react,
      prettier: prettier,
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
