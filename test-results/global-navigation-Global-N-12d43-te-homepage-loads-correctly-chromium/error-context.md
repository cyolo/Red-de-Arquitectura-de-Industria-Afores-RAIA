# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global\navigation.spec.ts >> Global Navigation >> RAIA-GLO-001: Validate homepage loads correctly
- Location: tests\e2e\global\navigation.spec.ts:4:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Red de Arquitectura"
Received string:    "RAIA Architecture Overview Portal"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')
    14 × locator resolved to <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">RAIA Architecture Overview Portal</h1>
       - unexpected value "RAIA Architecture Overview Portal"

```

```yaml
- heading "RAIA Architecture Overview Portal" [level=1]
```