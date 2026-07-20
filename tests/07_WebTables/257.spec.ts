import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgottenPasswordLink = page.locator('a.list-group-item')
        .filter({ hasText: 'Forgotten Password' });
    await forgottenPasswordLink.click();
    // await page.pause();


    // Order" vs "Order History
    //  /^Order/

    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');





});

/* 
1. Navigating to the Page
JavaScript
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
What it does: Tells Playwright to navigate the browser to the specified URL and wait for the page to load.

2. Filtering and Clicking an Element
JavaScript
const forgottenPasswordLink = page.locator('a.list-group-item')
    .filter({ hasText: 'Forgotten Password' });
await forgottenPasswordLink.click();
page.locator('a.list-group-item'): Finds all <a> tags on the page that have the class list-group-item.

.filter({ hasText: 'Forgotten Password' }): Narrows down that list of elements to only the one that contains the text "Forgotten Password".

await forgottenPasswordLink.click(): Clicks the filtered link once Playwright verifies it is visible and actionable.

3. Asserting Element Count
JavaScript
const accountLinks = page.locator('a.list-group-item');
await expect(accountLinks).toHaveCount(13);
What it does: Locates all elements matching a.list-group-item and asserts that there are exactly 13 such links on the page. Playwright automatically retries this check until it passes or times out.

4. Verifying Attributes on Filtered Elements
JavaScript
const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');
page.locator('footer a'): Finds all links inside a <footer> element.

.filter({ hasText: 'Privacy Policy' }): Filters for the link containing the text "Privacy Policy".

await expect(...).toHaveAttribute(...): Asserts that the filtered link's href attribute equals '#privacy-policy'.

💡 How .filter({ hasText: ... }) Works
Playwright’s .filter() method is used when a CSS selector matches multiple elements, but you want to narrow down the selection using specific criteria like inner text, child elements, or regular expressions.

1. String Match (Substring Search)
Passing a string performs a case-insensitive substring match:

JavaScript
// Matches "Forgotten Password", "Forgotten Password?", or "RESET FORGOTTEN PASSWORD"
page.locator('a').filter({ hasText: 'Forgotten Password' });
2. Regex Match (Exact or Pattern Matching)
To perform exact matches or pattern matching, pass a Regular Expression (RegExp).

This addresses the commented note in your code ("Order" vs "Order History"):

JavaScript
// ❌ Substring match: Matches BOTH "Order" and "Order History"
page.locator('a').filter({ hasText: 'Order' });

// ✅ Regex match: Matches ONLY "Order" (Exact match)
page.locator('a').filter({ hasText: /^Order$/ });

// ✅ Regex match: Matches text STARTING with "Order"
page.locator('a').filter({ hasText: /^Order/ });
3. Combining Filter Options
You can filter by both text and nested child elements using has:

JavaScript
// Find a table row (tr) that has the text "John" AND contains a button inside it
page.locator('tr')
    .filter({ hasText: 'John' })
    .filter({ has: page.locator('button') });
⚡ Key Takeaways
Avoid Rigid Selectors: .filter({ hasText: ... }) lets you write resilient tests based on user-visible text rather than brittle XPath or dynamic IDs.

Auto-Waiting: Playwright automatically waits for elements matched by filters to attach to the DOM before performing actions or assertions.
*/