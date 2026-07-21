//task 1 19th july

import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('Verify Element by Filter', async ({ page }) => {

//1
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    /*await page.getByTestId('lang-trigger').click();
    await page.getByRole('option', { name: 'TypeScript' }).click();*///took help from await page.pause(); & debug tool
 //2

    await page.getByTestId('experience-trigger').click();
    await page.getByRole('option',{name:'Junior (0-3 years)'}).click();
    
    await page.pause();

});
