import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  // The dev server compiles each route on first use, which can take several seconds on a cold start.
  expect: { timeout: 10_000 },
  use: { baseURL: 'http://localhost:3100', locale: 'ar-SA', timezoneId: 'Asia/Riyadh' },
  projects: [
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
  ],
  webServer: {
    command: 'npx tsx e2e/server.mts',
    url: 'http://localhost:3100/robots.txt',
    reuseExistingServer: false,
    timeout: 240_000,
  },
});
