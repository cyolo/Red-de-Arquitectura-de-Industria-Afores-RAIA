import { test, expect } from '@playwright/test';

test.describe('RAIA Sequence Diagram Engine', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/business-scenarios');
  });

  test('RAIA-BS-E2E-005, 006, 007: Validate diagram elements load correctly', async ({ page }) => {
    const detail = page.getByTestId('scenario-detail');
    
    const firstScenarioCard = page.getByTestId('scenario-card').first();
    await firstScenarioCard.click();

    const diagram = detail.getByTestId('scenario-sequence-diagram');
    await expect(diagram).toBeVisible();

    const participants = diagram.getByTestId('sequence-participant');
    await expect(participants.first()).toBeVisible();

    const messages = diagram.getByTestId('sequence-message');
    await expect(messages.first()).toBeVisible();
  });

  test('RAIA-BS-E2E-018, 019, 020, 021, 022: Validate zoom, fit, reset, and fullscreen interactions', async ({ page }) => {
    const detail = page.getByTestId('scenario-detail');
    const firstScenarioCard = page.getByTestId('scenario-card').first();
    await firstScenarioCard.click();

    const diagramContainer = page.getByTestId('scenario-sequence-diagram-container');
    const toolbar = page.getByRole('toolbar', { name: 'Controles del diagrama de secuencia' });
    
    // Zoom in
    const zoomIn = toolbar.getByRole('button', { name: /Acercar/i });
    await expect(zoomIn).toBeVisible();
    await zoomIn.click();

    // Zoom out
    const zoomOut = toolbar.getByRole('button', { name: /Alejar/i });
    await expect(zoomOut).toBeVisible();
    await zoomOut.click();

    // Fit content
    const fit = toolbar.getByRole('button', { name: /Ajustar al contenido/i });
    await expect(fit).toBeVisible();
    await fit.click();

    // Reset view
    const reset = toolbar.getByRole('button', { name: /Restablecer vista/i });
    await expect(reset).toBeVisible();
    await reset.click();

    // Fullscreen test
    const fullscreenBtn = toolbar.getByRole('button', { name: /pantalla completa/i });
    await expect(fullscreenBtn).toBeVisible();
    await fullscreenBtn.click();

    // Determine fullscreen mode: native API or fallback fixed overlay
    const fullscreenSupported = await page.evaluate(() => Boolean(document.fullscreenEnabled));

    if (fullscreenSupported) {
      // Check if native fullscreen is active
      await expect.poll(() =>
        page.evaluate(() => Boolean(document.fullscreenElement))
      ).toBe(true);
    } else {
      // Check fallback fixed overlay attribute
      await expect(diagramContainer).toHaveAttribute('data-fullscreen-mode', 'fallback');
    }

    // Press Escape to exit fullscreen
    await page.keyboard.press('Escape');

    // Confirm exited fullscreen
    if (fullscreenSupported) {
      await expect.poll(() =>
        page.evaluate(() => Boolean(document.fullscreenElement))
      ).toBe(false);
    } else {
      await expect(diagramContainer).not.toHaveAttribute('data-fullscreen-mode', 'fallback');
    }
  });
});
