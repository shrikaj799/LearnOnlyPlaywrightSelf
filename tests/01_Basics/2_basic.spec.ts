import{test,expect} from "@playwright/test";

test('1st test', async({page})=> {
    
    await page.goto("https://login.salesforce.com/?locale=in");

}  );  

