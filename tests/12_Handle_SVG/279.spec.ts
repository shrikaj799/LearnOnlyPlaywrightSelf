import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart Seach via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    })

    test('TC#1 @smoke @regression', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();


        // const svgElementsAll: Locator[] = await page.locator('svg').all();
        // for(let svgElement in svgElementsAll){
        //     // find and click()
        // }

        // //div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]
        const price: Locator = page.locator('.hZ3P6w');

        // wait for at least one result to be attached
        await page.waitForSelector('.hZ3P6w', { state: 'attached', timeout: 10000 });

        // read all texts at once to avoid per-nth locator stability issues
      const texts = await price.allTextContents();
      console.log(texts)

      expect(texts.length).toBeGreaterThan(0);

      let minPrice = Infinity;

      for (const t of texts) {
          // Strip non-digit characters (keeps digits & decimal point)
          const cleanedPrice = parseFloat(t.replace(/[^0-9.]/g, ''));

          if (!isNaN(cleanedPrice)) {
              console.log(`Parsed Price: ${cleanedPrice}`);
              
              if (cleanedPrice < minPrice) {
                  minPrice = cleanedPrice;
              }
          }
      }

      expect(minPrice).toBeGreaterThan(0);
      console.log(`\nLowest Price found: ₹${minPrice}`);


    });


});