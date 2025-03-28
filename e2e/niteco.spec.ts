import { test, expect } from '@playwright/test';
test('Niteco Site', async ({ page }) => {
    await page.goto('https://niteco.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The World/);
  });