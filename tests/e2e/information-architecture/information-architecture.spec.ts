import { test, expect } from "@playwright/test";

test.describe("Information Architecture Module E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the module root path
    await page.goto("/information-architecture");
  });

  test("should render main workspace and statistics", async ({ page }) => {
    // Check that the shell container exists
    const workspace = page.locator("[data-testid='ia-workspace']");
    await expect(workspace).toBeVisible();

    // Verify statistics cards are rendering numbers
    const statsContainer = page.locator("header");
    await expect(statsContainer).toContainText("DOMINIOS");
    await expect(statsContainer).toContainText("CONCEPTOS");
    await expect(statsContainer).toContainText("BUSINESS OBJECTS");
  });

  test("should switch tabs and update url parameters", async ({ page }) => {
    // Initially on Resumen tab
    const resumenContent = page.locator("[data-testid='resumen-tab-content']");
    await expect(resumenContent).toBeVisible();

    // Click on Dominios tab
    const dominiosTabBtn = page.getByRole("tab", { name: "Dominios" });
    await dominiosTabBtn.click();

    // Verify tab contents and URL parameter update
    const dominiosContent = page.locator("[data-testid='dominios-tab-content']");
    await expect(dominiosContent).toBeVisible();
    await expect(page).toHaveURL(/.*tab=dominios/);

    // Click on Conceptos tab
    const conceptosTabBtn = page.getByRole("tab", { name: "Conceptos" });
    await conceptosTabBtn.click();

    const conceptosContent = page.locator("[data-testid='conceptos-tab-content']");
    await expect(conceptosContent).toBeVisible();
    await expect(page).toHaveURL(/.*tab=conceptos/);
  });

  test("should display details panel when selecting a business object", async ({ page }) => {
    // Go to Objects tab
    const objetosTabBtn = page.getByRole("tab", { name: "Objetos" });
    await objetosTabBtn.click();

    // Click on a Business Object row link
    const firstBoLink = page.getByRole("button", { name: "Registro de Trabajador" }).first();
    await firstBoLink.click();

    // Verify detail panel drawer is visible
    const detailsPanel = page.locator("[data-testid='ia-details-panel']");
    await expect(detailsPanel).toBeVisible();
    await expect(detailsPanel).toContainText("RAIA-BO-001");
    await expect(detailsPanel).toContainText("Registro de Trabajador");

    // Close details panel
    const closeBtn = detailsPanel.getByRole("button", { name: "Cerrar panel (Esc)" });
    await closeBtn.click();
    await expect(detailsPanel).not.toBeVisible();
  });
});
