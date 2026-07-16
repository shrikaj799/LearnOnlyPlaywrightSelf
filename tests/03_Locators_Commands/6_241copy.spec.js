"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Verify the signup page has an error with the incorrect email ID. ', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    let inputBox = page.locator("#page-v1-step1-email");
    await inputBox.fill("abccd");
    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();
    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    (0, test_1.expect)(error_msg).toContain("The email address you entered is incorrect.");
});
//Here we have used selenium way & onlu locators 
