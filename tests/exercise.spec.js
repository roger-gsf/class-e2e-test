// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Expect a title "to contain" a substring.
  await expect(page.locator('#content > div > h3')).toBeVisible();
});
