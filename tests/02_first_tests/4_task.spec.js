"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("task of error msg", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");
    let a = page.locator('#login-username');
    let b = page.locator('#login-password');
    let c = page.locator('#js-login-btn');
    ;
    a.fill('ajay@gmmail.com');
    b.fill('Test');
    c.click();
    let d = page.locator('#js-notification-box-msg');
    await (0, test_1.expect)(d).toHaveText('Your email, password, IP address or location did not match');
});
