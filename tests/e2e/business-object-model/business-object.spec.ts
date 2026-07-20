import { test, expect } from "@playwright/test";

test.describe("Business Object Model E2E Tests", () => {
  test("should navigate to the BOM workspace and switch tabs", async ({ page }) => {
    // Navigate to business object model page
    await page.goto("/business-object-model");

    // Check main workspace container is visible
    await expect(page.locator('[data-testid="bom-workspace"]')).toBeVisible();

    // Check header metadata
    await expect(page.locator("h1")).toContainText("Business Object Model");

    // Click on Catálogo tab
    await page.click('button[role="tab"]:has-text("Catálogo")');
    await expect(page.locator('[data-testid="catalogo-tab-content"]')).toBeVisible();

    // Click on Mapa de objetos tab
    await page.click('button[role="tab"]:has-text("Mapa de objetos")');
    await expect(page.locator('[data-testid="object-map-tab-content"]')).toBeVisible();

    // Click on Diccionario tab
    await page.click('button[role="tab"]:has-text("Diccionario")');
    await expect(page.locator('[data-testid="dictionary-tab-content"]')).toBeVisible();

    // Click on Relaciones tab
    await page.click('button[role="tab"]:has-text("Relaciones")');
    await expect(page.locator('[data-testid="relationships-tab-content"]')).toBeVisible();

    // Click on Gaps tab
    await page.click('button[role="tab"]:has-text("Gaps")');
    await expect(page.locator('[data-testid="gaps-tab-content"]')).toBeVisible();
  });
});
