import { test, expect } from '@playwright/test';

test.describe('RAIA Business Capability Map E2E Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/capability-map');
  });

  test('RAIA-CAP-E2E-001: Validate capability map workspace loads successfully', async ({ page }) => {
    await expect(page.getByText('Business Capability Map')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Resumen' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Mapa' })).toBeVisible();
  });

  test('RAIA-CAP-E2E-002: Validate dynamic grid tiles and detail panel opening', async ({ page }) => {
    // Navigate to Mapa tab
    await page.click('role=tab[name="Mapa"]');
    await expect(page.getByText('Gobierno y Dirección del SAR')).toBeVisible();
    
    // Select capability tile to trigger detail sidebar
    await page.click('button:has-text("Definición de Política Sectorial")');
    await expect(page.getByTestId('capability-detail-panel')).toBeVisible();
  });

  test('RAIA-CAP-E2E-003: Validate hierarchy tree renders L0, L1 and L2 elements', async ({ page }) => {
    await page.click('role=tab[name="Jerarquía"]');
    await expect(page.getByText('L0 — Administración del Ahorro para el Retiro')).toBeVisible();
    await expect(page.getByText('RAIA-CAPD-001 — Gobierno y Dirección del SAR (L1)')).toBeVisible();
  });
});
