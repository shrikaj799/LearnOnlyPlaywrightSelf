import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('1st test', async({})=> {
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://login.salesforce.com/?locale=in");

}  );   

