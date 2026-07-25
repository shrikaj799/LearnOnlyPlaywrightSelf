import { test, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    const frame1: FrameLocator = page.frameLocator('iframe#pact1').first();
    const frame2: FrameLocator = frame1.frameLocator('iframe#pact2').first();
    const frame3: FrameLocator = frame2.frameLocator('iframe#pact3').first();

    await frame1.locator('#inp_val').fill('Aishwarya Rai');
    await frame2.locator('#jex').fill('Wife');
    await frame3.locator('#glaf').fill('Playwright');

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);



});