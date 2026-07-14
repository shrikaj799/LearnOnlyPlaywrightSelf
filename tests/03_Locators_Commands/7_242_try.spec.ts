//Use wisely PW locators + normal locators 

import {expect, test} from "@playwright/test"

test ("task 3", async ({page})  =>{

    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox',{name:'email'}).fill('abcd');
    await page.getByRole('checkbox').check();
    await page.getByRole('button',{name:'Create a Free Trial Account'}).click();
    let error_msg_pw =await page.locator('//div[contains(@class,"invalid-reason")]').first().textContent();

    //// let error_msg_pw = await page.getByText('The email address you entered is incorrect.').textContent();

    await expect(error_msg_pw).toContain('The email address you entered is incorrect.')
   await page.waitForTimeout(10000);
} )