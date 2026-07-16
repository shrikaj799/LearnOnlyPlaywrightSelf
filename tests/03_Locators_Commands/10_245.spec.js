"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: 'Make Appointment', disabled: false }).click();
});
//In Playwright, adding disabled: false inside getByRole serves as an active structural filter to ensure you only target elements that are fully interactable and enabled.By default, Playwright checks for visibility, but it does not automatically filter out disabled elements during the initial selection process unless you explicitly tell it
//Websites often display buttons or links that look normal but are greyed out or unclickable until a user completes a task (e.g., a "Submit" button that stays disabled until you fill out a form).If you write page.getByRole("link", { name: 'Make Appointment' }), Playwright might accidentally find a disabled version of that link if it exists on the page.Adding { disabled: false } guarantees that Playwright completely ignores any disabled matches and looks only for an active, functional link.
