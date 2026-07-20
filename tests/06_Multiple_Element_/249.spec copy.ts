import { test, expect } from '@playwright/test';


test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

     let linktext:string[]=await page.locator("a.list-group-item").allInnerTexts();

     for (const card of linktext)
     {
        if (card==="Forgotten Password")
       
            await page.getByText(card).first().click();
        //await page.pause()

     }


 const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) 
        console.log(await link.getAttribute("href"));
});