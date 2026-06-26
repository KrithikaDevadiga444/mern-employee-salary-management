const { test, expect } = require('@playwright/test');

test.describe('Payslip and Employee Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.click('input[type="submit"]');
    await page.waitForURL('http://localhost:5173/admin/dashboard');
  });

  test('BUG-05: Search box should filter employee records', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/master-data/data-pegawai');
    await page.fill('input[placeholder*="search"]', 'Gilbert');
    await page.waitForTimeout(500);
    const rows = page.locator('table tr');
    const count = await rows.count();
    expect(count).toBeLessThan(10);
  });

  test('BUG-03: Payslip page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/laporan/slip-gaji');
    await expect(page).toHaveURL('http://localhost:5173/admin/laporan/slip-gaji');
    const button = page.locator('button:has-text("Cetak")');
    await expect(button).toBeVisible();
  });

  test('Employee list page should display workers', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/master-data/data-pegawai');
    const table = page.locator('table');
    await expect(table).toBeVisible();
  });

});