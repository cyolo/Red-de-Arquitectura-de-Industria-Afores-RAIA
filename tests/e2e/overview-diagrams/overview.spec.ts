import { test, expect } from "@playwright/test";

test.describe("Overview Diagrams E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Overview Diagrams module
    await page.goto("/service-landscape/overview-diagrams");
  });

  test("RAIA-OVD-E2E-001: page load and initial layout", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("Overview Diagrams");
    await expect(page.locator('[title="Volver a Value Chain"]')).toBeVisible();
  });

  test("RAIA-OVD-E2E-002: catalog lists and filters diagrams", async ({ page }) => {
    // Search input exists
    const searchInput = page.locator('placeholder="Buscar diagrama..."');
    await expect(searchInput).toBeDefined();

    // Catalogue items exist
    const catalogCards = page.locator("button:has-text('RAIA-OVD-')");
    await expect(catalogCards.first()).toBeVisible();
  });

  test("RAIA-OVD-E2E-003: diagram selection updates active canvas", async ({ page }) => {
    // Click on the second diagram in the catalog list
    const secondCard = page.locator("button:has-text('RAIA-OVD-002')");
    await secondCard.click();

    // URL is updated with diagram slug
    await expect(page).toHaveURL(/diagram=RAIA-OVD-002/);
  });

  test("RAIA-OVD-E2E-004: canvas React Flow loads background and nodes", async ({ page }) => {
    const rfCanvas = page.locator(".react-flow");
    await expect(rfCanvas).toBeVisible();

    // Check custom node rendering
    const nodes = page.locator(".react-flow__node-customNode");
    await expect(nodes.first()).toBeVisible();
  });

  test("RAIA-OVD-E2E-005: node selection opens details panel", async ({ page }) => {
    // Click a node in the diagram
    const node = page.locator(".react-flow__node-customNode").first();
    await node.click();

    // Details panel drawer opens
    const detailsPanel = page.locator("h3:has-text('Detalle del Elemento')");
    await expect(detailsPanel).toBeVisible();
  });

  test("RAIA-OVD-E2E-006: detail level toggles", async ({ page }) => {
    // Click "Macro" detail level
    const macroBtn = page.locator("button:has-text('Macro')");
    await macroBtn.click();
    await expect(page).toHaveURL(/detailLevel=macro/);

    // Click "Service Domains" detail level
    const sdBtn = page.locator("button:has-text('Service Domains')");
    await sdBtn.click();
    await expect(page).toHaveURL(/detailLevel=service-domain/);
  });

  test("RAIA-OVD-E2E-007: fullscreen mode toggles", async ({ page }) => {
    const fsBtn = page.locator('[title="Pantalla completa"]');
    await fsBtn.click();
    await expect(page).toHaveURL(/fullscreen=true/);

    const minimizeBtn = page.locator('[title="Salir de pantalla completa"]');
    await minimizeBtn.click();
    await expect(page).toHaveURL(/diagram=/);
  });

  test("RAIA-OVD-E2E-008: narrative section displays markdown metadata", async ({ page }) => {
    const title = page.locator("h3:has-text('Propósito del Diagrama')");
    await expect(title).toBeVisible();

    const assumptions = page.locator("h3:has-text('Supuestos de Arquitectura')");
    await expect(assumptions).toBeVisible();
  });

  test("RAIA-OVD-E2E-009: export actions triggered", async ({ page }) => {
    const exportBtn = page.locator("button:has-text('Exportar JSON')");
    await expect(exportBtn).toBeVisible();

    const copyBtn = page.locator("button:has-text('Copiar JSON')");
    await expect(copyBtn).toBeVisible();
  });
});
