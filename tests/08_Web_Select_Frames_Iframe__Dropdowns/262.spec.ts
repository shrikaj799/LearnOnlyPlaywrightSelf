//task 1 19th july

import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/dropdown");
    let dropdown=await page.locator('#dropdown')
    dropdown.click();

    dropdown.selectOption('Option 2')

    await page.pause();

});
