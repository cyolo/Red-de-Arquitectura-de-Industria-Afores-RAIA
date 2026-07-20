import { test, expect } from '@playwright/test';
import scenariosData from '../../../src/data/scenarios-0.1.0.json';

test.describe('Business Scenarios Catalog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/business-scenarios');
  });

  test('RAIA-BS-E2E-001: Validate Business Scenarios main page loads', async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "RAIA Business Scenarios"
      })
    ).toBeVisible();
  });

  test('RAIA-BS-E2E-002: Validate exact count of scenarios in the catalog matching canonical source', async ({ page }) => {
    const scenarioCards = page.getByTestId('scenario-card');
    await expect(scenarioCards).toHaveCount(scenariosData.length);
  });

  test('RAIA-BS-E2E-003: Validate scenario cards contain unique, valid IDs matching canonical source', async ({ page }) => {
    const scenarioCards = page.getByTestId('scenario-card');
    
    const ids = await scenarioCards.evaluateAll(cards =>
      cards.map(card => card.getAttribute('data-scenario-id'))
    );

    const expectedIds = scenariosData.map(s => s.id);

    expect(ids).toEqual(expectedIds);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
