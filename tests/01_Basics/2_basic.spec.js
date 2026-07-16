"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('1st test', async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
});
