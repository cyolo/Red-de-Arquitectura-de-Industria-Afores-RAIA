import { test, expect } from '@playwright/test';
import raiaData from '../../../src/data/raia-landscape-0.1.0.json';
import relationsData from '../../../src/data/relations-0.1.0.json';
import scenariosData from '../../../src/data/scenarios-0.1.0.json';
import regulationsData from '../../../src/data/regulations-0.1.0.json';

test.describe('RAIA Architecture Dashboard Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('RAIA-DASH-001: Validate all dashboard metrics reconcile with JSON canonical source of truth', async ({ page }) => {
    // 1. Business Areas total
    const baMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="business-areas-total"]');
    await expect(baMetric).toBeVisible();
    await expect(baMetric).toHaveAttribute('data-metric-value', String(raiaData.businessAreas.length));

    // 2. Business Domains total
    const bdMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="business-domains-total"]');
    await expect(bdMetric).toBeVisible();
    await expect(bdMetric).toHaveAttribute('data-metric-value', String(raiaData.businessDomains.length));

    // 3. Service Domains total
    const sdMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="service-domains-total"]');
    await expect(sdMetric).toBeVisible();
    await expect(sdMetric).toHaveAttribute('data-metric-value', String(raiaData.serviceDomains.length));

    // 4. Relations total
    const relMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="relations-total"]');
    await expect(relMetric).toBeVisible();
    await expect(relMetric).toHaveAttribute('data-metric-value', String(relationsData.length));

    // 5. Scenarios total
    const scenMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="scenarios-total"]');
    await expect(scenMetric).toBeVisible();
    await expect(scenMetric).toHaveAttribute('data-metric-value', String(scenariosData.length));

    // 6. Regulations total
    const regMetric = page.locator('[data-testid="dashboard-metric"][data-metric-id="regulations-total"]');
    await expect(regMetric).toBeVisible();
    await expect(regMetric).toHaveAttribute('data-metric-value', String(regulationsData.length));
  });

  test('RAIA-DASH-002: Validate editorial status progress and maturity displays without errors', async ({ page }) => {
    await expect(page.getByText('Estado Editorial')).toBeVisible();
    await expect(page.getByText('Madurez de los Dominios')).toBeVisible();
    await expect(page.getByText('Anomalías de Cobertura')).toBeVisible();
    
    // Ensure no NaN, Infinity or undefined is shown in percentages or values
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).not.toContain('NaN');
    expect(bodyText).not.toContain('Infinity');
    expect(bodyText).not.toContain('-1');
    expect(bodyText).not.toContain('undefined');
  });
});
