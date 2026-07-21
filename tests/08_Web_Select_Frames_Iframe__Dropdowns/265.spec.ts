

//task 1 20th july

/*import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {

//1

    await page.goto("https://www.spicejet.com/");
    await page.getByTestId('to-testID-origin').fill('Pun');
    
    //await page.waitForTimeout(2000);
       //await page.pause(); 
    //await page.pause(); // See what's actually on the page
    await page.getByRole('option').filter({ hasText: /Pune/i }).click();
    await page.waitForTimeout(1000);
    await page.getByTestId('to-testID-destination').fill('Mu');
    //await page.waitForTimeout(2000); // Wait for dropdown to appear
    await Promise.all([
        page.waitForLoadState('networkidle'),
        page.getByRole('option').filter({ hasText: /Mumbai/i }).click()
    ]);

});
*/

import { test } from '@playwright/test';

test('Verify Element by Filter', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    
    // 1. Origin: Fill and select using keyboard
    const originInput = page.getByTestId('to-testID-origin').getByRole('textbox');
    await originInput.fill('Pun');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown'); // Navigate to first option
    await page.keyboard.press('Enter'); // Select it
    
    // 2. Destination: Fill and select using keyboard
    const destInput = page.getByTestId('to-testID-destination').getByRole('textbox');
    await destInput.fill('Mum');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown'); // Navigate to first option
    await page.keyboard.press('Enter'); // Select it
});