import { test, expect } from '@playwright/test';

test.describe('Web Table Tests 1', () => {

    test('delete terminated employment status row and take screenshot', async ({ page }) => {
        await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill('admin');
        await page.getByRole('textbox', { name: 'password' }).fill('Awesomeqa@4321');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForLoadState('networkidle');
/*
        const rowWithTerminated = page.locator("//div[contains(@class,'oxd-table-card')][.//div[normalize-space()='Terminated']]");
        const terminatedCount = await rowWithTerminated.count();
        expect(terminatedCount).toBeGreaterThan(0);

        const deleteButton = rowWithTerminated.locator(".//button[normalize-space()='Delete' or contains(normalize-space(), 'Delete')]");
        if (await deleteButton.count() > 0) {
            await deleteButton.first().click();
        } else {
            const altDeleteButton = rowWithTerminated.locator(".//button[contains(@aria-label,'Delete') or contains(@class,'delete')]");
            expect(await altDeleteButton.count()).toBeGreaterThan(0);
            await altDeleteButton.first().click();
        }*/
       await page.locator('.oxd-table-row')
    .filter({ hasText: 'Terminated' })
    .locator('.bi-trash')
    .click();
    await page.waitForTimeout(3000);

        await page.screenshot({ path: 'terminated-delete.png', fullPage: true });
    });

});
