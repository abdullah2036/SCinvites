import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["tests/**", "e2e/**"],
    rules: { "@typescript-eslint/no-explicit-any": "off" },
  },
  {
    // Views generated from the design boards keep the design's plain <img> tags.
    files: ["components/boards/**", "components/invitation/motion/tracks/**", "components/invitation/covers/**", "components/invitation/LiveCover.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
  globalIgnores([".next/**", ".next-e2e/**", ".pge2e/**", ".uploads/**", "out/**", "build/**", "next-env.d.ts", ".pgdata/**", ".pgtest/**", "design-reference/**", "playwright-report/**", "test-results/**"]),
]);

export default eslintConfig;
