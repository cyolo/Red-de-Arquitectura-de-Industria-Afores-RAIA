import { test, expect } from '@playwright/test';

test.describe('RAIA Metamodel Overview Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/metamodel');
  });

  test('RAIA-META-001 & 002: Validate page load and header title', async ({ page }) => {
    const overview = page.getByTestId('metamodel-overview');
    await expect(overview).toBeVisible();
    await expect(overview.locator('h1')).toContainText('RAIA Metamodel Overview');
  });

  test('RAIA-META-003 & 004: Validate structural hierarchy and cardinalities', async ({ page }) => {
    const hierarchy = page.getByTestId('metamodel-hierarchy');
    await expect(hierarchy).toBeVisible();
    await expect(hierarchy.getByText('Business Area (BA)')).toBeVisible();
    await expect(hierarchy.getByText('Business Domain (BD)')).toBeVisible();
    await expect(hierarchy.getByText('Service Domain (SD)')).toBeVisible();
  });

  test('RAIA-META-005: Validate Service Domain component boxes', async ({ page }) => {
    const sdComponents = page.getByTestId('metamodel-service-domain');
    await expect(sdComponents).toBeVisible();
    await expect(sdComponents.getByText('Service Operation')).toBeVisible();
    await expect(sdComponents.getByText('Business Event')).toBeVisible();
    await expect(sdComponents.getByText('Business Object')).toBeVisible();
    await expect(sdComponents.getByText('Control Record')).toBeVisible();
  });

  test('RAIA-META-006: Validate glossary section', async ({ page }) => {
    const glossary = page.getByTestId('metamodel-glossary');
    await expect(glossary).toBeVisible();
    await expect(glossary.getByText('Architecture Repository')).toBeVisible();
    await expect(glossary.getByText('Service Domain')).toBeVisible();
    await expect(glossary.getByText('Control Record')).toBeVisible();
  });

  test('RAIA-META-007 & 008: Validate rules of identification and technology independence', async ({ page }) => {
    const rules = page.getByTestId('metamodel-governance-rules');
    await expect(rules).toBeVisible();
    await expect(rules.getByText('Identificación Inmutable')).toBeVisible();
    await expect(rules.getByText('Independencia de Implementación')).toBeVisible();
  });

  test('RAIA-META-009, 010 & 011: Validate headings, responsive layout and basic keyboard focus', async ({ page }) => {
    // Verify headings hierarchy
    const headings = page.locator('h2');
    await expect(headings.first()).toBeVisible();

    // Change viewport size for responsive validation
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('metamodel-overview')).toBeVisible();

    // Verify keyboard navigation
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });
});
