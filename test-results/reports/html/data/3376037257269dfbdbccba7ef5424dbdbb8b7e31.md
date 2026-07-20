# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /releases
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 128

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
+                 "html": "<div data-testid=\"release-card\" data-release-version=\"0.1.0\" data-release-status=\"draft\" class=\"bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6\">",
+                 "target": Array [
+                   ".p-6",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5\">Fecha prevista<!-- -->: <!-- -->2026-07-12<!-- --> • Baseline Regulatorio: <!-- -->2026-07-12</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-0\\.5",
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
+                 "html": "<div data-testid=\"release-card\" data-release-version=\"0.1.0\" data-release-status=\"draft\" class=\"bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6\">",
+                 "target": Array [
+                   ".p-6",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"text-xs font-extrabold text-slate-400 uppercase tracking-wider\">Resumen del Release</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "h3",
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
+           ".shrink-0",
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
          - img [ref=e34]
          - heading "Historial de Releases de RAIA" [level=1] [ref=e38]
        - paragraph [ref=e39]: Consulte la evolución histórica de la arquitectura de referencia propuesta para la industria previsional mexicana. Aquí se catalogan las incorporaciones de dominios, ajustes por cambios en las circulares de CONSAR y la Empresa Operadora de la Base de Datos Nacional SAR, y mejoras de modelado de capacidades.
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - generic [ref=e44]: v0.1.0
            - generic [ref=e45]:
              - heading "Versión Inicial RAIA" [level=2] [ref=e46]
              - paragraph [ref=e47]: "Fecha prevista: 2026-07-12 • Baseline Regulatorio: 2026-07-12"
          - generic [ref=e48]: Borrador
        - generic [ref=e49]:
          - heading "Resumen del Release" [level=3] [ref=e50]
          - paragraph [ref=e51]: Establecimiento inicial de la Red de Arquitectura de Industria Afores (RAIA), incluyendo la definición de la jerarquía de tres niveles y el catálogo inicial de 11 Áreas de Negocio, 34 Dominios de Negocio y 273 Service Domains del Sistema de Ahorro para el Retiro.
        - generic [ref=e52]:
          - generic [ref=e53]:
            - heading "Agregado" [level=4] [ref=e54]:
              - img [ref=e55]
              - text: Agregado
            - list [ref=e58]:
              - listitem [ref=e59]: Definición inicial del metamodelo conceptual de arquitectura RAIA.
              - listitem [ref=e60]: Carga de datos maestros correspondientes a las 11 Áreas de Negocio de la cadena de valor.
              - listitem [ref=e61]: Registro de 34 Dominios de Negocio y 273 Service Domains.
              - listitem [ref=e62]: Modelado inicial de 41 relaciones lógicas entre dominios.
              - listitem [ref=e63]: Estructura preliminar del catálogo regulatorio aplicable (Ley de los Sistemas de Ahorro para el Retiro, circulares de CONSAR, Procesar).
          - generic [ref=e64]:
            - heading "Modificado" [level=4] [ref=e65]:
              - img [ref=e66]
              - text: Modificado
            - list [ref=e69]:
              - listitem [ref=e70]: Ajustes de terminología para garantizar la neutralidad de industria (CONSAR, Empresa Operadora de la Base de Datos Nacional SAR).
  - contentinfo [ref=e71]:
    - generic [ref=e72]:
      - paragraph [ref=e73]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e74]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e80] [cursor=pointer]:
    - img [ref=e81]
  - alert [ref=e84]
```