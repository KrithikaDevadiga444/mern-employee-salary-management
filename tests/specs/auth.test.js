const { test, expect } = require('@playwright/test');

test.describe('Authentication Tests', () => {

  test('Admin dashboard loads after clicking login', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.click('input[type="submit"]');
    await expect(page).toHaveURL('http://localhost:5173/admin/dashboard');
  });

  test('Employee login page is accessible via direct URL', async ({ page }) => {
    await page.goto('http://localhost:5173/pegawai/login');
    await expect(page).toHaveURL('http://localhost:5173/pegawai/login');
  });

  test('Dashboard shows employee count', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.click('input[type="submit"]');
    await page.waitForURL('http://localhost:5173/admin/dashboard');
    const dashboard = page.locator('text=Data Pegawai');
    await expect(dashboard).toBeVisible();
  });

});