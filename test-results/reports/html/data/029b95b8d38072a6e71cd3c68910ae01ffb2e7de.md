# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: value-chain\value-chain.spec.ts >> RAIA Service Landscape — Value Chain Map >> RAIA-VC-006 to 012: Validate selects filtering, combinations and clearing
- Location: tests\e2e\value-chain\value-chain.spec.ts:25:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('value-chain-result-count')
Expected substring: "37 / 273"
Received string:    "273 / 273"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByTestId('value-chain-result-count')
    13 × locator resolved to <span data-testid="value-chain-result-count" class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">…</span>
       - unexpected value "273 / 273"

```

```yaml
- text: 273 / 273
```