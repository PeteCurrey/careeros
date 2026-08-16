import { test, expect } from '@playwright/test';

test.describe('Marketing Site Navigation & Routes', () => {
  test('homepage loads and renders primary headline and skip link', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Career OS/);
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('navigates to audience pages', async ({ page }) => {
    await page.goto('/for/high-schools');
    await expect(page.locator('h1')).toContainText(/High School/i);

    await page.goto('/for/students');
    await expect(page.locator('h1')).toContainText(/Students/i);

    await page.goto('/for/employers');
    await expect(page.locator('h1')).toContainText(/Employers/i);
  });

  test('navigates to trust and legal pages', async ({ page }) => {
    await page.goto('/trust');
    await expect(page.locator('h1')).toBeVisible();

    await page.goto('/legal/terms');
    await expect(page.locator('h1')).toContainText(/Terms of Service/i);

    await page.goto('/legal/privacy');
    await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
  });

  test('app shell onboarding renders step 1', async ({ page }) => {
    await page.goto('/app/onboarding');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#display-name')).toBeVisible();
  });
});
