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
+ Received  + 3739

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
+                 "html": "<div class=\"bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 uppercase tracking-wider\">Áreas de Negocio</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2.items-center.flex:nth-child(1) > div:nth-child(2) > .tracking-wider.uppercase.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 uppercase tracking-wider\">Dominios</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2.items-center.flex:nth-child(2) > div:nth-child(2) > .tracking-wider.uppercase.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 uppercase tracking-wider\">Servicios (SD)</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2.items-center.flex:nth-child(3) > div:nth-child(2) > .tracking-wider.uppercase.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4\">",
+                 "target": Array [
+                   ".grid-cols-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 uppercase tracking-wider\">Relaciones</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-2.items-center.flex:nth-child(4) > div:nth-child(2) > .tracking-wider.uppercase.text-\\[9px\\]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f1f5f9",
+               "contrastRatio": 4.34,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"ml-1 px-1 py-0.2 text-[9px] rounded-full bg-slate-100 text-slate-500 group-aria-selected:bg-slate-800 group-aria-selected:text-white\">17</span>",
+                 "target": Array [
+                   ".border-slate-900 > .ml-1.bg-slate-100.group-aria-selected\\:bg-slate-800",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"ml-1 px-1 py-0.2 text-[9px] rounded-full bg-slate-100 text-slate-500 group-aria-selected:bg-slate-800 group-aria-selected:text-white\">17</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-slate-900 > .ml-1.bg-slate-100.group-aria-selected\\:bg-slate-800",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-xl ...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-001</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-xl ...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-xl ...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-xl ...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-001\" data-module-route=\"/information-archite...\" class=\"bg-white rounded-xl ...\" href=\"/information-archite...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-001\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-xl ...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-002</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-xl ...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-xl ...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-xl ...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-002\" data-module-route=\"/control-record-mode...\" class=\"bg-white rounded-xl ...\" href=\"/control-record-mode...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-002\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-xl ...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-003</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-xl ...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-xl ...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-xl ...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-003\" data-module-route=\"/business-object-mod...\" class=\"bg-white rounded-xl ...\" href=\"/business-object-mod...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-003\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-xl ...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-004</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-xl ...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-xl ...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-xl ...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-004\" data-module-route=\"/reference-model\" class=\"bg-white rounded-xl ...\" href=\"/reference-model\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-004\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-005</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-005\" data-module-route=\"/service-landscape/v...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/v...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-005\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-006</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-006\" data-module-route=\"/service-landscape/m...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/m...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-006\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-007</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-007\" data-module-route=\"/service-landscape/o...\" class=\"bg-white rounded-xl ...\" href=\"/service-landscape/o...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-007\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-008</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-008\" data-module-route=\"/business-scenarios\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-008\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-009</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-009\" data-module-route=\"/business-scenarios/...\" class=\"bg-white rounded-xl ...\" href=\"/business-scenarios/...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-009\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-xl ...\" href=\"/capability-map\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-010</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-xl ...\" href=\"/capability-map\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-xl ...\" href=\"/capability-map\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-xl ...\" href=\"/capability-map\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-010\" data-module-route=\"/capability-map\" class=\"bg-white rounded-xl ...\" href=\"/capability-map\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-010\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-xl ...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-011</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-xl ...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-xl ...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-xl ...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-011\" data-module-route=\"/capability-map/view...\" class=\"bg-white rounded-xl ...\" href=\"/capability-map/view...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-011\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-xl ...\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-012</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-xl ...\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-xl ...\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-012\" data-module-route=\"/metamodel\" class=\"bg-white rounded-xl ...\" href=\"/metamodel\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-012\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-xl ...\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-013</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-xl ...\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-xl ...\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-xl ...\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-013\" data-module-route=\"/wireframes\" class=\"bg-white rounded-xl ...\" href=\"/wireframes\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-013\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-xl ...\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-014</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-xl ...\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-xl ...\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-014\" data-module-route=\"/dashboard\" class=\"bg-white rounded-xl ...\" href=\"/dashboard\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-014\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-xl ...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-015</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-xl ...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-xl ...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-xl ...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Dependencias:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(3) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-015\" data-module-route=\"/regulatory-architec...\" class=\"bg-white rounded-xl ...\" href=\"/regulatory-architec...\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-015\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex:nth-child(4) > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-xl ...\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-016</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-xl ...\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-xl ...\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-016\" data-module-route=\"/releases\" class=\"bg-white rounded-xl ...\" href=\"/releases\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-016\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex > .text-slate-400",
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
+                 "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[9px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60\">v<!-- -->0.1.0</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > .justify-between.items-center.flex > .border-slate-200\\/60.bg-slate-50.px-1\\.5",
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
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-xl ...\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block mt-0.5\">RAIA-MOD-017</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > div:nth-child(2) > .font-mono.mt-0\\.5.text-\\[8px\\]",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-xl ...\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Owner:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(1) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-xl ...\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Validación:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .justify-between.flex:nth-child(2) > .text-slate-400",
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
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a data-testid=\"portal-module-card\" data-module-id=\"RAIA-MOD-017\" data-module-route=\"/contribute\" class=\"bg-white rounded-xl ...\" href=\"/contribute\">",
+                 "target": Array [
+                   "a[data-module-id=\"RAIA-MOD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-slate-400\">Roadmap:</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[data-module-id=\"RAIA-MOD-017\"] > .space-y-3 > div:nth-child(2) > .pt-2\\.5.space-y-1.font-medium > .gap-0\\.5.flex-col.flex > .text-slate-400",
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
+                 "html": "<div class=\"bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-2\">",
+                 "target": Array [
+                   ".space-y-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[10px] text-slate-400 italic md:hidden\">Toca para expandir historial.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".italic",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fbfbf3",
+               "contrastRatio": 3.07,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#e17100",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.07 (foreground color: #e17100, background color: #fbfbf3, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-amber-50/50 border border-amber-100 rounded-xl p-4 flex flex-col justify-between\">",
+                 "target": Array [
+                   ".bg-amber-50\\/50",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-6 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".overflow-y-auto",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.07 (foreground color: #e17100, background color: #fbfbf3, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"text-[10px] text-amber-600 hover:text-amber-800 font-semibold mt-2 text-left underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 self-start cursor-pointer\">Ver aviso legal completo</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-amber-600",
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
+           ".text-\\[10px\\].shrink-0.font-medium",
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
  - link "Saltar al contenido principal" [ref=e2]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "RAIA 0.1.0" [ref=e6]:
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
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]: RAIA Release 0.1.0
          - generic [ref=e33]: "Regulatory Baseline: 12 July 2026"
          - generic [ref=e34]: Reference Architecture
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "RAIA Architecture Overview Portal" [level=1] [ref=e37]
            - paragraph [ref=e38]: Red de Arquitectura de Industria Afores
          - generic [ref=e39]:
            - link "Value Landscape" [ref=e40]:
              - /url: /service-landscape/value-chain
              - text: Value Landscape
              - img [ref=e41]
            - link "Metodología" [ref=e43]:
              - /url: /metamodel
              - text: Metodología
              - img [ref=e44]
            - link "Releases" [ref=e46]:
              - /url: /releases
              - text: Releases
              - img [ref=e47]
        - generic [ref=e51]:
          - paragraph [ref=e52]: Explore las capacidades, dominios, escenarios de negocio, objetos y regulaciones que definen la arquitectura de referencia del Sistema de Ahorro para el Retiro.
          - button "Buscar en el portal (Presione Control + K)" [ref=e54]:
            - generic [ref=e55]:
              - img [ref=e56]
              - generic [ref=e59]: Buscar en RAIA...
      - generic [ref=e60]:
        - generic [ref=e61]:
          - img [ref=e63]
          - generic [ref=e67]:
            - generic [ref=e68]: "11"
            - text: Áreas de Negocio
        - generic [ref=e69]:
          - img [ref=e71]
          - generic [ref=e76]:
            - generic [ref=e77]: "34"
            - text: Dominios
        - generic [ref=e78]:
          - img [ref=e80]
          - generic [ref=e83]:
            - generic [ref=e84]: "273"
            - text: Servicios (SD)
        - generic [ref=e85]:
          - img [ref=e87]
          - generic [ref=e89]:
            - generic [ref=e90]: "41"
            - text: Relaciones
      - generic [ref=e91]:
        - generic [ref=e92]:
          - heading "Módulos de Arquitectura" [level=2] [ref=e93]
          - tablist "Módulos de arquitectura" [ref=e94]:
            - tab "Todos17" [selected] [ref=e95] [cursor=pointer]
            - tab "Referencia5" [ref=e96] [cursor=pointer]
            - tab "Landscape3" [ref=e97] [cursor=pointer]
            - tab "Escenarios/Capacidades5" [ref=e98] [cursor=pointer]
            - tab "Regulación/Gobierno4" [ref=e99] [cursor=pointer]
        - generic [ref=e100]:
          - 'link "v0.1.0 Information Architecture RAIA-MOD-001 Estructura semántica, linaje y propiedad de la información en el SAR. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003, RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e101]':
            - /url: /information-architecture
            - generic [ref=e102]:
              - generic [ref=e103]:
                - img [ref=e105]
                - generic [ref=e109]: v0.1.0
              - generic [ref=e110]:
                - heading "Information Architecture" [level=3] [ref=e111]
                - generic [ref=e112]: RAIA-MOD-001
                - paragraph [ref=e113]: Estructura semántica, linaje y propiedad de la información en el SAR.
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - generic [ref=e116]: "Owner:"
                    - generic [ref=e117]: RAIA Maintainers
                  - generic [ref=e118]:
                    - generic [ref=e119]: "Validación:"
                    - generic [ref=e120]: pending-industry-review
                  - generic [ref=e121]:
                    - generic [ref=e122]: "Dependencias:"
                    - generic [ref=e123]: RAIA-MOD-003, RAIA-MOD-012
                  - generic [ref=e124]:
                    - generic [ref=e125]: "Roadmap:"
                    - generic [ref=e126]: "[object Object] → [object Object]"
            - generic [ref=e127]:
              - generic [ref=e128]: Planeado
              - generic [ref=e129]:
                - text: Explorar
                - img [ref=e130]
          - 'link "v0.1.0 Control Record Model RAIA-MOD-002 Definición del ciclo de vida y estado de los registros principales de control. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e132]':
            - /url: /control-record-model
            - generic [ref=e133]:
              - generic [ref=e134]:
                - img [ref=e136]
                - generic [ref=e139]: v0.1.0
              - generic [ref=e140]:
                - heading "Control Record Model" [level=3] [ref=e141]
                - generic [ref=e142]: RAIA-MOD-002
                - paragraph [ref=e143]: Definición del ciclo de vida y estado de los registros principales de control.
                - generic [ref=e144]:
                  - generic [ref=e145]:
                    - generic [ref=e146]: "Owner:"
                    - generic [ref=e147]: RAIA Maintainers
                  - generic [ref=e148]:
                    - generic [ref=e149]: "Validación:"
                    - generic [ref=e150]: pending-industry-review
                  - generic [ref=e151]:
                    - generic [ref=e152]: "Dependencias:"
                    - generic [ref=e153]: RAIA-MOD-003
                  - generic [ref=e154]:
                    - generic [ref=e155]: "Roadmap:"
                    - generic [ref=e156]: "[object Object] → [object Object]"
            - generic [ref=e157]:
              - generic [ref=e158]: Planeado
              - generic [ref=e159]:
                - text: Explorar
                - img [ref=e160]
          - 'link "v0.1.0 Business Object Model RAIA-MOD-003 Catálogo y diccionario de los objetos de negocio estructurados de la industria. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar" [ref=e162]':
            - /url: /business-object-model
            - generic [ref=e163]:
              - generic [ref=e164]:
                - img [ref=e166]
                - generic [ref=e176]: v0.1.0
              - generic [ref=e177]:
                - heading "Business Object Model" [level=3] [ref=e178]
                - generic [ref=e179]: RAIA-MOD-003
                - paragraph [ref=e180]: Catálogo y diccionario de los objetos de negocio estructurados de la industria.
                - generic [ref=e181]:
                  - generic [ref=e182]:
                    - generic [ref=e183]: "Owner:"
                    - generic [ref=e184]: RAIA Maintainers
                  - generic [ref=e185]:
                    - generic [ref=e186]: "Validación:"
                    - generic [ref=e187]: pending-industry-review
                  - generic [ref=e188]:
                    - generic [ref=e189]: "Dependencias:"
                    - generic [ref=e190]: RAIA-MOD-012
                  - generic [ref=e191]:
                    - generic [ref=e192]: "Roadmap:"
                    - generic [ref=e193]: "[object Object] → [object Object]"
            - generic [ref=e194]:
              - generic [ref=e195]: Planeado
              - generic [ref=e196]:
                - text: Explorar
                - img [ref=e197]
          - 'link "v0.1.0 Industry Reference Model RAIA-MOD-004 Modelo integral de referencia de la arquitectura de la industria previsional. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005, RAIA-MOD-012 Roadmap: [object Object] Planeado Explorar" [ref=e199]':
            - /url: /reference-model
            - generic [ref=e200]:
              - generic [ref=e201]:
                - img [ref=e203]
                - generic [ref=e207]: v0.1.0
              - generic [ref=e208]:
                - heading "Industry Reference Model" [level=3] [ref=e209]
                - generic [ref=e210]: RAIA-MOD-004
                - paragraph [ref=e211]: Modelo integral de referencia de la arquitectura de la industria previsional.
                - generic [ref=e212]:
                  - generic [ref=e213]:
                    - generic [ref=e214]: "Owner:"
                    - generic [ref=e215]: RAIA Maintainers
                  - generic [ref=e216]:
                    - generic [ref=e217]: "Validación:"
                    - generic [ref=e218]: pending-industry-review
                  - generic [ref=e219]:
                    - generic [ref=e220]: "Dependencias:"
                    - generic [ref=e221]: RAIA-MOD-005, RAIA-MOD-012
                  - generic [ref=e222]:
                    - generic [ref=e223]: "Roadmap:"
                    - generic [ref=e224]: "[object Object]"
            - generic [ref=e225]:
              - generic [ref=e226]: Planeado
              - generic [ref=e227]:
                - text: Explorar
                - img [ref=e228]
          - 'link "v0.1.0 Service Landscape — Value Chain RAIA-MOD-005 Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012, RAIA-MOD-015 Roadmap: [object Object] → [object Object] → [object Object] En Desarrollo Explorar" [ref=e230]':
            - /url: /service-landscape/value-chain
            - generic [ref=e231]:
              - generic [ref=e232]:
                - img [ref=e234]
                - generic [ref=e239]: v0.1.0
              - generic [ref=e240]:
                - heading "Service Landscape — Value Chain" [level=3] [ref=e241]
                - generic [ref=e242]: RAIA-MOD-005
                - paragraph [ref=e243]: Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos.
                - generic [ref=e244]:
                  - generic [ref=e245]:
                    - generic [ref=e246]: "Owner:"
                    - generic [ref=e247]: RAIA Maintainers
                  - generic [ref=e248]:
                    - generic [ref=e249]: "Validación:"
                    - generic [ref=e250]: pending-industry-review
                  - generic [ref=e251]:
                    - generic [ref=e252]: "Dependencias:"
                    - generic [ref=e253]: RAIA-MOD-012, RAIA-MOD-015
                  - generic [ref=e254]:
                    - generic [ref=e255]: "Roadmap:"
                    - generic [ref=e256]: "[object Object] → [object Object] → [object Object]"
            - generic [ref=e257]:
              - generic [ref=e258]: En Desarrollo
              - generic [ref=e259]:
                - text: Explorar
                - img [ref=e260]
          - 'link "v0.1.0 Service Landscape — Matrix RAIA-MOD-006 Vista bidimensional del paisaje combinando clasificaciones configurables. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e262]':
            - /url: /service-landscape/matrix
            - generic [ref=e263]:
              - generic [ref=e264]:
                - img [ref=e266]
                - generic [ref=e268]: v0.1.0
              - generic [ref=e269]:
                - heading "Service Landscape — Matrix" [level=3] [ref=e270]
                - generic [ref=e271]: RAIA-MOD-006
                - paragraph [ref=e272]: Vista bidimensional del paisaje combinando clasificaciones configurables.
                - generic [ref=e273]:
                  - generic [ref=e274]:
                    - generic [ref=e275]: "Owner:"
                    - generic [ref=e276]: RAIA Maintainers
                  - generic [ref=e277]:
                    - generic [ref=e278]: "Validación:"
                    - generic [ref=e279]: pending-industry-review
                  - generic [ref=e280]:
                    - generic [ref=e281]: "Dependencias:"
                    - generic [ref=e282]: RAIA-MOD-005
                  - generic [ref=e283]:
                    - generic [ref=e284]: "Roadmap:"
                    - generic [ref=e285]: "[object Object]"
            - generic [ref=e286]:
              - generic [ref=e287]: Planeado
              - generic [ref=e288]:
                - text: Explorar
                - img [ref=e289]
          - 'link "v0.1.0 Service Landscape — Overview Diagrams RAIA-MOD-007 Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e291]':
            - /url: /service-landscape/overview-diagrams
            - generic [ref=e292]:
              - generic [ref=e293]:
                - img [ref=e295]
                - generic [ref=e299]: v0.1.0
              - generic [ref=e300]:
                - heading "Service Landscape — Overview Diagrams" [level=3] [ref=e301]
                - generic [ref=e302]: RAIA-MOD-007
                - paragraph [ref=e303]: Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales.
                - generic [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e306]: "Owner:"
                    - generic [ref=e307]: RAIA Maintainers
                  - generic [ref=e308]:
                    - generic [ref=e309]: "Validación:"
                    - generic [ref=e310]: pending-industry-review
                  - generic [ref=e311]:
                    - generic [ref=e312]: "Dependencias:"
                    - generic [ref=e313]: RAIA-MOD-005
                  - generic [ref=e314]:
                    - generic [ref=e315]: "Roadmap:"
                    - generic [ref=e316]: "[object Object]"
            - generic [ref=e317]:
              - generic [ref=e318]: Planeado
              - generic [ref=e319]:
                - text: Explorar
                - img [ref=e320]
          - 'link "v0.1.0 Business Scenarios RAIA-MOD-008 Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e322]':
            - /url: /business-scenarios
            - generic [ref=e323]:
              - generic [ref=e324]:
                - img [ref=e326]
                - generic [ref=e329]: v0.1.0
              - generic [ref=e330]:
                - heading "Business Scenarios" [level=3] [ref=e331]
                - generic [ref=e332]: RAIA-MOD-008
                - paragraph [ref=e333]: Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains.
                - generic [ref=e334]:
                  - generic [ref=e335]:
                    - generic [ref=e336]: "Owner:"
                    - generic [ref=e337]: RAIA Maintainers
                  - generic [ref=e338]:
                    - generic [ref=e339]: "Validación:"
                    - generic [ref=e340]: pending-industry-review
                  - generic [ref=e341]:
                    - generic [ref=e342]: "Dependencias:"
                    - generic [ref=e343]: RAIA-MOD-005
                  - generic [ref=e344]:
                    - generic [ref=e345]: "Roadmap:"
                    - generic [ref=e346]: "[object Object] → [object Object]"
            - generic [ref=e347]:
              - generic [ref=e348]: En Desarrollo
              - generic [ref=e349]:
                - text: Explorar
                - img [ref=e350]
          - 'link "v0.1.0 Scenario Snippets RAIA-MOD-009 Fragmentos reutilizables de interacción y lógica de servicio común. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar" [ref=e352]':
            - /url: /business-scenarios/snippets
            - generic [ref=e353]:
              - generic [ref=e354]:
                - img [ref=e356]
                - generic [ref=e359]: v0.1.0
              - generic [ref=e360]:
                - heading "Scenario Snippets" [level=3] [ref=e361]
                - generic [ref=e362]: RAIA-MOD-009
                - paragraph [ref=e363]: Fragmentos reutilizables de interacción y lógica de servicio común.
                - generic [ref=e364]:
                  - generic [ref=e365]:
                    - generic [ref=e366]: "Owner:"
                    - generic [ref=e367]: RAIA Maintainers
                  - generic [ref=e368]:
                    - generic [ref=e369]: "Validación:"
                    - generic [ref=e370]: pending-industry-review
                  - generic [ref=e371]:
                    - generic [ref=e372]: "Dependencias:"
                    - generic [ref=e373]: RAIA-MOD-008
                  - generic [ref=e374]:
                    - generic [ref=e375]: "Roadmap:"
                    - generic [ref=e376]: "[object Object]"
            - generic [ref=e377]:
              - generic [ref=e378]: Planeado
              - generic [ref=e379]:
                - text: Explorar
                - img [ref=e380]
          - 'link "v0.1.0 Business Capability Map RAIA-MOD-010 Estructura jerárquica de capacidades de negocio que posee la industria. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e382]':
            - /url: /capability-map
            - generic [ref=e383]:
              - generic [ref=e384]:
                - img [ref=e386]
                - generic [ref=e388]: v0.1.0
              - generic [ref=e389]:
                - heading "Business Capability Map" [level=3] [ref=e390]
                - generic [ref=e391]: RAIA-MOD-010
                - paragraph [ref=e392]: Estructura jerárquica de capacidades de negocio que posee la industria.
                - generic [ref=e393]:
                  - generic [ref=e394]:
                    - generic [ref=e395]: "Owner:"
                    - generic [ref=e396]: RAIA Maintainers
                  - generic [ref=e397]:
                    - generic [ref=e398]: "Validación:"
                    - generic [ref=e399]: pending-industry-review
                  - generic [ref=e400]:
                    - generic [ref=e401]: "Dependencias:"
                    - generic [ref=e402]: RAIA-MOD-005
                  - generic [ref=e403]:
                    - generic [ref=e404]: "Roadmap:"
                    - generic [ref=e405]: "[object Object]"
            - generic [ref=e406]:
              - generic [ref=e407]: Planeado
              - generic [ref=e408]:
                - text: Explorar
                - img [ref=e409]
          - 'link "v0.1.0 Capability Views RAIA-MOD-011 Proyecciones específicas de capacidades de negocio filtradas por participante o regulación. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-010 Roadmap: [object Object] Planeado Explorar" [ref=e411]':
            - /url: /capability-map/views
            - generic [ref=e412]:
              - generic [ref=e413]:
                - img [ref=e415]
                - generic [ref=e418]: v0.1.0
              - generic [ref=e419]:
                - heading "Capability Views" [level=3] [ref=e420]
                - generic [ref=e421]: RAIA-MOD-011
                - paragraph [ref=e422]: Proyecciones específicas de capacidades de negocio filtradas por participante o regulación.
                - generic [ref=e423]:
                  - generic [ref=e424]:
                    - generic [ref=e425]: "Owner:"
                    - generic [ref=e426]: RAIA Maintainers
                  - generic [ref=e427]:
                    - generic [ref=e428]: "Validación:"
                    - generic [ref=e429]: pending-industry-review
                  - generic [ref=e430]:
                    - generic [ref=e431]: "Dependencias:"
                    - generic [ref=e432]: RAIA-MOD-010
                  - generic [ref=e433]:
                    - generic [ref=e434]: "Roadmap:"
                    - generic [ref=e435]: "[object Object]"
            - generic [ref=e436]:
              - generic [ref=e437]: Planeado
              - generic [ref=e438]:
                - text: Explorar
                - img [ref=e439]
          - 'link "v0.1.0 Metamodel Overview RAIA-MOD-012 Definiciones y relaciones formales de las entidades y conceptos que integran RAIA. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e441]':
            - /url: /metamodel
            - generic [ref=e442]:
              - generic [ref=e443]:
                - img [ref=e445]
                - generic [ref=e447]: v0.1.0
              - generic [ref=e448]:
                - heading "Metamodel Overview" [level=3] [ref=e449]
                - generic [ref=e450]: RAIA-MOD-012
                - paragraph [ref=e451]: Definiciones y relaciones formales de las entidades y conceptos que integran RAIA.
                - generic [ref=e452]:
                  - generic [ref=e453]:
                    - generic [ref=e454]: "Owner:"
                    - generic [ref=e455]: RAIA Maintainers
                  - generic [ref=e456]:
                    - generic [ref=e457]: "Validación:"
                    - generic [ref=e458]: pending-industry-review
                  - generic [ref=e459]:
                    - generic [ref=e460]: "Roadmap:"
                    - generic [ref=e461]: "[object Object] → [object Object]"
            - generic [ref=e462]:
              - generic [ref=e463]: En Desarrollo
              - generic [ref=e464]:
                - text: Explorar
                - img [ref=e465]
          - 'link "v0.1.0 Wireframes Overview RAIA-MOD-013 Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar" [ref=e467]':
            - /url: /wireframes
            - generic [ref=e468]:
              - generic [ref=e469]:
                - img [ref=e471]
                - generic [ref=e473]: v0.1.0
              - generic [ref=e474]:
                - heading "Wireframes Overview" [level=3] [ref=e475]
                - generic [ref=e476]: RAIA-MOD-013
                - paragraph [ref=e477]: Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR.
                - generic [ref=e478]:
                  - generic [ref=e479]:
                    - generic [ref=e480]: "Owner:"
                    - generic [ref=e481]: RAIA Maintainers
                  - generic [ref=e482]:
                    - generic [ref=e483]: "Validación:"
                    - generic [ref=e484]: pending-industry-review
                  - generic [ref=e485]:
                    - generic [ref=e486]: "Dependencias:"
                    - generic [ref=e487]: RAIA-MOD-008
                  - generic [ref=e488]:
                    - generic [ref=e489]: "Roadmap:"
                    - generic [ref=e490]: "[object Object]"
            - generic [ref=e491]:
              - generic [ref=e492]: Planeado
              - generic [ref=e493]:
                - text: Explorar
                - img [ref=e494]
          - 'link "v0.1.0 Architecture Dashboard RAIA-MOD-014 Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e496]':
            - /url: /dashboard
            - generic [ref=e497]:
              - generic [ref=e498]:
                - img [ref=e500]
                - generic [ref=e502]: v0.1.0
              - generic [ref=e503]:
                - heading "Architecture Dashboard" [level=3] [ref=e504]
                - generic [ref=e505]: RAIA-MOD-014
                - paragraph [ref=e506]: Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura.
                - generic [ref=e507]:
                  - generic [ref=e508]:
                    - generic [ref=e509]: "Owner:"
                    - generic [ref=e510]: RAIA Maintainers
                  - generic [ref=e511]:
                    - generic [ref=e512]: "Validación:"
                    - generic [ref=e513]: pending-industry-review
                  - generic [ref=e514]:
                    - generic [ref=e515]: "Roadmap:"
                    - generic [ref=e516]: "[object Object] → [object Object]"
            - generic [ref=e517]:
              - generic [ref=e518]: En Desarrollo
              - generic [ref=e519]:
                - text: Explorar
                - img [ref=e520]
          - 'link "v0.1.0 Regulatory Architecture RAIA-MOD-015 Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar" [ref=e522]':
            - /url: /regulatory-architecture
            - generic [ref=e523]:
              - generic [ref=e524]:
                - img [ref=e526]
                - generic [ref=e530]: v0.1.0
              - generic [ref=e531]:
                - heading "Regulatory Architecture" [level=3] [ref=e532]
                - generic [ref=e533]: RAIA-MOD-015
                - paragraph [ref=e534]: Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains.
                - generic [ref=e535]:
                  - generic [ref=e536]:
                    - generic [ref=e537]: "Owner:"
                    - generic [ref=e538]: RAIA Maintainers
                  - generic [ref=e539]:
                    - generic [ref=e540]: "Validación:"
                    - generic [ref=e541]: pending-industry-review
                  - generic [ref=e542]:
                    - generic [ref=e543]: "Dependencias:"
                    - generic [ref=e544]: RAIA-MOD-005
                  - generic [ref=e545]:
                    - generic [ref=e546]: "Roadmap:"
                    - generic [ref=e547]: "[object Object]"
            - generic [ref=e548]:
              - generic [ref=e549]: Planeado
              - generic [ref=e550]:
                - text: Explorar
                - img [ref=e551]
          - 'link "v0.1.0 RAIA Releases RAIA-MOD-016 Historial de versiones de la arquitectura de referencia, changelog y notas de migración. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] En Desarrollo Explorar" [ref=e553]':
            - /url: /releases
            - generic [ref=e554]:
              - generic [ref=e555]:
                - img [ref=e557]
                - generic [ref=e561]: v0.1.0
              - generic [ref=e562]:
                - heading "RAIA Releases" [level=3] [ref=e563]
                - generic [ref=e564]: RAIA-MOD-016
                - paragraph [ref=e565]: Historial de versiones de la arquitectura de referencia, changelog y notas de migración.
                - generic [ref=e566]:
                  - generic [ref=e567]:
                    - generic [ref=e568]: "Owner:"
                    - generic [ref=e569]: RAIA Maintainers
                  - generic [ref=e570]:
                    - generic [ref=e571]: "Validación:"
                    - generic [ref=e572]: pending-industry-review
                  - generic [ref=e573]:
                    - generic [ref=e574]: "Roadmap:"
                    - generic [ref=e575]: "[object Object]"
            - generic [ref=e576]:
              - generic [ref=e577]: En Desarrollo
              - generic [ref=e578]:
                - text: Explorar
                - img [ref=e579]
          - 'link "v0.1.0 Contribution and Governance RAIA-MOD-017 Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar" [ref=e581]':
            - /url: /contribute
            - generic [ref=e582]:
              - generic [ref=e583]:
                - img [ref=e585]
                - generic [ref=e590]: v0.1.0
              - generic [ref=e591]:
                - heading "Contribution and Governance" [level=3] [ref=e592]
                - generic [ref=e593]: RAIA-MOD-017
                - paragraph [ref=e594]: Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia.
                - generic [ref=e595]:
                  - generic [ref=e596]:
                    - generic [ref=e597]: "Owner:"
                    - generic [ref=e598]: RAIA Maintainers
                  - generic [ref=e599]:
                    - generic [ref=e600]: "Validación:"
                    - generic [ref=e601]: pending-industry-review
                  - generic [ref=e602]:
                    - generic [ref=e603]: "Roadmap:"
                    - generic [ref=e604]: "[object Object] → [object Object]"
            - generic [ref=e605]:
              - generic [ref=e606]: En Desarrollo
              - generic [ref=e607]:
                - text: Explorar
                - img [ref=e608]
      - generic [ref=e610]:
        - generic [ref=e611]:
          - button "Cambios Recientes (Release 0.1.0)" [ref=e612] [cursor=pointer]:
            - generic [ref=e613]:
              - img [ref=e614]
              - heading "Cambios Recientes (Release 0.1.0)" [level=3] [ref=e618]
            - img [ref=e619]
          - paragraph [ref=e621]: Toca para expandir historial.
        - generic [ref=e622]:
          - generic [ref=e623]:
            - img [ref=e624]
            - generic [ref=e626]:
              - generic [ref=e627]: Aviso de Neutralidad y Propósito
              - paragraph [ref=e628]: RAIA es una arquitectura de referencia propuesta. No sustituye leyes, reglamentos, disposiciones, criterios, manuales, publicaciones oficiales ni asesoría legal, actuarial, financiera, operativa o de gobierno sectorial.
          - button "Ver aviso legal completo" [ref=e629] [cursor=pointer]
  - contentinfo [ref=e630]:
    - generic [ref=e631]:
      - paragraph [ref=e632]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e633]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e639] [cursor=pointer]:
    - generic [ref=e642]:
      - text: Compiling
      - generic [ref=e643]:
        - generic [ref=e644]: .
        - generic [ref=e645]: .
        - generic [ref=e646]: .
  - alert [ref=e647]
```