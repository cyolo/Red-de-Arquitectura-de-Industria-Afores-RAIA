import { test, expect } from '@playwright/test';

test.describe('Business Scenarios Layout & Structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/business-scenarios');
  });

  test('RAIA-BS-E2E-010 & 011: Validate semantic DOM order of components and workspace structure', async ({ page }) => {
    const detail = page.getByTestId('scenario-detail');
    await expect(detail).toBeVisible();

    const order = await page.evaluate(() => {
      const diagram = document.querySelector('[data-testid="scenario-sequence-diagram"]');
      const narrative = document.querySelector('[data-testid="scenario-architecture-narrative"]');
      const steps = document.querySelector('[data-testid="scenario-steps-workspace"]');

      if (!diagram || !narrative || !steps) {
        return null;
      }

      return {
        diagramBeforeNarrative: Boolean(
          diagram.compareDocumentPosition(narrative) & Node.DOCUMENT_POSITION_FOLLOWING
        ),
        narrativeBeforeSteps: Boolean(
          narrative.compareDocumentPosition(steps) & Node.DOCUMENT_POSITION_FOLLOWING
        )
      };
    });

    expect(order).toEqual({
      diagramBeforeNarrative: true,
      narrativeBeforeSteps: true
    });
  });

  test('RAIA-BS-E2E-012: Validate that step analysis is NOT part of the general architecture narrative', async ({ page }) => {
    const detail = page.getByTestId('scenario-detail');
    const narrative = detail.getByTestId('scenario-architecture-narrative');
    
    // The general narrative should not contain the step analysis title/placeholder
    await expect(narrative.getByText('Análisis del paso seleccionado')).toHaveCount(0);
    await expect(narrative.getByText('Propósito de Negocio')).toHaveCount(0);
  });
});
