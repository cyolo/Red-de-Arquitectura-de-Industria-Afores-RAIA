import { test, expect } from '@playwright/test';

test.describe('RAIA Scenario Snippets Page Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/business-scenarios/snippets');
  });

  test('RAIA-SNP-E2E-001: Validate snippets workspace loads successfully', async ({ page }) => {
    // Assert page header and layout titles
    await expect(page.getByText('Scenario Snippets Workspace')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Resumen' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Catálogo' })).toBeVisible();
  });

  test('RAIA-SNP-E2E-002: Validate snippets catalog navigation', async ({ page }) => {
    // Switch to catalog view
    await page.click('button:has-text("Catálogo")');
    await expect(page.locator('input[placeholder*="Filtrar"]')).toBeVisible();
    await expect(page.getByText('Resolución de identidad')).toBeVisible();
  });

  test('RAIA-SNP-E2E-003: Validate steps view and detail panel drawer', async ({ page }) => {
    // Navigate to steps tab
    await page.click('button:has-text("Pasos")');
    await expect(page.getByText('Pasos estructurados de la secuencia')).toBeVisible();
    
    // Select first step
    await page.click('button:has-text("Solicitar validación de CURP")');
    await expect(page.getByText('Ficha de detalle del Paso')).toBeVisible();
  });
});
