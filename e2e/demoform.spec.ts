import { test, expect } from '@playwright/test';
import {RegisterData} from '../testdata.json';

test('Test a Register From', async ({page}) =>{

    //Navigate to URL
    await page.goto('/automation-practice-form');
    
    //INPUT DATA
    await page.getByPlaceholder('First Name').fill(RegisterData.firstName);
    await page.getByPlaceholder('Last Name').fill(RegisterData.lastName);
    await page.getByPlaceholder('name@example.com').fill(RegisterData.email);
    await page.getByPlaceholder('Mobile Number').fill(RegisterData.mobile);
    await page.getByPlaceholder('Current Address').fill(RegisterData.address);
    await page.locator('#subjectsInput').fill(RegisterData.subject);
    //select checkbox
    await page.locator ('//label[normalize-space()="Male"]').click();
    await page.locator ('//label[normalize-space()="Reading"]').click();
    //select dropdown list
    await page.locator('#state').click();
    await page.locator('#state').selectOption('Haryana');

})