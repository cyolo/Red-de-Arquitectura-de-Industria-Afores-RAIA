import { test, expect } from '@playwright/test';

test.describe('RAIA Business Scenarios - UX Architecture Context', () => {

  test.beforeEach(async ({ page }) => {
    // 1. abrir /business-scenarios
    await page.goto('/business-scenarios');
    
    // 2. seleccionar un escenario (usamos el primero disponible)
    const catalog = page.getByTestId('scenario-catalog');
    await catalog.getByText(/RAIA-BS-/i).first().click();

    // Esperar a que renderice
    await expect(page.getByTestId('scenario-sequence-diagram')).toBeVisible();
  });

  test('desktop layout synchronization between list, panel, and diagram', async ({ page }) => {
    // Desktop Viewport
    await page.setViewportSize({ width: 1280, height: 800 });

    // 3. comprobar que la narrativa general no muestra “Análisis del paso seleccionado”
    const narrativeGeneral = page.getByTestId('scenario-architecture-narrative');
    await expect(narrativeGeneral.getByText('Análisis del paso seleccionado')).toHaveCount(0);

    // 4. desplazarse a “Pasos estructurados del escenario”
    const stepsWorkspace = page.getByTestId('scenario-steps-workspace');
    await stepsWorkspace.scrollIntoViewIfNeeded();

    // 5. seleccionar el paso 1 (de la lista)
    const stepCards = page.getByTestId('scenario-structured-step');
    await stepCards.nth(0).click();

    // 6. comprobar que el análisis aparece junto a la lista en escritorio
    const panel = page.getByTestId('scenario-step-analysis-panel');
    await expect(panel).toBeVisible();

    // 7. comprobar contexto estructural
    await expect(panel.getByText('Contexto Estructural', { exact: false })).toBeVisible();
    
    // 8. comprobar comportamiento
    await expect(panel.getByText('Comportamiento Sistémico', { exact: false })).toBeVisible();
    
    // 9. comprobar significado de negocio
    await expect(panel.getByText('Propósito de Negocio', { exact: false })).toBeVisible();

    // 11. seleccionar paso 2
    await stepCards.nth(1).click();

    // 12. comprobar que el panel cambia
    await expect(panel).toContainText('2 de');

    // 13. seleccionar un mensaje desde el diagrama
    const messages = page.getByTestId('sequence-message');
    await messages.nth(2).click();

    // 14. comprobar que se activa el paso correcto
    await expect(panel).toContainText('3 de');
    await expect(stepCards.nth(2)).toHaveAttribute('aria-current', 'step');

    // 15. probar anterior y siguiente
    const btnPrev = page.getByTestId('scenario-step-previous');
    const btnNext = page.getByTestId('scenario-step-next');
    
    await btnPrev.click();
    await expect(panel).toContainText('2 de');
    await btnNext.click();
    await expect(panel).toContainText('3 de');
  });

  test('mobile layout drawer behavior', async ({ page }) => {
    // 16. probar resolución móvil
    await page.setViewportSize({ width: 375, height: 667 });

    const stepCards = page.getByTestId('scenario-structured-step');
    
    // 17. comprobar que se abre el drawer
    await stepCards.nth(0).click();
    const drawer = page.getByTestId('scenario-step-analysis-drawer');
    await expect(drawer).toBeVisible();

    // 18. cerrar con botón
    const btnClose = page.getByTestId('scenario-step-analysis-close');
    await btnClose.click();
    await expect(drawer).not.toBeVisible();

    // 19. volver a abrir
    await stepCards.nth(0).click();
    await expect(drawer).toBeVisible();

    // 20. cerrar con Escape
    await page.keyboard.press('Escape');
    await expect(drawer).not.toBeVisible();

    // 22. cambiar de escenario
    const catalog = page.getByTestId('scenario-catalog');
    await catalog.getByText(/RAIA-BS-0010/i).click();

    // 23. comprobar que no permanece el análisis anterior (el cajón se cierra automáticamente)
    await expect(drawer).not.toBeVisible();
  });

  test('absence of console errors', async ({ page }) => {
    // 24. verificar ausencia de errores de consola
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    
    const stepCards = page.getByTestId('scenario-structured-step');
    await stepCards.nth(0).click();
    
    expect(errors.length).toBe(0);
  });

});
