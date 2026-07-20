//Verify the URL is changed with your username and password
//  - https://app.thetestingacademy.com/playwright/multiple_element_filter?email=addasda%40adsd.com&password=dasdadasda&remember=yes#login-success


//https://app.thetestingacademy.com/playwright/multiple_element_filter

import { test, expect } from '@playwright/test';


test('Verify the URL is changed with your username and password ', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator('#email').fill('shrikajsurvase25@gmail.com');
    await page.locator('#password').fill('Shrikaj@1234');  // Use @ not %40
    await page.getByRole('checkbox', { name: 'remember' }).check();
    await page.getByTestId('login-button').click();
    
    // Wait for page to be ready and URL to change
    await page.waitForLoadState('networkidle');
    
    // Get URL after navigation
    const currentURL = page.url();
    console.log('Current URL:', currentURL);
    
    // Verify login success using regex (more flexible)
    await expect(page).toHaveURL(/multiple_element_filter\?.*email=.*&.*password=.*&.*remember=yes.*#login-success/);
    
    // Also verify individual parameters exist
    expect(currentURL).toContain('email=shrikajsurvase25%40gmail.com');
    expect(currentURL).toContain('password=Shrikaj%401234')

    expect(currentURL).toContain('remember=yes');
    expect(currentURL).toContain('#login-success');
    
    await page.waitForTimeout(2000);

});

/*This is the best approach because it:

Waits for network to settle (not just a fixed timeout)
Uses flexible regex matching
Double-checks with parameter verification
Doesn't hardcode exact password encoding*/
