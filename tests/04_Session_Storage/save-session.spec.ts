import { test } from "@playwright/test";
import fs from "fs";

test("save session", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");
    // 👇 manually fill in credentials
    await page.fill("input[name='email']", "your-email@example.com");
    await page.fill("input[name='password']", "your-password");
    await page.click("button[type='submit']");
    await page.waitForURL(/dashboard/);
    await page.context().storageState({ path: "./user-session.json" });
});
