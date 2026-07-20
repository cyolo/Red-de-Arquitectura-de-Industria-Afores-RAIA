import { test, expect } from "@playwright/test";

test.describe("Industry Reference Model E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate directly to the reference model route
    await page.goto("http://localhost:3000/reference-model");
  });

  test("should render main page elements successfully", async ({ page }) => {
    // Check main title
    await expect(page.locator("h1")).toContainText("RAIA Industry Reference Model");
    // Verify tabs presence
    await expect(page.locator("role=tablist")).toBeVisible();
  });

  test("should switch tabs and show corresponding panels", async ({ page }) => {
    // Switch to Viewpoints catalog
    await page.click("role=tab[name='Viewpoints']");
    await expect(page.locator("[data-testid='viewpoints-tab-content']")).toBeVisible();
    await expect(page.url()).toContain("tab=viewpoints");

    // Switch to Gaps panel
    await page.click("role=tab[name='Gaps']");
    await expect(page.locator("[data-testid='gaps-tab-content']")).toBeVisible();
    await expect(page.url()).toContain("tab=gaps");
  });

  test("should select viewpoint and render visual canvas layout", async ({ page }) => {
    // Select specific viewpoint from dropdown
    await page.selectOption("select", { value: "RAIA-RMV-003" });
    await page.click("role=tab[name='Mapa integral']");

    await expect(page.locator("[data-testid='map-tab-content']")).toBeVisible();
    await expect(page.url()).toContain("viewpoint=RAIA-RMV-003");
  });

  test("should show traceability paths and impact simulations", async ({ page }) => {
    // Traceability explorer tab
    await page.click("role=tab[name='Trazabilidad']");
    await expect(page.locator("[data-testid='traceability-tab-content']")).toBeVisible();

    // Change simulation impact tab
    await page.click("role=tab[name='Impacto']");
    await expect(page.locator("[data-testid='impact-tab-content']")).toBeVisible();
  });
});
