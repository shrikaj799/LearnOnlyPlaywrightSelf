import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('test_web_table_login - structured extraction', async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable1.html');
        
        // Get column count from header and row count from body
        const cols = await page.locator("//table[@class='tsc_table_s13']/thead/tr/th").count();
        const rows = await page.locator("//table[@class='tsc_table_s13']/tbody/tr").count();

        console.log(`Total Rows: ${rows}, Total Cols: ${cols}`);

        for (let i = 1; i <= rows; i++) {
            const rowCells = page.locator(`//table[@class='tsc_table_s13']/tbody/tr[${i}]/td`);
            const cellCount = await rowCells.count();
            console.log(`Row ${i} has ${cellCount} cells`);

            for (let j = 0; j < cellCount; j++) {
                try {
                    const dynamicPath = `//table[@class='tsc_table_s13']/tbody/tr[${i}]/td[${j + 1}]`;
                    console.log(dynamicPath);
                    const data = await rowCells.nth(j).innerText({ timeout: 5000 });
                    console.log(`Row ${i}, Col ${j + 1}: ${data}`);
                } catch (error) {
                    console.log(`Row ${i}, Col ${j + 1}: [ERROR READING CELL]`);
                }
            }
        }

        console.log('Table extraction completed');
    });

});


