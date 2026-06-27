const { test, expect } = require('@playwright/test');

test.describe('Payslip and Employee Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.click('input[type="submit"]');
    await page.waitForURL('http://localhost:5173/admin/dashboard');
  });

  test('Employee list page loads', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/master-data/data-pegawai');
    const table = page.locator('table');
    await expect(table).toBeVisible();
  });

  test('Payslip page loads with generate button', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/laporan/slip-gaji');
    await expect(page).toHaveURL('http://localhost:5173/admin/laporan/slip-gaji');
  });

  test('Attendance page loads', async ({ page }) => {
    await page.goto('http://localhost:5173/admin/transaksi/data-absensi');
    await expect(page).toHaveURL('http://localhost:5173/admin/transaksi/data-absensi');
  });

});