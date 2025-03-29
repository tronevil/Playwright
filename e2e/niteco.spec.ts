import { test, expect } from '@playwright/test';
test('Niteco Site', async ({ page }) => {
    await page.goto('https://niteco.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The World/);

    //Try to click AboutUs menu
    await page.locator('//a[@class='font-gilroy--semibold link item'][normalize-space()='Our Work']').click();

    //Verify navigating to About Us page
    await expect(page).toHaveTitle(/Out work/);
  });