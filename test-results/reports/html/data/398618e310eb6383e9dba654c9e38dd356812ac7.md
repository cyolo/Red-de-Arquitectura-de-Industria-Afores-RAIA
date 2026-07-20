# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /service-landscape/value-chain
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 8196

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
+                 "html": "<div class=\"no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4\">",
+                 "target": Array [
+                   ".p-4.no-print.gap-4",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Área de Negocio</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-col:nth-child(1) > label",
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
+                 "html": "<div class=\"no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4\">",
+                 "target": Array [
+                   ".p-4.no-print.gap-4",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Dominio de Negocio</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-col:nth-child(2) > label",
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
+                 "html": "<div class=\"no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4\">",
+                 "target": Array [
+                   ".p-4.no-print.gap-4",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Rol del Actor</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-col:nth-child(3) > label",
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
+                 "html": "<div class=\"no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4\">",
+                 "target": Array [
+                   ".p-4.no-print.gap-4",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Estatus de Ciclo de Vida</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-col:nth-child(4) > label",
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
+                 "html": "<div class=\"no-print bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-4\">",
+                 "target": Array [
+                   ".p-4.no-print.gap-4",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"text-[9px] font-extrabold text-slate-400 uppercase tracking-wider\">Nivel de Madurez</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-span-2 > label",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#52616d",
+               "contrastRatio": 4.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d4d8db",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.45 (foreground color: #d4d8db, background color: #52616d, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#52616D\">",
+                 "target": Array [
+                   ".flex-1 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.45 (foreground color: #d4d8db, background color: #52616d, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-008</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".flex-1 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-023</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-162\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-162: Atenció...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-162\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">162</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-162\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-163\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-163: Autoser...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-163\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">163</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-163\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-164\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-164: Aplicac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-164\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">164</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-164\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-165\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-165: Portal ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-165\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">165</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-165\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-166\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-166: Centro ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-166\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">166</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-166\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-167\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-167: Atenció...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-167\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">167</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-167\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-168\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-168: Corresp...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-168\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">168</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-168\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-169\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-169: Notific...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-169\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">169</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-169\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-170\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-170: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-170\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">170</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-170\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-171\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-171: Histori...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-171\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">171</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-171\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".flex-1 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-024</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-172\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-172: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-172\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">172</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-172\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-173\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-173: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-173\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">173</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-173\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-174\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-174: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-174\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">174</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-174\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-175\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-175: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-175\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">175</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-175\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-176\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-176: Coordin...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-176\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">176</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-176\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-177\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-177: Interac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-177\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">177</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-177\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-178\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-178: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-178\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">178</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-178\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-179\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-179: Análisi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-179\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">179</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-179\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-180\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-180: Seguimi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-180\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">180</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-180\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".flex-1 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-025</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-1 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(3) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-181\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-181: Educaci...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-181\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">181</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-181\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-182\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-182: Gobiern...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-182\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">182</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-182\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-183\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-183: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-183\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">183</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-183\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-184\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-184: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-184\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">184</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-184\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-185\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-185: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-185\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">185</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-185\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-186\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-186: Conocim...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-186\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">186</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-186\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-187\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-187: Medició...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-187\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">187</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-187\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-188\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-188: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-188\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">188</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-188\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-189\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-189: Compara...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-189\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">189</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-189\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0e6b6f",
+               "contrastRatio": 4.28,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#c3dadb",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.28 (foreground color: #c3dadb, background color: #0e6b6f, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#0E6B6F\">",
+                 "target": Array [
+                   ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.28 (foreground color: #c3dadb, background color: #0e6b6f, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-003</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-007</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-020\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-020: Datos d...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-020\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">020</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-020\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-047\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-047: Datos d...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-047\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">047</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-047\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-048\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-048: Datos d...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-048\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">048</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-048\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-049\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-049: Datos d...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-049\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">049</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-049\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-050\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-050: Directo...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-050\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">050</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-050\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-051\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-051: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-051\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">051</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-051\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-052\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-052: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-052\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">052</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-052\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-008</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-021\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-021: Resoluc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-021\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">021</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-021\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-053\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-053: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-053\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">053</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-053\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-023\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-023: Identid...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-023\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">023</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-023\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-054\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-054: Autenti...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-054\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">054</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-054\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-055\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-055: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-055\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">055</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-055\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-056\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-056: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-056\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">056</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-056\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-057\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-057: Prueba ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-057\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">057</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-057\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-058\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-058: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-058\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">058</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-058\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-009</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".space-y-4 > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(3) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-031\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-031: Expedie...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-031\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">031</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-031\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-059\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-059: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-059\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">059</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-059\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-060\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-060: Evidenc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-060\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">060</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-060\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-061\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-061: Firma E...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-061\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">061</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-061\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-062\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-062: Conserv...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-062\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">062</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-062\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-063\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-063: Correcc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-063\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">063</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-063\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-064\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-064: Trazabi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-064\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">064</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-064\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#3a7d5b",
+               "contrastRatio": 3.55,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#cedfd6",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.55 (foreground color: #cedfd6, background color: #3a7d5b, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#3A7D5B\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.55 (foreground color: #cedfd6, background color: #3a7d5b, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-004</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">065</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-065\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">040</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-040\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">066</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-066\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">067</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-067\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">068</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-068\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">069</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-069\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">070</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-070\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">045</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-045\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">071</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-071\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">072</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-072\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">073</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-073\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">074</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-074\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">075</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-075\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">076</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-076\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">077</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-077\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">046</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-046\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">078</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-078\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">079</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-079\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">080</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-080\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">081</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-081\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">082</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-082\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">086</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-086\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">089</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-089\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">090</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-090\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">091</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-091\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">093</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-093\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">096</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-096\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">097</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-097\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">098</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-098\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">099</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-099\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">100</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-100\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">103</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-103\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">104</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-104\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">105</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-105\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">108</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-108\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">110</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-110\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">111</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-111\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">112</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-112\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">113</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-113\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">117</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-117\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">118</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-118\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">119</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-119\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">120</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-120\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">121</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-121\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">122</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-122\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">123</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-123\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">126</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-126\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">127</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-127\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">128</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-128\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">129</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-129\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">130</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-130\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">131</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-131\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">132</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-132\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">133</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-133\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">134</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-134\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">135</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-135\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">136</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-136\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">137</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-137\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">138</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-138\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">139</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-139\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">140</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-140\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">141</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-141\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">142</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-142\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">143</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-143\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">144</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-144\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">145</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-145\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">146</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-146\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">147</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-147\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">148</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-148\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">149</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-149\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">150</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-150\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">151</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-151\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">152</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-152\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">153</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-153\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">154</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-154\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">155</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-155\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">156</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-156\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">157</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-157\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">158</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-158\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">159</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-159\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">160</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-160\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#848d9b",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.35 (foreground color: #848d9b, background color: #ffffff, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">161</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-161\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#3a7d5b",
+               "contrastRatio": 1.03,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#62748e",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.03 (foreground color: #62748e, background color: #3a7d5b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#3A7D5B\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.03 (foreground color: #62748e, background color: #3a7d5b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h2 class=\"text-xs font-extrabold text-slate-500 uppercase tracking-wider\">Gobierno, Soporte e Industria</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .pb-2.gap-2.border-b > h2",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-001</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-001\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-001: Polític...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-001\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">001</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-001\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-002\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-002: Estrate...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-002\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">002</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-002\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-003\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-003: Planeac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-003\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">003</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-003\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-004\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-004: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-004\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">004</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-004\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-005\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-005: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-005\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">005</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-005\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-006\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-006: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-006\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">006</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-006\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-002</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-007\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-007: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-007\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">007</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-007\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-008\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-008: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-008\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">008</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-008\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-009\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-009: Autoriz...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-009\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">009</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-009\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-010\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-010: Autoriz...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-010\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">010</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-010\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-011\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-011: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-011\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">011</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-011\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-012\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-012: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-012\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">012</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-012\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-003</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(3) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-013\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-013: Gobiern...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-013\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">013</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-013\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-014\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-014: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-014\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">014</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-014\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-015\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-015: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-015\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">015</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-015\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-016\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-016: Métrica...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-016\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">016</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-016\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-017\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-017: Transpa...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-017\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">017</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-017\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-018\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-018: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-018\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">018</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-018\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-004</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-019\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-019: Supervi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-019\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">019</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-019\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-022\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-022: Inspecc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-022\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">022</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-022\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-024\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-024: Informa...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-024\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">024</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-024\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-025\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-025: Atenció...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-025\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">025</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-025\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-026\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-026: Program...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-026\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">026</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-026\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-027\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-027: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-027\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">027</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-027\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-028\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-028: Seguimi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-028\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">028</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-028\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-005</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-029\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-029: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-029\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">029</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-029\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-030\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-030: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-030\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">030</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-030\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-032\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-032: Cumplim...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-032\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">032</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-032\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-033\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-033: Prevenc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-033\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">033</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-033\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-034\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-034: Prevenc...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-034\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">034</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-034\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-035\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-035: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-035\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">035</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-035\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-036\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-036: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-036\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">036</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-036\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-006</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-2.grid-cols-1.grid:nth-child(1) > .bg-white.h-full.overflow-hidden:nth-child(2) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(3) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-037\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-037: Continu...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-037\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">037</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-037\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-038\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-038: Recuper...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-038\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">038</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-038\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-039\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-039: Ciberse...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-039\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">039</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-039\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-041\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-041: Segurid...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-041\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">041</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-041\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-042\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-042: Auditor...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-042\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">042</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-042\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-043\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-043: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-043\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">043</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-043\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-044\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-044: Pruebas...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-044\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">044</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-044\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#b7791f",
+               "contrastRatio": 2.75,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#eddec7",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.75 (foreground color: #eddec7, background color: #b7791f, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#B7791F\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.75 (foreground color: #eddec7, background color: #b7791f, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-009</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#b7791f",
+               "contrastRatio": 3.64,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.64 (foreground color: #ffffff, background color: #b7791f, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#B7791F\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.64 (foreground color: #ffffff, background color: #b7791f, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold truncate uppercase tracking-wider\">Servicios Compartidos de Industria</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > h3",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-026</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-190\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-190: Base de...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-190\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">190</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-190\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-191\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-191: Registr...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-191\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">191</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-191\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-192\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-192: Registr...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-192\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">192</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-192\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-193\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-193: Registr...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-193\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">193</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-193\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-194\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-194: Datos d...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-194\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">194</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-194\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-195\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-195: Calidad...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-195\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">195</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-195\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-196\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-196: Calenda...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-196\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">196</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-196\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-197\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-197: Catálog...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-197\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">197</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-197\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-027</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-198\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-198: Orquest...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-198\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">198</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-198\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-199\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-199: Interca...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-199\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">199</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-199\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-200\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-200: Coordin...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-200\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">200</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-200\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-201\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-201: Compens...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-201\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">201</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-201\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-202\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-202: Hub de ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-202\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">202</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-202\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-203\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-203: Validac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-203\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">203</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-203\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-204\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-204: Validac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-204\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">204</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-204\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-205\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-205: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-205\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">205</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-205\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-206\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-206: Monitor...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-206\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">206</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-206\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<div class=\"bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full\">",
+                 "target": Array [
+                   ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-028</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".gap-4.flex-col:nth-child(3) > .space-y-4 > .bg-white.h-full.overflow-hidden > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(3) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-207\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-207: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-207\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">207</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-207\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-208\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-208: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-208\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">208</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-208\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-209\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-209: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-209\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">209</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-209\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-210\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-210: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-210\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">210</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-210\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-211\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-211: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-211\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">211</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-211\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-212\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-212: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-212\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">212</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-212\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-213\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-213: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-213\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">213</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-213\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-214\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-214: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-214\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">214</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-214\"] > .opacity-60.text-\\[8px\\].font-mono",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f8fafc",
+               "contrastRatio": 3.29,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#818b99",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-215\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-215: Integra...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-215\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">215</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-215\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+           "p:nth-child(2)",
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
+   Object {
+     "description": "Ensure select element has an accessible name",
+     "help": "Select element must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/select-name?application=playwright",
+     "id": "select-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select data-testid=\"value-chain-filter-area\" class=\"w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select[data-testid=\"value-chain-filter-area\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select data-testid=\"value-chain-filter-domain\" class=\"w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select[data-testid=\"value-chain-filter-domain\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select data-testid=\"value-chain-filter-actor\" class=\"w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select[data-testid=\"value-chain-filter-actor\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select data-testid=\"value-chain-filter-status\" class=\"w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select[data-testid=\"value-chain-filter-status\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select data-testid=\"value-chain-filter-maturity\" class=\"w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none focus:border-raia-blue-inst\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "select[data-testid=\"value-chain-filter-maturity\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
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
    - generic [ref=e27]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]:
            - img [ref=e32]
            - heading "Filtros y Búsqueda" [level=2] [ref=e34]
          - generic [ref=e35]:
            - generic [ref=e36]: "Coincidencias:"
            - generic [ref=e37]: 273 / 273
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: Área de Negocio
            - combobox [ref=e41]:
              - option "Todas las Áreas" [selected]
              - option "RAIA-BA-001 - Gobierno y Dirección del SAR"
              - option "RAIA-BA-002 - Riesgo, Cumplimiento y Supervisión"
              - option "RAIA-BA-003 - Identidad, Partes y Expediente"
              - option "RAIA-BA-004 - Afiliación y Cuenta Individual"
              - option "RAIA-BA-005 - Recaudación y Aportaciones"
              - option "RAIA-BA-006 - Inversión y SIEFORE"
              - option "RAIA-BA-007 - Retiros, Prestaciones y Pensiones"
              - option "RAIA-BA-008 - Servicio, Canales y Experiencia"
              - option "RAIA-BA-009 - Servicios Compartidos de Industria"
              - option "RAIA-BA-010 - Capacidades Empresariales y Tecnología"
              - option "RAIA-BA-011 - Evolución, Arquitectura, Innovación y Conocimiento"
          - generic [ref=e42]:
            - generic [ref=e43]: Dominio de Negocio
            - combobox [ref=e44]:
              - option "Todos los Dominios" [selected]
              - option "RAIA-BD-001 - Estrategia y Política del SAR"
              - option "RAIA-BD-002 - Regulación y Autorizaciones"
              - option "RAIA-BD-003 - Gobierno y Desempeño"
              - option "RAIA-BD-004 - Supervisión y Control Regulatorio"
              - option "RAIA-BD-005 - Riesgo y Cumplimiento"
              - option "RAIA-BD-006 - Resiliencia y Aseguramiento"
              - option "RAIA-BD-007 - Datos de Personas y Organizaciones"
              - option "RAIA-BD-008 - Identidad, Autenticación y Consentimiento"
              - option "RAIA-BD-009 - Expediente y Evidencia"
              - option "RAIA-BD-010 - Incorporación y Afiliación"
              - option "RAIA-BD-011 - Traspaso y Regularización"
              - option "RAIA-BD-012 - Administración de Cuenta Individual"
              - option "RAIA-BD-013 - Recaudación Obligatoria"
              - option "RAIA-BD-014 - Ahorro Voluntario"
              - option "RAIA-BD-015 - Individualización y Conciliación"
              - option "RAIA-BD-016 - Diseño y Asignación de Fondos"
              - option "RAIA-BD-017 - Operación de Inversiones"
              - option "RAIA-BD-018 - Valuación, Riesgo y Desempeño"
              - option "RAIA-BD-019 - Retiros, Parciales"
              - option "RAIA-BD-020 - Pensión y Disposición Total"
              - option "RAIA-BD-021 - Fallecimiento y Beneficiarios"
              - option "RAIA-BD-022 - Fondo de Pensiones para el Bienestar"
              - option "RAIA-BD-023 - Omnicanalidad"
              - option "RAIA-BD-024 - Solicitudes, Casos y Reclamaciones"
              - option "RAIA-BD-025 - Educación y Comercialización"
              - option "RAIA-BD-026 - BDNSAR y Registros Maestros"
              - option "RAIA-BD-027 - Orquestación e Intercambio"
              - option "RAIA-BD-028 - Integración con Ecosistema Externo"
              - option "RAIA-BD-029 - Datos, Seguridad y Privacidad"
              - option "RAIA-BD-030 - Tecnología y Operación"
              - option "RAIA-BD-031 - Capacidades Corporativas"
              - option "RAIA-BD-032 - Arquitectura y Estándares"
              - option "RAIA-BD-033 - Analítica, Modelos e Inteligencia Artificial"
              - option "RAIA-BD-034 - Innovación y Gestión del Cambio"
          - generic [ref=e45]:
            - generic [ref=e46]: Rol del Actor
            - combobox [ref=e47]:
              - option "Todos los Actores" [selected]
              - option "AFORE"
              - option "AFORE receptora"
              - option "AFORE transferente"
              - option "CONSAR"
              - option "Empresa Operadora"
              - option "Trabajador"
          - generic [ref=e48]:
            - generic [ref=e49]: Estatus de Ciclo de Vida
            - combobox [ref=e50]:
              - option "Todos los Estatus" [selected]
              - option "Draft"
              - option "Proposed"
              - option "Validated"
              - option "Active"
              - option "Deprecated"
          - generic [ref=e51]:
            - generic [ref=e52]: Nivel de Madurez
            - combobox [ref=e53]:
              - option "Todas las Madureces" [selected]
              - option "Conceptual"
              - option "Defined"
              - option "Validated"
              - option "Adopted"
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - img [ref=e58]
            - heading "Front-Office & Experiencia" [level=2] [ref=e63]
          - generic [ref=e65]:
            - generic [ref=e67]:
              - generic [ref=e68]: RAIA-BA-008
              - heading "Servicio, Canales y Experiencia" [level=3] [ref=e69]
            - generic [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e72]:
                  - generic [ref=e73]: Omnicanalidad
                  - generic [ref=e74]: RAIA-BD-023
                - generic [ref=e75]:
                  - button "162 Atención Omnicanal" [ref=e76] [cursor=pointer]:
                    - generic [ref=e77]: "162"
                    - generic [ref=e78]: Atención Omnicanal
                  - button "163 Autoservicio Digital" [ref=e79] [cursor=pointer]:
                    - generic [ref=e80]: "163"
                    - generic [ref=e81]: Autoservicio Digital
                  - button "164 Aplicación Móvil" [ref=e82] [cursor=pointer]:
                    - generic [ref=e83]: "164"
                    - generic [ref=e84]: Aplicación Móvil
                  - button "165 Portal Web" [ref=e85] [cursor=pointer]:
                    - generic [ref=e86]: "165"
                    - generic [ref=e87]: Portal Web
                  - button "166 Centro de Contacto" [ref=e88] [cursor=pointer]:
                    - generic [ref=e89]: "166"
                    - generic [ref=e90]: Centro de Contacto
                  - button "167 Atención en Sucursal" [ref=e91] [cursor=pointer]:
                    - generic [ref=e92]: "167"
                    - generic [ref=e93]: Atención en Sucursal
                  - button "168 Correspondencia" [ref=e94] [cursor=pointer]:
                    - generic [ref=e95]: "168"
                    - generic [ref=e96]: Correspondencia
                  - button "169 Notificaciones" [ref=e97] [cursor=pointer]:
                    - generic [ref=e98]: "169"
                    - generic [ref=e99]: Notificaciones
                  - button "170 Gestión de Acceso a Canales" [ref=e100] [cursor=pointer]:
                    - generic [ref=e101]: "170"
                    - generic [ref=e102]: Gestión de Acceso a Canales
                  - button "171 Historial de Interacciones" [ref=e103] [cursor=pointer]:
                    - generic [ref=e104]: "171"
                    - generic [ref=e105]: Historial de Interacciones
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - generic [ref=e108]: Solicitudes, Casos y Reclamaciones
                  - generic [ref=e109]: RAIA-BD-024
                - generic [ref=e110]:
                  - button "172 Gestión de Solicitudes de Servicio" [ref=e111] [cursor=pointer]:
                    - generic [ref=e112]: "172"
                    - generic [ref=e113]: Gestión de Solicitudes de Servicio
                  - button "173 Gestión de Casos" [ref=e114] [cursor=pointer]:
                    - generic [ref=e115]: "173"
                    - generic [ref=e116]: Gestión de Casos
                  - button "174 Gestión de Aclaraciones" [ref=e117] [cursor=pointer]:
                    - generic [ref=e118]: "174"
                    - generic [ref=e119]: Gestión de Aclaraciones
                  - button "175 Gestión de Quejas" [ref=e120] [cursor=pointer]:
                    - generic [ref=e121]: "175"
                    - generic [ref=e122]: Gestión de Quejas
                  - button "176 Coordinación con UNE" [ref=e123] [cursor=pointer]:
                    - generic [ref=e124]: "176"
                    - generic [ref=e125]: Coordinación con UNE
                  - button "177 Interacción con CONDUSEF" [ref=e126] [cursor=pointer]:
                    - generic [ref=e127]: "177"
                    - generic [ref=e128]: Interacción con CONDUSEF
                  - button "178 Gestión de Niveles de Servicio" [ref=e129] [cursor=pointer]:
                    - generic [ref=e130]: "178"
                    - generic [ref=e131]: Gestión de Niveles de Servicio
                  - button "179 Análisis de Causa Raíz" [ref=e132] [cursor=pointer]:
                    - generic [ref=e133]: "179"
                    - generic [ref=e134]: Análisis de Causa Raíz
                  - button "180 Seguimiento de Compromisos" [ref=e135] [cursor=pointer]:
                    - generic [ref=e136]: "180"
                    - generic [ref=e137]: Seguimiento de Compromisos
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: Educación y Comercialización
                  - generic [ref=e141]: RAIA-BD-025
                - generic [ref=e142]:
                  - button "181 Educación Financiera y Previsional" [ref=e143] [cursor=pointer]:
                    - generic [ref=e144]: "181"
                    - generic [ref=e145]: Educación Financiera y Previsional
                  - button "182 Gobierno de Publicidad" [ref=e146] [cursor=pointer]:
                    - generic [ref=e147]: "182"
                    - generic [ref=e148]: Gobierno de Publicidad
                  - button "183 Gestión de Asesores Previsionales" [ref=e149] [cursor=pointer]:
                    - generic [ref=e150]: "183"
                    - generic [ref=e151]: Gestión de Asesores Previsionales
                  - button "184 Gestión de Campañas" [ref=e152] [cursor=pointer]:
                    - generic [ref=e153]: "184"
                    - generic [ref=e154]: Gestión de Campañas
                  - button "185 Gestión de Prospectos" [ref=e155] [cursor=pointer]:
                    - generic [ref=e156]: "185"
                    - generic [ref=e157]: Gestión de Prospectos
                  - button "186 Conocimiento del Trabajador" [ref=e158] [cursor=pointer]:
                    - generic [ref=e159]: "186"
                    - generic [ref=e160]: Conocimiento del Trabajador
                  - button "187 Medición de Satisfacción" [ref=e161] [cursor=pointer]:
                    - generic [ref=e162]: "187"
                    - generic [ref=e163]: Medición de Satisfacción
                  - button "188 Gestión de Retroalimentación" [ref=e164] [cursor=pointer]:
                    - generic [ref=e165]: "188"
                    - generic [ref=e166]: Gestión de Retroalimentación
                  - button "189 Comparación de Servicios y Rendimientos" [ref=e167] [cursor=pointer]:
                    - generic [ref=e168]: "189"
                    - generic [ref=e169]: Comparación de Servicios y Rendimientos
        - generic [ref=e170]:
          - generic [ref=e171]:
            - img [ref=e172]
            - heading "Operación y Procesos Core" [level=2] [ref=e176]
          - generic [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e180]:
                - generic [ref=e181]: RAIA-BA-003
                - heading "Identidad, Partes y Expediente" [level=3] [ref=e182]
              - generic [ref=e183]:
                - generic [ref=e184]:
                  - generic [ref=e185]:
                    - generic [ref=e186]: Datos de Personas y Organizaciones
                    - generic [ref=e187]: RAIA-BD-007
                  - generic [ref=e188]:
                    - button "020 Datos del Trabajador" [ref=e189] [cursor=pointer]:
                      - generic [ref=e190]: "020"
                      - generic [ref=e191]: Datos del Trabajador
                    - button "047 Datos de Beneficiarios" [ref=e192] [cursor=pointer]:
                      - generic [ref=e193]: "047"
                      - generic [ref=e194]: Datos de Beneficiarios
                    - button "048 Datos del Patrón" [ref=e195] [cursor=pointer]:
                      - generic [ref=e196]: "048"
                      - generic [ref=e197]: Datos del Patrón
                    - button "049 Datos de Dependencias Públicas" [ref=e198] [cursor=pointer]:
                      - generic [ref=e199]: "049"
                      - generic [ref=e200]: Datos de Dependencias Públicas
                    - button "050 Directorio de Participantes del SAR" [ref=e201] [cursor=pointer]:
                      - generic [ref=e202]: "050"
                      - generic [ref=e203]: Directorio de Participantes del SAR
                    - button "051 Gestión de Contacto y Domicilio" [ref=e204] [cursor=pointer]:
                      - generic [ref=e205]: "051"
                      - generic [ref=e206]: Gestión de Contacto y Domicilio
                    - button "052 Gestión de Relaciones entre Partes" [ref=e207] [cursor=pointer]:
                      - generic [ref=e208]: "052"
                      - generic [ref=e209]: Gestión de Relaciones entre Partes
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]: Identidad, Autenticación y Consentimiento
                    - generic [ref=e213]: RAIA-BD-008
                  - generic [ref=e214]:
                    - button "021 Resolución de Identidad" [ref=e215] [cursor=pointer]:
                      - generic [ref=e216]: "021"
                      - generic [ref=e217]: Resolución de Identidad
                    - button "053 Gestión de CURP, NSS y RFC" [ref=e218] [cursor=pointer]:
                      - generic [ref=e219]: "053"
                      - generic [ref=e220]: Gestión de CURP, NSS y RFC
                    - button "023 Identidad Biométrica" [ref=e221] [cursor=pointer]:
                      - generic [ref=e222]: "023"
                      - generic [ref=e223]: Identidad Biométrica
                    - button "054 Autenticación del Trabajador" [ref=e224] [cursor=pointer]:
                      - generic [ref=e225]: "054"
                      - generic [ref=e226]: Autenticación del Trabajador
                    - button "055 Gestión de Derechos de Acceso" [ref=e227] [cursor=pointer]:
                      - generic [ref=e228]: "055"
                      - generic [ref=e229]: Gestión de Derechos de Acceso
                    - button "056 Gestión de Consentimiento" [ref=e230] [cursor=pointer]:
                      - generic [ref=e231]: "056"
                      - generic [ref=e232]: Gestión de Consentimiento
                    - button "057 Prueba de Vida" [ref=e233] [cursor=pointer]:
                      - generic [ref=e234]: "057"
                      - generic [ref=e235]: Prueba de Vida
                    - button "058 Gestión de Representación Legal" [ref=e236] [cursor=pointer]:
                      - generic [ref=e237]: "058"
                      - generic [ref=e238]: Gestión de Representación Legal
                - generic [ref=e239]:
                  - generic [ref=e240]:
                    - generic [ref=e241]: Expediente y Evidencia
                    - generic [ref=e242]: RAIA-BD-009
                  - generic [ref=e243]:
                    - button "031 Expediente Electrónico" [ref=e244] [cursor=pointer]:
                      - generic [ref=e245]: "031"
                      - generic [ref=e246]: Expediente Electrónico
                    - button "059 Gestión Documental" [ref=e247] [cursor=pointer]:
                      - generic [ref=e248]: "059"
                      - generic [ref=e249]: Gestión Documental
                    - button "060 Evidencia Digital" [ref=e250] [cursor=pointer]:
                      - generic [ref=e251]: "060"
                      - generic [ref=e252]: Evidencia Digital
                    - button "061 Firma Electrónica y No Repudio" [ref=e253] [cursor=pointer]:
                      - generic [ref=e254]: "061"
                      - generic [ref=e255]: Firma Electrónica y No Repudio
                    - button "062 Conservación de Registros" [ref=e256] [cursor=pointer]:
                      - generic [ref=e257]: "062"
                      - generic [ref=e258]: Conservación de Registros
                    - button "063 Corrección de Datos" [ref=e259] [cursor=pointer]:
                      - generic [ref=e260]: "063"
                      - generic [ref=e261]: Corrección de Datos
                    - button "064 Trazabilidad y Bitácora de Auditoría" [ref=e262] [cursor=pointer]:
                      - generic [ref=e263]: "064"
                      - generic [ref=e264]: Trazabilidad y Bitácora de Auditoría
            - generic [ref=e265]:
              - generic [ref=e266]:
                - generic [ref=e268]:
                  - generic [ref=e269]: RAIA-BA-004
                  - heading "Afiliación y Cuenta Individual" [level=3] [ref=e270]
                - generic [ref=e271]:
                  - generic [ref=e272]:
                    - generic [ref=e273]:
                      - generic [ref=e274]: Incorporación y Afiliación
                      - generic [ref=e275]: RAIA-BD-010
                    - generic [ref=e276]:
                      - button "065 Localización de Cuenta" [ref=e277] [cursor=pointer]:
                        - generic [ref=e278]: "065"
                        - generic [ref=e279]: Localización de Cuenta
                      - button "040 Registro en AFORE" [ref=e280] [cursor=pointer]:
                        - generic [ref=e281]: "040"
                        - generic [ref=e282]: Registro en AFORE
                      - button "066 Asignación de Cuenta" [ref=e283] [cursor=pointer]:
                        - generic [ref=e284]: "066"
                        - generic [ref=e285]: Asignación de Cuenta
                      - button "067 Reasignación de Cuenta" [ref=e286] [cursor=pointer]:
                        - generic [ref=e287]: "067"
                        - generic [ref=e288]: Reasignación de Cuenta
                      - button "068 Recertificación de Cuenta" [ref=e289] [cursor=pointer]:
                        - generic [ref=e290]: "068"
                        - generic [ref=e291]: Recertificación de Cuenta
                      - button "069 Activación de Cuenta" [ref=e292] [cursor=pointer]:
                        - generic [ref=e293]: "069"
                        - generic [ref=e294]: Activación de Cuenta
                      - button "070 Gestión de Afiliación" [ref=e295] [cursor=pointer]:
                        - generic [ref=e296]: "070"
                        - generic [ref=e297]: Gestión de Afiliación
                  - generic [ref=e298]:
                    - generic [ref=e299]:
                      - generic [ref=e300]: Traspaso y Regularización
                      - generic [ref=e301]: RAIA-BD-011
                    - generic [ref=e302]:
                      - button "045 Traspaso de Cuenta" [ref=e303] [cursor=pointer]:
                        - generic [ref=e304]: "045"
                        - generic [ref=e305]: Traspaso de Cuenta
                      - button "071 Cancelación de Traspaso" [ref=e306] [cursor=pointer]:
                        - generic [ref=e307]: "071"
                        - generic [ref=e308]: Cancelación de Traspaso
                      - button "072 Unificación de Cuentas" [ref=e309] [cursor=pointer]:
                        - generic [ref=e310]: "072"
                        - generic [ref=e311]: Unificación de Cuentas
                      - button "073 Separación de Cuentas" [ref=e312] [cursor=pointer]:
                        - generic [ref=e313]: "073"
                        - generic [ref=e314]: Separación de Cuentas
                      - button "074 Inactivación de Cuenta" [ref=e315] [cursor=pointer]:
                        - generic [ref=e316]: "074"
                        - generic [ref=e317]: Inactivación de Cuenta
                      - button "075 Registro de Fallecimiento" [ref=e318] [cursor=pointer]:
                        - generic [ref=e319]: "075"
                        - generic [ref=e320]: Registro de Fallecimiento
                      - button "076 Recuperación de Cuenta" [ref=e321] [cursor=pointer]:
                        - generic [ref=e322]: "076"
                        - generic [ref=e323]: Recuperación de Cuenta
                      - button "077 Regularización de Cuenta" [ref=e324] [cursor=pointer]:
                        - generic [ref=e325]: "077"
                        - generic [ref=e326]: Regularización de Cuenta
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]: Administración de Cuenta Individual
                      - generic [ref=e330]: RAIA-BD-012
                    - generic [ref=e331]:
                      - button "046 Libro Mayor de Cuenta Individual" [ref=e332] [cursor=pointer]:
                        - generic [ref=e333]: "046"
                        - generic [ref=e334]: Libro Mayor de Cuenta Individual
                      - button "078 Administración de Subcuentas" [ref=e335] [cursor=pointer]:
                        - generic [ref=e336]: "078"
                        - generic [ref=e337]: Administración de Subcuentas
                      - button "079 Gestión de Saldos" [ref=e338] [cursor=pointer]:
                        - generic [ref=e339]: "079"
                        - generic [ref=e340]: Gestión de Saldos
                      - button "080 Registro de Movimientos" [ref=e341] [cursor=pointer]:
                        - generic [ref=e342]: "080"
                        - generic [ref=e343]: Registro de Movimientos
                      - button "081 Asignación de Acciones" [ref=e344] [cursor=pointer]:
                        - generic [ref=e345]: "081"
                        - generic [ref=e346]: Asignación de Acciones
                      - button "082 Asignación de Rendimientos" [ref=e347] [cursor=pointer]:
                        - generic [ref=e348]: "082"
                        - generic [ref=e349]: Asignación de Rendimientos
                      - button "083 Cálculo y Aplicación de Comisiones" [ref=e350] [cursor=pointer]:
                        - generic [ref=e351]: "083"
                        - generic [ref=e352]: Cálculo y Aplicación de Comisiones
                      - button "084 Ajustes de Cuenta" [ref=e353] [cursor=pointer]:
                        - generic [ref=e354]: "084"
                        - generic [ref=e355]: Ajustes de Cuenta
                      - button "085 Estado de Cuenta" [ref=e356] [cursor=pointer]:
                        - generic [ref=e357]: "085"
                        - generic [ref=e358]: Estado de Cuenta
                      - button "086 Historial Transaccional" [ref=e359] [cursor=pointer]:
                        - generic [ref=e360]: "086"
                        - generic [ref=e361]: Historial Transaccional
                      - button "087 Recursos SAR Legacy" [ref=e362] [cursor=pointer]:
                        - generic [ref=e363]: "087"
                        - generic [ref=e364]: Recursos SAR Legacy
                      - button "088 Conciliación de Cuenta Individual" [ref=e365] [cursor=pointer]:
                        - generic [ref=e366]: "088"
                        - generic [ref=e367]: Conciliación de Cuenta Individual
              - generic [ref=e368]:
                - generic [ref=e370]:
                  - generic [ref=e371]: RAIA-BA-005
                  - heading "Recaudación y Aportaciones" [level=3] [ref=e372]
                - generic [ref=e373]:
                  - generic [ref=e374]:
                    - generic [ref=e375]:
                      - generic [ref=e376]: Recaudación Obligatoria
                      - generic [ref=e377]: RAIA-BD-013
                    - generic [ref=e378]:
                      - button "089 Determinación de Aportaciones" [ref=e379] [cursor=pointer]:
                        - generic [ref=e380]: "089"
                        - generic [ref=e381]: Determinación de Aportaciones
                      - button "090 Recaudación de Aportaciones Patronales" [ref=e382] [cursor=pointer]:
                        - generic [ref=e383]: "090"
                        - generic [ref=e384]: Recaudación de Aportaciones Patronales
                      - button "091 Recaudación de Aportaciones Gubernamentales" [ref=e385] [cursor=pointer]:
                        - generic [ref=e386]: "091"
                        - generic [ref=e387]: Recaudación de Aportaciones Gubernamentales
                      - button "092 Registro de Aportaciones de Vivienda" [ref=e388] [cursor=pointer]:
                        - generic [ref=e389]: "092"
                        - generic [ref=e390]: Registro de Aportaciones de Vivienda
                      - button "093 Cuota Social" [ref=e391] [cursor=pointer]:
                        - generic [ref=e392]: "093"
                        - generic [ref=e393]: Cuota Social
                      - button "094 Gestión de Aportaciones Omitidas" [ref=e394] [cursor=pointer]:
                        - generic [ref=e395]: "094"
                        - generic [ref=e396]: Gestión de Aportaciones Omitidas
                      - button "095 Gestión de Morosidad de Aportaciones" [ref=e397] [cursor=pointer]:
                        - generic [ref=e398]: "095"
                        - generic [ref=e399]: Gestión de Morosidad de Aportaciones
                  - generic [ref=e400]:
                    - generic [ref=e401]:
                      - generic [ref=e402]: Ahorro Voluntario
                      - generic [ref=e403]: RAIA-BD-014
                    - generic [ref=e404]:
                      - button "096 Aportaciones Voluntarias" [ref=e405] [cursor=pointer]:
                        - generic [ref=e406]: "096"
                        - generic [ref=e407]: Aportaciones Voluntarias
                      - button "097 Aportaciones Complementarias" [ref=e408] [cursor=pointer]:
                        - generic [ref=e409]: "097"
                        - generic [ref=e410]: Aportaciones Complementarias
                      - button "098 Ahorro de Largo Plazo" [ref=e411] [cursor=pointer]:
                        - generic [ref=e412]: "098"
                        - generic [ref=e413]: Ahorro de Largo Plazo
                      - button "099 Ahorro Solidario" [ref=e414] [cursor=pointer]:
                        - generic [ref=e415]: "099"
                        - generic [ref=e416]: Ahorro Solidario
                      - button "100 Aportaciones de Trabajadores Independientes" [ref=e417] [cursor=pointer]:
                        - generic [ref=e418]: "100"
                        - generic [ref=e419]: Aportaciones de Trabajadores Independientes
                      - button "101 Aportaciones Voluntarias vía Nómina" [ref=e420] [cursor=pointer]:
                        - generic [ref=e421]: "101"
                        - generic [ref=e422]: Aportaciones Voluntarias vía Nómina
                      - button "102 Domiciliación de Ahorro Voluntario" [ref=e423] [cursor=pointer]:
                        - generic [ref=e424]: "102"
                        - generic [ref=e425]: Domiciliación de Ahorro Voluntario
                  - generic [ref=e426]:
                    - generic [ref=e427]:
                      - generic [ref=e428]: Individualización y Conciliación
                      - generic [ref=e429]: RAIA-BD-015
                    - generic [ref=e430]:
                      - button "103 Individualización de Aportaciones" [ref=e431] [cursor=pointer]:
                        - generic [ref=e432]: "103"
                        - generic [ref=e433]: Individualización de Aportaciones
                      - button "104 Resolución de Pagos No Identificados" [ref=e434] [cursor=pointer]:
                        - generic [ref=e435]: "104"
                        - generic [ref=e436]: Resolución de Pagos No Identificados
                      - button "105 Conciliación de Recaudación" [ref=e437] [cursor=pointer]:
                        - generic [ref=e438]: "105"
                        - generic [ref=e439]: Conciliación de Recaudación
                      - button "106 Corrección de Aportaciones" [ref=e440] [cursor=pointer]:
                        - generic [ref=e441]: "106"
                        - generic [ref=e442]: Corrección de Aportaciones
                      - button "107 Transferencia de Aportaciones" [ref=e443] [cursor=pointer]:
                        - generic [ref=e444]: "107"
                        - generic [ref=e445]: Transferencia de Aportaciones
                      - button "108 Devolución de Aportaciones" [ref=e446] [cursor=pointer]:
                        - generic [ref=e447]: "108"
                        - generic [ref=e448]: Devolución de Aportaciones
                      - button "109 Aclaración de Diferencias de Recaudación" [ref=e449] [cursor=pointer]:
                        - generic [ref=e450]: "109"
                        - generic [ref=e451]: Aclaración de Diferencias de Recaudación
              - generic [ref=e452]:
                - generic [ref=e454]:
                  - generic [ref=e455]: RAIA-BA-006
                  - heading "Inversión y SIEFORE" [level=3] [ref=e456]
                - generic [ref=e457]:
                  - generic [ref=e458]:
                    - generic [ref=e459]:
                      - generic [ref=e460]: Diseño y Asignación de Fondos
                      - generic [ref=e461]: RAIA-BD-016
                    - generic [ref=e462]:
                      - button "110 Asignación a SIEFORE Generacional" [ref=e463] [cursor=pointer]:
                        - generic [ref=e464]: "110"
                        - generic [ref=e465]: Asignación a SIEFORE Generacional
                      - button "111 Estrategia de Inversión" [ref=e466] [cursor=pointer]:
                        - generic [ref=e467]: "111"
                        - generic [ref=e468]: Estrategia de Inversión
                      - button "112 Construcción de Portafolio" [ref=e469] [cursor=pointer]:
                        - generic [ref=e470]: "112"
                        - generic [ref=e471]: Construcción de Portafolio
                      - button "113 Gestión de Mandatos de Inversión" [ref=e472] [cursor=pointer]:
                        - generic [ref=e473]: "113"
                        - generic [ref=e474]: Gestión de Mandatos de Inversión
                      - button "114 Gestión de Benchmark" [ref=e475] [cursor=pointer]:
                        - generic [ref=e476]: "114"
                        - generic [ref=e477]: Gestión de Benchmark
                      - button "115 Gestión de Clases de Activos" [ref=e478] [cursor=pointer]:
                        - generic [ref=e479]: "115"
                        - generic [ref=e480]: Gestión de Clases de Activos
                      - button "116 Diseño de Portafolio Objetivo" [ref=e481] [cursor=pointer]:
                        - generic [ref=e482]: "116"
                        - generic [ref=e483]: Diseño de Portafolio Objetivo
                  - generic [ref=e484]:
                    - generic [ref=e485]:
                      - generic [ref=e486]: Operación de Inversiones
                      - generic [ref=e487]: RAIA-BD-017
                    - generic [ref=e488]:
                      - button "117 Ejecución de Operaciones" [ref=e489] [cursor=pointer]:
                        - generic [ref=e490]: "117"
                        - generic [ref=e491]: Ejecución de Operaciones
                      - button "118 Custodia de Valores" [ref=e492] [cursor=pointer]:
                        - generic [ref=e493]: "118"
                        - generic [ref=e494]: Custodia de Valores
                      - button "119 Liquidación de Operaciones" [ref=e495] [cursor=pointer]:
                        - generic [ref=e496]: "119"
                        - generic [ref=e497]: Liquidación de Operaciones
                      - button "120 Acciones Corporativas" [ref=e498] [cursor=pointer]:
                        - generic [ref=e499]: "120"
                        - generic [ref=e500]: Acciones Corporativas
                      - button "121 Administración de Derivados" [ref=e501] [cursor=pointer]:
                        - generic [ref=e502]: "121"
                        - generic [ref=e503]: Administración de Derivados
                      - button "122 Gestión de Liquidez" [ref=e504] [cursor=pointer]:
                        - generic [ref=e505]: "122"
                        - generic [ref=e506]: Gestión de Liquidez
                      - button "123 Préstamo de Valores" [ref=e507] [cursor=pointer]:
                        - generic [ref=e508]: "123"
                        - generic [ref=e509]: Préstamo de Valores
                      - button "124 Gestión de Contrapartes" [ref=e510] [cursor=pointer]:
                        - generic [ref=e511]: "124"
                        - generic [ref=e512]: Gestión de Contrapartes
                      - button "125 Gestión de Instrucciones de Inversión" [ref=e513] [cursor=pointer]:
                        - generic [ref=e514]: "125"
                        - generic [ref=e515]: Gestión de Instrucciones de Inversión
                  - generic [ref=e516]:
                    - generic [ref=e517]:
                      - generic [ref=e518]: Valuación, Riesgo y Desempeño
                      - generic [ref=e519]: RAIA-BD-018
                    - generic [ref=e520]:
                      - button "126 Valuación de Instrumentos" [ref=e521] [cursor=pointer]:
                        - generic [ref=e522]: "126"
                        - generic [ref=e523]: Valuación de Instrumentos
                      - button "127 Valuación de Portafolio" [ref=e524] [cursor=pointer]:
                        - generic [ref=e525]: "127"
                        - generic [ref=e526]: Valuación de Portafolio
                      - button "128 Riesgo de Inversión" [ref=e527] [cursor=pointer]:
                        - generic [ref=e528]: "128"
                        - generic [ref=e529]: Riesgo de Inversión
                      - button "129 Cumplimiento del Régimen de Inversión" [ref=e530] [cursor=pointer]:
                        - generic [ref=e531]: "129"
                        - generic [ref=e532]: Cumplimiento del Régimen de Inversión
                      - button "130 Medición de Desempeño" [ref=e533] [cursor=pointer]:
                        - generic [ref=e534]: "130"
                        - generic [ref=e535]: Medición de Desempeño
                      - button "131 Gestión de Límites y Exposición" [ref=e536] [cursor=pointer]:
                        - generic [ref=e537]: "131"
                        - generic [ref=e538]: Gestión de Límites y Exposición
                      - button "132 Riesgo de Mercado" [ref=e539] [cursor=pointer]:
                        - generic [ref=e540]: "132"
                        - generic [ref=e541]: Riesgo de Mercado
                      - button "133 Riesgo de Crédito de Inversiones" [ref=e542] [cursor=pointer]:
                        - generic [ref=e543]: "133"
                        - generic [ref=e544]: Riesgo de Crédito de Inversiones
                      - button "134 Atribución de Rendimientos" [ref=e545] [cursor=pointer]:
                        - generic [ref=e546]: "134"
                        - generic [ref=e547]: Atribución de Rendimientos
            - generic [ref=e548]:
              - generic [ref=e550]:
                - generic [ref=e551]: RAIA-BA-007
                - heading "Retiros, Prestaciones y Pensiones" [level=3] [ref=e552]
              - generic [ref=e553]:
                - generic [ref=e554]:
                  - generic [ref=e555]:
                    - generic [ref=e556]: Retiros, Parciales
                    - generic [ref=e557]: RAIA-BD-019
                  - generic [ref=e558]:
                    - button "135 Retiro de Ahorro Voluntario" [ref=e559] [cursor=pointer]:
                      - generic [ref=e560]: "135"
                      - generic [ref=e561]: Retiro de Ahorro Voluntario
                    - button "136 Retiro Parcial por Desempleo" [ref=e562] [cursor=pointer]:
                      - generic [ref=e563]: "136"
                      - generic [ref=e564]: Retiro Parcial por Desempleo
                    - button "137 Ayuda para Gastos de Matrimonio" [ref=e565] [cursor=pointer]:
                      - generic [ref=e566]: "137"
                      - generic [ref=e567]: Ayuda para Gastos de Matrimonio
                    - button "138 Retiros Parciales Especiales" [ref=e568] [cursor=pointer]:
                      - generic [ref=e569]: "138"
                      - generic [ref=e570]: Retiros Parciales Especiales
                    - button "139 Validación de Elegibilidad de Retiro" [ref=e571] [cursor=pointer]:
                      - generic [ref=e572]: "139"
                      - generic [ref=e573]: Validación de Elegibilidad de Retiro
                    - button "140 Reintegro de Semanas o Recursos" [ref=e574] [cursor=pointer]:
                      - generic [ref=e575]: "140"
                      - generic [ref=e576]: Reintegro de Semanas o Recursos
                - generic [ref=e577]:
                  - generic [ref=e578]:
                    - generic [ref=e579]: Pensión y Disposición Total
                    - generic [ref=e580]: RAIA-BD-020
                  - generic [ref=e581]:
                    - button "141 Coordinación de Elegibilidad Pensionaria" [ref=e582] [cursor=pointer]:
                      - generic [ref=e583]: "141"
                      - generic [ref=e584]: Coordinación de Elegibilidad Pensionaria
                    - button "142 Elección de Régimen Pensionario" [ref=e585] [cursor=pointer]:
                      - generic [ref=e586]: "142"
                      - generic [ref=e587]: Elección de Régimen Pensionario
                    - button "143 Resolución de Pensión" [ref=e588] [cursor=pointer]:
                      - generic [ref=e589]: "143"
                      - generic [ref=e590]: Resolución de Pensión
                    - button "144 Retiro Programado" [ref=e591] [cursor=pointer]:
                      - generic [ref=e592]: "144"
                      - generic [ref=e593]: Retiro Programado
                    - button "145 Transferencia a Renta Vitalicia" [ref=e594] [cursor=pointer]:
                      - generic [ref=e595]: "145"
                      - generic [ref=e596]: Transferencia a Renta Vitalicia
                    - button "146 Pensión Garantizada" [ref=e597] [cursor=pointer]:
                      - generic [ref=e598]: "146"
                      - generic [ref=e599]: Pensión Garantizada
                    - button "147 Disposición Total de Recursos" [ref=e600] [cursor=pointer]:
                      - generic [ref=e601]: "147"
                      - generic [ref=e602]: Disposición Total de Recursos
                    - button "148 Recuperación de Recursos de Vivienda" [ref=e603] [cursor=pointer]:
                      - generic [ref=e604]: "148"
                      - generic [ref=e605]: Recuperación de Recursos de Vivienda
                    - button "149 Seguimiento de Pago Pensionario" [ref=e606] [cursor=pointer]:
                      - generic [ref=e607]: "149"
                      - generic [ref=e608]: Seguimiento de Pago Pensionario
                - generic [ref=e609]:
                  - generic [ref=e610]:
                    - generic [ref=e611]: Fallecimiento y Beneficiarios
                    - generic [ref=e612]: RAIA-BD-021
                  - generic [ref=e613]:
                    - button "150 Notificación de Fallecimiento" [ref=e614] [cursor=pointer]:
                      - generic [ref=e615]: "150"
                      - generic [ref=e616]: Notificación de Fallecimiento
                    - button "151 Validación de Beneficiarios" [ref=e617] [cursor=pointer]:
                      - generic [ref=e618]: "151"
                      - generic [ref=e619]: Validación de Beneficiarios
                    - button "152 Prestaciones de Sobrevivencia" [ref=e620] [cursor=pointer]:
                      - generic [ref=e621]: "152"
                      - generic [ref=e622]: Prestaciones de Sobrevivencia
                    - button "153 Distribución de Recursos a Beneficiarios" [ref=e623] [cursor=pointer]:
                      - generic [ref=e624]: "153"
                      - generic [ref=e625]: Distribución de Recursos a Beneficiarios
                    - button "154 Gestión de Recursos No Reclamados" [ref=e626] [cursor=pointer]:
                      - generic [ref=e627]: "154"
                      - generic [ref=e628]: Gestión de Recursos No Reclamados
                    - button "155 Resolución de Derechos de Beneficiarios" [ref=e629] [cursor=pointer]:
                      - generic [ref=e630]: "155"
                      - generic [ref=e631]: Resolución de Derechos de Beneficiarios
                - generic [ref=e632]:
                  - generic [ref=e633]:
                    - generic [ref=e634]: Fondo de Pensiones para el Bienestar
                    - generic [ref=e635]: RAIA-BD-022
                  - generic [ref=e636]:
                    - button "156 Identificación de Cuentas Elegibles" [ref=e637] [cursor=pointer]:
                      - generic [ref=e638]: "156"
                      - generic [ref=e639]: Identificación de Cuentas Elegibles
                    - button "157 Transferencia de Recursos al Fondo" [ref=e640] [cursor=pointer]:
                      - generic [ref=e641]: "157"
                      - generic [ref=e642]: Transferencia de Recursos al Fondo
                    - button "158 Coordinación de Complemento Pensionario" [ref=e643] [cursor=pointer]:
                      - generic [ref=e644]: "158"
                      - generic [ref=e645]: Coordinación de Complemento Pensionario
                    - button "159 Reintegro de Recursos" [ref=e646] [cursor=pointer]:
                      - generic [ref=e647]: "159"
                      - generic [ref=e648]: Reintegro de Recursos
                    - button "160 Trazabilidad de Derechos" [ref=e649] [cursor=pointer]:
                      - generic [ref=e650]: "160"
                      - generic [ref=e651]: Trazabilidad de Derechos
                    - button "161 Conciliación con el Fondo" [ref=e652] [cursor=pointer]:
                      - generic [ref=e653]: "161"
                      - generic [ref=e654]: Conciliación con el Fondo
        - generic [ref=e655]:
          - generic [ref=e656]:
            - img [ref=e657]
            - heading "Gobierno, Soporte e Industria" [level=2] [ref=e660]
          - generic [ref=e661]:
            - generic [ref=e662]:
              - generic [ref=e663]:
                - generic [ref=e665]:
                  - generic [ref=e666]: RAIA-BA-001
                  - heading "Gobierno y Dirección del SAR" [level=3] [ref=e667]
                - generic [ref=e668]:
                  - generic [ref=e669]:
                    - generic [ref=e670]:
                      - generic [ref=e671]: Estrategia y Política del SAR
                      - generic [ref=e672]: RAIA-BD-001
                    - generic [ref=e673]:
                      - button "001 Política del Sistema de Ahorro para el Retiro" [ref=e674] [cursor=pointer]:
                        - generic [ref=e675]: "001"
                        - generic [ref=e676]: Política del Sistema de Ahorro para el Retiro
                      - button "002 Estrategia de Industria" [ref=e677] [cursor=pointer]:
                        - generic [ref=e678]: "002"
                        - generic [ref=e679]: Estrategia de Industria
                      - button "003 Planeación Sectorial" [ref=e680] [cursor=pointer]:
                        - generic [ref=e681]: "003"
                        - generic [ref=e682]: Planeación Sectorial
                      - button "004 Gestión de Capacidades de Industria" [ref=e683] [cursor=pointer]:
                        - generic [ref=e684]: "004"
                        - generic [ref=e685]: Gestión de Capacidades de Industria
                      - button "005 Gestión del Modelo Operativo" [ref=e686] [cursor=pointer]:
                        - generic [ref=e687]: "005"
                        - generic [ref=e688]: Gestión del Modelo Operativo
                      - button "006 Gestión de Resultados del SAR" [ref=e689] [cursor=pointer]:
                        - generic [ref=e690]: "006"
                        - generic [ref=e691]: Gestión de Resultados del SAR
                  - generic [ref=e692]:
                    - generic [ref=e693]:
                      - generic [ref=e694]: Regulación y Autorizaciones
                      - generic [ref=e695]: RAIA-BD-002
                    - generic [ref=e696]:
                      - button "007 Gestión del Marco Regulatorio" [ref=e697] [cursor=pointer]:
                        - generic [ref=e698]: "007"
                        - generic [ref=e699]: Gestión del Marco Regulatorio
                      - button "008 Gestión del Cambio Regulatorio" [ref=e700] [cursor=pointer]:
                        - generic [ref=e701]: "008"
                        - generic [ref=e702]: Gestión del Cambio Regulatorio
                      - button "009 Autorización de Participantes" [ref=e703] [cursor=pointer]:
                        - generic [ref=e704]: "009"
                        - generic [ref=e705]: Autorización de Participantes
                      - button "010 Autorización de AFORE y SIEFORE" [ref=e706] [cursor=pointer]:
                        - generic [ref=e707]: "010"
                        - generic [ref=e708]: Autorización de AFORE y SIEFORE
                      - button "011 Gestión Regulatoria de Comisiones" [ref=e709] [cursor=pointer]:
                        - generic [ref=e710]: "011"
                        - generic [ref=e711]: Gestión Regulatoria de Comisiones
                      - button "012 Gestión de Criterios y Consultas Normativas" [ref=e712] [cursor=pointer]:
                        - generic [ref=e713]: "012"
                        - generic [ref=e714]: Gestión de Criterios y Consultas Normativas
                  - generic [ref=e715]:
                    - generic [ref=e716]:
                      - generic [ref=e717]: Gobierno y Desempeño
                      - generic [ref=e718]: RAIA-BD-003
                    - generic [ref=e719]:
                      - button "013 Gobierno Corporativo" [ref=e720] [cursor=pointer]:
                        - generic [ref=e721]: "013"
                        - generic [ref=e722]: Gobierno Corporativo
                      - button "014 Gestión de Portafolio de Industria" [ref=e723] [cursor=pointer]:
                        - generic [ref=e724]: "014"
                        - generic [ref=e725]: Gestión de Portafolio de Industria
                      - button "015 Gestión de Beneficios" [ref=e726] [cursor=pointer]:
                        - generic [ref=e727]: "015"
                        - generic [ref=e728]: Gestión de Beneficios
                      - button "016 Métricas del Sistema" [ref=e729] [cursor=pointer]:
                        - generic [ref=e730]: "016"
                        - generic [ref=e731]: Métricas del Sistema
                      - button "017 Transparencia Sectorial" [ref=e732] [cursor=pointer]:
                        - generic [ref=e733]: "017"
                        - generic [ref=e734]: Transparencia Sectorial
                      - button "018 Gestión de Stakeholders del SAR" [ref=e735] [cursor=pointer]:
                        - generic [ref=e736]: "018"
                        - generic [ref=e737]: Gestión de Stakeholders del SAR
              - generic [ref=e738]:
                - generic [ref=e740]:
                  - generic [ref=e741]: RAIA-BA-002
                  - heading "Riesgo, Cumplimiento y Supervisión" [level=3] [ref=e742]
                - generic [ref=e743]:
                  - generic [ref=e744]:
                    - generic [ref=e745]:
                      - generic [ref=e746]: Supervisión y Control Regulatorio
                      - generic [ref=e747]: RAIA-BD-004
                    - generic [ref=e748]:
                      - button "019 Supervisión Regulatoria" [ref=e749] [cursor=pointer]:
                        - generic [ref=e750]: "019"
                        - generic [ref=e751]: Supervisión Regulatoria
                      - button "022 Inspección Regulatoria" [ref=e752] [cursor=pointer]:
                        - generic [ref=e753]: "022"
                        - generic [ref=e754]: Inspección Regulatoria
                      - button "024 Información Regulatoria" [ref=e755] [cursor=pointer]:
                        - generic [ref=e756]: "024"
                        - generic [ref=e757]: Información Regulatoria
                      - button "025 Atención de Requerimientos Regulatorios" [ref=e758] [cursor=pointer]:
                        - generic [ref=e759]: "025"
                        - generic [ref=e760]: Atención de Requerimientos Regulatorios
                      - button "026 Programas Correctivos" [ref=e761] [cursor=pointer]:
                        - generic [ref=e762]: "026"
                        - generic [ref=e763]: Programas Correctivos
                      - button "027 Gestión de Sanciones" [ref=e764] [cursor=pointer]:
                        - generic [ref=e765]: "027"
                        - generic [ref=e766]: Gestión de Sanciones
                      - button "028 Seguimiento de Hallazgos" [ref=e767] [cursor=pointer]:
                        - generic [ref=e768]: "028"
                        - generic [ref=e769]: Seguimiento de Hallazgos
                  - generic [ref=e770]:
                    - generic [ref=e771]:
                      - generic [ref=e772]: Riesgo y Cumplimiento
                      - generic [ref=e773]: RAIA-BD-005
                    - generic [ref=e774]:
                      - button "029 Gestión de Riesgo Empresarial" [ref=e775] [cursor=pointer]:
                        - generic [ref=e776]: "029"
                        - generic [ref=e777]: Gestión de Riesgo Empresarial
                      - button "030 Gestión de Riesgo Operacional" [ref=e778] [cursor=pointer]:
                        - generic [ref=e779]: "030"
                        - generic [ref=e780]: Gestión de Riesgo Operacional
                      - button "032 Cumplimiento Normativo" [ref=e781] [cursor=pointer]:
                        - generic [ref=e782]: "032"
                        - generic [ref=e783]: Cumplimiento Normativo
                      - button "033 Prevención de Lavado de Dinero y Financiamiento al Terrorismo" [ref=e784] [cursor=pointer]:
                        - generic [ref=e785]: "033"
                        - generic [ref=e786]: Prevención de Lavado de Dinero y Financiamiento al Terrorismo
                      - button "034 Prevención y Gestión de Fraude" [ref=e787] [cursor=pointer]:
                        - generic [ref=e788]: "034"
                        - generic [ref=e789]: Prevención y Gestión de Fraude
                      - button "035 Gestión de Riesgo de Terceros" [ref=e790] [cursor=pointer]:
                        - generic [ref=e791]: "035"
                        - generic [ref=e792]: Gestión de Riesgo de Terceros
                      - button "036 Gestión de Conflictos de Interés" [ref=e793] [cursor=pointer]:
                        - generic [ref=e794]: "036"
                        - generic [ref=e795]: Gestión de Conflictos de Interés
                  - generic [ref=e796]:
                    - generic [ref=e797]:
                      - generic [ref=e798]: Resiliencia y Aseguramiento
                      - generic [ref=e799]: RAIA-BD-006
                    - generic [ref=e800]:
                      - button "037 Continuidad de Negocio" [ref=e801] [cursor=pointer]:
                        - generic [ref=e802]: "037"
                        - generic [ref=e803]: Continuidad de Negocio
                      - button "038 Recuperación ante Desastres" [ref=e804] [cursor=pointer]:
                        - generic [ref=e805]: "038"
                        - generic [ref=e806]: Recuperación ante Desastres
                      - button "039 Ciberseguridad" [ref=e807] [cursor=pointer]:
                        - generic [ref=e808]: "039"
                        - generic [ref=e809]: Ciberseguridad
                      - button "041 Seguridad de la Información" [ref=e810] [cursor=pointer]:
                        - generic [ref=e811]: "041"
                        - generic [ref=e812]: Seguridad de la Información
                      - button "042 Auditoría Interna" [ref=e813] [cursor=pointer]:
                        - generic [ref=e814]: "042"
                        - generic [ref=e815]: Auditoría Interna
                      - button "043 Gestión de Incidentes Mayores" [ref=e816] [cursor=pointer]:
                        - generic [ref=e817]: "043"
                        - generic [ref=e818]: Gestión de Incidentes Mayores
                      - button "044 Pruebas de Resiliencia Operacional" [ref=e819] [cursor=pointer]:
                        - generic [ref=e820]: "044"
                        - generic [ref=e821]: Pruebas de Resiliencia Operacional
            - generic [ref=e822]:
              - generic [ref=e824]:
                - generic [ref=e825]: RAIA-BA-009
                - heading "Servicios Compartidos de Industria" [level=3] [ref=e826]
              - generic [ref=e827]:
                - generic [ref=e828]:
                  - generic [ref=e829]:
                    - generic [ref=e830]: BDNSAR y Registros Maestros
                    - generic [ref=e831]: RAIA-BD-026
                  - generic [ref=e832]:
                    - button "190 Base de Datos Nacional SAR" [ref=e833] [cursor=pointer]:
                      - generic [ref=e834]: "190"
                      - generic [ref=e835]: Base de Datos Nacional SAR
                    - button "191 Registro Maestro de Cuentas" [ref=e836] [cursor=pointer]:
                      - generic [ref=e837]: "191"
                      - generic [ref=e838]: Registro Maestro de Cuentas
                    - button "192 Registro Maestro de Trabajadores" [ref=e839] [cursor=pointer]:
                      - generic [ref=e840]: "192"
                      - generic [ref=e841]: Registro Maestro de Trabajadores
                    - button "193 Registro Maestro de Participantes" [ref=e842] [cursor=pointer]:
                      - generic [ref=e843]: "193"
                      - generic [ref=e844]: Registro Maestro de Participantes
                    - button "194 Datos de Referencia de Industria" [ref=e845] [cursor=pointer]:
                      - generic [ref=e846]: "194"
                      - generic [ref=e847]: Datos de Referencia de Industria
                    - button "195 Calidad de Datos de Industria" [ref=e848] [cursor=pointer]:
                      - generic [ref=e849]: "195"
                      - generic [ref=e850]: Calidad de Datos de Industria
                    - button "196 Calendario Operativo" [ref=e851] [cursor=pointer]:
                      - generic [ref=e852]: "196"
                      - generic [ref=e853]: Calendario Operativo
                    - button "197 Catálogos de Industria" [ref=e854] [cursor=pointer]:
                      - generic [ref=e855]: "197"
                      - generic [ref=e856]: Catálogos de Industria
                - generic [ref=e857]:
                  - generic [ref=e858]:
                    - generic [ref=e859]: Orquestación e Intercambio
                    - generic [ref=e860]: RAIA-BD-027
                  - generic [ref=e861]:
                    - button "198 Orquestación Central de Procesos" [ref=e862] [cursor=pointer]:
                      - generic [ref=e863]: "198"
                      - generic [ref=e864]: Orquestación Central de Procesos
                    - button "199 Intercambio de Información Regulatoria" [ref=e865] [cursor=pointer]:
                      - generic [ref=e866]: "199"
                      - generic [ref=e867]: Intercambio de Información Regulatoria
                    - button "200 Coordinación de Transferencias de Recursos" [ref=e868] [cursor=pointer]:
                      - generic [ref=e869]: "200"
                      - generic [ref=e870]: Coordinación de Transferencias de Recursos
                    - button "201 Compensación entre Participantes" [ref=e871] [cursor=pointer]:
                      - generic [ref=e872]: "201"
                      - generic [ref=e873]: Compensación entre Participantes
                    - button "202 Hub de Eventos y Notificaciones" [ref=e874] [cursor=pointer]:
                      - generic [ref=e875]: "202"
                      - generic [ref=e876]: Hub de Eventos y Notificaciones
                    - button "203 Validación de Identidad de Industria" [ref=e877] [cursor=pointer]:
                      - generic [ref=e878]: "203"
                      - generic [ref=e879]: Validación de Identidad de Industria
                    - button "204 Validación Biométrica de Industria" [ref=e880] [cursor=pointer]:
                      - generic [ref=e881]: "204"
                      - generic [ref=e882]: Validación Biométrica de Industria
                    - button "205 Gestión de Folios y Acuses" [ref=e883] [cursor=pointer]:
                      - generic [ref=e884]: "205"
                      - generic [ref=e885]: Gestión de Folios y Acuses
                    - button "206 Monitoreo de Procesos de Industria" [ref=e886] [cursor=pointer]:
                      - generic [ref=e887]: "206"
                      - generic [ref=e888]: Monitoreo de Procesos de Industria
                - generic [ref=e889]:
                  - generic [ref=e890]:
                    - generic [ref=e891]: Integración con Ecosistema Externo
                    - generic [ref=e892]: RAIA-BD-028
                  - generic [ref=e893]:
                    - button "207 Integración con IMSS" [ref=e894] [cursor=pointer]:
                      - generic [ref=e895]: "207"
                      - generic [ref=e896]: Integración con IMSS
                    - button "208 Integración con ISSSTE" [ref=e897] [cursor=pointer]:
                      - generic [ref=e898]: "208"
                      - generic [ref=e899]: Integración con ISSSTE
                    - button "209 Integración con INFONAVIT" [ref=e900] [cursor=pointer]:
                      - generic [ref=e901]: "209"
                      - generic [ref=e902]: Integración con INFONAVIT
                    - button "210 Integración con FOVISSSTE" [ref=e903] [cursor=pointer]:
                      - generic [ref=e904]: "210"
                      - generic [ref=e905]: Integración con FOVISSSTE
                    - button "211 Integración con Instituciones Bancarias" [ref=e906] [cursor=pointer]:
                      - generic [ref=e907]: "211"
                      - generic [ref=e908]: Integración con Instituciones Bancarias
                    - button "212 Integración con Aseguradoras" [ref=e909] [cursor=pointer]:
                      - generic [ref=e910]: "212"
                      - generic [ref=e911]: Integración con Aseguradoras
                    - button "213 Integración con Custodios y Mercados" [ref=e912] [cursor=pointer]:
                      - generic [ref=e913]: "213"
                      - generic [ref=e914]: Integración con Custodios y Mercados
                    - button "214 Integración con Autoridades Fiscales" [ref=e915] [cursor=pointer]:
                      - generic [ref=e916]: "214"
                      - generic [ref=e917]: Integración con Autoridades Fiscales
                    - button "215 Integración con Entidades Recaudadoras" [ref=e918] [cursor=pointer]:
                      - generic [ref=e919]: "215"
                      - generic [ref=e920]: Integración con Entidades Recaudadoras
            - generic [ref=e921]:
              - generic [ref=e922]:
                - generic [ref=e924]:
                  - generic [ref=e925]: RAIA-BA-010
                  - heading "Capacidades Empresariales y Tecnología" [level=3] [ref=e926]
                - generic [ref=e927]:
                  - generic [ref=e928]:
                    - generic [ref=e929]:
                      - generic [ref=e930]: Datos, Seguridad y Privacidad
                      - generic [ref=e931]: RAIA-BD-029
                    - generic [ref=e932]:
                      - button "216 Gobierno de Datos" [ref=e933] [cursor=pointer]:
                        - generic [ref=e934]: "216"
                        - generic [ref=e935]: Gobierno de Datos
                      - button "217 Metadatos y Linaje" [ref=e936] [cursor=pointer]:
                        - generic [ref=e937]: "217"
                        - generic [ref=e938]: Metadatos y Linaje
                      - button "218 Calidad de Datos Empresarial" [ref=e939] [cursor=pointer]:
                        - generic [ref=e940]: "218"
                        - generic [ref=e941]: Calidad de Datos Empresarial
                      - button "219 Privacidad y Protección de Datos" [ref=e942] [cursor=pointer]:
                        - generic [ref=e943]: "219"
                        - generic [ref=e944]: Privacidad y Protección de Datos
                      - button "220 Gestión de Identidades y Accesos" [ref=e945] [cursor=pointer]:
                        - generic [ref=e946]: "220"
                        - generic [ref=e947]: Gestión de Identidades y Accesos
                      - button "221 Criptografía y Gestión de Secretos" [ref=e948] [cursor=pointer]:
                        - generic [ref=e949]: "221"
                        - generic [ref=e950]: Criptografía y Gestión de Secretos
                      - button "222 Inteligencia de Amenazas" [ref=e951] [cursor=pointer]:
                        - generic [ref=e952]: "222"
                        - generic [ref=e953]: Inteligencia de Amenazas
                      - button "223 Desarrollo Seguro" [ref=e954] [cursor=pointer]:
                        - generic [ref=e955]: "223"
                        - generic [ref=e956]: Desarrollo Seguro
                      - button "224 Gestión de Vulnerabilidades" [ref=e957] [cursor=pointer]:
                        - generic [ref=e958]: "224"
                        - generic [ref=e959]: Gestión de Vulnerabilidades
                  - generic [ref=e960]:
                    - generic [ref=e961]:
                      - generic [ref=e962]: Tecnología y Operación
                      - generic [ref=e963]: RAIA-BD-030
                    - generic [ref=e964]:
                      - button "225 Operaciones de Tecnología" [ref=e965] [cursor=pointer]:
                        - generic [ref=e966]: "225"
                        - generic [ref=e967]: Operaciones de Tecnología
                      - button "226 Ingeniería de Plataformas" [ref=e968] [cursor=pointer]:
                        - generic [ref=e969]: "226"
                        - generic [ref=e970]: Ingeniería de Plataformas
                      - button "227 Gestión de APIs" [ref=e971] [cursor=pointer]:
                        - generic [ref=e972]: "227"
                        - generic [ref=e973]: Gestión de APIs
                      - button "228 Plataforma de Eventos" [ref=e974] [cursor=pointer]:
                        - generic [ref=e975]: "228"
                        - generic [ref=e976]: Plataforma de Eventos
                      - button "229 Plataforma de Integración" [ref=e977] [cursor=pointer]:
                        - generic [ref=e978]: "229"
                        - generic [ref=e979]: Plataforma de Integración
                      - button "230 Observabilidad" [ref=e980] [cursor=pointer]:
                        - generic [ref=e981]: "230"
                        - generic [ref=e982]: Observabilidad
                      - button "231 Gestión de Servicios de TI" [ref=e983] [cursor=pointer]:
                        - generic [ref=e984]: "231"
                        - generic [ref=e985]: Gestión de Servicios de TI
                      - button "232 Gestión de Configuración" [ref=e986] [cursor=pointer]:
                        - generic [ref=e987]: "232"
                        - generic [ref=e988]: Gestión de Configuración
                      - button "233 Gestión de Capacidad" [ref=e989] [cursor=pointer]:
                        - generic [ref=e990]: "233"
                        - generic [ref=e991]: Gestión de Capacidad
                      - button "234 Gestión de Ambientes" [ref=e992] [cursor=pointer]:
                        - generic [ref=e993]: "234"
                        - generic [ref=e994]: Gestión de Ambientes
                      - button "235 Automatización y CI/CD" [ref=e995] [cursor=pointer]:
                        - generic [ref=e996]: "235"
                        - generic [ref=e997]: Automatización y CI/CD
                      - button "236 Recuperación Tecnológica" [ref=e998] [cursor=pointer]:
                        - generic [ref=e999]: "236"
                        - generic [ref=e1000]: Recuperación Tecnológica
                  - generic [ref=e1001]:
                    - generic [ref=e1002]:
                      - generic [ref=e1003]: Capacidades Corporativas
                      - generic [ref=e1004]: RAIA-BD-031
                    - generic [ref=e1005]:
                      - button "237 Contabilidad Financiera" [ref=e1006] [cursor=pointer]:
                        - generic [ref=e1007]: "237"
                        - generic [ref=e1008]: Contabilidad Financiera
                      - button "238 Gestión Financiera de Tecnología" [ref=e1009] [cursor=pointer]:
                        - generic [ref=e1010]: "238"
                        - generic [ref=e1011]: Gestión Financiera de Tecnología
                      - button "239 Compras" [ref=e1012] [cursor=pointer]:
                        - generic [ref=e1013]: "239"
                        - generic [ref=e1014]: Compras
                      - button "240 Gestión de Proveedores" [ref=e1015] [cursor=pointer]:
                        - generic [ref=e1016]: "240"
                        - generic [ref=e1017]: Gestión de Proveedores
                      - button "241 Gestión de Capital Humano" [ref=e1018] [cursor=pointer]:
                        - generic [ref=e1019]: "241"
                        - generic [ref=e1020]: Gestión de Capital Humano
                      - button "242 Servicios Jurídicos" [ref=e1021] [cursor=pointer]:
                        - generic [ref=e1022]: "242"
                        - generic [ref=e1023]: Servicios Jurídicos
                      - button "243 Gestión de Registros" [ref=e1024] [cursor=pointer]:
                        - generic [ref=e1025]: "243"
                        - generic [ref=e1026]: Gestión de Registros
                      - button "244 Arquitectura Empresarial" [ref=e1027] [cursor=pointer]:
                        - generic [ref=e1028]: "244"
                        - generic [ref=e1029]: Arquitectura Empresarial
                      - button "245 Gestión de Portafolio Empresarial" [ref=e1030] [cursor=pointer]:
                        - generic [ref=e1031]: "245"
                        - generic [ref=e1032]: Gestión de Portafolio Empresarial
                      - button "246 Gestión de Contratos" [ref=e1033] [cursor=pointer]:
                        - generic [ref=e1034]: "246"
                        - generic [ref=e1035]: Gestión de Contratos
                      - button "247 Estrategia de Salida de Proveedores" [ref=e1036] [cursor=pointer]:
                        - generic [ref=e1037]: "247"
                        - generic [ref=e1038]: Estrategia de Salida de Proveedores
              - generic [ref=e1039]:
                - generic [ref=e1041]:
                  - generic [ref=e1042]: RAIA-BA-011
                  - heading "Evolución, Arquitectura, Innovación y Conocimiento" [level=3] [ref=e1043]
                - generic [ref=e1044]:
                  - generic [ref=e1045]:
                    - generic [ref=e1046]:
                      - generic [ref=e1047]: Arquitectura y Estándares
                      - generic [ref=e1048]: RAIA-BD-032
                    - generic [ref=e1049]:
                      - button "248 Gobierno de Arquitectura Empresarial" [ref=e1050] [cursor=pointer]:
                        - generic [ref=e1051]: "248"
                        - generic [ref=e1052]: Gobierno de Arquitectura Empresarial
                      - button "249 Estándares y Lineamientos" [ref=e1053] [cursor=pointer]:
                        - generic [ref=e1054]: "249"
                        - generic [ref=e1055]: Estándares y Lineamientos
                      - button "250 Catálogo de Patrones" [ref=e1056] [cursor=pointer]:
                        - generic [ref=e1057]: "250"
                        - generic [ref=e1058]: Catálogo de Patrones
                      - button "251 Autoridad de Diseño de Soluciones" [ref=e1059] [cursor=pointer]:
                        - generic [ref=e1060]: "251"
                        - generic [ref=e1061]: Autoridad de Diseño de Soluciones
                      - button "252 Radar Tecnológico" [ref=e1062] [cursor=pointer]:
                        - generic [ref=e1063]: "252"
                        - generic [ref=e1064]: Radar Tecnológico
                      - button "253 Gestión de Deuda Técnica" [ref=e1065] [cursor=pointer]:
                        - generic [ref=e1066]: "253"
                        - generic [ref=e1067]: Gestión de Deuda Técnica
                      - button "254 Gestión de Excepciones Arquitectónicas" [ref=e1068] [cursor=pointer]:
                        - generic [ref=e1069]: "254"
                        - generic [ref=e1070]: Gestión de Excepciones Arquitectónicas
                      - button "255 Arquitecturas de Referencia" [ref=e1071] [cursor=pointer]:
                        - generic [ref=e1072]: "255"
                        - generic [ref=e1073]: Arquitecturas de Referencia
                  - generic [ref=e1074]:
                    - generic [ref=e1075]:
                      - generic [ref=e1076]: Analítica, Modelos e Inteligencia Artificial
                      - generic [ref=e1077]: RAIA-BD-033
                    - generic [ref=e1078]:
                      - button "256 Analítica Regulatoria" [ref=e1079] [cursor=pointer]:
                        - generic [ref=e1080]: "256"
                        - generic [ref=e1081]: Analítica Regulatoria
                      - button "257 Modelos Actuariales" [ref=e1082] [cursor=pointer]:
                        - generic [ref=e1083]: "257"
                        - generic [ref=e1084]: Modelos Actuariales
                      - button "258 Modelos de Inversión" [ref=e1085] [cursor=pointer]:
                        - generic [ref=e1086]: "258"
                        - generic [ref=e1087]: Modelos de Inversión
                      - button "259 Modelos de Comportamiento del Trabajador" [ref=e1088] [cursor=pointer]:
                        - generic [ref=e1089]: "259"
                        - generic [ref=e1090]: Modelos de Comportamiento del Trabajador
                      - button "260 Modelos de Fraude" [ref=e1091] [cursor=pointer]:
                        - generic [ref=e1092]: "260"
                        - generic [ref=e1093]: Modelos de Fraude
                      - button "261 Gobierno de Inteligencia Artificial" [ref=e1094] [cursor=pointer]:
                        - generic [ref=e1095]: "261"
                        - generic [ref=e1096]: Gobierno de Inteligencia Artificial
                      - button "262 Plataforma de Ciencia de Datos" [ref=e1097] [cursor=pointer]:
                        - generic [ref=e1098]: "262"
                        - generic [ref=e1099]: Plataforma de Ciencia de Datos
                      - button "263 Gestión del Ciclo de Vida de Modelos" [ref=e1100] [cursor=pointer]:
                        - generic [ref=e1101]: "263"
                        - generic [ref=e1102]: Gestión del Ciclo de Vida de Modelos
                      - button "264 Monitoreo de Modelos" [ref=e1103] [cursor=pointer]:
                        - generic [ref=e1104]: "264"
                        - generic [ref=e1105]: Monitoreo de Modelos
                  - generic [ref=e1106]:
                    - generic [ref=e1107]:
                      - generic [ref=e1108]: Innovación y Gestión del Cambio
                      - generic [ref=e1109]: RAIA-BD-034
                    - generic [ref=e1110]:
                      - button "265 Diseño de Servicios" [ref=e1111] [cursor=pointer]:
                        - generic [ref=e1112]: "265"
                        - generic [ref=e1113]: Diseño de Servicios
                      - button "266 Portafolio de Innovación" [ref=e1114] [cursor=pointer]:
                        - generic [ref=e1115]: "266"
                        - generic [ref=e1116]: Portafolio de Innovación
                      - button "267 Investigación de Industria" [ref=e1117] [cursor=pointer]:
                        - generic [ref=e1118]: "267"
                        - generic [ref=e1119]: Investigación de Industria
                      - button "268 Sandbox Regulatorio" [ref=e1120] [cursor=pointer]:
                        - generic [ref=e1121]: "268"
                        - generic [ref=e1122]: Sandbox Regulatorio
                      - button "269 Gestión del Conocimiento" [ref=e1123] [cursor=pointer]:
                        - generic [ref=e1124]: "269"
                        - generic [ref=e1125]: Gestión del Conocimiento
                      - button "270 Gestión del Cambio y Adopción" [ref=e1126] [cursor=pointer]:
                        - generic [ref=e1127]: "270"
                        - generic [ref=e1128]: Gestión del Cambio y Adopción
                      - button "271 Capacitación y Certificación" [ref=e1129] [cursor=pointer]:
                        - generic [ref=e1130]: "271"
                        - generic [ref=e1131]: Capacitación y Certificación
                      - button "272 Mejora Continua" [ref=e1132] [cursor=pointer]:
                        - generic [ref=e1133]: "272"
                        - generic [ref=e1134]: Mejora Continua
                      - button "273 Gestión de Comunidad RAIA" [ref=e1135] [cursor=pointer]:
                        - generic [ref=e1136]: "273"
                        - generic [ref=e1137]: Gestión de Comunidad RAIA
  - contentinfo [ref=e1138]:
    - generic [ref=e1139]:
      - paragraph [ref=e1140]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e1141]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e1147] [cursor=pointer]:
    - generic [ref=e1150]:
      - text: Compiling
      - generic [ref=e1151]:
        - generic [ref=e1152]: .
        - generic [ref=e1153]: .
        - generic [ref=e1154]: .
  - alert [ref=e1155]
```