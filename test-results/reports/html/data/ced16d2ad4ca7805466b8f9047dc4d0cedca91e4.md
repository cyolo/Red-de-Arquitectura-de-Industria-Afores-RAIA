# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: metamodel\metamodel.spec.ts >> RAIA Metamodel Overview Page >> RAIA-META-001 & 002: Validate page load and header title
- Location: tests\e2e\metamodel\metamodel.spec.ts:8:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('metamodel-overview')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('metamodel-overview')

```

```yaml
- navigation:
  - button "previous" [disabled]:
    - img "previous"
  - text: 1/1
  - button "next" [disabled]:
    - img "next"
- img
- text: Next.js 16.2.10 Turbopack
- dialog "Build Error":
  - text: Build Error
  - button "Copy Error Info":
    - img
  - button "No related documentation found" [disabled]:
    - img
  - button "Attach Node.js inspector":
    - img
  - text: Expected '</', got 'jsx text'
  - img
  - text: ./src/components/layout/BusinessScenariosClient.tsx (294:19)
  - button "Open in editor":
    - img
  - text: "Expected '</', got 'jsx text' 292 | 293 | </div> > 294 | </aside> | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ > 295 | | ^ > 296 | </div> | ^^^^^^^^ 297 | )} 298 | </div> 299 | ); Parsing ecmascript source code failed Import trace: Server Component: ./src/components/layout/BusinessScenariosClient.tsx ./src/app/business-scenarios/page.tsx"
- button "Open Next.js Dev Tools":
  - img
- button "Open issues overlay": 1 Issue
- alert
```