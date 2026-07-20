import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('test_web_table_login - structured extraction using nth.locator', async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable1.html');

        const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(`Total Rows: ${rowCount}`);

        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
            const row = rows.nth(rowIndex);
            const cells = row.locator('td');
            const cellCount = await cells.count();
            console.log(`Row ${rowIndex + 1} has ${cellCount} cells`);

            for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
                const cellText = await cells.nth(cellIndex).innerText({ timeout: 5000 });
                console.log(`Row ${rowIndex + 1}, Cell ${cellIndex + 1}: ${cellText}`);
            }
        }

        expect(rowCount).toBeGreaterThan(0);
    });

});
