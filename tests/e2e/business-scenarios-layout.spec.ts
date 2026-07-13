import { test, expect } from '@playwright/test';

test.describe('Business Scenarios Layout', () => {
  test('ensures correct DOM placement of scenario structural elements', async ({ page }) => {
    // 1. Abrir la sección
    await page.goto('/business-scenarios');

    // 2. Comprobar que la columna izquierda contiene escenarios
    const catalog = page.getByTestId('scenario-catalog');
    await expect(catalog).toBeVisible();
    await expect(catalog.getByTestId('scenario-card').first()).toBeVisible();

    // 3. Comprobar que la columna izquierda NO contiene tarjetas de pasos estructurados
    await expect(catalog.getByTestId('scenario-structured-step')).toHaveCount(0);
    await expect(catalog.getByTestId('scenario-structured-steps')).toHaveCount(0);

    // 4. Comprobar la columna derecha
    const detail = page.getByTestId('scenario-detail');
    await expect(detail).toBeVisible();
    
    // El diagrama debe estar en la derecha
    await expect(detail.getByTestId('scenario-sequence-diagram')).toBeVisible();

    // 5. Debe aparecer la narrativa
    const narrative = detail.getByTestId('scenario-architecture-narrative');
    await expect(narrative).toBeVisible();
    // 6. Debe localizarse Resultado Arquitectónico
    await expect(narrative.getByText('Resultado Arquitectónico')).toBeVisible();

    // 7. Después de la narrativa, deben estar los pasos estructurados
    const stepsSection = detail.getByTestId('scenario-structured-steps');
    await expect(stepsSection).toBeVisible();

    // Verificar el orden semántico evaluando las posiciones en el DOM
    const narrativeBox = await narrative.boundingBox();
    const stepsBox = await stepsSection.boundingBox();
    expect(narrativeBox!.y + narrativeBox!.height).toBeLessThanOrEqual(stepsBox!.y);

    // 8, 9, 10. Seleccionar un paso y verificar sincronización
    const firstStep = stepsSection.getByTestId('scenario-structured-step').first();
    await firstStep.click();
    await expect(firstStep).toHaveAttribute('aria-current', 'step');
    await expect(narrative.getByText('Análisis del paso seleccionado')).toBeVisible();

    // 11, 12. Cambiar de escenario y verificar reactividad
    const secondScenarioCard = catalog.getByTestId('scenario-card').nth(1);
    await secondScenarioCard.click();
    
    // Validar que la lista de pasos en la derecha sigue existiendo
    await expect(detail.getByTestId('scenario-structured-steps')).toBeVisible();
    await expect(catalog.getByTestId('scenario-structured-step')).toHaveCount(0);
  });
});
