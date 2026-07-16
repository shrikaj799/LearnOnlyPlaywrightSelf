"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("simple goto — uses load by default", async ({ page }) => {
    // No waitUntil specified — defaults to "load"
    await page.goto("https://example.com");
    let title = await page.title();
    console.log("Title:", title);
    await (0, test_1.expect)(page).toHaveURL("https://example.com/");
    console.log("URL verified ✅");
});
(0, test_1.test)("navigate with custom referer", async ({ page }) => {
    // Tell the server "user came from Google"
    await page.goto("https://app.com/landing", {
        referer: "https://google.com/search?q=testing+academy"
    });
    console.log("Page loaded with Google as referer");
    console.log("URL:", page.url());
});
