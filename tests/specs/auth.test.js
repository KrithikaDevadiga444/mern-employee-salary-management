const { test, expect } = require('@playwright/test');

test.describe('Authentication Tests', () => {

  test('BUG-01: Any random credentials should NOT login but currently they do', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.fill('input[type="username"]', 'randomuser123');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('input[type="submit"]');
    await expect(page).not.toHaveURL('http://localhost:5173/admin/dashboard');
  });

  test('BUG-04: Employee login page should be linked from main page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const employeeLoginLink = page.locator('a[href="/pegawai/login"]');
    await expect(employeeLoginLink).toBeVisible();
  });

  test('Admin dashboard should load after login', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.click('input[type="submit"]');
    await expect(page).toHaveURL('http://localhost:5173/admin/dashboard');
  });

});