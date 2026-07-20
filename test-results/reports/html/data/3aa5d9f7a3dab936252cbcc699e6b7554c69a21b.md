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
+ Received  + 6691

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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-010</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-065\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-065: Localiz...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-065\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-040\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-040: Registr...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-040\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-066\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-066: Asignac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-066\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-067\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-067: Reasign...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-067\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-068\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-068: Recerti...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-068\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-069\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-069: Activac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-069\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-070\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-070: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-070\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-011</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(1) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-045\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-045: Traspas...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-045\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-071\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-071: Cancela...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-071\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-072\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-072: Unifica...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-072\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+               "bgColor": "#c69a3b",
+               "contrastRatio": 2.09,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f1e6ce",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.09 (foreground color: #f1e6ce, background color: #c69a3b, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#C69A3B\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.09 (foreground color: #f1e6ce, background color: #c69a3b, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-005</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c69a3b",
+               "contrastRatio": 2.59,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.59 (foreground color: #ffffff, background color: #c69a3b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#C69A3B\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.59 (foreground color: #ffffff, background color: #c69a3b, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold truncate uppercase tracking-wider\">Recaudación y Aportaciones</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > h3",
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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-013</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-089\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-089: Determi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-089\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-090\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-090: Recauda...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-090\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-091\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-091: Recauda...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-091\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-092\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-092: Registr...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-092\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">092</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-092\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-093\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-093: Cuota S...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-093\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-094\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-094: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-094\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">094</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-094\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-095\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-095: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-095\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">095</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-095\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-014</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(2) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-096\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-096: Aportac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-096\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-097\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-097: Aportac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-097\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-098\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-098: Ahorro ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-098\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+               "bgColor": "#cad3da",
+               "contrastRatio": 1.37,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#f2f4f6",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.37 (foreground color: #f2f4f6, background color: #cad3da, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#CAD3DA\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.37 (foreground color: #f2f4f6, background color: #cad3da, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-mono font-bold opacity-75 shrink-0\">RAIA-BA-006</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > .opacity-75.shrink-0.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#cad3da",
+               "contrastRatio": 1.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.51 (foreground color: #ffffff, background color: #cad3da, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-4 py-2 text-white flex items-center justify-between gap-2 shrink-0\" style=\"background-color:#CAD3DA\">",
+                 "target": Array [
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .py-2.px-4.text-white",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.51 (foreground color: #ffffff, background color: #cad3da, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold truncate uppercase tracking-wider\">Inversión y SIEFORE</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .py-2.px-4.text-white > .min-w-0.gap-1\\.5 > h3",
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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-016</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(1) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-110\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-110: Asignac...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-110\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-111\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-111: Estrate...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-111\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-112\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-112: Constru...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-112\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-113\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-113: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-113\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-114\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-114: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-114\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">114</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-114\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-115\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-115: Gestión...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-115\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">115</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-115\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-116\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-116: Diseño ...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-116\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-mono text-[8px] opacity-60\">116</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[data-service-domain-id=\"RAIA-SD-116\"] > .opacity-60.text-\\[8px\\].font-mono",
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
+                   ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.0pt (8px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[8px] font-mono font-bold text-slate-400 shrink-0\">RAIA-BD-017</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:grid-cols-3 > .bg-white.h-full.overflow-hidden:nth-child(3) > .p-3\\.5.overflow-y-auto.space-y-4 > .space-y-1\\.5:nth-child(2) > .pb-1.border-slate-100.border-b > .text-slate-400.shrink-0.font-bold",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-117\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-117: Ejecuci...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-117\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-118\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-118: Custodi...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-118\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
+                 "html": "<button data-testid=\"service-domain-card\" data-service-domain-...=\"RAIA-SD-119\" class=\"text-left px-2 py-1 ...\" title=\"RAIA-SD-119: Liquida...\">",
+                 "target": Array [
+                   "button[data-service-domain-id=\"RAIA-SD-119\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.29 (foreground color: #818b99, background color: #f8fafc, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
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
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "RAIA 0.1.0 Red de Arquitectura de Industria" [ref=e5] [cursor=pointer]:
          - /url: /
          - img [ref=e7]
          - generic [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: RAIA
              - generic [ref=e16]: 0.1.0
            - generic [ref=e17]: Red de Arquitectura de Industria
        - generic [ref=e18]: Referencia
      - button "Buscar en el portal (Presione Control + K)" [ref=e20]:
        - generic [ref=e21]:
          - img [ref=e22]
          - generic [ref=e25]: Buscar en RAIA...
        - generic [ref=e26]:
          - generic [ref=e27]: Ctrl
          - generic [ref=e28]: K
      - navigation [ref=e29]:
        - link "Overview" [ref=e30] [cursor=pointer]:
          - /url: /
        - link "Service Landscape" [ref=e31] [cursor=pointer]:
          - /url: /service-landscape/value-chain
        - link "Scenarios" [ref=e32] [cursor=pointer]:
          - /url: /business-scenarios
        - button "Más" [ref=e34]:
          - text: Más
          - img [ref=e35]
  - main [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]:
            - img [ref=e43]
            - heading "Filtros y Búsqueda" [level=2] [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]: "Coincidencias:"
            - generic [ref=e48]: 273 / 273
        - generic [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e51]: Área de Negocio
            - combobox [ref=e52]:
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
          - generic [ref=e53]:
            - generic [ref=e54]: Dominio de Negocio
            - combobox [ref=e55]:
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
          - generic [ref=e56]:
            - generic [ref=e57]: Rol del Actor
            - combobox [ref=e58]:
              - option "Todos los Actores" [selected]
              - option "AFORE"
              - option "AFORE receptora"
              - option "AFORE transferente"
              - option "CONSAR"
              - option "Empresa Operadora"
              - option "Trabajador"
          - generic [ref=e59]:
            - generic [ref=e60]: Estatus de Ciclo de Vida
            - combobox [ref=e61]:
              - option "Todos los Estatus" [selected]
              - option "Draft"
              - option "Proposed"
              - option "Validated"
              - option "Active"
              - option "Deprecated"
          - generic [ref=e62]:
            - generic [ref=e63]: Nivel de Madurez
            - combobox [ref=e64]:
              - option "Todas las Madureces" [selected]
              - option "Conceptual"
              - option "Defined"
              - option "Validated"
              - option "Adopted"
      - generic [ref=e66]:
        - generic [ref=e67]:
          - generic [ref=e68]:
            - img [ref=e69]
            - heading "Front-Office & Experiencia" [level=2] [ref=e75]
          - generic [ref=e77]:
            - generic [ref=e79]:
              - generic [ref=e80]: RAIA-BA-008
              - heading "Servicio, Canales y Experiencia" [level=3] [ref=e81]
            - generic [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - generic [ref=e85]: Omnicanalidad
                  - generic [ref=e86]: RAIA-BD-023
                - generic [ref=e87]:
                  - button "162 Atención Omnicanal" [ref=e88] [cursor=pointer]:
                    - generic [ref=e89]: "162"
                    - generic [ref=e90]: Atención Omnicanal
                  - button "163 Autoservicio Digital" [ref=e91] [cursor=pointer]:
                    - generic [ref=e92]: "163"
                    - generic [ref=e93]: Autoservicio Digital
                  - button "164 Aplicación Móvil" [ref=e94] [cursor=pointer]:
                    - generic [ref=e95]: "164"
                    - generic [ref=e96]: Aplicación Móvil
                  - button "165 Portal Web" [ref=e97] [cursor=pointer]:
                    - generic [ref=e98]: "165"
                    - generic [ref=e99]: Portal Web
                  - button "166 Centro de Contacto" [ref=e100] [cursor=pointer]:
                    - generic [ref=e101]: "166"
                    - generic [ref=e102]: Centro de Contacto
                  - button "167 Atención en Sucursal" [ref=e103] [cursor=pointer]:
                    - generic [ref=e104]: "167"
                    - generic [ref=e105]: Atención en Sucursal
                  - button "168 Correspondencia" [ref=e106] [cursor=pointer]:
                    - generic [ref=e107]: "168"
                    - generic [ref=e108]: Correspondencia
                  - button "169 Notificaciones" [ref=e109] [cursor=pointer]:
                    - generic [ref=e110]: "169"
                    - generic [ref=e111]: Notificaciones
                  - button "170 Gestión de Acceso a Canales" [ref=e112] [cursor=pointer]:
                    - generic [ref=e113]: "170"
                    - generic [ref=e114]: Gestión de Acceso a Canales
                  - button "171 Historial de Interacciones" [ref=e115] [cursor=pointer]:
                    - generic [ref=e116]: "171"
                    - generic [ref=e117]: Historial de Interacciones
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Solicitudes, Casos y Reclamaciones
                  - generic [ref=e121]: RAIA-BD-024
                - generic [ref=e122]:
                  - button "172 Gestión de Solicitudes de Servicio" [ref=e123] [cursor=pointer]:
                    - generic [ref=e124]: "172"
                    - generic [ref=e125]: Gestión de Solicitudes de Servicio
                  - button "173 Gestión de Casos" [ref=e126] [cursor=pointer]:
                    - generic [ref=e127]: "173"
                    - generic [ref=e128]: Gestión de Casos
                  - button "174 Gestión de Aclaraciones" [ref=e129] [cursor=pointer]:
                    - generic [ref=e130]: "174"
                    - generic [ref=e131]: Gestión de Aclaraciones
                  - button "175 Gestión de Quejas" [ref=e132] [cursor=pointer]:
                    - generic [ref=e133]: "175"
                    - generic [ref=e134]: Gestión de Quejas
                  - button "176 Coordinación con UNE" [ref=e135] [cursor=pointer]:
                    - generic [ref=e136]: "176"
                    - generic [ref=e137]: Coordinación con UNE
                  - button "177 Interacción con CONDUSEF" [ref=e138] [cursor=pointer]:
                    - generic [ref=e139]: "177"
                    - generic [ref=e140]: Interacción con CONDUSEF
                  - button "178 Gestión de Niveles de Servicio" [ref=e141] [cursor=pointer]:
                    - generic [ref=e142]: "178"
                    - generic [ref=e143]: Gestión de Niveles de Servicio
                  - button "179 Análisis de Causa Raíz" [ref=e144] [cursor=pointer]:
                    - generic [ref=e145]: "179"
                    - generic [ref=e146]: Análisis de Causa Raíz
                  - button "180 Seguimiento de Compromisos" [ref=e147] [cursor=pointer]:
                    - generic [ref=e148]: "180"
                    - generic [ref=e149]: Seguimiento de Compromisos
              - generic [ref=e150]:
                - generic [ref=e151]:
                  - generic [ref=e152]: Educación y Comercialización
                  - generic [ref=e153]: RAIA-BD-025
                - generic [ref=e154]:
                  - button "181 Educación Financiera y Previsional" [ref=e155] [cursor=pointer]:
                    - generic [ref=e156]: "181"
                    - generic [ref=e157]: Educación Financiera y Previsional
                  - button "182 Gobierno de Publicidad" [ref=e158] [cursor=pointer]:
                    - generic [ref=e159]: "182"
                    - generic [ref=e160]: Gobierno de Publicidad
                  - button "183 Gestión de Asesores Previsionales" [ref=e161] [cursor=pointer]:
                    - generic [ref=e162]: "183"
                    - generic [ref=e163]: Gestión de Asesores Previsionales
                  - button "184 Gestión de Campañas" [ref=e164] [cursor=pointer]:
                    - generic [ref=e165]: "184"
                    - generic [ref=e166]: Gestión de Campañas
                  - button "185 Gestión de Prospectos" [ref=e167] [cursor=pointer]:
                    - generic [ref=e168]: "185"
                    - generic [ref=e169]: Gestión de Prospectos
                  - button "186 Conocimiento del Trabajador" [ref=e170] [cursor=pointer]:
                    - generic [ref=e171]: "186"
                    - generic [ref=e172]: Conocimiento del Trabajador
                  - button "187 Medición de Satisfacción" [ref=e173] [cursor=pointer]:
                    - generic [ref=e174]: "187"
                    - generic [ref=e175]: Medición de Satisfacción
                  - button "188 Gestión de Retroalimentación" [ref=e176] [cursor=pointer]:
                    - generic [ref=e177]: "188"
                    - generic [ref=e178]: Gestión de Retroalimentación
                  - button "189 Comparación de Servicios y Rendimientos" [ref=e179] [cursor=pointer]:
                    - generic [ref=e180]: "189"
                    - generic [ref=e181]: Comparación de Servicios y Rendimientos
        - generic [ref=e182]:
          - generic [ref=e183]:
            - img [ref=e184]
            - heading "Operación y Procesos Core" [level=2] [ref=e188]
          - generic [ref=e189]:
            - generic [ref=e190]:
              - generic [ref=e192]:
                - generic [ref=e193]: RAIA-BA-003
                - heading "Identidad, Partes y Expediente" [level=3] [ref=e194]
              - generic [ref=e195]:
                - generic [ref=e196]:
                  - generic [ref=e197]:
                    - generic [ref=e198]: Datos de Personas y Organizaciones
                    - generic [ref=e199]: RAIA-BD-007
                  - generic [ref=e200]:
                    - button "020 Datos del Trabajador" [ref=e201] [cursor=pointer]:
                      - generic [ref=e202]: "020"
                      - generic [ref=e203]: Datos del Trabajador
                    - button "047 Datos de Beneficiarios" [ref=e204] [cursor=pointer]:
                      - generic [ref=e205]: "047"
                      - generic [ref=e206]: Datos de Beneficiarios
                    - button "048 Datos del Patrón" [ref=e207] [cursor=pointer]:
                      - generic [ref=e208]: "048"
                      - generic [ref=e209]: Datos del Patrón
                    - button "049 Datos de Dependencias Públicas" [ref=e210] [cursor=pointer]:
                      - generic [ref=e211]: "049"
                      - generic [ref=e212]: Datos de Dependencias Públicas
                    - button "050 Directorio de Participantes del SAR" [ref=e213] [cursor=pointer]:
                      - generic [ref=e214]: "050"
                      - generic [ref=e215]: Directorio de Participantes del SAR
                    - button "051 Gestión de Contacto y Domicilio" [ref=e216] [cursor=pointer]:
                      - generic [ref=e217]: "051"
                      - generic [ref=e218]: Gestión de Contacto y Domicilio
                    - button "052 Gestión de Relaciones entre Partes" [ref=e219] [cursor=pointer]:
                      - generic [ref=e220]: "052"
                      - generic [ref=e221]: Gestión de Relaciones entre Partes
                - generic [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e224]: Identidad, Autenticación y Consentimiento
                    - generic [ref=e225]: RAIA-BD-008
                  - generic [ref=e226]:
                    - button "021 Resolución de Identidad" [ref=e227] [cursor=pointer]:
                      - generic [ref=e228]: "021"
                      - generic [ref=e229]: Resolución de Identidad
                    - button "053 Gestión de CURP, NSS y RFC" [ref=e230] [cursor=pointer]:
                      - generic [ref=e231]: "053"
                      - generic [ref=e232]: Gestión de CURP, NSS y RFC
                    - button "023 Identidad Biométrica" [ref=e233] [cursor=pointer]:
                      - generic [ref=e234]: "023"
                      - generic [ref=e235]: Identidad Biométrica
                    - button "054 Autenticación del Trabajador" [ref=e236] [cursor=pointer]:
                      - generic [ref=e237]: "054"
                      - generic [ref=e238]: Autenticación del Trabajador
                    - button "055 Gestión de Derechos de Acceso" [ref=e239] [cursor=pointer]:
                      - generic [ref=e240]: "055"
                      - generic [ref=e241]: Gestión de Derechos de Acceso
                    - button "056 Gestión de Consentimiento" [ref=e242] [cursor=pointer]:
                      - generic [ref=e243]: "056"
                      - generic [ref=e244]: Gestión de Consentimiento
                    - button "057 Prueba de Vida" [ref=e245] [cursor=pointer]:
                      - generic [ref=e246]: "057"
                      - generic [ref=e247]: Prueba de Vida
                    - button "058 Gestión de Representación Legal" [ref=e248] [cursor=pointer]:
                      - generic [ref=e249]: "058"
                      - generic [ref=e250]: Gestión de Representación Legal
                - generic [ref=e251]:
                  - generic [ref=e252]:
                    - generic [ref=e253]: Expediente y Evidencia
                    - generic [ref=e254]: RAIA-BD-009
                  - generic [ref=e255]:
                    - button "031 Expediente Electrónico" [ref=e256] [cursor=pointer]:
                      - generic [ref=e257]: "031"
                      - generic [ref=e258]: Expediente Electrónico
                    - button "059 Gestión Documental" [ref=e259] [cursor=pointer]:
                      - generic [ref=e260]: "059"
                      - generic [ref=e261]: Gestión Documental
                    - button "060 Evidencia Digital" [ref=e262] [cursor=pointer]:
                      - generic [ref=e263]: "060"
                      - generic [ref=e264]: Evidencia Digital
                    - button "061 Firma Electrónica y No Repudio" [ref=e265] [cursor=pointer]:
                      - generic [ref=e266]: "061"
                      - generic [ref=e267]: Firma Electrónica y No Repudio
                    - button "062 Conservación de Registros" [ref=e268] [cursor=pointer]:
                      - generic [ref=e269]: "062"
                      - generic [ref=e270]: Conservación de Registros
                    - button "063 Corrección de Datos" [ref=e271] [cursor=pointer]:
                      - generic [ref=e272]: "063"
                      - generic [ref=e273]: Corrección de Datos
                    - button "064 Trazabilidad y Bitácora de Auditoría" [ref=e274] [cursor=pointer]:
                      - generic [ref=e275]: "064"
                      - generic [ref=e276]: Trazabilidad y Bitácora de Auditoría
            - generic [ref=e277]:
              - generic [ref=e278]:
                - generic [ref=e280]:
                  - generic [ref=e281]: RAIA-BA-004
                  - heading "Afiliación y Cuenta Individual" [level=3] [ref=e282]
                - generic [ref=e283]:
                  - generic [ref=e284]:
                    - generic [ref=e285]:
                      - generic [ref=e286]: Incorporación y Afiliación
                      - generic [ref=e287]: RAIA-BD-010
                    - generic [ref=e288]:
                      - button "065 Localización de Cuenta" [ref=e289] [cursor=pointer]:
                        - generic [ref=e290]: "065"
                        - generic [ref=e291]: Localización de Cuenta
                      - button "040 Registro en AFORE" [ref=e292] [cursor=pointer]:
                        - generic [ref=e293]: "040"
                        - generic [ref=e294]: Registro en AFORE
                      - button "066 Asignación de Cuenta" [ref=e295] [cursor=pointer]:
                        - generic [ref=e296]: "066"
                        - generic [ref=e297]: Asignación de Cuenta
                      - button "067 Reasignación de Cuenta" [ref=e298] [cursor=pointer]:
                        - generic [ref=e299]: "067"
                        - generic [ref=e300]: Reasignación de Cuenta
                      - button "068 Recertificación de Cuenta" [ref=e301] [cursor=pointer]:
                        - generic [ref=e302]: "068"
                        - generic [ref=e303]: Recertificación de Cuenta
                      - button "069 Activación de Cuenta" [ref=e304] [cursor=pointer]:
                        - generic [ref=e305]: "069"
                        - generic [ref=e306]: Activación de Cuenta
                      - button "070 Gestión de Afiliación" [ref=e307] [cursor=pointer]:
                        - generic [ref=e308]: "070"
                        - generic [ref=e309]: Gestión de Afiliación
                  - generic [ref=e310]:
                    - generic [ref=e311]:
                      - generic [ref=e312]: Traspaso y Regularización
                      - generic [ref=e313]: RAIA-BD-011
                    - generic [ref=e314]:
                      - button "045 Traspaso de Cuenta" [ref=e315] [cursor=pointer]:
                        - generic [ref=e316]: "045"
                        - generic [ref=e317]: Traspaso de Cuenta
                      - button "071 Cancelación de Traspaso" [ref=e318] [cursor=pointer]:
                        - generic [ref=e319]: "071"
                        - generic [ref=e320]: Cancelación de Traspaso
                      - button "072 Unificación de Cuentas" [ref=e321] [cursor=pointer]:
                        - generic [ref=e322]: "072"
                        - generic [ref=e323]: Unificación de Cuentas
                      - button "073 Separación de Cuentas" [ref=e324] [cursor=pointer]:
                        - generic [ref=e325]: "073"
                        - generic [ref=e326]: Separación de Cuentas
                      - button "074 Inactivación de Cuenta" [ref=e327] [cursor=pointer]:
                        - generic [ref=e328]: "074"
                        - generic [ref=e329]: Inactivación de Cuenta
                      - button "075 Registro de Fallecimiento" [ref=e330] [cursor=pointer]:
                        - generic [ref=e331]: "075"
                        - generic [ref=e332]: Registro de Fallecimiento
                      - button "076 Recuperación de Cuenta" [ref=e333] [cursor=pointer]:
                        - generic [ref=e334]: "076"
                        - generic [ref=e335]: Recuperación de Cuenta
                      - button "077 Regularización de Cuenta" [ref=e336] [cursor=pointer]:
                        - generic [ref=e337]: "077"
                        - generic [ref=e338]: Regularización de Cuenta
                  - generic [ref=e339]:
                    - generic [ref=e340]:
                      - generic [ref=e341]: Administración de Cuenta Individual
                      - generic [ref=e342]: RAIA-BD-012
                    - generic [ref=e343]:
                      - button "046 Libro Mayor de Cuenta Individual" [ref=e344] [cursor=pointer]:
                        - generic [ref=e345]: "046"
                        - generic [ref=e346]: Libro Mayor de Cuenta Individual
                      - button "078 Administración de Subcuentas" [ref=e347] [cursor=pointer]:
                        - generic [ref=e348]: "078"
                        - generic [ref=e349]: Administración de Subcuentas
                      - button "079 Gestión de Saldos" [ref=e350] [cursor=pointer]:
                        - generic [ref=e351]: "079"
                        - generic [ref=e352]: Gestión de Saldos
                      - button "080 Registro de Movimientos" [ref=e353] [cursor=pointer]:
                        - generic [ref=e354]: "080"
                        - generic [ref=e355]: Registro de Movimientos
                      - button "081 Asignación de Acciones" [ref=e356] [cursor=pointer]:
                        - generic [ref=e357]: "081"
                        - generic [ref=e358]: Asignación de Acciones
                      - button "082 Asignación de Rendimientos" [ref=e359] [cursor=pointer]:
                        - generic [ref=e360]: "082"
                        - generic [ref=e361]: Asignación de Rendimientos
                      - button "083 Cálculo y Aplicación de Comisiones" [ref=e362] [cursor=pointer]:
                        - generic [ref=e363]: "083"
                        - generic [ref=e364]: Cálculo y Aplicación de Comisiones
                      - button "084 Ajustes de Cuenta" [ref=e365] [cursor=pointer]:
                        - generic [ref=e366]: "084"
                        - generic [ref=e367]: Ajustes de Cuenta
                      - button "085 Estado de Cuenta" [ref=e368] [cursor=pointer]:
                        - generic [ref=e369]: "085"
                        - generic [ref=e370]: Estado de Cuenta
                      - button "086 Historial Transaccional" [ref=e371] [cursor=pointer]:
                        - generic [ref=e372]: "086"
                        - generic [ref=e373]: Historial Transaccional
                      - button "087 Recursos SAR Legacy" [ref=e374] [cursor=pointer]:
                        - generic [ref=e375]: "087"
                        - generic [ref=e376]: Recursos SAR Legacy
                      - button "088 Conciliación de Cuenta Individual" [ref=e377] [cursor=pointer]:
                        - generic [ref=e378]: "088"
                        - generic [ref=e379]: Conciliación de Cuenta Individual
              - generic [ref=e380]:
                - generic [ref=e382]:
                  - generic [ref=e383]: RAIA-BA-005
                  - heading "Recaudación y Aportaciones" [level=3] [ref=e384]
                - generic [ref=e385]:
                  - generic [ref=e386]:
                    - generic [ref=e387]:
                      - generic [ref=e388]: Recaudación Obligatoria
                      - generic [ref=e389]: RAIA-BD-013
                    - generic [ref=e390]:
                      - button "089 Determinación de Aportaciones" [ref=e391] [cursor=pointer]:
                        - generic [ref=e392]: "089"
                        - generic [ref=e393]: Determinación de Aportaciones
                      - button "090 Recaudación de Aportaciones Patronales" [ref=e394] [cursor=pointer]:
                        - generic [ref=e395]: "090"
                        - generic [ref=e396]: Recaudación de Aportaciones Patronales
                      - button "091 Recaudación de Aportaciones Gubernamentales" [ref=e397] [cursor=pointer]:
                        - generic [ref=e398]: "091"
                        - generic [ref=e399]: Recaudación de Aportaciones Gubernamentales
                      - button "092 Registro de Aportaciones de Vivienda" [ref=e400] [cursor=pointer]:
                        - generic [ref=e401]: "092"
                        - generic [ref=e402]: Registro de Aportaciones de Vivienda
                      - button "093 Cuota Social" [ref=e403] [cursor=pointer]:
                        - generic [ref=e404]: "093"
                        - generic [ref=e405]: Cuota Social
                      - button "094 Gestión de Aportaciones Omitidas" [ref=e406] [cursor=pointer]:
                        - generic [ref=e407]: "094"
                        - generic [ref=e408]: Gestión de Aportaciones Omitidas
                      - button "095 Gestión de Morosidad de Aportaciones" [ref=e409] [cursor=pointer]:
                        - generic [ref=e410]: "095"
                        - generic [ref=e411]: Gestión de Morosidad de Aportaciones
                  - generic [ref=e412]:
                    - generic [ref=e413]:
                      - generic [ref=e414]: Ahorro Voluntario
                      - generic [ref=e415]: RAIA-BD-014
                    - generic [ref=e416]:
                      - button "096 Aportaciones Voluntarias" [ref=e417] [cursor=pointer]:
                        - generic [ref=e418]: "096"
                        - generic [ref=e419]: Aportaciones Voluntarias
                      - button "097 Aportaciones Complementarias" [ref=e420] [cursor=pointer]:
                        - generic [ref=e421]: "097"
                        - generic [ref=e422]: Aportaciones Complementarias
                      - button "098 Ahorro de Largo Plazo" [ref=e423] [cursor=pointer]:
                        - generic [ref=e424]: "098"
                        - generic [ref=e425]: Ahorro de Largo Plazo
                      - button "099 Ahorro Solidario" [ref=e426] [cursor=pointer]:
                        - generic [ref=e427]: "099"
                        - generic [ref=e428]: Ahorro Solidario
                      - button "100 Aportaciones de Trabajadores Independientes" [ref=e429] [cursor=pointer]:
                        - generic [ref=e430]: "100"
                        - generic [ref=e431]: Aportaciones de Trabajadores Independientes
                      - button "101 Aportaciones Voluntarias vía Nómina" [ref=e432] [cursor=pointer]:
                        - generic [ref=e433]: "101"
                        - generic [ref=e434]: Aportaciones Voluntarias vía Nómina
                      - button "102 Domiciliación de Ahorro Voluntario" [ref=e435] [cursor=pointer]:
                        - generic [ref=e436]: "102"
                        - generic [ref=e437]: Domiciliación de Ahorro Voluntario
                  - generic [ref=e438]:
                    - generic [ref=e439]:
                      - generic [ref=e440]: Individualización y Conciliación
                      - generic [ref=e441]: RAIA-BD-015
                    - generic [ref=e442]:
                      - button "103 Individualización de Aportaciones" [ref=e443] [cursor=pointer]:
                        - generic [ref=e444]: "103"
                        - generic [ref=e445]: Individualización de Aportaciones
                      - button "104 Resolución de Pagos No Identificados" [ref=e446] [cursor=pointer]:
                        - generic [ref=e447]: "104"
                        - generic [ref=e448]: Resolución de Pagos No Identificados
                      - button "105 Conciliación de Recaudación" [ref=e449] [cursor=pointer]:
                        - generic [ref=e450]: "105"
                        - generic [ref=e451]: Conciliación de Recaudación
                      - button "106 Corrección de Aportaciones" [ref=e452] [cursor=pointer]:
                        - generic [ref=e453]: "106"
                        - generic [ref=e454]: Corrección de Aportaciones
                      - button "107 Transferencia de Aportaciones" [ref=e455] [cursor=pointer]:
                        - generic [ref=e456]: "107"
                        - generic [ref=e457]: Transferencia de Aportaciones
                      - button "108 Devolución de Aportaciones" [ref=e458] [cursor=pointer]:
                        - generic [ref=e459]: "108"
                        - generic [ref=e460]: Devolución de Aportaciones
                      - button "109 Aclaración de Diferencias de Recaudación" [ref=e461] [cursor=pointer]:
                        - generic [ref=e462]: "109"
                        - generic [ref=e463]: Aclaración de Diferencias de Recaudación
              - generic [ref=e464]:
                - generic [ref=e466]:
                  - generic [ref=e467]: RAIA-BA-006
                  - heading "Inversión y SIEFORE" [level=3] [ref=e468]
                - generic [ref=e469]:
                  - generic [ref=e470]:
                    - generic [ref=e471]:
                      - generic [ref=e472]: Diseño y Asignación de Fondos
                      - generic [ref=e473]: RAIA-BD-016
                    - generic [ref=e474]:
                      - button "110 Asignación a SIEFORE Generacional" [ref=e475] [cursor=pointer]:
                        - generic [ref=e476]: "110"
                        - generic [ref=e477]: Asignación a SIEFORE Generacional
                      - button "111 Estrategia de Inversión" [ref=e478] [cursor=pointer]:
                        - generic [ref=e479]: "111"
                        - generic [ref=e480]: Estrategia de Inversión
                      - button "112 Construcción de Portafolio" [ref=e481] [cursor=pointer]:
                        - generic [ref=e482]: "112"
                        - generic [ref=e483]: Construcción de Portafolio
                      - button "113 Gestión de Mandatos de Inversión" [ref=e484] [cursor=pointer]:
                        - generic [ref=e485]: "113"
                        - generic [ref=e486]: Gestión de Mandatos de Inversión
                      - button "114 Gestión de Benchmark" [ref=e487] [cursor=pointer]:
                        - generic [ref=e488]: "114"
                        - generic [ref=e489]: Gestión de Benchmark
                      - button "115 Gestión de Clases de Activos" [ref=e490] [cursor=pointer]:
                        - generic [ref=e491]: "115"
                        - generic [ref=e492]: Gestión de Clases de Activos
                      - button "116 Diseño de Portafolio Objetivo" [ref=e493] [cursor=pointer]:
                        - generic [ref=e494]: "116"
                        - generic [ref=e495]: Diseño de Portafolio Objetivo
                  - generic [ref=e496]:
                    - generic [ref=e497]:
                      - generic [ref=e498]: Operación de Inversiones
                      - generic [ref=e499]: RAIA-BD-017
                    - generic [ref=e500]:
                      - button "117 Ejecución de Operaciones" [ref=e501] [cursor=pointer]:
                        - generic [ref=e502]: "117"
                        - generic [ref=e503]: Ejecución de Operaciones
                      - button "118 Custodia de Valores" [ref=e504] [cursor=pointer]:
                        - generic [ref=e505]: "118"
                        - generic [ref=e506]: Custodia de Valores
                      - button "119 Liquidación de Operaciones" [ref=e507] [cursor=pointer]:
                        - generic [ref=e508]: "119"
                        - generic [ref=e509]: Liquidación de Operaciones
                      - button "120 Acciones Corporativas" [ref=e510] [cursor=pointer]:
                        - generic [ref=e511]: "120"
                        - generic [ref=e512]: Acciones Corporativas
                      - button "121 Administración de Derivados" [ref=e513] [cursor=pointer]:
                        - generic [ref=e514]: "121"
                        - generic [ref=e515]: Administración de Derivados
                      - button "122 Gestión de Liquidez" [ref=e516] [cursor=pointer]:
                        - generic [ref=e517]: "122"
                        - generic [ref=e518]: Gestión de Liquidez
                      - button "123 Préstamo de Valores" [ref=e519] [cursor=pointer]:
                        - generic [ref=e520]: "123"
                        - generic [ref=e521]: Préstamo de Valores
                      - button "124 Gestión de Contrapartes" [ref=e522] [cursor=pointer]:
                        - generic [ref=e523]: "124"
                        - generic [ref=e524]: Gestión de Contrapartes
                      - button "125 Gestión de Instrucciones de Inversión" [ref=e525] [cursor=pointer]:
                        - generic [ref=e526]: "125"
                        - generic [ref=e527]: Gestión de Instrucciones de Inversión
                  - generic [ref=e528]:
                    - generic [ref=e529]:
                      - generic [ref=e530]: Valuación, Riesgo y Desempeño
                      - generic [ref=e531]: RAIA-BD-018
                    - generic [ref=e532]:
                      - button "126 Valuación de Instrumentos" [ref=e533] [cursor=pointer]:
                        - generic [ref=e534]: "126"
                        - generic [ref=e535]: Valuación de Instrumentos
                      - button "127 Valuación de Portafolio" [ref=e536] [cursor=pointer]:
                        - generic [ref=e537]: "127"
                        - generic [ref=e538]: Valuación de Portafolio
                      - button "128 Riesgo de Inversión" [ref=e539] [cursor=pointer]:
                        - generic [ref=e540]: "128"
                        - generic [ref=e541]: Riesgo de Inversión
                      - button "129 Cumplimiento del Régimen de Inversión" [ref=e542] [cursor=pointer]:
                        - generic [ref=e543]: "129"
                        - generic [ref=e544]: Cumplimiento del Régimen de Inversión
                      - button "130 Medición de Desempeño" [ref=e545] [cursor=pointer]:
                        - generic [ref=e546]: "130"
                        - generic [ref=e547]: Medición de Desempeño
                      - button "131 Gestión de Límites y Exposición" [ref=e548] [cursor=pointer]:
                        - generic [ref=e549]: "131"
                        - generic [ref=e550]: Gestión de Límites y Exposición
                      - button "132 Riesgo de Mercado" [ref=e551] [cursor=pointer]:
                        - generic [ref=e552]: "132"
                        - generic [ref=e553]: Riesgo de Mercado
                      - button "133 Riesgo de Crédito de Inversiones" [ref=e554] [cursor=pointer]:
                        - generic [ref=e555]: "133"
                        - generic [ref=e556]: Riesgo de Crédito de Inversiones
                      - button "134 Atribución de Rendimientos" [ref=e557] [cursor=pointer]:
                        - generic [ref=e558]: "134"
                        - generic [ref=e559]: Atribución de Rendimientos
            - generic [ref=e560]:
              - generic [ref=e562]:
                - generic [ref=e563]: RAIA-BA-007
                - heading "Retiros, Prestaciones y Pensiones" [level=3] [ref=e564]
              - generic [ref=e565]:
                - generic [ref=e566]:
                  - generic [ref=e567]:
                    - generic [ref=e568]: Retiros, Parciales
                    - generic [ref=e569]: RAIA-BD-019
                  - generic [ref=e570]:
                    - button "135 Retiro de Ahorro Voluntario" [ref=e571] [cursor=pointer]:
                      - generic [ref=e572]: "135"
                      - generic [ref=e573]: Retiro de Ahorro Voluntario
                    - button "136 Retiro Parcial por Desempleo" [ref=e574] [cursor=pointer]:
                      - generic [ref=e575]: "136"
                      - generic [ref=e576]: Retiro Parcial por Desempleo
                    - button "137 Ayuda para Gastos de Matrimonio" [ref=e577] [cursor=pointer]:
                      - generic [ref=e578]: "137"
                      - generic [ref=e579]: Ayuda para Gastos de Matrimonio
                    - button "138 Retiros Parciales Especiales" [ref=e580] [cursor=pointer]:
                      - generic [ref=e581]: "138"
                      - generic [ref=e582]: Retiros Parciales Especiales
                    - button "139 Validación de Elegibilidad de Retiro" [ref=e583] [cursor=pointer]:
                      - generic [ref=e584]: "139"
                      - generic [ref=e585]: Validación de Elegibilidad de Retiro
                    - button "140 Reintegro de Semanas o Recursos" [ref=e586] [cursor=pointer]:
                      - generic [ref=e587]: "140"
                      - generic [ref=e588]: Reintegro de Semanas o Recursos
                - generic [ref=e589]:
                  - generic [ref=e590]:
                    - generic [ref=e591]: Pensión y Disposición Total
                    - generic [ref=e592]: RAIA-BD-020
                  - generic [ref=e593]:
                    - button "141 Coordinación de Elegibilidad Pensionaria" [ref=e594] [cursor=pointer]:
                      - generic [ref=e595]: "141"
                      - generic [ref=e596]: Coordinación de Elegibilidad Pensionaria
                    - button "142 Elección de Régimen Pensionario" [ref=e597] [cursor=pointer]:
                      - generic [ref=e598]: "142"
                      - generic [ref=e599]: Elección de Régimen Pensionario
                    - button "143 Resolución de Pensión" [ref=e600] [cursor=pointer]:
                      - generic [ref=e601]: "143"
                      - generic [ref=e602]: Resolución de Pensión
                    - button "144 Retiro Programado" [ref=e603] [cursor=pointer]:
                      - generic [ref=e604]: "144"
                      - generic [ref=e605]: Retiro Programado
                    - button "145 Transferencia a Renta Vitalicia" [ref=e606] [cursor=pointer]:
                      - generic [ref=e607]: "145"
                      - generic [ref=e608]: Transferencia a Renta Vitalicia
                    - button "146 Pensión Garantizada" [ref=e609] [cursor=pointer]:
                      - generic [ref=e610]: "146"
                      - generic [ref=e611]: Pensión Garantizada
                    - button "147 Disposición Total de Recursos" [ref=e612] [cursor=pointer]:
                      - generic [ref=e613]: "147"
                      - generic [ref=e614]: Disposición Total de Recursos
                    - button "148 Recuperación de Recursos de Vivienda" [ref=e615] [cursor=pointer]:
                      - generic [ref=e616]: "148"
                      - generic [ref=e617]: Recuperación de Recursos de Vivienda
                    - button "149 Seguimiento de Pago Pensionario" [ref=e618] [cursor=pointer]:
                      - generic [ref=e619]: "149"
                      - generic [ref=e620]: Seguimiento de Pago Pensionario
                - generic [ref=e621]:
                  - generic [ref=e622]:
                    - generic [ref=e623]: Fallecimiento y Beneficiarios
                    - generic [ref=e624]: RAIA-BD-021
                  - generic [ref=e625]:
                    - button "150 Notificación de Fallecimiento" [ref=e626] [cursor=pointer]:
                      - generic [ref=e627]: "150"
                      - generic [ref=e628]: Notificación de Fallecimiento
                    - button "151 Validación de Beneficiarios" [ref=e629] [cursor=pointer]:
                      - generic [ref=e630]: "151"
                      - generic [ref=e631]: Validación de Beneficiarios
                    - button "152 Prestaciones de Sobrevivencia" [ref=e632] [cursor=pointer]:
                      - generic [ref=e633]: "152"
                      - generic [ref=e634]: Prestaciones de Sobrevivencia
                    - button "153 Distribución de Recursos a Beneficiarios" [ref=e635] [cursor=pointer]:
                      - generic [ref=e636]: "153"
                      - generic [ref=e637]: Distribución de Recursos a Beneficiarios
                    - button "154 Gestión de Recursos No Reclamados" [ref=e638] [cursor=pointer]:
                      - generic [ref=e639]: "154"
                      - generic [ref=e640]: Gestión de Recursos No Reclamados
                    - button "155 Resolución de Derechos de Beneficiarios" [ref=e641] [cursor=pointer]:
                      - generic [ref=e642]: "155"
                      - generic [ref=e643]: Resolución de Derechos de Beneficiarios
                - generic [ref=e644]:
                  - generic [ref=e645]:
                    - generic [ref=e646]: Fondo de Pensiones para el Bienestar
                    - generic [ref=e647]: RAIA-BD-022
                  - generic [ref=e648]:
                    - button "156 Identificación de Cuentas Elegibles" [ref=e649] [cursor=pointer]:
                      - generic [ref=e650]: "156"
                      - generic [ref=e651]: Identificación de Cuentas Elegibles
                    - button "157 Transferencia de Recursos al Fondo" [ref=e652] [cursor=pointer]:
                      - generic [ref=e653]: "157"
                      - generic [ref=e654]: Transferencia de Recursos al Fondo
                    - button "158 Coordinación de Complemento Pensionario" [ref=e655] [cursor=pointer]:
                      - generic [ref=e656]: "158"
                      - generic [ref=e657]: Coordinación de Complemento Pensionario
                    - button "159 Reintegro de Recursos" [ref=e658] [cursor=pointer]:
                      - generic [ref=e659]: "159"
                      - generic [ref=e660]: Reintegro de Recursos
                    - button "160 Trazabilidad de Derechos" [ref=e661] [cursor=pointer]:
                      - generic [ref=e662]: "160"
                      - generic [ref=e663]: Trazabilidad de Derechos
                    - button "161 Conciliación con el Fondo" [ref=e664] [cursor=pointer]:
                      - generic [ref=e665]: "161"
                      - generic [ref=e666]: Conciliación con el Fondo
        - generic [ref=e667]:
          - generic [ref=e668]:
            - img [ref=e669]
            - heading "Gobierno, Soporte e Industria" [level=2] [ref=e672]
          - generic [ref=e673]:
            - generic [ref=e674]:
              - generic [ref=e675]:
                - generic [ref=e677]:
                  - generic [ref=e678]: RAIA-BA-001
                  - heading "Gobierno y Dirección del SAR" [level=3] [ref=e679]
                - generic [ref=e680]:
                  - generic [ref=e681]:
                    - generic [ref=e682]:
                      - generic [ref=e683]: Estrategia y Política del SAR
                      - generic [ref=e684]: RAIA-BD-001
                    - generic [ref=e685]:
                      - button "001 Política del Sistema de Ahorro para el Retiro" [ref=e686] [cursor=pointer]:
                        - generic [ref=e687]: "001"
                        - generic [ref=e688]: Política del Sistema de Ahorro para el Retiro
                      - button "002 Estrategia de Industria" [ref=e689] [cursor=pointer]:
                        - generic [ref=e690]: "002"
                        - generic [ref=e691]: Estrategia de Industria
                      - button "003 Planeación Sectorial" [ref=e692] [cursor=pointer]:
                        - generic [ref=e693]: "003"
                        - generic [ref=e694]: Planeación Sectorial
                      - button "004 Gestión de Capacidades de Industria" [ref=e695] [cursor=pointer]:
                        - generic [ref=e696]: "004"
                        - generic [ref=e697]: Gestión de Capacidades de Industria
                      - button "005 Gestión del Modelo Operativo" [ref=e698] [cursor=pointer]:
                        - generic [ref=e699]: "005"
                        - generic [ref=e700]: Gestión del Modelo Operativo
                      - button "006 Gestión de Resultados del SAR" [ref=e701] [cursor=pointer]:
                        - generic [ref=e702]: "006"
                        - generic [ref=e703]: Gestión de Resultados del SAR
                  - generic [ref=e704]:
                    - generic [ref=e705]:
                      - generic [ref=e706]: Regulación y Autorizaciones
                      - generic [ref=e707]: RAIA-BD-002
                    - generic [ref=e708]:
                      - button "007 Gestión del Marco Regulatorio" [ref=e709] [cursor=pointer]:
                        - generic [ref=e710]: "007"
                        - generic [ref=e711]: Gestión del Marco Regulatorio
                      - button "008 Gestión del Cambio Regulatorio" [ref=e712] [cursor=pointer]:
                        - generic [ref=e713]: "008"
                        - generic [ref=e714]: Gestión del Cambio Regulatorio
                      - button "009 Autorización de Participantes" [ref=e715] [cursor=pointer]:
                        - generic [ref=e716]: "009"
                        - generic [ref=e717]: Autorización de Participantes
                      - button "010 Autorización de AFORE y SIEFORE" [ref=e718] [cursor=pointer]:
                        - generic [ref=e719]: "010"
                        - generic [ref=e720]: Autorización de AFORE y SIEFORE
                      - button "011 Gestión Regulatoria de Comisiones" [ref=e721] [cursor=pointer]:
                        - generic [ref=e722]: "011"
                        - generic [ref=e723]: Gestión Regulatoria de Comisiones
                      - button "012 Gestión de Criterios y Consultas Normativas" [ref=e724] [cursor=pointer]:
                        - generic [ref=e725]: "012"
                        - generic [ref=e726]: Gestión de Criterios y Consultas Normativas
                  - generic [ref=e727]:
                    - generic [ref=e728]:
                      - generic [ref=e729]: Gobierno y Desempeño
                      - generic [ref=e730]: RAIA-BD-003
                    - generic [ref=e731]:
                      - button "013 Gobierno Corporativo" [ref=e732] [cursor=pointer]:
                        - generic [ref=e733]: "013"
                        - generic [ref=e734]: Gobierno Corporativo
                      - button "014 Gestión de Portafolio de Industria" [ref=e735] [cursor=pointer]:
                        - generic [ref=e736]: "014"
                        - generic [ref=e737]: Gestión de Portafolio de Industria
                      - button "015 Gestión de Beneficios" [ref=e738] [cursor=pointer]:
                        - generic [ref=e739]: "015"
                        - generic [ref=e740]: Gestión de Beneficios
                      - button "016 Métricas del Sistema" [ref=e741] [cursor=pointer]:
                        - generic [ref=e742]: "016"
                        - generic [ref=e743]: Métricas del Sistema
                      - button "017 Transparencia Sectorial" [ref=e744] [cursor=pointer]:
                        - generic [ref=e745]: "017"
                        - generic [ref=e746]: Transparencia Sectorial
                      - button "018 Gestión de Stakeholders del SAR" [ref=e747] [cursor=pointer]:
                        - generic [ref=e748]: "018"
                        - generic [ref=e749]: Gestión de Stakeholders del SAR
              - generic [ref=e750]:
                - generic [ref=e752]:
                  - generic [ref=e753]: RAIA-BA-002
                  - heading "Riesgo, Cumplimiento y Supervisión" [level=3] [ref=e754]
                - generic [ref=e755]:
                  - generic [ref=e756]:
                    - generic [ref=e757]:
                      - generic [ref=e758]: Supervisión y Control Regulatorio
                      - generic [ref=e759]: RAIA-BD-004
                    - generic [ref=e760]:
                      - button "019 Supervisión Regulatoria" [ref=e761] [cursor=pointer]:
                        - generic [ref=e762]: "019"
                        - generic [ref=e763]: Supervisión Regulatoria
                      - button "022 Inspección Regulatoria" [ref=e764] [cursor=pointer]:
                        - generic [ref=e765]: "022"
                        - generic [ref=e766]: Inspección Regulatoria
                      - button "024 Información Regulatoria" [ref=e767] [cursor=pointer]:
                        - generic [ref=e768]: "024"
                        - generic [ref=e769]: Información Regulatoria
                      - button "025 Atención de Requerimientos Regulatorios" [ref=e770] [cursor=pointer]:
                        - generic [ref=e771]: "025"
                        - generic [ref=e772]: Atención de Requerimientos Regulatorios
                      - button "026 Programas Correctivos" [ref=e773] [cursor=pointer]:
                        - generic [ref=e774]: "026"
                        - generic [ref=e775]: Programas Correctivos
                      - button "027 Gestión de Sanciones" [ref=e776] [cursor=pointer]:
                        - generic [ref=e777]: "027"
                        - generic [ref=e778]: Gestión de Sanciones
                      - button "028 Seguimiento de Hallazgos" [ref=e779] [cursor=pointer]:
                        - generic [ref=e780]: "028"
                        - generic [ref=e781]: Seguimiento de Hallazgos
                  - generic [ref=e782]:
                    - generic [ref=e783]:
                      - generic [ref=e784]: Riesgo y Cumplimiento
                      - generic [ref=e785]: RAIA-BD-005
                    - generic [ref=e786]:
                      - button "029 Gestión de Riesgo Empresarial" [ref=e787] [cursor=pointer]:
                        - generic [ref=e788]: "029"
                        - generic [ref=e789]: Gestión de Riesgo Empresarial
                      - button "030 Gestión de Riesgo Operacional" [ref=e790] [cursor=pointer]:
                        - generic [ref=e791]: "030"
                        - generic [ref=e792]: Gestión de Riesgo Operacional
                      - button "032 Cumplimiento Normativo" [ref=e793] [cursor=pointer]:
                        - generic [ref=e794]: "032"
                        - generic [ref=e795]: Cumplimiento Normativo
                      - button "033 Prevención de Lavado de Dinero y Financiamiento al Terrorismo" [ref=e796] [cursor=pointer]:
                        - generic [ref=e797]: "033"
                        - generic [ref=e798]: Prevención de Lavado de Dinero y Financiamiento al Terrorismo
                      - button "034 Prevención y Gestión de Fraude" [ref=e799] [cursor=pointer]:
                        - generic [ref=e800]: "034"
                        - generic [ref=e801]: Prevención y Gestión de Fraude
                      - button "035 Gestión de Riesgo de Terceros" [ref=e802] [cursor=pointer]:
                        - generic [ref=e803]: "035"
                        - generic [ref=e804]: Gestión de Riesgo de Terceros
                      - button "036 Gestión de Conflictos de Interés" [ref=e805] [cursor=pointer]:
                        - generic [ref=e806]: "036"
                        - generic [ref=e807]: Gestión de Conflictos de Interés
                  - generic [ref=e808]:
                    - generic [ref=e809]:
                      - generic [ref=e810]: Resiliencia y Aseguramiento
                      - generic [ref=e811]: RAIA-BD-006
                    - generic [ref=e812]:
                      - button "037 Continuidad de Negocio" [ref=e813] [cursor=pointer]:
                        - generic [ref=e814]: "037"
                        - generic [ref=e815]: Continuidad de Negocio
                      - button "038 Recuperación ante Desastres" [ref=e816] [cursor=pointer]:
                        - generic [ref=e817]: "038"
                        - generic [ref=e818]: Recuperación ante Desastres
                      - button "039 Ciberseguridad" [ref=e819] [cursor=pointer]:
                        - generic [ref=e820]: "039"
                        - generic [ref=e821]: Ciberseguridad
                      - button "041 Seguridad de la Información" [ref=e822] [cursor=pointer]:
                        - generic [ref=e823]: "041"
                        - generic [ref=e824]: Seguridad de la Información
                      - button "042 Auditoría Interna" [ref=e825] [cursor=pointer]:
                        - generic [ref=e826]: "042"
                        - generic [ref=e827]: Auditoría Interna
                      - button "043 Gestión de Incidentes Mayores" [ref=e828] [cursor=pointer]:
                        - generic [ref=e829]: "043"
                        - generic [ref=e830]: Gestión de Incidentes Mayores
                      - button "044 Pruebas de Resiliencia Operacional" [ref=e831] [cursor=pointer]:
                        - generic [ref=e832]: "044"
                        - generic [ref=e833]: Pruebas de Resiliencia Operacional
            - generic [ref=e834]:
              - generic [ref=e836]:
                - generic [ref=e837]: RAIA-BA-009
                - heading "Servicios Compartidos de Industria" [level=3] [ref=e838]
              - generic [ref=e839]:
                - generic [ref=e840]:
                  - generic [ref=e841]:
                    - generic [ref=e842]: BDNSAR y Registros Maestros
                    - generic [ref=e843]: RAIA-BD-026
                  - generic [ref=e844]:
                    - button "190 Base de Datos Nacional SAR" [ref=e845] [cursor=pointer]:
                      - generic [ref=e846]: "190"
                      - generic [ref=e847]: Base de Datos Nacional SAR
                    - button "191 Registro Maestro de Cuentas" [ref=e848] [cursor=pointer]:
                      - generic [ref=e849]: "191"
                      - generic [ref=e850]: Registro Maestro de Cuentas
                    - button "192 Registro Maestro de Trabajadores" [ref=e851] [cursor=pointer]:
                      - generic [ref=e852]: "192"
                      - generic [ref=e853]: Registro Maestro de Trabajadores
                    - button "193 Registro Maestro de Participantes" [ref=e854] [cursor=pointer]:
                      - generic [ref=e855]: "193"
                      - generic [ref=e856]: Registro Maestro de Participantes
                    - button "194 Datos de Referencia de Industria" [ref=e857] [cursor=pointer]:
                      - generic [ref=e858]: "194"
                      - generic [ref=e859]: Datos de Referencia de Industria
                    - button "195 Calidad de Datos de Industria" [ref=e860] [cursor=pointer]:
                      - generic [ref=e861]: "195"
                      - generic [ref=e862]: Calidad de Datos de Industria
                    - button "196 Calendario Operativo" [ref=e863] [cursor=pointer]:
                      - generic [ref=e864]: "196"
                      - generic [ref=e865]: Calendario Operativo
                    - button "197 Catálogos de Industria" [ref=e866] [cursor=pointer]:
                      - generic [ref=e867]: "197"
                      - generic [ref=e868]: Catálogos de Industria
                - generic [ref=e869]:
                  - generic [ref=e870]:
                    - generic [ref=e871]: Orquestación e Intercambio
                    - generic [ref=e872]: RAIA-BD-027
                  - generic [ref=e873]:
                    - button "198 Orquestación Central de Procesos" [ref=e874] [cursor=pointer]:
                      - generic [ref=e875]: "198"
                      - generic [ref=e876]: Orquestación Central de Procesos
                    - button "199 Intercambio de Información Regulatoria" [ref=e877] [cursor=pointer]:
                      - generic [ref=e878]: "199"
                      - generic [ref=e879]: Intercambio de Información Regulatoria
                    - button "200 Coordinación de Transferencias de Recursos" [ref=e880] [cursor=pointer]:
                      - generic [ref=e881]: "200"
                      - generic [ref=e882]: Coordinación de Transferencias de Recursos
                    - button "201 Compensación entre Participantes" [ref=e883] [cursor=pointer]:
                      - generic [ref=e884]: "201"
                      - generic [ref=e885]: Compensación entre Participantes
                    - button "202 Hub de Eventos y Notificaciones" [ref=e886] [cursor=pointer]:
                      - generic [ref=e887]: "202"
                      - generic [ref=e888]: Hub de Eventos y Notificaciones
                    - button "203 Validación de Identidad de Industria" [ref=e889] [cursor=pointer]:
                      - generic [ref=e890]: "203"
                      - generic [ref=e891]: Validación de Identidad de Industria
                    - button "204 Validación Biométrica de Industria" [ref=e892] [cursor=pointer]:
                      - generic [ref=e893]: "204"
                      - generic [ref=e894]: Validación Biométrica de Industria
                    - button "205 Gestión de Folios y Acuses" [ref=e895] [cursor=pointer]:
                      - generic [ref=e896]: "205"
                      - generic [ref=e897]: Gestión de Folios y Acuses
                    - button "206 Monitoreo de Procesos de Industria" [ref=e898] [cursor=pointer]:
                      - generic [ref=e899]: "206"
                      - generic [ref=e900]: Monitoreo de Procesos de Industria
                - generic [ref=e901]:
                  - generic [ref=e902]:
                    - generic [ref=e903]: Integración con Ecosistema Externo
                    - generic [ref=e904]: RAIA-BD-028
                  - generic [ref=e905]:
                    - button "207 Integración con IMSS" [ref=e906] [cursor=pointer]:
                      - generic [ref=e907]: "207"
                      - generic [ref=e908]: Integración con IMSS
                    - button "208 Integración con ISSSTE" [ref=e909] [cursor=pointer]:
                      - generic [ref=e910]: "208"
                      - generic [ref=e911]: Integración con ISSSTE
                    - button "209 Integración con INFONAVIT" [ref=e912] [cursor=pointer]:
                      - generic [ref=e913]: "209"
                      - generic [ref=e914]: Integración con INFONAVIT
                    - button "210 Integración con FOVISSSTE" [ref=e915] [cursor=pointer]:
                      - generic [ref=e916]: "210"
                      - generic [ref=e917]: Integración con FOVISSSTE
                    - button "211 Integración con Instituciones Bancarias" [ref=e918] [cursor=pointer]:
                      - generic [ref=e919]: "211"
                      - generic [ref=e920]: Integración con Instituciones Bancarias
                    - button "212 Integración con Aseguradoras" [ref=e921] [cursor=pointer]:
                      - generic [ref=e922]: "212"
                      - generic [ref=e923]: Integración con Aseguradoras
                    - button "213 Integración con Custodios y Mercados" [ref=e924] [cursor=pointer]:
                      - generic [ref=e925]: "213"
                      - generic [ref=e926]: Integración con Custodios y Mercados
                    - button "214 Integración con Autoridades Fiscales" [ref=e927] [cursor=pointer]:
                      - generic [ref=e928]: "214"
                      - generic [ref=e929]: Integración con Autoridades Fiscales
                    - button "215 Integración con Entidades Recaudadoras" [ref=e930] [cursor=pointer]:
                      - generic [ref=e931]: "215"
                      - generic [ref=e932]: Integración con Entidades Recaudadoras
            - generic [ref=e933]:
              - generic [ref=e934]:
                - generic [ref=e936]:
                  - generic [ref=e937]: RAIA-BA-010
                  - heading "Capacidades Empresariales y Tecnología" [level=3] [ref=e938]
                - generic [ref=e939]:
                  - generic [ref=e940]:
                    - generic [ref=e941]:
                      - generic [ref=e942]: Datos, Seguridad y Privacidad
                      - generic [ref=e943]: RAIA-BD-029
                    - generic [ref=e944]:
                      - button "216 Gobierno de Datos" [ref=e945] [cursor=pointer]:
                        - generic [ref=e946]: "216"
                        - generic [ref=e947]: Gobierno de Datos
                      - button "217 Metadatos y Linaje" [ref=e948] [cursor=pointer]:
                        - generic [ref=e949]: "217"
                        - generic [ref=e950]: Metadatos y Linaje
                      - button "218 Calidad de Datos Empresarial" [ref=e951] [cursor=pointer]:
                        - generic [ref=e952]: "218"
                        - generic [ref=e953]: Calidad de Datos Empresarial
                      - button "219 Privacidad y Protección de Datos" [ref=e954] [cursor=pointer]:
                        - generic [ref=e955]: "219"
                        - generic [ref=e956]: Privacidad y Protección de Datos
                      - button "220 Gestión de Identidades y Accesos" [ref=e957] [cursor=pointer]:
                        - generic [ref=e958]: "220"
                        - generic [ref=e959]: Gestión de Identidades y Accesos
                      - button "221 Criptografía y Gestión de Secretos" [ref=e960] [cursor=pointer]:
                        - generic [ref=e961]: "221"
                        - generic [ref=e962]: Criptografía y Gestión de Secretos
                      - button "222 Inteligencia de Amenazas" [ref=e963] [cursor=pointer]:
                        - generic [ref=e964]: "222"
                        - generic [ref=e965]: Inteligencia de Amenazas
                      - button "223 Desarrollo Seguro" [ref=e966] [cursor=pointer]:
                        - generic [ref=e967]: "223"
                        - generic [ref=e968]: Desarrollo Seguro
                      - button "224 Gestión de Vulnerabilidades" [ref=e969] [cursor=pointer]:
                        - generic [ref=e970]: "224"
                        - generic [ref=e971]: Gestión de Vulnerabilidades
                  - generic [ref=e972]:
                    - generic [ref=e973]:
                      - generic [ref=e974]: Tecnología y Operación
                      - generic [ref=e975]: RAIA-BD-030
                    - generic [ref=e976]:
                      - button "225 Operaciones de Tecnología" [ref=e977] [cursor=pointer]:
                        - generic [ref=e978]: "225"
                        - generic [ref=e979]: Operaciones de Tecnología
                      - button "226 Ingeniería de Plataformas" [ref=e980] [cursor=pointer]:
                        - generic [ref=e981]: "226"
                        - generic [ref=e982]: Ingeniería de Plataformas
                      - button "227 Gestión de APIs" [ref=e983] [cursor=pointer]:
                        - generic [ref=e984]: "227"
                        - generic [ref=e985]: Gestión de APIs
                      - button "228 Plataforma de Eventos" [ref=e986] [cursor=pointer]:
                        - generic [ref=e987]: "228"
                        - generic [ref=e988]: Plataforma de Eventos
                      - button "229 Plataforma de Integración" [ref=e989] [cursor=pointer]:
                        - generic [ref=e990]: "229"
                        - generic [ref=e991]: Plataforma de Integración
                      - button "230 Observabilidad" [ref=e992] [cursor=pointer]:
                        - generic [ref=e993]: "230"
                        - generic [ref=e994]: Observabilidad
                      - button "231 Gestión de Servicios de TI" [ref=e995] [cursor=pointer]:
                        - generic [ref=e996]: "231"
                        - generic [ref=e997]: Gestión de Servicios de TI
                      - button "232 Gestión de Configuración" [ref=e998] [cursor=pointer]:
                        - generic [ref=e999]: "232"
                        - generic [ref=e1000]: Gestión de Configuración
                      - button "233 Gestión de Capacidad" [ref=e1001] [cursor=pointer]:
                        - generic [ref=e1002]: "233"
                        - generic [ref=e1003]: Gestión de Capacidad
                      - button "234 Gestión de Ambientes" [ref=e1004] [cursor=pointer]:
                        - generic [ref=e1005]: "234"
                        - generic [ref=e1006]: Gestión de Ambientes
                      - button "235 Automatización y CI/CD" [ref=e1007] [cursor=pointer]:
                        - generic [ref=e1008]: "235"
                        - generic [ref=e1009]: Automatización y CI/CD
                      - button "236 Recuperación Tecnológica" [ref=e1010] [cursor=pointer]:
                        - generic [ref=e1011]: "236"
                        - generic [ref=e1012]: Recuperación Tecnológica
                  - generic [ref=e1013]:
                    - generic [ref=e1014]:
                      - generic [ref=e1015]: Capacidades Corporativas
                      - generic [ref=e1016]: RAIA-BD-031
                    - generic [ref=e1017]:
                      - button "237 Contabilidad Financiera" [ref=e1018] [cursor=pointer]:
                        - generic [ref=e1019]: "237"
                        - generic [ref=e1020]: Contabilidad Financiera
                      - button "238 Gestión Financiera de Tecnología" [ref=e1021] [cursor=pointer]:
                        - generic [ref=e1022]: "238"
                        - generic [ref=e1023]: Gestión Financiera de Tecnología
                      - button "239 Compras" [ref=e1024] [cursor=pointer]:
                        - generic [ref=e1025]: "239"
                        - generic [ref=e1026]: Compras
                      - button "240 Gestión de Proveedores" [ref=e1027] [cursor=pointer]:
                        - generic [ref=e1028]: "240"
                        - generic [ref=e1029]: Gestión de Proveedores
                      - button "241 Gestión de Capital Humano" [ref=e1030] [cursor=pointer]:
                        - generic [ref=e1031]: "241"
                        - generic [ref=e1032]: Gestión de Capital Humano
                      - button "242 Servicios Jurídicos" [ref=e1033] [cursor=pointer]:
                        - generic [ref=e1034]: "242"
                        - generic [ref=e1035]: Servicios Jurídicos
                      - button "243 Gestión de Registros" [ref=e1036] [cursor=pointer]:
                        - generic [ref=e1037]: "243"
                        - generic [ref=e1038]: Gestión de Registros
                      - button "244 Arquitectura Empresarial" [ref=e1039] [cursor=pointer]:
                        - generic [ref=e1040]: "244"
                        - generic [ref=e1041]: Arquitectura Empresarial
                      - button "245 Gestión de Portafolio Empresarial" [ref=e1042] [cursor=pointer]:
                        - generic [ref=e1043]: "245"
                        - generic [ref=e1044]: Gestión de Portafolio Empresarial
                      - button "246 Gestión de Contratos" [ref=e1045] [cursor=pointer]:
                        - generic [ref=e1046]: "246"
                        - generic [ref=e1047]: Gestión de Contratos
                      - button "247 Estrategia de Salida de Proveedores" [ref=e1048] [cursor=pointer]:
                        - generic [ref=e1049]: "247"
                        - generic [ref=e1050]: Estrategia de Salida de Proveedores
              - generic [ref=e1051]:
                - generic [ref=e1053]:
                  - generic [ref=e1054]: RAIA-BA-011
                  - heading "Evolución, Arquitectura, Innovación y Conocimiento" [level=3] [ref=e1055]
                - generic [ref=e1056]:
                  - generic [ref=e1057]:
                    - generic [ref=e1058]:
                      - generic [ref=e1059]: Arquitectura y Estándares
                      - generic [ref=e1060]: RAIA-BD-032
                    - generic [ref=e1061]:
                      - button "248 Gobierno de Arquitectura Empresarial" [ref=e1062] [cursor=pointer]:
                        - generic [ref=e1063]: "248"
                        - generic [ref=e1064]: Gobierno de Arquitectura Empresarial
                      - button "249 Estándares y Lineamientos" [ref=e1065] [cursor=pointer]:
                        - generic [ref=e1066]: "249"
                        - generic [ref=e1067]: Estándares y Lineamientos
                      - button "250 Catálogo de Patrones" [ref=e1068] [cursor=pointer]:
                        - generic [ref=e1069]: "250"
                        - generic [ref=e1070]: Catálogo de Patrones
                      - button "251 Autoridad de Diseño de Soluciones" [ref=e1071] [cursor=pointer]:
                        - generic [ref=e1072]: "251"
                        - generic [ref=e1073]: Autoridad de Diseño de Soluciones
                      - button "252 Radar Tecnológico" [ref=e1074] [cursor=pointer]:
                        - generic [ref=e1075]: "252"
                        - generic [ref=e1076]: Radar Tecnológico
                      - button "253 Gestión de Deuda Técnica" [ref=e1077] [cursor=pointer]:
                        - generic [ref=e1078]: "253"
                        - generic [ref=e1079]: Gestión de Deuda Técnica
                      - button "254 Gestión de Excepciones Arquitectónicas" [ref=e1080] [cursor=pointer]:
                        - generic [ref=e1081]: "254"
                        - generic [ref=e1082]: Gestión de Excepciones Arquitectónicas
                      - button "255 Arquitecturas de Referencia" [ref=e1083] [cursor=pointer]:
                        - generic [ref=e1084]: "255"
                        - generic [ref=e1085]: Arquitecturas de Referencia
                  - generic [ref=e1086]:
                    - generic [ref=e1087]:
                      - generic [ref=e1088]: Analítica, Modelos e Inteligencia Artificial
                      - generic [ref=e1089]: RAIA-BD-033
                    - generic [ref=e1090]:
                      - button "256 Analítica Regulatoria" [ref=e1091] [cursor=pointer]:
                        - generic [ref=e1092]: "256"
                        - generic [ref=e1093]: Analítica Regulatoria
                      - button "257 Modelos Actuariales" [ref=e1094] [cursor=pointer]:
                        - generic [ref=e1095]: "257"
                        - generic [ref=e1096]: Modelos Actuariales
                      - button "258 Modelos de Inversión" [ref=e1097] [cursor=pointer]:
                        - generic [ref=e1098]: "258"
                        - generic [ref=e1099]: Modelos de Inversión
                      - button "259 Modelos de Comportamiento del Trabajador" [ref=e1100] [cursor=pointer]:
                        - generic [ref=e1101]: "259"
                        - generic [ref=e1102]: Modelos de Comportamiento del Trabajador
                      - button "260 Modelos de Fraude" [ref=e1103] [cursor=pointer]:
                        - generic [ref=e1104]: "260"
                        - generic [ref=e1105]: Modelos de Fraude
                      - button "261 Gobierno de Inteligencia Artificial" [ref=e1106] [cursor=pointer]:
                        - generic [ref=e1107]: "261"
                        - generic [ref=e1108]: Gobierno de Inteligencia Artificial
                      - button "262 Plataforma de Ciencia de Datos" [ref=e1109] [cursor=pointer]:
                        - generic [ref=e1110]: "262"
                        - generic [ref=e1111]: Plataforma de Ciencia de Datos
                      - button "263 Gestión del Ciclo de Vida de Modelos" [ref=e1112] [cursor=pointer]:
                        - generic [ref=e1113]: "263"
                        - generic [ref=e1114]: Gestión del Ciclo de Vida de Modelos
                      - button "264 Monitoreo de Modelos" [ref=e1115] [cursor=pointer]:
                        - generic [ref=e1116]: "264"
                        - generic [ref=e1117]: Monitoreo de Modelos
                  - generic [ref=e1118]:
                    - generic [ref=e1119]:
                      - generic [ref=e1120]: Innovación y Gestión del Cambio
                      - generic [ref=e1121]: RAIA-BD-034
                    - generic [ref=e1122]:
                      - button "265 Diseño de Servicios" [ref=e1123] [cursor=pointer]:
                        - generic [ref=e1124]: "265"
                        - generic [ref=e1125]: Diseño de Servicios
                      - button "266 Portafolio de Innovación" [ref=e1126] [cursor=pointer]:
                        - generic [ref=e1127]: "266"
                        - generic [ref=e1128]: Portafolio de Innovación
                      - button "267 Investigación de Industria" [ref=e1129] [cursor=pointer]:
                        - generic [ref=e1130]: "267"
                        - generic [ref=e1131]: Investigación de Industria
                      - button "268 Sandbox Regulatorio" [ref=e1132] [cursor=pointer]:
                        - generic [ref=e1133]: "268"
                        - generic [ref=e1134]: Sandbox Regulatorio
                      - button "269 Gestión del Conocimiento" [ref=e1135] [cursor=pointer]:
                        - generic [ref=e1136]: "269"
                        - generic [ref=e1137]: Gestión del Conocimiento
                      - button "270 Gestión del Cambio y Adopción" [ref=e1138] [cursor=pointer]:
                        - generic [ref=e1139]: "270"
                        - generic [ref=e1140]: Gestión del Cambio y Adopción
                      - button "271 Capacitación y Certificación" [ref=e1141] [cursor=pointer]:
                        - generic [ref=e1142]: "271"
                        - generic [ref=e1143]: Capacitación y Certificación
                      - button "272 Mejora Continua" [ref=e1144] [cursor=pointer]:
                        - generic [ref=e1145]: "272"
                        - generic [ref=e1146]: Mejora Continua
                      - button "273 Gestión de Comunidad RAIA" [ref=e1147] [cursor=pointer]:
                        - generic [ref=e1148]: "273"
                        - generic [ref=e1149]: Gestión de Comunidad RAIA
  - contentinfo [ref=e1150]:
    - generic [ref=e1151]:
      - paragraph [ref=e1152]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e1153]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e1159] [cursor=pointer]:
    - generic [ref=e1162]:
      - text: Compiling
      - generic [ref=e1163]:
        - generic [ref=e1164]: .
        - generic [ref=e1165]: .
        - generic [ref=e1166]: .
  - alert [ref=e1167]
```