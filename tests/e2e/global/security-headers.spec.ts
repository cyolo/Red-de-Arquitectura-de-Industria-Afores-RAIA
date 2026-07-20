import { test, expect } from '@playwright/test';

test.describe('RAIA Security Headers & CSP E2E Tests (SEC-03)', () => {
  test('verify presence and values of secure HTTP response headers', async ({ request }) => {
    const response = await request.get('/');
    const headers = response.headers();

    // Verify Content-Security-Policy
    expect(headers['content-security-policy']).toBeDefined();
    const csp = headers['content-security-policy'];
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("frame-ancestors 'none'");

    // Verify X-Powered-By is absent
    expect(headers['x-powered-by']).toBeUndefined();

    // Verify MIME sniffing block
    expect(headers['x-content-type-options']).toBe('nosniff');

    // Verify Frame options
    expect(headers['x-frame-options']).toBe('DENY');

    // Verify Referrer policy
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');

    // Verify Permissions policy
    expect(headers['permissions-policy']).toBeDefined();

    // Verify X-XSS-Protection is absent (cleaned up)
    expect(headers['x-xss-protection']).toBeUndefined();
  });

  test('navigate portal and check for browser console errors or CSP violations', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      consoleErrors.push(err.message);
    });

    // Go to homepage
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('RAIA Architecture Overview Portal');

    // Navigate to Value Chain
    await page.click('text=Explore'); // Click explore on one of the modules
    
    // We expect no CSP or hydration errors in console
    expect(consoleErrors.filter(err => err.includes('Content Security Policy') || err.includes('hydration'))).toEqual([]);
  });
});
