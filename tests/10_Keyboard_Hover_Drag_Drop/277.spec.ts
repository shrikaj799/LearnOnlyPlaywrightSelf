//Find all the options which are available in the add-on, and also print all of the options as well as click on the Wi-Fi also. 

//Task 22nd july

//https://app.thetestingacademy.com/playwright/widgets/hover-menu

import { test } from '@playwright/test';

test('task', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    const addOns = page.getByTestId('nav-add-ons');
    await addOns.hover();

    const addOnItemsLocator = page.locator('[data-testid="nav-add-ons"] .submenu-item');
    await addOnItemsLocator.first().waitFor({ state: 'visible' });

    const items = await addOnItemsLocator.allTextContents();
    console.log('Available add-on items:', items);

    const wifiItem = page.getByTestId('test-id-Wifi');
    await wifiItem.waitFor({ state: 'visible' });
    await wifiItem.click();
});

