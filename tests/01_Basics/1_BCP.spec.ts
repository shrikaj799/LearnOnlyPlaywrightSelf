/*import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('1st test', async({})=> {
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://login.salesforce.com/?locale=in");

}  );   */

// Corrected with AI

import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('1st test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://login.salesforce.com/?locale=in");
  await browser.close();
});

/*
Use page fixture when writing tests with @playwright/test. It’s simpler, faster, and Playwright handles isolation for you.

Use BCP manually only when you need special control (e.g., multiple users in one test, persistent login state, or automation scripts outside the test runner).*/
