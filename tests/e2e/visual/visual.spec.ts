import { test, expect } from '@playwright/test';

test.describe('RAIA Visual Regression Baseline Screenshots', () => {
  test('Home page visual snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('home.png');
  });

  test('Metamodel page visual snapshot', async ({ page }) => {
    await page.goto('/metamodel');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('metamodel.png');
  });

  test('Value Chain initial map visual snapshot', async ({ page }) => {
    await page.goto('/service-landscape/value-chain');
    await page.waitForTimeout(1000); // Allow SVG map to render and stabilize
    await expect(page).toHaveScreenshot('value-chain-initial.png');
  });

  test('Value Chain filtered map visual snapshot', async ({ page }) => {
    await page.goto('/service-landscape/value-chain');
    const selectArea = page.getByTestId('value-chain-filter-area');
    await selectArea.selectOption('RAIA-BA-004');
    await page.waitForTimeout(1000); // Allow filtering transition to complete
    await expect(page).toHaveScreenshot('value-chain-filtered.png');
  });

  test('Value Chain sidebar active visual snapshot', async ({ page }) => {
    await page.goto('/service-landscape/value-chain');
    const firstCard = page.getByTestId('service-domain-card').first();
    await firstCard.click();
    await expect(page.getByTestId('service-domain-detail-sidebar')).toBeVisible();
    await page.waitForTimeout(1000); // Allow sidebar transition to finish
    await expect(page).toHaveScreenshot('value-chain-sidebar.png');
  });

  test('Business Scenarios list visual snapshot', async ({ page }) => {
    await page.goto('/business-scenarios');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('business-scenarios.png');
  });

  test('Business Scenario with active step visual snapshot', async ({ page }) => {
    await page.goto('/business-scenarios');
    await page.getByTestId('scenario-card').first().click();

    const isMobile = page.viewportSize() ? page.viewportSize()!.width < 1280 : false;
    if (isMobile) {
      await page.getByTestId('scenario-structured-step').first().click();
      await page.getByTestId('scenario-structured-step').nth(1).click();
      await expect(page.getByTestId('scenario-step-analysis-drawer')).toBeVisible();
    } else {
      await page.getByTestId('scenario-structured-step').first().click();
      await expect(page.getByTestId('scenario-step-analysis-panel')).toBeVisible();
    }

    await page.waitForTimeout(1000); // Allow steps workspace panel/drawer animation to finish
    await expect(page).toHaveScreenshot('business-scenario-active-step.png');
  });

  test('Business Scenario diagram fullscreen visual snapshot', async ({ page }) => {
    await page.goto('/business-scenarios');
    await page.getByTestId('scenario-card').first().click();
    const toolbar = page.getByRole('toolbar', { name: 'Controles del diagrama de secuencia' });
    await toolbar.getByRole('button', { name: /pantalla completa/i }).click();
    await page.waitForTimeout(1000); // Allow fullscreen overlay transition to finish
    await expect(page).toHaveScreenshot('business-scenario-fullscreen.png');
  });

  test('Dashboard page visual snapshot', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForTimeout(1000); // Allow recharts animation to settle
    await expect(page).toHaveScreenshot('dashboard.png');
  });

  test('Releases page visual snapshot', async ({ page }) => {
    await page.goto('/releases');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('releases.png');
  });
});
