import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
  test('RAIA-GLO-001: Validate homepage loads correctly', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    
    // RAIA Architecture Overview Portal
    await expect(page.locator('h1')).toContainText('Red de Arquitectura');
    await expect(page.getByText('RAIA')).toBeVisible();
  });

  test('RAIA-GLO-002: Validate existence of core routes', async ({ page }) => {
    const routes = [
      '/metamodel',
      '/service-landscape/value-chain',
      '/business-scenarios',
      '/dashboard',
      '/releases'
    ];

    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('RAIA-GLO-003: Validate Back to Portal links', async ({ page }) => {
    await page.goto('/metamodel');
    const backLink = page.locator('a', { hasText: 'Volver al Portal' });
    await expect(backLink).toBeVisible();
    await backLink.click();
    await expect(page).toHaveURL(/.*localhost:3000\/?$/);
  });

  test('RAIA-GLO-004: Validate module cards redirection', async ({ page }) => {
    await page.goto('/');
    const metamodelCard = page.locator('a[href="/metamodel"]');
    await expect(metamodelCard).toBeVisible();
    await metamodelCard.click();
    await expect(page).toHaveURL(/.*\/metamodel/);
  });
  
  test('RAIA-GLO-014: Validate 404 page', async ({ page }) => {
    const response = await page.goto('/ruta-inexistente-12345');
    // Usually Next.js 404 returns 404
    expect(response?.status()).toBe(404);
    await expect(page.locator('body')).toContainText('404');
  });
});
