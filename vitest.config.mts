import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    globalSetup: ['tests/setup/global-setup.ts'],
    setupFiles: ['tests/setup/env.ts'],
    fileParallelism: false,
    testTimeout: 20000,
    hookTimeout: 60000,
    projects: [
      { extends: true, test: { name: 'node', environment: 'node', include: ['tests/unit/**/*.test.ts', 'tests/integration/**/*.test.ts'] } },
      { extends: true, test: { name: 'components', environment: 'jsdom', include: ['tests/components/**/*.test.tsx'], setupFiles: ['tests/setup/env.ts', 'tests/setup/jsdom.ts'] } },
    ],
  },
});
