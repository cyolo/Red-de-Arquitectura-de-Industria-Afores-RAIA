import { test, expect } from '@playwright/test';

test.describe('RAIA Business Scenarios - Step Analysis Context', () => {

  test('desktop layout synchronization between list, panel, and diagram', async ({ page }) => {
    // Desktop Viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Navigating
    await page.goto('/business-scenarios');
    
    const catalog = page.getByTestId('scenario-catalog');
    const firstCard = catalog.getByTestId('scenario-card').first();
    await firstCard.click();

    // Comprobar que la narrativa general no muestra “Análisis del paso seleccionado”
    const narrativeGeneral = page.getByTestId('scenario-architecture-narrative');
    await expect(narrativeGeneral.getByText('Análisis del paso seleccionado')).toHaveCount(0);

    // Clic en el trigger del paso activo para abrir dropdown
    const activeStepTrigger = page.getByTestId('scenario-structured-step').first();
    await activeStepTrigger.click();

    // Seleccionar el paso 1 en el combo box abierto
    const stepCards = page.getByTestId('scenario-structured-step');
    await stepCards.nth(0).click();

    // Comprobar que el análisis aparece junto a la lista en escritorio
    const panel = page.getByTestId('scenario-step-analysis-panel');
    await expect(panel).toBeVisible();

    // Comprobar contexto estructural, comportamiento y negocio
    await expect(panel.getByText('Contexto Estructural', { exact: false })).toBeVisible();
    await expect(panel.getByText('Comportamiento Sistémico', { exact: false })).toBeVisible();
    await expect(panel.getByText('Propósito de Negocio', { exact: false })).toBeVisible();

    // Volver a abrir combo y seleccionar paso 2
    await activeStepTrigger.click();
    await stepCards.nth(1).click();

    // Comprobar que el panel cambia
    await expect(panel).toContainText('2 de');

    // Seleccionar un mensaje desde el diagrama
    const messages = page.getByTestId('sequence-message');
    await messages.nth(2).click();

    // Comprobar que se activa el paso correcto
    await expect(panel).toContainText('3 de');
    await expect(activeStepTrigger).toContainText('3');

    // Probar anterior y siguiente
    const btnPrev = page.getByTestId('scenario-step-previous');
    const btnNext = page.getByTestId('scenario-step-next');
    
    await btnPrev.click();
    await expect(panel).toContainText('2 de');
    await btnNext.click();
    await expect(panel).toContainText('3 de');
  });

  test('mobile layout drawer behavior', async ({ page }) => {
    // Configura el viewport antes de navegar
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/business-scenarios');

    // Seleccionar primer escenario
    const catalog = page.getByTestId('scenario-catalog');
    await catalog.getByTestId('scenario-card').first().click();

    // Abrir combo y seleccionar paso 1
    const activeStepTrigger = page.getByTestId('scenario-structured-step').first();
    await activeStepTrigger.click();

    const stepCards = page.getByTestId('scenario-structured-step');
    await stepCards.nth(0).click();

    const drawer = page.getByTestId('scenario-step-analysis-drawer');
    await expect(drawer).toBeVisible();

    // Cerrar con botón
    const btnClose = page.getByTestId('scenario-step-analysis-close');
    await btnClose.click();
    await expect(drawer).not.toBeVisible();

    // Volver a abrir
    await activeStepTrigger.click();
    await stepCards.nth(0).click();
    await expect(drawer).toBeVisible();

    // Cerrar con Escape
    await page.keyboard.press('Escape');
    await expect(drawer).not.toBeVisible();

    // Volver a abrir para probar cambio de escenario
    await activeStepTrigger.click();
    await stepCards.nth(0).click();
    await expect(drawer).toBeVisible();

    // Cambiar de escenario
    const secondCard = catalog.getByTestId('scenario-card').nth(1);
    await secondCard.click();

    // Comprobar que no permanece el análisis anterior (el cajón se cierra automáticamente)
    await expect(drawer).not.toBeVisible();
  });

  test('absence of page and console errors', async ({ page }) => {
    const pageErrors: string[] = [];
    const consoleErrors: string[] = [];

    // Registers listeners BEFORE navigating
    page.on("pageerror", error => {
      pageErrors.push(error.message);
    });

    page.on("console", message => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    await page.goto('/business-scenarios');
    
    // Seleccionar primer escenario y primer paso
    await page.getByTestId('scenario-card').first().click();
    await page.getByTestId('scenario-structured-step').first().click();

    expect(pageErrors.length).toBe(0);
    const nonReactErrors = consoleErrors.filter(err => !err.includes('react-dom') && !err.includes('recharts'));
    expect(nonReactErrors.length).toBe(0);
  });

});
