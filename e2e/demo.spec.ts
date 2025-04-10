import { test, expect } from '@playwright/test';
import {UserInformation} from '../testdata.json'

test('Test Demo page: Toolsqa', async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('DEMOQA');
  // Navigate to Texbox
  await page.goto('/text-box');
  //input data
//   await page.getByPlaceholder('Full Name').fill('Tron Ho');
//   await page.getByPlaceholder('name@example.com').fill('tron.ho@niteco.se');
//   await page.getByPlaceholder('Current Address').fill('Ho Chi Minh ');
//   await page.locator('#permanentAddress').fill('Vietnam');
//   await page.locator('#submit').click();

await page.getByPlaceholder('Full Name').fill(UserInformation.name);
await page.getByPlaceholder('name@example.com').fill(UserInformation.email);
await page.getByPlaceholder('Current Address').fill(UserInformation.address);
await page.locator('#permanentAddress').fill(UserInformation.address2);
await page.locator('#submit').click();
}
)