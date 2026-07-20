import { test, expect } from '@playwright/test';
import releasesData from '../../../src/data/releases.json';

test.describe('RAIA Releases Page Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/releases');
  });

  test('RAIA-REL-001: Validate releases are loaded and sorted correctly', async ({ page }) => {
    const cards = page.getByTestId('release-card');
    await expect(cards).toHaveCount(releasesData.length);

    // Verify each card contains corresponding version and status
    for (let i = 0; i < releasesData.length; i++) {
      const rel = releasesData[i];
      const card = cards.nth(i);
      await expect(card).toHaveAttribute('data-release-version', rel.version);
      await expect(card).toHaveAttribute('data-release-status', rel.status);
    }
  });

  test('RAIA-REL-002: Validate draft release status filtering', async ({ page }) => {
    const draftCards = page.locator('[data-testid="release-card"][data-release-status="draft"]');
    const count = await draftCards.count();
    for (let i = 0; i < count; i++) {
      await expect(draftCards.nth(i).getByText('Borrador')).toBeVisible();
      await expect(draftCards.nth(i).getByText('Publicado')).toHaveCount(0);
    }
  });

  test('RAIA-REL-003: Validate release details segments display correct metadata', async ({ page }) => {
    const cards = page.getByTestId('release-card');
    const count = await cards.count();
    
    if (count > 0) {
      const firstCard = cards.first();
      await expect(firstCard.getByText('Resumen del Release')).toBeVisible();
      
      const addedHeader = firstCard.getByText('Agregado');
      const hasAdded = await addedHeader.count() > 0;
      if (hasAdded) {
        await expect(addedHeader).toBeVisible();
      }
    }
  });
});
