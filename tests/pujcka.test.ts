import { test, expect } from '@playwright/test';

test('Navigace do pujcky', async ({ page }) => {
  await page.goto('https://www.homecredit.cz/');
  await page.getByRole('button', { name: 'Povolit vše' }).click();
  await page.getByRole('link', { name: 'Půjčka', exact: true }).click();
  await expect(page).toHaveURL('https://www.homecredit.cz/pujcky');
});

test('Sjednání půjčky online', async ({ page }) => {
  await page.goto('https://www.homecredit.cz/');
  await page.getByRole('button', { name: 'Povolit vše' }).click();
  await page.getByRole('link', { name: 'Půjčka', exact: true }).click();
  await page.getByRole('link', { name: 'Sjednat online' }).click();
  await page.getByRole('button', { name: 'Požádat online' }).click();
  await expect(page).toHaveURL('https://pujcka.homecredit.cz/identifikace-1');
});

test('Sjednání půjčky v aplikaci', async ({ page }) => {
  await page.goto('https://www.homecredit.cz/');
  await page.getByRole('button', { name: 'Povolit vše' }).click();
  await page.getByRole('link', { name: 'Půjčka', exact: true }).click();
  await page.getByRole('link', { name: 'Sjednat v aplikaci' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#aplikace').getByRole('link', { name: 'Google Play HomeCredit' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://play.google.com/store/apps/details?id=cz.homecredit.hccz');
});