# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 3809

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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Áreas</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-3.items-center.flex:nth-child(1) > div:nth-child(2) > .tracking-wider.text-\\[9px\\].uppercase",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Dominios</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-3.items-center.flex:nth-child(2) > div:nth-child(2) > .tracking-wider.text-\\[9px\\].uppercase",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Servicios</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-3.items-center.flex:nth-child(3) > div:nth-child(2) > .tracking-wider.text-\\[9px\\].uppercase",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Relaciones</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-3.items-center.flex:nth-child(4) > div:nth-child(2) > .tracking-wider.text-\\[9px\\].uppercase",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs text-slate-400 font-medium\">Modelos semánticos, objetos conceptuales y el metamodelo unificado del SAR.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(1) > div:nth-child(1) > .font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-2xl...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-001</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-2xl...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-2xl...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-2xl...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-2xl...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-2xl...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-002</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-2xl...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-2xl...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-2xl...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-2xl...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-2xl...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-003</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-2xl...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-2xl...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-2xl...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-2xl...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-2xl...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-004</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-2xl...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-2xl...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-2xl...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-2xl...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-012</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs text-slate-400 font-medium\">Panoramas funcionales, matrices operativas y flujos visuales interactivos.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(2) > div:nth-child(1) > .font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-005</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-006</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-007</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-2xl...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs text-slate-400 font-medium\">Mapeo de interacciones complejas, secuencias y capacidades de negocio sectoriales.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(3) > div:nth-child(1) > .font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-008</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-009</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-2xl...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" ...>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-010</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" ...>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" ...>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" ...>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" ...>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-2xl...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-011</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-2xl...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-2xl...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-2xl...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-2xl...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-013</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs text-slate-400 font-medium\">Trazabilidad normativa, salud del repositorio y guías de contribución para la industria.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4:nth-child(4) > div:nth-child(1) > .font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-014</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-2xl...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-015</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-2xl...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-2xl...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-2xl...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-2xl...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-016</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-2",
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
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-extrabold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-017</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > div:nth-child(2) > .mt-0\\.5.block.tracking-wider",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Estado Valid.:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group h-auto text-left\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-4 > div:nth-child(2) > .pt-3.border-slate-100\\/80.space-y-1\\.5 > .gap-0\\.5.flex-col.flex > .text-slate-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfbf3",
+               "contrastRatio": 2.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e68d31",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.45 (foreground color: #e68d31, background color: #fbfbf3, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-amber-50/50 border border-amber-100 rounded-2xl p-6 flex gap-4\">",
+                 "target": Array [
+                   ".bg-amber-50\\/50",
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
+   Element has insufficient color contrast of 2.45 (foreground color: #e68d31, background color: #fbfbf3, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[10px] text-amber-600/80 leading-normal italic mt-1.5\">Inspirado en patrones de navegación y clasificación de BIAN Service Landscape 14.0.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-amber-600\\/80",
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
+           ".shrink-0.font-medium",
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
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "RAIA 0.1.0 Red de Arquitectura de Industria" [ref=e5] [cursor=pointer]:
          - /url: /
          - img [ref=e7]
          - generic [ref=e12]:
            - generic [ref=e13]:
              - generic [ref=e14]: RAIA
              - generic [ref=e15]: 0.1.0
            - generic [ref=e16]: Red de Arquitectura de Industria
        - generic [ref=e17]: Referencia
      - button "Buscar en el portal (Presione Control + K)" [ref=e19]:
        - generic [ref=e20]:
          - img [ref=e21]
          - generic [ref=e24]: Buscar en RAIA...
        - generic [ref=e25]:
          - generic [ref=e26]: Ctrl
          - generic [ref=e27]: K
      - navigation [ref=e28]:
        - link "Overview" [ref=e29] [cursor=pointer]:
          - /url: /
        - link "Service Landscape" [ref=e30] [cursor=pointer]:
          - /url: /service-landscape/value-chain
        - link "Scenarios" [ref=e31] [cursor=pointer]:
          - /url: /business-scenarios
        - button "Más" [ref=e33]:
          - text: Más
          - img [ref=e34]
  - main [ref=e36]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic:
          - img
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: RAIA Release 0.1.0
            - generic [ref=e43]: "Regulatory Baseline: 12 July 2026"
            - generic [ref=e44]: Reference Architecture
          - generic [ref=e45]:
            - heading "RAIA Architecture Overview Portal" [level=1] [ref=e46]
            - paragraph [ref=e47]: Arquitectura de referencia para la industria mexicana de ahorro para el retiro
          - paragraph [ref=e48]: Explore las capacidades, dominios, objetos, escenarios, regulaciones e interacciones que conforman el ecosistema del Sistema de Ahorro para el Retiro.
          - generic [ref=e49]:
            - link "Explorar Service Landscape" [ref=e50] [cursor=pointer]:
              - /url: /service-landscape/value-chain
              - text: Explorar Service Landscape
              - img [ref=e51]
            - link "Conocer Metodología" [ref=e53] [cursor=pointer]:
              - /url: /metamodel
              - text: Conocer Metodología
              - img [ref=e54]
            - link "Consultar Releases" [ref=e56] [cursor=pointer]:
              - /url: /releases
              - text: Consultar Releases
              - img [ref=e57]
          - button "Buscar en el portal (Presione Control + K)" [ref=e62]:
            - generic [ref=e63]:
              - img [ref=e64]
              - generic [ref=e67]: Buscar en RAIA...
            - generic [ref=e68]:
              - generic [ref=e69]: Ctrl
              - generic [ref=e70]: K
      - generic [ref=e71]:
        - generic [ref=e72]:
          - img [ref=e74]
          - generic [ref=e78]:
            - generic [ref=e79]: "11"
            - text: Áreas
        - generic [ref=e80]:
          - img [ref=e82]
          - generic [ref=e87]:
            - generic [ref=e88]: "34"
            - text: Dominios
        - generic [ref=e89]:
          - img [ref=e91]
          - generic [ref=e94]:
            - generic [ref=e95]: "273"
            - text: Servicios
        - generic [ref=e96]:
          - img [ref=e98]
          - generic [ref=e100]:
            - generic [ref=e101]: "41"
            - text: Relaciones
      - generic [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e104]:
            - heading "Sección 2 — Arquitectura de Referencia" [level=2] [ref=e105]
            - paragraph [ref=e106]: Modelos semánticos, objetos conceptuales y el metamodelo unificado del SAR.
          - generic [ref=e107]:
            - 'link "v0.1.0 Information Architecture RAIA-MOD-001 Estructura semántica, linaje y propiedad de la información en el SAR. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-003, RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e108] [cursor=pointer]':
              - /url: /information-architecture
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - img [ref=e112]
                  - generic [ref=e116]: v0.1.0
                - generic [ref=e117]:
                  - heading "Information Architecture" [level=3] [ref=e118]
                  - generic [ref=e119]: RAIA-MOD-001
                  - paragraph [ref=e120]: Estructura semántica, linaje y propiedad de la información en el SAR.
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - generic [ref=e123]: "Owner:"
                      - generic [ref=e124]: RAIA Maintainers
                    - generic [ref=e125]:
                      - generic [ref=e126]: "Estado Valid.:"
                      - generic [ref=e127]: pending-industry-review
                    - generic [ref=e128]:
                      - generic [ref=e129]: "Dependencias:"
                      - generic [ref=e130]: RAIA-MOD-003, RAIA-MOD-012
                    - generic [ref=e131]:
                      - generic [ref=e132]: "Roadmap:"
                      - generic [ref=e133]: "[object Object] → [object Object]"
              - generic [ref=e134]:
                - generic [ref=e135]: Planeado
                - generic [ref=e136]:
                  - text: Explorar
                  - img [ref=e137]
            - 'link "v0.1.0 Control Record Model RAIA-MOD-002 Definición del ciclo de vida y estado de los registros principales de control. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-003 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e139] [cursor=pointer]':
              - /url: /control-record-model
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - img [ref=e143]
                  - generic [ref=e146]: v0.1.0
                - generic [ref=e147]:
                  - heading "Control Record Model" [level=3] [ref=e148]
                  - generic [ref=e149]: RAIA-MOD-002
                  - paragraph [ref=e150]: Definición del ciclo de vida y estado de los registros principales de control.
                  - generic [ref=e151]:
                    - generic [ref=e152]:
                      - generic [ref=e153]: "Owner:"
                      - generic [ref=e154]: RAIA Maintainers
                    - generic [ref=e155]:
                      - generic [ref=e156]: "Estado Valid.:"
                      - generic [ref=e157]: pending-industry-review
                    - generic [ref=e158]:
                      - generic [ref=e159]: "Dependencias:"
                      - generic [ref=e160]: RAIA-MOD-003
                    - generic [ref=e161]:
                      - generic [ref=e162]: "Roadmap:"
                      - generic [ref=e163]: "[object Object] → [object Object]"
              - generic [ref=e164]:
                - generic [ref=e165]: Planeado
                - generic [ref=e166]:
                  - text: Explorar
                  - img [ref=e167]
            - 'link "v0.1.0 Business Object Model RAIA-MOD-003 Catálogo y diccionario de los objetos de negocio estructurados de la industria. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e169] [cursor=pointer]':
              - /url: /business-object-model
              - generic [ref=e170]:
                - generic [ref=e171]:
                  - img [ref=e173]
                  - generic [ref=e183]: v0.1.0
                - generic [ref=e184]:
                  - heading "Business Object Model" [level=3] [ref=e185]
                  - generic [ref=e186]: RAIA-MOD-003
                  - paragraph [ref=e187]: Catálogo y diccionario de los objetos de negocio estructurados de la industria.
                  - generic [ref=e188]:
                    - generic [ref=e189]:
                      - generic [ref=e190]: "Owner:"
                      - generic [ref=e191]: RAIA Maintainers
                    - generic [ref=e192]:
                      - generic [ref=e193]: "Estado Valid.:"
                      - generic [ref=e194]: pending-industry-review
                    - generic [ref=e195]:
                      - generic [ref=e196]: "Dependencias:"
                      - generic [ref=e197]: RAIA-MOD-012
                    - generic [ref=e198]:
                      - generic [ref=e199]: "Roadmap:"
                      - generic [ref=e200]: "[object Object] → [object Object]"
              - generic [ref=e201]:
                - generic [ref=e202]: Planeado
                - generic [ref=e203]:
                  - text: Explorar
                  - img [ref=e204]
            - 'link "v0.1.0 Industry Reference Model RAIA-MOD-004 Modelo integral de referencia de la arquitectura de la industria previsional. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005, RAIA-MOD-012 Roadmap: [object Object] Planeado Explorar" [ref=e206] [cursor=pointer]':
              - /url: /reference-model
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - img [ref=e210]
                  - generic [ref=e214]: v0.1.0
                - generic [ref=e215]:
                  - heading "Industry Reference Model" [level=3] [ref=e216]
                  - generic [ref=e217]: RAIA-MOD-004
                  - paragraph [ref=e218]: Modelo integral de referencia de la arquitectura de la industria previsional.
                  - generic [ref=e219]:
                    - generic [ref=e220]:
                      - generic [ref=e221]: "Owner:"
                      - generic [ref=e222]: RAIA Maintainers
                    - generic [ref=e223]:
                      - generic [ref=e224]: "Estado Valid.:"
                      - generic [ref=e225]: pending-industry-review
                    - generic [ref=e226]:
                      - generic [ref=e227]: "Dependencias:"
                      - generic [ref=e228]: RAIA-MOD-005, RAIA-MOD-012
                    - generic [ref=e229]:
                      - generic [ref=e230]: "Roadmap:"
                      - generic [ref=e231]: "[object Object]"
              - generic [ref=e232]:
                - generic [ref=e233]: Planeado
                - generic [ref=e234]:
                  - text: Explorar
                  - img [ref=e235]
            - 'link "v0.1.0 Metamodel Overview RAIA-MOD-012 Definiciones y relaciones formales de las entidades y conceptos que integran RAIA. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e237] [cursor=pointer]':
              - /url: /metamodel
              - generic [ref=e238]:
                - generic [ref=e239]:
                  - img [ref=e241]
                  - generic [ref=e243]: v0.1.0
                - generic [ref=e244]:
                  - heading "Metamodel Overview" [level=3] [ref=e245]
                  - generic [ref=e246]: RAIA-MOD-012
                  - paragraph [ref=e247]: Definiciones y relaciones formales de las entidades y conceptos que integran RAIA.
                  - generic [ref=e248]:
                    - generic [ref=e249]:
                      - generic [ref=e250]: "Owner:"
                      - generic [ref=e251]: RAIA Maintainers
                    - generic [ref=e252]:
                      - generic [ref=e253]: "Estado Valid.:"
                      - generic [ref=e254]: pending-industry-review
                    - generic [ref=e255]:
                      - generic [ref=e256]: "Roadmap:"
                      - generic [ref=e257]: "[object Object] → [object Object]"
              - generic [ref=e258]:
                - generic [ref=e259]: En Desarrollo
                - generic [ref=e260]:
                  - text: Explorar
                  - img [ref=e261]
        - generic [ref=e263]:
          - generic [ref=e264]:
            - heading "Sección 3 — Service Landscape" [level=2] [ref=e265]
            - paragraph [ref=e266]: Panoramas funcionales, matrices operativas y flujos visuales interactivos.
          - generic [ref=e267]:
            - 'link "v0.1.0 Service Landscape — Value Chain RAIA-MOD-005 Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-012, RAIA-MOD-015 Roadmap: [object Object] → [object Object] → [object Object] En Desarrollo Explorar" [ref=e268] [cursor=pointer]':
              - /url: /service-landscape/value-chain
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - img [ref=e272]
                  - generic [ref=e277]: v0.1.0
                - generic [ref=e278]:
                  - heading "Service Landscape — Value Chain" [level=3] [ref=e279]
                  - generic [ref=e280]: RAIA-MOD-005
                  - paragraph [ref=e281]: Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos.
                  - generic [ref=e282]:
                    - generic [ref=e283]:
                      - generic [ref=e284]: "Owner:"
                      - generic [ref=e285]: RAIA Maintainers
                    - generic [ref=e286]:
                      - generic [ref=e287]: "Estado Valid.:"
                      - generic [ref=e288]: pending-industry-review
                    - generic [ref=e289]:
                      - generic [ref=e290]: "Dependencias:"
                      - generic [ref=e291]: RAIA-MOD-012, RAIA-MOD-015
                    - generic [ref=e292]:
                      - generic [ref=e293]: "Roadmap:"
                      - generic [ref=e294]: "[object Object] → [object Object] → [object Object]"
              - generic [ref=e295]:
                - generic [ref=e296]: En Desarrollo
                - generic [ref=e297]:
                  - text: Explorar
                  - img [ref=e298]
            - 'link "v0.1.0 Service Landscape — Matrix RAIA-MOD-006 Vista bidimensional del paisaje combinando clasificaciones configurables. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e300] [cursor=pointer]':
              - /url: /service-landscape/matrix
              - generic [ref=e301]:
                - generic [ref=e302]:
                  - img [ref=e304]
                  - generic [ref=e306]: v0.1.0
                - generic [ref=e307]:
                  - heading "Service Landscape — Matrix" [level=3] [ref=e308]
                  - generic [ref=e309]: RAIA-MOD-006
                  - paragraph [ref=e310]: Vista bidimensional del paisaje combinando clasificaciones configurables.
                  - generic [ref=e311]:
                    - generic [ref=e312]:
                      - generic [ref=e313]: "Owner:"
                      - generic [ref=e314]: RAIA Maintainers
                    - generic [ref=e315]:
                      - generic [ref=e316]: "Estado Valid.:"
                      - generic [ref=e317]: pending-industry-review
                    - generic [ref=e318]:
                      - generic [ref=e319]: "Dependencias:"
                      - generic [ref=e320]: RAIA-MOD-005
                    - generic [ref=e321]:
                      - generic [ref=e322]: "Roadmap:"
                      - generic [ref=e323]: "[object Object]"
              - generic [ref=e324]:
                - generic [ref=e325]: Planeado
                - generic [ref=e326]:
                  - text: Explorar
                  - img [ref=e327]
            - 'link "v0.1.0 Service Landscape — Overview Diagrams RAIA-MOD-007 Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e329] [cursor=pointer]':
              - /url: /service-landscape/overview-diagrams
              - generic [ref=e330]:
                - generic [ref=e331]:
                  - img [ref=e333]
                  - generic [ref=e337]: v0.1.0
                - generic [ref=e338]:
                  - heading "Service Landscape — Overview Diagrams" [level=3] [ref=e339]
                  - generic [ref=e340]: RAIA-MOD-007
                  - paragraph [ref=e341]: Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales.
                  - generic [ref=e342]:
                    - generic [ref=e343]:
                      - generic [ref=e344]: "Owner:"
                      - generic [ref=e345]: RAIA Maintainers
                    - generic [ref=e346]:
                      - generic [ref=e347]: "Estado Valid.:"
                      - generic [ref=e348]: pending-industry-review
                    - generic [ref=e349]:
                      - generic [ref=e350]: "Dependencias:"
                      - generic [ref=e351]: RAIA-MOD-005
                    - generic [ref=e352]:
                      - generic [ref=e353]: "Roadmap:"
                      - generic [ref=e354]: "[object Object]"
              - generic [ref=e355]:
                - generic [ref=e356]: Planeado
                - generic [ref=e357]:
                  - text: Explorar
                  - img [ref=e358]
        - generic [ref=e360]:
          - generic [ref=e361]:
            - heading "Sección 4 — Escenarios y Capacidades" [level=2] [ref=e362]
            - paragraph [ref=e363]: Mapeo de interacciones complejas, secuencias y capacidades de negocio sectoriales.
          - generic [ref=e364]:
            - 'link "v0.1.0 Business Scenarios RAIA-MOD-008 Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e365] [cursor=pointer]':
              - /url: /business-scenarios
              - generic [ref=e366]:
                - generic [ref=e367]:
                  - img [ref=e369]
                  - generic [ref=e372]: v0.1.0
                - generic [ref=e373]:
                  - heading "Business Scenarios" [level=3] [ref=e374]
                  - generic [ref=e375]: RAIA-MOD-008
                  - paragraph [ref=e376]: Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains.
                  - generic [ref=e377]:
                    - generic [ref=e378]:
                      - generic [ref=e379]: "Owner:"
                      - generic [ref=e380]: RAIA Maintainers
                    - generic [ref=e381]:
                      - generic [ref=e382]: "Estado Valid.:"
                      - generic [ref=e383]: pending-industry-review
                    - generic [ref=e384]:
                      - generic [ref=e385]: "Dependencias:"
                      - generic [ref=e386]: RAIA-MOD-005
                    - generic [ref=e387]:
                      - generic [ref=e388]: "Roadmap:"
                      - generic [ref=e389]: "[object Object] → [object Object]"
              - generic [ref=e390]:
                - generic [ref=e391]: En Desarrollo
                - generic [ref=e392]:
                  - text: Explorar
                  - img [ref=e393]
            - 'link "v0.1.0 Scenario Snippets RAIA-MOD-009 Fragmentos reutilizables de interacción y lógica de servicio común. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar" [ref=e395] [cursor=pointer]':
              - /url: /business-scenarios/snippets
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - img [ref=e399]
                  - generic [ref=e402]: v0.1.0
                - generic [ref=e403]:
                  - heading "Scenario Snippets" [level=3] [ref=e404]
                  - generic [ref=e405]: RAIA-MOD-009
                  - paragraph [ref=e406]: Fragmentos reutilizables de interacción y lógica de servicio común.
                  - generic [ref=e407]:
                    - generic [ref=e408]:
                      - generic [ref=e409]: "Owner:"
                      - generic [ref=e410]: RAIA Maintainers
                    - generic [ref=e411]:
                      - generic [ref=e412]: "Estado Valid.:"
                      - generic [ref=e413]: pending-industry-review
                    - generic [ref=e414]:
                      - generic [ref=e415]: "Dependencias:"
                      - generic [ref=e416]: RAIA-MOD-008
                    - generic [ref=e417]:
                      - generic [ref=e418]: "Roadmap:"
                      - generic [ref=e419]: "[object Object]"
              - generic [ref=e420]:
                - generic [ref=e421]: Planeado
                - generic [ref=e422]:
                  - text: Explorar
                  - img [ref=e423]
            - 'link "v0.1.0 Business Capability Map RAIA-MOD-010 Estructura jerárquica de capacidades de negocio que posee la industria. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e425] [cursor=pointer]':
              - /url: /capability-map
              - generic [ref=e426]:
                - generic [ref=e427]:
                  - img [ref=e429]
                  - generic [ref=e431]: v0.1.0
                - generic [ref=e432]:
                  - heading "Business Capability Map" [level=3] [ref=e433]
                  - generic [ref=e434]: RAIA-MOD-010
                  - paragraph [ref=e435]: Estructura jerárquica de capacidades de negocio que posee la industria.
                  - generic [ref=e436]:
                    - generic [ref=e437]:
                      - generic [ref=e438]: "Owner:"
                      - generic [ref=e439]: RAIA Maintainers
                    - generic [ref=e440]:
                      - generic [ref=e441]: "Estado Valid.:"
                      - generic [ref=e442]: pending-industry-review
                    - generic [ref=e443]:
                      - generic [ref=e444]: "Dependencias:"
                      - generic [ref=e445]: RAIA-MOD-005
                    - generic [ref=e446]:
                      - generic [ref=e447]: "Roadmap:"
                      - generic [ref=e448]: "[object Object]"
              - generic [ref=e449]:
                - generic [ref=e450]: Planeado
                - generic [ref=e451]:
                  - text: Explorar
                  - img [ref=e452]
            - 'link "v0.1.0 Capability Views RAIA-MOD-011 Proyecciones específicas de capacidades de negocio filtradas por participante o regulación. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-010 Roadmap: [object Object] Planeado Explorar" [ref=e454] [cursor=pointer]':
              - /url: /capability-map/views
              - generic [ref=e455]:
                - generic [ref=e456]:
                  - img [ref=e458]
                  - generic [ref=e461]: v0.1.0
                - generic [ref=e462]:
                  - heading "Capability Views" [level=3] [ref=e463]
                  - generic [ref=e464]: RAIA-MOD-011
                  - paragraph [ref=e465]: Proyecciones específicas de capacidades de negocio filtradas por participante o regulación.
                  - generic [ref=e466]:
                    - generic [ref=e467]:
                      - generic [ref=e468]: "Owner:"
                      - generic [ref=e469]: RAIA Maintainers
                    - generic [ref=e470]:
                      - generic [ref=e471]: "Estado Valid.:"
                      - generic [ref=e472]: pending-industry-review
                    - generic [ref=e473]:
                      - generic [ref=e474]: "Dependencias:"
                      - generic [ref=e475]: RAIA-MOD-010
                    - generic [ref=e476]:
                      - generic [ref=e477]: "Roadmap:"
                      - generic [ref=e478]: "[object Object]"
              - generic [ref=e479]:
                - generic [ref=e480]: Planeado
                - generic [ref=e481]:
                  - text: Explorar
                  - img [ref=e482]
            - 'link "v0.1.0 Wireframes Overview RAIA-MOD-013 Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar" [ref=e484] [cursor=pointer]':
              - /url: /wireframes
              - generic [ref=e485]:
                - generic [ref=e486]:
                  - img [ref=e488]
                  - generic [ref=e490]: v0.1.0
                - generic [ref=e491]:
                  - heading "Wireframes Overview" [level=3] [ref=e492]
                  - generic [ref=e493]: RAIA-MOD-013
                  - paragraph [ref=e494]: Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR.
                  - generic [ref=e495]:
                    - generic [ref=e496]:
                      - generic [ref=e497]: "Owner:"
                      - generic [ref=e498]: RAIA Maintainers
                    - generic [ref=e499]:
                      - generic [ref=e500]: "Estado Valid.:"
                      - generic [ref=e501]: pending-industry-review
                    - generic [ref=e502]:
                      - generic [ref=e503]: "Dependencias:"
                      - generic [ref=e504]: RAIA-MOD-008
                    - generic [ref=e505]:
                      - generic [ref=e506]: "Roadmap:"
                      - generic [ref=e507]: "[object Object]"
              - generic [ref=e508]:
                - generic [ref=e509]: Planeado
                - generic [ref=e510]:
                  - text: Explorar
                  - img [ref=e511]
        - generic [ref=e513]:
          - generic [ref=e514]:
            - heading "Sección 5 — Regulación y Gobierno" [level=2] [ref=e515]
            - paragraph [ref=e516]: Trazabilidad normativa, salud del repositorio y guías de contribución para la industria.
          - generic [ref=e517]:
            - 'link "v0.1.0 Architecture Dashboard RAIA-MOD-014 Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e518] [cursor=pointer]':
              - /url: /dashboard
              - generic [ref=e519]:
                - generic [ref=e520]:
                  - img [ref=e522]
                  - generic [ref=e524]: v0.1.0
                - generic [ref=e525]:
                  - heading "Architecture Dashboard" [level=3] [ref=e526]
                  - generic [ref=e527]: RAIA-MOD-014
                  - paragraph [ref=e528]: Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura.
                  - generic [ref=e529]:
                    - generic [ref=e530]:
                      - generic [ref=e531]: "Owner:"
                      - generic [ref=e532]: RAIA Maintainers
                    - generic [ref=e533]:
                      - generic [ref=e534]: "Estado Valid.:"
                      - generic [ref=e535]: pending-industry-review
                    - generic [ref=e536]:
                      - generic [ref=e537]: "Roadmap:"
                      - generic [ref=e538]: "[object Object] → [object Object]"
              - generic [ref=e539]:
                - generic [ref=e540]: En Desarrollo
                - generic [ref=e541]:
                  - text: Explorar
                  - img [ref=e542]
            - 'link "v0.1.0 Regulatory Architecture RAIA-MOD-015 Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e544] [cursor=pointer]':
              - /url: /regulatory-architecture
              - generic [ref=e545]:
                - generic [ref=e546]:
                  - img [ref=e548]
                  - generic [ref=e552]: v0.1.0
                - generic [ref=e553]:
                  - heading "Regulatory Architecture" [level=3] [ref=e554]
                  - generic [ref=e555]: RAIA-MOD-015
                  - paragraph [ref=e556]: Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains.
                  - generic [ref=e557]:
                    - generic [ref=e558]:
                      - generic [ref=e559]: "Owner:"
                      - generic [ref=e560]: RAIA Maintainers
                    - generic [ref=e561]:
                      - generic [ref=e562]: "Estado Valid.:"
                      - generic [ref=e563]: pending-industry-review
                    - generic [ref=e564]:
                      - generic [ref=e565]: "Dependencias:"
                      - generic [ref=e566]: RAIA-MOD-005
                    - generic [ref=e567]:
                      - generic [ref=e568]: "Roadmap:"
                      - generic [ref=e569]: "[object Object]"
              - generic [ref=e570]:
                - generic [ref=e571]: Planeado
                - generic [ref=e572]:
                  - text: Explorar
                  - img [ref=e573]
            - 'link "v0.1.0 RAIA Releases RAIA-MOD-016 Historial de versiones de la arquitectura de referencia, changelog y notas de migración. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Roadmap: [object Object] En Desarrollo Explorar" [ref=e575] [cursor=pointer]':
              - /url: /releases
              - generic [ref=e576]:
                - generic [ref=e577]:
                  - img [ref=e579]
                  - generic [ref=e583]: v0.1.0
                - generic [ref=e584]:
                  - heading "RAIA Releases" [level=3] [ref=e585]
                  - generic [ref=e586]: RAIA-MOD-016
                  - paragraph [ref=e587]: Historial de versiones de la arquitectura de referencia, changelog y notas de migración.
                  - generic [ref=e588]:
                    - generic [ref=e589]:
                      - generic [ref=e590]: "Owner:"
                      - generic [ref=e591]: RAIA Maintainers
                    - generic [ref=e592]:
                      - generic [ref=e593]: "Estado Valid.:"
                      - generic [ref=e594]: pending-industry-review
                    - generic [ref=e595]:
                      - generic [ref=e596]: "Roadmap:"
                      - generic [ref=e597]: "[object Object]"
              - generic [ref=e598]:
                - generic [ref=e599]: En Desarrollo
                - generic [ref=e600]:
                  - text: Explorar
                  - img [ref=e601]
            - 'link "v0.1.0 Contribution and Governance RAIA-MOD-017 Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia. Owner: RAIA Maintainers Estado Valid.: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e603] [cursor=pointer]':
              - /url: /contribute
              - generic [ref=e604]:
                - generic [ref=e605]:
                  - img [ref=e607]
                  - generic [ref=e612]: v0.1.0
                - generic [ref=e613]:
                  - heading "Contribution and Governance" [level=3] [ref=e614]
                  - generic [ref=e615]: RAIA-MOD-017
                  - paragraph [ref=e616]: Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia.
                  - generic [ref=e617]:
                    - generic [ref=e618]:
                      - generic [ref=e619]: "Owner:"
                      - generic [ref=e620]: RAIA Maintainers
                    - generic [ref=e621]:
                      - generic [ref=e622]: "Estado Valid.:"
                      - generic [ref=e623]: pending-industry-review
                    - generic [ref=e624]:
                      - generic [ref=e625]: "Roadmap:"
                      - generic [ref=e626]: "[object Object] → [object Object]"
              - generic [ref=e627]:
                - generic [ref=e628]: En Desarrollo
                - generic [ref=e629]:
                  - text: Explorar
                  - img [ref=e630]
      - generic [ref=e632]:
        - generic [ref=e633]:
          - img [ref=e634]
          - heading "Cambios Recientes (Release 0.1.0)" [level=3] [ref=e638]
        - list [ref=e639]:
          - listitem [ref=e640]: Definición inicial del metamodelo conceptual de arquitectura RAIA.
          - listitem [ref=e642]: Carga de datos maestros correspondientes a las 11 Áreas de Negocio de la cadena de valor.
          - listitem [ref=e644]: Registro de 34 Dominios de Negocio y 273 Service Domains.
        - link "Ver historial completo de cambios →" [ref=e646] [cursor=pointer]:
          - /url: /releases
      - generic [ref=e647]:
        - img [ref=e648]
        - generic [ref=e650]:
          - generic [ref=e651]: Aviso de Neutralidad y Propósito
          - paragraph [ref=e652]: RAIA es una arquitectura de referencia propuesta. No sustituye leyes, reglamentos, disposiciones, criterios, manuales, publicaciones oficiales ni asesoría legal, actuarial, financiera, operativa o regulatoria especializada.
          - paragraph [ref=e653]: Inspirado en patrones de navegación y clasificación de BIAN Service Landscape 14.0.
  - contentinfo [ref=e654]:
    - generic [ref=e655]:
      - paragraph [ref=e656]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e657]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e663] [cursor=pointer]:
    - generic [ref=e666]:
      - text: Compiling
      - generic [ref=e667]:
        - generic [ref=e668]: .
        - generic [ref=e669]: .
        - generic [ref=e670]: .
  - alert [ref=e671]
```