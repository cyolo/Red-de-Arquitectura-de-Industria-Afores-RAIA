# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /dashboard
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 485

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6\">",
+                 "target": Array [
+                   ".md\\:p-8",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5\">Vigencia del Baseline Regulatorio: <!-- -->2026-07-12<!-- --> • Último Análisis: <!-- -->2026-07-12</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div:nth-child(2) > p",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3f8fd",
+               "contrastRatio": 3.26,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#4d84fc",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.26 (foreground color: #4d84fc, background color: #f3f8fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"business-areas-total\" data-metric-value=\"11\" class=\"p-5 rounded-xl border flex flex-col justify-between text-blue-600 border-blue-100 bg-blue-50/50 shadow-xs\">",
+                 "target": Array [
+                   "div[data-metric-id=\"business-areas-total\"]",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.26 (foreground color: #4d84fc, background color: #f3f8fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Áreas de Negocio</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-metric-id=\"business-areas-total\"] > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f4fcfb",
+               "contrastRatio": 2.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3db0a6",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #3db0a6, background color: #f4fcfb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"business-domains-total\" data-metric-value=\"34\" class=\"p-5 rounded-xl border flex flex-col justify-between text-teal-600 border-teal-100 bg-teal-50/50 shadow-xs\">",
+                 "target": Array [
+                   ".text-teal-600",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.53 (foreground color: #3db0a6, background color: #f4fcfb, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Dominios de Negocio</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-teal-600 > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f2fbf8",
+               "contrastRatio": 2.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3cb18a",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #3cb18a, background color: #f2fbf8, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"service-domains-total\" data-metric-value=\"273\" class=\"p-5 rounded-xl border flex flex-col justify-between text-emerald-600 border-emerald-100 bg-emerald-50/50 shadow-xs\">",
+                 "target": Array [
+                   ".text-emerald-600",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.53 (foreground color: #3cb18a, background color: #f2fbf8, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Service Domains</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-emerald-600 > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3f6fd",
+               "contrastRatio": 3.78,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#7868f8",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.78 (foreground color: #7868f8, background color: #f3f6fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"relations-total\" data-metric-value=\"41\" class=\"p-5 rounded-xl border flex flex-col justify-between text-indigo-600 border-indigo-100 bg-indigo-50/50 shadow-xs\">",
+                 "target": Array [
+                   ".text-indigo-600",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.78 (foreground color: #7868f8, background color: #f3f6fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Relaciones Lógicas</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-indigo-600 > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f8fd",
+               "contrastRatio": 3.8,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#b04afb",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.8 (foreground color: #b04afb, background color: #f9f8fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"scenarios-total\" data-metric-value=\"18\" class=\"p-5 rounded-xl border flex flex-col justify-between text-purple-600 border-purple-100 bg-purple-50/50 shadow-xs\">",
+                 "target": Array [
+                   ".text-purple-600",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.8 (foreground color: #b04afb, background color: #f9f8fd, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Escenarios del SAR</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-purple-600 > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfbf3",
+               "contrastRatio": 2.31,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e8943d",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.31 (foreground color: #e8943d, background color: #fbfbf3, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"regulations-total\" data-metric-value=\"3\" class=\"p-5 rounded-xl border flex flex-col justify-between text-amber-600 border-amber-100 bg-amber-50/50 shadow-xs\">",
+                 "target": Array [
+                   "div[data-metric-id=\"regulations-total\"]",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.31 (foreground color: #e8943d, background color: #fbfbf3, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Regulaciones Mapeadas</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-metric-id=\"regulations-total\"] > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#faf6fa",
+               "contrastRatio": 3.46,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eb3e97",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.46 (foreground color: #eb3e97, background color: #faf6fa, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-testid=\"dashboard-metric\" data-metric-id=\"controls-total\" data-metric-value=\"275\" class=\"p-5 rounded-xl border flex flex-col justify-between text-pink-600 border-pink-100 bg-pink-50/50 shadow-xs\">",
+                 "target": Array [
+                   ".text-pink-600",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.46 (foreground color: #eb3e97, background color: #faf6fa, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold uppercase tracking-wider opacity-75\">Controles Arquitectónicos</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-pink-600 > .opacity-75.tracking-wider.text-\\[10px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between\">",
+                 "target": Array [
+                   ".rounded-2xl.p-6.bg-white:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2\">Estado Editorial</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-2xl.p-6.bg-white:nth-child(1) > div:nth-child(1) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between\">",
+                 "target": Array [
+                   ".grid-cols-1 > .rounded-2xl.p-6.bg-white:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2\">Madurez de los Dominios</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-2xl.p-6.bg-white:nth-child(2) > div:nth-child(1) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-sm\">",
+                 "target": Array [
+                   ".rounded-2xl.p-6.bg-white:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-1.5\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-2xl.p-6.bg-white:nth-child(3) > h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0f172b",
+               "contrastRatio": 3.74,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.74 (foreground color: #62748e, background color: #0f172b, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"no-print bg-slate-900 border-t border-slate-800 text-slate-400 py-3.5 px-4 md:px-6\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.74 (foreground color: #62748e, background color: #0f172b, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[10px] text-slate-500 shrink-0 font-medium\">RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center > p:nth-child(2)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Saltar al contenido principal" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "RAIA 0.1.0" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e14]:
          - generic [ref=e15]: RAIA
          - generic [ref=e16]: 0.1.0
      - generic [ref=e17]:
        - button "Buscar en el portal (Presione Control + K)" [ref=e18]:
          - generic [ref=e19]:
            - img [ref=e20]
            - generic [ref=e23]: Buscar en RAIA...
        - button "Abrir menú" [ref=e24]:
          - img [ref=e25]
  - main [ref=e26]:
    - generic [ref=e28]:
      - link "Volver al Portal Principal" [ref=e29] [cursor=pointer]:
        - /url: /
        - img [ref=e30]
        - text: Volver al Portal Principal
      - generic [ref=e32]:
        - generic [ref=e33]:
          - img [ref=e35]
          - generic [ref=e37]:
            - heading "RAIA Architecture Dashboard" [level=1] [ref=e38]
            - paragraph [ref=e39]: "Vigencia del Baseline Regulatorio: 2026-07-12 • Último Análisis: 2026-07-12"
        - generic [ref=e40]:
          - link "Ver Value Chain" [ref=e41] [cursor=pointer]:
            - /url: /service-landscape/value-chain
            - img [ref=e42]
            - text: Ver Value Chain
          - link "Ver Metamodelo" [ref=e45] [cursor=pointer]:
            - /url: /metamodel
            - img [ref=e46]
            - text: Ver Metamodelo
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Áreas de Negocio
          - generic [ref=e51]: "11"
        - generic [ref=e52]:
          - generic [ref=e53]: Dominios de Negocio
          - generic [ref=e54]: "34"
        - generic [ref=e55]:
          - generic [ref=e56]: Service Domains
          - generic [ref=e57]: "273"
        - generic [ref=e58]:
          - generic [ref=e59]: Relaciones Lógicas
          - generic [ref=e60]: "41"
        - generic [ref=e61]:
          - generic [ref=e62]: Escenarios del SAR
          - generic [ref=e63]: "18"
        - generic [ref=e64]:
          - generic [ref=e65]: Regulaciones Mapeadas
          - generic [ref=e66]: "3"
        - generic [ref=e67]:
          - generic [ref=e68]: Controles Arquitectónicos
          - generic [ref=e69]: "275"
        - generic [ref=e70]:
          - generic [ref=e71]: Objetos de Negocio
          - generic [ref=e72]: "276"
      - generic [ref=e73]:
        - generic [ref=e74]:
          - generic [ref=e75]:
            - heading "Estado Editorial" [level=3] [ref=e76]
            - generic [ref=e77]:
              - generic [ref=e78]:
                - generic [ref=e79]: Active (Activo)
                - generic [ref=e81]: "0"
              - generic [ref=e82]:
                - generic [ref=e83]: Validated (Validado)
                - generic [ref=e85]: "0"
              - generic [ref=e86]:
                - generic [ref=e87]: Proposed (Propuesto)
                - generic [ref=e89]: "273"
              - generic [ref=e90]:
                - generic [ref=e91]: Draft (Borrador)
                - generic [ref=e93]: "0"
              - generic [ref=e94]:
                - generic [ref=e95]: Deprecated (Deprecado)
                - generic [ref=e97]: "0"
          - generic [ref=e99]:
            - generic [ref=e100]: Avance de Validación
            - generic [ref=e101]: 0%
        - generic [ref=e103]:
          - generic [ref=e104]:
            - heading "Madurez de los Dominios" [level=3] [ref=e105]
            - generic [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]: Adopted (Adoptado)
                - generic [ref=e110]: "0"
              - generic [ref=e111]:
                - generic [ref=e112]: Validated (Validado)
                - generic [ref=e114]: "0"
              - generic [ref=e115]:
                - generic [ref=e116]: Defined (Definido)
                - generic [ref=e118]: "0"
              - generic [ref=e119]:
                - generic [ref=e120]: Conceptual (Borrador)
                - generic [ref=e122]: "273"
          - generic [ref=e124]:
            - generic [ref=e125]: Completitud de Atributos
            - generic [ref=e126]: 78%
        - generic [ref=e129]:
          - heading "Anomalías de Cobertura" [level=3] [ref=e130]:
            - img [ref=e131]
            - text: Anomalías de Cobertura
          - generic [ref=e133]:
            - generic [ref=e134]:
              - img [ref=e135]
              - generic [ref=e137]:
                - generic [ref=e138]: Dominios sin Regulación
                - generic [ref=e139]: 0 dominios no tienen leyes o circulares de CONSAR/IMSS vinculadas.
            - generic [ref=e140]:
              - img [ref=e141]
              - generic [ref=e143]:
                - generic [ref=e144]: Dominios sin Relaciones
                - generic [ref=e145]: 230 dominios se encuentran aislados (sin flujos entrantes o salientes).
            - generic [ref=e146]:
              - img [ref=e147]
              - generic [ref=e149]:
                - generic [ref=e150]: Pendientes de Validación
                - generic [ref=e151]: 273 dominios están clasificados en estado borrador o propuesto.
  - contentinfo [ref=e152]:
    - generic [ref=e153]:
      - paragraph [ref=e154]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e155]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e161] [cursor=pointer]:
    - img [ref=e162]
  - alert [ref=e165]
```