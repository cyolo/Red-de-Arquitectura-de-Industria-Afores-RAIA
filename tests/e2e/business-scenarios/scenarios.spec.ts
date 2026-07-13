import { test, expect } from '@playwright/test';

test.describe('Business Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/business-scenarios');
  });

  test('RAIA-BS-001: Validate Business Scenarios main page loads', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Business Scenarios');
  });

  test('RAIA-BS-002: Validate presence of at least 18 scenarios in the catalog', async ({ page }) => {
    // Wait for the scenario items to render. We assume they have a specific class or text.
    // If we don't know the exact class, we can just look for "RAIA-BS-" text.
    const scenarioItems = page.locator('text=/RAIA-BS-\\d{4}/');
    const count = await scenarioItems.count();
    expect(count).toBeGreaterThanOrEqual(18);
  });

  test('RAIA-BS-003: Selecting a scenario updates the view', async ({ page }) => {
    const firstScenario = page.locator('text=/RAIA-BS-\\d{4}/').first();
    await expect(firstScenario).toBeVisible();
    await firstScenario.click();
    
    // Check if the selected scenario title appears in the main view
    await expect(page.locator('text=Propósito')).toBeVisible();
  });
});
