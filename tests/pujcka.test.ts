import { test, expect } from '@playwright/test';

test('Open Půjčka page, confirm cookies, and navigate to Půjčka section', async ({ page }) => {
  // Open the homepage
  await page.goto('https://www.homecredit.cz/');
  await page.getByRole('button', { name: 'Přijmout všechny' }).click();
  await page.getByRole('link', { name: 'Půjčka' }).click();
  await expect(page).toHaveURL('https://www.homecredit.cz/pujcka/');
});