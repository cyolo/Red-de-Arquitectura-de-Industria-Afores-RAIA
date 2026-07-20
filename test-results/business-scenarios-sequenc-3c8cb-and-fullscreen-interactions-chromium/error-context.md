# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\sequence-diagram.spec.ts >> RAIA Sequence Diagram Engine >> RAIA-BS-E2E-018, 019, 020, 021, 022: Validate zoom, fit, reset, and fullscreen interactions
- Location: tests\e2e\business-scenarios\sequence-diagram.spec.ts:24:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [active]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - navigation [ref=e7]:
            - button "previous" [disabled] [ref=e8]:
              - img "previous" [ref=e9]
            - generic [ref=e11]:
              - generic [ref=e12]: 1/
              - text: "1"
            - button "next" [disabled] [ref=e13]:
              - img "next" [ref=e14]
          - img
        - generic [ref=e16]:
          - generic [ref=e17]:
            - img [ref=e18]
            - generic "Latest available version is detected (16.2.10)." [ref=e20]: Next.js 16.2.10
            - generic [ref=e21]: Turbopack
          - img
      - dialog "Runtime ReferenceError" [ref=e23]:
        - generic [ref=e26]:
          - generic [ref=e27]:
            - generic [ref=e28]:
              - generic [ref=e30]: Runtime ReferenceError
              - generic [ref=e31]:
                - button "Copy Error Info" [ref=e32] [cursor=pointer]:
                  - img [ref=e33]
                - button "No related documentation found" [disabled] [ref=e35]:
                  - img [ref=e36]
                - button "Attach Node.js inspector" [ref=e38] [cursor=pointer]:
                  - img [ref=e39]
            - generic [ref=e48]: isFullscreenSupported is not defined
          - generic [ref=e49]:
            - generic [ref=e50]:
              - paragraph [ref=e52]:
                - img [ref=e54]
                - generic [ref=e57]: src\app\business-scenarios\page.tsx (10:10) @ BusinessScenariosPage
                - button "Open in editor" [ref=e58] [cursor=pointer]:
                  - img [ref=e60]
              - generic [ref=e63]:
                - generic [ref=e64]: 8 |
                - generic [ref=e65]: "9 | export default function BusinessScenariosPage() {"
                - generic [ref=e66]: "> 10 | return <BusinessScenariosClient />;"
                - generic [ref=e67]: "| ^"
                - generic [ref=e68]: "11 | }"
                - generic [ref=e69]: 12 |
            - generic [ref=e70]:
              - paragraph [ref=e72]:
                - text: Call Stack
                - generic [ref=e73]: "16"
              - generic [ref=e74]:
                - generic [ref=e75]:
                  - text: RaiaSequenceDiagram
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e76] [cursor=pointer]:
                    - img [ref=e77]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/src_1qjbl69._.js (1727:50)
              - generic [ref=e79]:
                - generic [ref=e80]:
                  - text: Object.react_stack_bottom_frame
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e81] [cursor=pointer]:
                    - img [ref=e82]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (15037:24)
              - generic [ref=e84]:
                - generic [ref=e85]:
                  - text: renderWithHooks
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e86] [cursor=pointer]:
                    - img [ref=e87]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (4620:24)
              - generic [ref=e89]:
                - generic [ref=e90]:
                  - text: updateFunctionComponent
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e91] [cursor=pointer]:
                    - img [ref=e92]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (6081:21)
              - generic [ref=e94]:
                - generic [ref=e95]:
                  - text: beginWork
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e96] [cursor=pointer]:
                    - img [ref=e97]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (6691:24)
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - text: runWithFiberInDEV
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e101] [cursor=pointer]:
                    - img [ref=e102]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (965:74)
              - generic [ref=e104]:
                - generic [ref=e105]:
                  - text: performUnitOfWork
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e106] [cursor=pointer]:
                    - img [ref=e107]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (9555:97)
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - text: workLoopSync
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e111] [cursor=pointer]:
                    - img [ref=e112]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (9449:40)
              - generic [ref=e114]:
                - generic [ref=e115]:
                  - text: renderRootSync
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e116] [cursor=pointer]:
                    - img [ref=e117]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (9433:13)
              - generic [ref=e119]:
                - generic [ref=e120]:
                  - text: performWorkOnRoot
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e121] [cursor=pointer]:
                    - img [ref=e122]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (9098:47)
              - generic [ref=e124]:
                - generic [ref=e125]:
                  - text: performSyncWorkOnRoot
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e126] [cursor=pointer]:
                    - img [ref=e127]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (10263:9)
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - text: flushSyncWorkAcrossRoots_impl
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e131] [cursor=pointer]:
                    - img [ref=e132]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (10179:316)
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - text: processRootScheduleInMicrotask
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e136] [cursor=pointer]:
                    - img [ref=e137]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (10200:106)
              - generic [ref=e139]:
                - generic [ref=e140]:
                  - text: <unknown>
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e141] [cursor=pointer]:
                    - img [ref=e142]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_096_9a-._.js (10274:158)
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - text: BusinessScenariosClient
                  - button "Sourcemapping failed. Click to log cause of error." [ref=e146] [cursor=pointer]:
                    - img [ref=e147]
                - text: file:///C:/Users/cesar/.gemini/antigravity/scratch/Red%20de%20Arquitectura%20de%20Industria%20Afores%20(RAIA)/.next/dev/static/chunks/src_1qjbl69._.js (4268:273)
              - generic [ref=e149]:
                - generic [ref=e150]:
                  - text: BusinessScenariosPage
                  - button "Open BusinessScenariosPage in editor" [ref=e151] [cursor=pointer]:
                    - img [ref=e152]
                - text: src\app\business-scenarios\page.tsx (10:10)
        - generic [ref=e154]: "1"
        - generic [ref=e155]: "2"
    - generic [ref=e160] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=e161]:
        - img [ref=e162]
      - generic [ref=e165]:
        - button "Open issues overlay" [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e168]: "0"
            - generic [ref=e169]: "1"
          - generic [ref=e170]: Issue
        - button "Collapse issues badge" [ref=e171]:
          - img [ref=e172]
  - generic [ref=e175]:
    - img [ref=e176]
    - heading "This page couldn’t load" [level=1] [ref=e178]
    - paragraph [ref=e179]: Reload to try again, or go back.
    - generic [ref=e180]:
      - button "Reload" [ref=e182] [cursor=pointer]
      - button "Back" [ref=e183] [cursor=pointer]
```