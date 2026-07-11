
import {test,chromium} from "@playwright/test"

test("task",async() =>{
const browser=await chromium.launch();
const context1 =await browser.newContext();
const page1=await context1.newPage();
const context2 =await browser.newContext();
const page2=await context1.newPage();
await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/")
await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")


});