import { test, expect } from "@playwright/test";

test.describe("Control Record Model E2E Tests", () => {
  test("should navigate to the Control Record Model workspace and switch tabs", async ({ page }) => {
    // Navigate to control record model page
    await page.goto("/control-record-model");

    // Check main workspace container is visible
    await expect(page.locator('[data-testid="crm-workspace"]')).toBeVisible();

    // Check header metadata
    await expect(page.locator("h1")).toContainText("Control Record Model");

    // Click on Catálogo tab
    await page.click('button[role="tab"]:has-text("Catálogo")');
    await expect(page.locator('[data-testid="catalogo-tab-content"]')).toBeVisible();

    // Click on Máquina de estados tab
    await page.click('button[role="tab"]:has-text("Máquina de estados")');
    await expect(page.locator('[data-testid="state-machine-tab-content"]')).toBeVisible();

    // Click on Transiciones tab
    await page.click('button[role="tab"]:has-text("Transiciones")');
    await expect(page.locator('[data-testid="transiciones-tab-content"]')).toBeVisible();

    // Click on Gaps tab
    await page.click('button[role="tab"]:has-text("Gaps")');
    await expect(page.locator('[data-testid="gaps-tab-content"]')).toBeVisible();
  });

  test("should trigger transition simulation", async ({ page }) => {
    await page.goto("/control-record-model?tab=state-machine");

    // Click to start simulation
    await page.click('button:has-text("Iniciar Simulación")');

    // Verify simulation active indicator appears
    await expect(page.locator("text=SIMULACIÓN ACTIVA")).toBeVisible();
  });
});
