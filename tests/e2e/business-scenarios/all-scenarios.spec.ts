import { test, expect } from '@playwright/test';
import scenariosData from '../../../src/data/scenarios-0.1.0.json';

test.describe('All Business Scenarios Parameterized E2E Verification', () => {
  for (const expectedScenario of scenariosData) {
    test(`${expectedScenario.id}: Verify complete scenario layout and element rendering`, async ({ page }) => {
      await page.goto('/business-scenarios');

      const card = page.locator(
        `[data-testid="scenario-card"]` +
        `[data-scenario-id="${expectedScenario.id}"]`
      );

      await expect(card).toBeVisible();
      await card.click();

      const detail = page.getByTestId('scenario-detail');
      await expect(detail).toHaveAttribute('data-selected-scenario-id', expectedScenario.id);

      await expect(detail.getByTestId('scenario-sequence-diagram')).toBeVisible();
      await expect(detail.getByTestId('scenario-architecture-narrative')).toBeVisible();
      await expect(detail.getByTestId('scenario-steps-workspace')).toBeVisible();

      // Check that at least one participant is visible
      await expect(detail.getByTestId('sequence-participant').first()).toBeVisible();

      // Check that at least one message is visible
      await expect(detail.getByTestId('sequence-message').first()).toBeVisible();
    });
  }
});
