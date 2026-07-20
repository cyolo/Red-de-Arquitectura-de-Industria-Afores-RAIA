# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global\navigation.spec.ts >> Global Navigation >> RAIA-GLO-014: Validate 404 page
- Location: tests\e2e\global\navigation.spec.ts:51:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 500
```

# Page snapshot

```yaml
- generic:
  - generic [active]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - navigation [ref=e6]:
          - button "previous" [disabled] [ref=e7]:
            - img "previous" [ref=e8]
          - generic [ref=e10]:
            - generic [ref=e11]: 1/
            - text: "1"
          - button "next" [disabled] [ref=e12]:
            - img "next" [ref=e13]
        - generic [ref=e16]:
          - img [ref=e17]
          - generic "Latest available version is detected (16.2.10)." [ref=e19]: Next.js 16.2.10
          - generic [ref=e20]: Turbopack
      - dialog "Build Error" [ref=e22]:
        - generic [ref=e25]:
          - generic [ref=e26]:
            - generic [ref=e27]:
              - generic [ref=e29]: Build Error
              - generic [ref=e30]:
                - button "Copy Error Info" [ref=e31] [cursor=pointer]:
                  - img [ref=e32]
                - button "No related documentation found" [disabled] [ref=e34]:
                  - img [ref=e35]
                - button "Attach Node.js inspector" [ref=e37] [cursor=pointer]:
                  - img [ref=e38]
            - generic [ref=e47]: Expected '</', got 'jsx text'
          - generic [ref=e49]:
            - generic [ref=e51]:
              - img [ref=e53]
              - generic [ref=e56]: ./src/components/layout/BusinessScenariosClient.tsx (294:19)
              - button "Open in editor" [ref=e57] [cursor=pointer]:
                - img [ref=e59]
            - generic [ref=e62]:
              - generic [ref=e63]: Expected '</', got 'jsx text'
              - generic [ref=e64]: 292 |
              - generic [ref=e65]: 293 |
              - generic [ref=e66]: </div>
              - text: ">"
              - generic [ref=e67]: 294 |
              - generic [ref=e68]: </aside>
              - generic [ref=e69]: "|"
              - text: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ >
              - generic [ref=e70]: 295 |
              - generic [ref=e71]: "|"
              - text: ^ >
              - generic [ref=e72]: 296 |
              - generic [ref=e73]: </div>
              - generic [ref=e74]: "|"
              - text: ^^^^^^^^
              - generic [ref=e75]: 297 |
              - generic [ref=e76]: ")}"
              - generic [ref=e77]: 298 |
              - generic [ref=e78]: </div>
              - generic [ref=e79]: 299 |
              - generic [ref=e80]: "); Parsing ecmascript source code failed Import trace: Server Component: ./src/components/layout/BusinessScenariosClient.tsx ./src/app/business-scenarios/page.tsx"
        - generic [ref=e81]: "1"
        - generic [ref=e82]: "2"
    - generic [ref=e87] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=e88]:
        - img [ref=e89]
      - button "Open issues overlay" [ref=e93]:
        - generic [ref=e94]:
          - generic [ref=e95]: "0"
          - generic [ref=e96]: "1"
        - generic [ref=e97]: Issue
  - alert [ref=e98]
```