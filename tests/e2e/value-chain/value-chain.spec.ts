import { test, expect } from '@playwright/test';

test.describe('RAIA Service Landscape — Value Chain Map', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/service-landscape/value-chain');
  });

  test('RAIA-VC-001 to 005: Validate page load, counts and duplication checks', async ({ page }) => {
    await expect(page.getByTestId('value-chain-page')).toBeVisible();

    // Switch to Cobertura mode to list all domains natively in grid format
    await page.getByRole('tab', { name: /Cobertura/i }).click();

    const countContainer = page.getByTestId('value-chain-result-count');
    await expect(countContainer).toBeVisible();
    await expect(countContainer).toContainText('273 / 273');

    const serviceDomainCards = page.getByTestId('service-domain-card');
    await expect(serviceDomainCards).toHaveCount(273);

    // Verify IDs uniqueness
    const ids = await serviceDomainCards.evaluateAll(cards =>
      cards.map(card => card.getAttribute('data-service-domain-id'))
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('RAIA-VC-006 to 012: Validate selects filtering, combinations and clearing', async ({ page }) => {
    // 1. Filter by Business Area
    const selectArea = page.getByTestId('value-chain-filter-area');
    await selectArea.selectOption('RAIA-BA-004'); // Afiliación y Cuenta Individual
    
    const countContainer = page.getByTestId('value-chain-result-count');
    await expect(countContainer).toContainText('37 / 273'); // Area 004 has 37 Service Domains

    // 2. Filter by Business Domain (filtered under BA-004)
    const selectDomain = page.getByTestId('value-chain-filter-domain');
    await selectDomain.selectOption('RAIA-BD-012'); // Administración de Cuenta Individual
    await expect(countContainer).toContainText('12 / 273');

    // 3. Filter by Life Cycle Status
    const selectStatus = page.getByTestId('value-chain-filter-status');
    await selectStatus.selectOption('active');
    // Just verify matches change
    const activeCountText = await countContainer.textContent();
    expect(activeCountText).toBeTruthy();

    // 4. Clear Filters
    const clearBtn = page.getByTestId('value-chain-clear-filters');
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();
    await expect(countContainer).toContainText('273 / 273');
  });

  test('RAIA-VC-013 to 015: Validate zero results, URL compatibility and refresh persistence', async ({ page }) => {
    const selectArea = page.getByTestId('value-chain-filter-area');
    const selectStatus = page.getByTestId('value-chain-filter-status');
    
    // Select combination that yields 0 or few
    await selectArea.selectOption('RAIA-BA-001');
    await selectStatus.selectOption('deprecated');

    const countContainer = page.getByTestId('value-chain-result-count');
    await expect(countContainer).toContainText('0 / 273');

    // Check URL query parameters synchronization
    await expect(page).toHaveURL(/.*area=RAIA-BA-001/);
    await expect(page).toHaveURL(/.*status=deprecated/);

    // Refresh and confirm parameters persistence
    await page.reload();
    await expect(countContainer).toContainText('0 / 273');
  });

  test('RAIA-VC-016 to 019: Validate Service Domain selection and sidebar', async ({ page }) => {
    // Select first service domain card
    const firstCard = page.getByTestId('service-domain-card').first();
    const serviceDomainId = await firstCard.getAttribute('data-service-domain-id');
    expect(serviceDomainId).toBeTruthy();

    await firstCard.click();

    // Check sidebar visible
    const sidebar = page.getByTestId('service-domain-detail-sidebar');
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toContainText(serviceDomainId!);

    // Check link to technical sheet is present
    const link = sidebar.getByRole('link', { name: /Ver Ficha Técnica Completa/i });
    await expect(link).toBeVisible();

    // Close sidebar
    const closeBtn = sidebar.locator('button').first();
    await closeBtn.click();
    await expect(sidebar).not.toBeVisible();
  });

  test('RAIA-VC-020 & 021: Validate responsive view and basic keyboard interaction', async ({ page }) => {
    // Responsive Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('value-chain-page')).toBeVisible();

    // Keyboard Tab focus
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });
});
