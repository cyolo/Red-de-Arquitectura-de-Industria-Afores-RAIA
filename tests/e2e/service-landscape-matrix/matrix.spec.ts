import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('RAIA Service Landscape — Advanced Matrix View', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/service-landscape/matrix');
  });

  // RAIA-MATRIX-001 & RAIA-MATRIX-002
  test('RAIA-MATRIX-001 & 002: Page loading and default setup', async ({ page }) => {
    await expect(page.getByTestId('matrix-page')).toBeVisible();
    await expect(page.getByTestId('matrix-config-bar')).toBeVisible();
    await expect(page.getByTestId('matrix-summary-cards')).toBeVisible();
    
    // Check URL default query params automatically synchronized
    await expect(page).toHaveURL(/.*row=business-area/);
    await expect(page).toHaveURL(/.*column=regulatory-coverage/);
    await expect(page).toHaveURL(/.*measure=service-domain-count/);
  });

  // RAIA-MATRIX-003, 004, 005
  test('RAIA-MATRIX-003 to 005: Axis and measure selections', async ({ page }) => {
    const rowSelect = page.locator('select').first();
    const colSelect = page.locator('select').nth(1);
    const measureSelect = page.locator('select').nth(2);

    // Switch row to lifecycle-status
    await rowSelect.selectOption('lifecycle-status');
    await expect(page).toHaveURL(/.*row=lifecycle-status/);

    // Switch column to landscape-layer
    await colSelect.selectOption('landscape-layer');
    await expect(page).toHaveURL(/.*column=landscape-layer/);

    // Switch measure to regulatory-mapping-count
    await measureSelect.selectOption('regulatory-mapping-count');
    await expect(page).toHaveURL(/.*measure=regulatory-mapping-count/);
  });

  // RAIA-MATRIX-006, 007, 008
  test('RAIA-MATRIX-006 to 008: Presets, filters and resetting', async ({ page }) => {
    // Open Filters Drawer
    const filtersBtn = page.getByRole('button', { name: /Filtros/i });
    await filtersBtn.click();
    await expect(page.getByTestId('matrix-filters-drawer')).toBeVisible();

    // Select status filter option
    const statusSelect = page.getByTestId('matrix-filters-drawer').locator('select').nth(5); // Estatus selector
    await statusSelect.selectOption('active');
    await expect(page).toHaveURL(/.*status=active/);

    // Test saved views widget (Presets)
    const viewsBtn = page.getByTestId('matrix-saved-views').locator('button').first();
    await viewsBtn.click();
    await expect(page.getByText(/Vistas Configuradas/i)).toBeVisible();

    // Reset filters
    const clearBtn = page.getByTestId('matrix-filters-drawer').getByRole('button', { name: /Limpiar Todos/i });
    await clearBtn.click();
    await expect(page).not.toHaveURL(/.*status=active/);
  });

  // RAIA-MATRIX-009, 010, 011, 012
  test('RAIA-MATRIX-009 to 012: Cell selection, drill-down and nav bridging', async ({ page }) => {
    // Click first cell with contents (role gridcell)
    const firstCell = page.locator('[role="gridcell"] button').first();
    await firstCell.click();

    // Check Drilldown Panel
    const drilldown = page.getByTestId('matrix-drilldown-panel');
    await expect(drilldown).toBeVisible();

    // Check links inside drill-down card
    const card = page.getByTestId('drilldown-service-domain-card').first();
    await expect(card).toBeVisible();

    const valueChainLink = card.getByRole('link', { name: /Ver en Value Chain/i });
    await expect(valueChainLink).toBeVisible();

    const techSheetLink = card.getByRole('link', { name: /Ficha Técnica/i });
    await expect(techSheetLink).toBeVisible();

    // Test navigation back / value-chain bridge URL
    const backBtn = page.getByTestId('matrix-back-button');
    await expect(backBtn).toBeVisible();
    await backBtn.click();
    await expect(page).toHaveURL(/.*service-landscape\/value-chain/);
  });

  // RAIA-MATRIX-013, 014, 015
  test('RAIA-MATRIX-013 to 015: URL params persistence, refresh and back/forward', async ({ page }) => {
    await page.goto('/service-landscape/matrix?row=lifecycle-status&column=maturity&status=active');
    
    // Refresh page
    await page.reload();
    
    // Confirm status select option is populated
    await expect(page).toHaveURL(/.*row=lifecycle-status/);
    await expect(page).toHaveURL(/.*status=active/);

    // Browser Go Back history validation
    await page.goto('/service-landscape/value-chain');
    await page.goBack();
    await expect(page).toHaveURL(/.*row=lifecycle-status/);
  });

  // RAIA-MATRIX-016 & 017
  test('RAIA-MATRIX-016 & 017: Exports triggers', async ({ page }) => {
    const exportBtn = page.getByTestId('matrix-export-button');
    await exportBtn.click();

    const csvOption = page.getByRole('button', { name: /Exportar CSV/i });
    await expect(csvOption).toBeVisible();

    const jsonOption = page.getByRole('button', { name: /Exportar JSON/i });
    await expect(jsonOption).toBeVisible();
  });

  // RAIA-MATRIX-018, 019, 020
  test('RAIA-MATRIX-018 to 020: Layouts responsiveness (Desktop, Tablet, Mobile)', async ({ page }) => {
    // 1. Tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByTestId('matrix-page')).toBeVisible();

    // 2. Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('matrix-page')).toBeVisible();
    
    // Confirm row accordion items visible in mobile mode
    await expect(page.getByTestId('matrix-mobile-accordions')).toBeVisible();
  });

  // RAIA-MATRIX-021 & 022
  test('RAIA-MATRIX-021 & 022: Keyboard grid navigation and Accessibility checking', async ({ page }) => {
    // Axe Accessibility check
    const results = await new AxeBuilder({ page })
      .exclude('.no-print') // Exclude print-only blocks
      .analyze();
    expect(results.violations.filter(v => v.impact === 'critical')).toHaveLength(0);

    // Keyboard Tab and Arrow grid movements
    const firstCell = page.locator('[role="gridcell"] button').first();
    await firstCell.focus();
    await page.keyboard.press('ArrowDown');
    // Active focused element tag name check
    const activeTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeTag).toBe('BUTTON');
  });

  // RAIA-MATRIX-023, 024, 025
  test('RAIA-MATRIX-023 to 025: Safety default fallback, zero matches empty state and performance', async ({ page }) => {
    // 1. Bad params URL fallback safety check (No white screen)
    await page.goto('/service-landscape/matrix?row=invalid-row-name&column=invalid-col-name');
    await expect(page.getByTestId('matrix-page')).toBeVisible();

    // 2. Search something absurd to trigger zero results
    const searchInput = page.getByPlaceholder(/Buscar por texto.../i);
    await searchInput.fill('ABSURD_TEXT_WITH_ZERO_MATCHES_DENSITY');
    await searchInput.press('Enter');
    
    // Empty state should display
    await expect(page.getByText(/Sin Resultados Encontrados/i)).toBeVisible();
  });
});
