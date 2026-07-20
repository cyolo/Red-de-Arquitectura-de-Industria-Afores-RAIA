import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('RAIA Accessibility Audits (WCAG AA)', () => {
  const routes = [
    '/',
    '/metamodel',
    '/service-landscape/value-chain',
    '/business-scenarios',
    '/dashboard',
    '/releases'
  ];

  for (const route of routes) {
    test(`Verify accessibility for route: ${route}`, async ({ page }) => {
      await page.goto(route);
      
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
        
      expect(results.violations).toEqual([]);
    });
  }

  test('Verify accessibility of interactive states', async ({ page }) => {
    // 1. Value Chain with sidebar open
    await page.goto('/service-landscape/value-chain');
    const firstCard = page.getByTestId('service-domain-card').first();
    await firstCard.click();
    await expect(page.getByTestId('service-domain-detail-sidebar')).toBeVisible();

    const sidebarResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(sidebarResults.violations).toEqual([]);

    // 2. Business Scenario step active panel
    await page.goto('/business-scenarios');
    await page.getByTestId('scenario-card').first().click();
    await page.getByTestId('scenario-structured-step').first().click();
    const panel = page.getByTestId('scenario-step-analysis-panel');
    await expect(panel).toBeVisible();

    const panelResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(panelResults.violations).toEqual([]);
  });
});
