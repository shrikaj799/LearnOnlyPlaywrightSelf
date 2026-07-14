import {test} from "@playwright/test"

test ("task 2", async ({page})  =>{

   await page.goto('https://katalon-demo-cura.herokuapp.com/')

   await page.locator('#btn-make-appointment').click();

   await page.locator('#txt-username').fill('John Doe');

    await page.locator('#txt-password').fill('ThisIsNotAPassword');

    await page.locator('#btn-login').click();

    await page.locator('#combo_facility').click()




} )