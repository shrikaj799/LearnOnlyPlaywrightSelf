"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("task", async () => {
    const browser = await test_1.chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const context2 = await browser.newContext();
    const page2 = await context1.newPage();
    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
});
