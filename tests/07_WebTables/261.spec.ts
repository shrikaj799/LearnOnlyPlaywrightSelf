//task 1 19th july

import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name:string="Yoshi Tannamuri";
    let row;

    row=page.locator('#companies-table tr').filter( {hasText: name} );
    console.log(row);
    const country1= await row.locator('[data-col="country"]').innerText();
    console.log(name,"is in", country1);

await page.pause();

});
