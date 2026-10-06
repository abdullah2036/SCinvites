import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  use: { baseURL: 'http://localhost:3100', locale: 'ar-SA', timezoneId: 'Asia/Riyadh' },
  projects: [
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
  ],
  webServer: {
    command: 'npx next dev -p 3100',
    url: 'http://localhost:3100/',
    reuseExistingServer: false,
    timeout: 240_000,
  },
});
