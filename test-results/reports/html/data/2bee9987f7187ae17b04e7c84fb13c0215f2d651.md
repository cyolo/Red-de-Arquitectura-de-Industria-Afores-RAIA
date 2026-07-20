# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: value-chain\value-chain.spec.ts >> RAIA Service Landscape — Value Chain Map >> RAIA-VC-016 to 019: Validate Service Domain selection and sidebar
- Location: tests\e2e\value-chain\value-chain.spec.ts:72:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  getByTestId('service-domain-detail-sidebar')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for getByTestId('service-domain-detail-sidebar')
    6 × locator resolved to <div data-testid="service-domain-detail-sidebar" class="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full transition-transform duration-300 transform translate-x-0">…</div>
      - unexpected value "visible"
    8 × locator resolved to <aside tabindex="-1" role="complementary" aria-label="Detalles de Atención Omnicanal" data-testid="service-domain-detail-sidebar" class="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full transition-transform duration-300 transform translate-x-0 focus:outline-none">…</aside>
      - unexpected value "visible"

```

```yaml
- complementary "Detalles de Atención Omnicanal":
  - text: RAIA-SD-162 Service Domain
  - button "Cerrar panel"
  - heading "Atención Omnicanal" [level=2]
  - paragraph: Atención Omnicanal (English)
  - tablist "Secciones del Service Domain"
  - tabpanel
```