# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /metamodel
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 408

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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"bg-white rounded-2xl border border-slate-200 p-8 shadow-md\" data-testid=\"metamodel-overview\">",
+                 "target": Array [
+                   ".rounded-2xl",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xs text-slate-400 font-medium mt-1 leading-relaxed\">A continuación se presenta la jerarquía estructural y de relaciones lógicas del metamodelo canónico.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".rounded-2xl > .font-medium.mt-1",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mt-6 border border-slate-200 rounded-xl bg-slate-50 p-6 flex flex-col gap-6\">",
+                 "target": Array [
+                   ".rounded-xl",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block text-center mb-4\">Componentes de un Service Domain</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-4",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Service Operation</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">initiate, register, retrieve</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(1)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">initiate, register, retrieve</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(1) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Business Event</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">produces, consumes</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(2)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">produces, consumes</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(2) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Business Object</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Focus &amp; reference objects</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(3)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Focus &amp; reference objects</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(3) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Regulation</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Leyes y circulares de CONSAR</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(4)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Leyes y circulares de CONSAR</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(4) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Control</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Controles reguladores y operativos</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(5)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Controles reguladores y operativos</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(5) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Evidence</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Bitácoras, acuses y firmas</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(6)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Bitácoras, acuses y firmas</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(6) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">KPI</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Métricas de desempeño</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Métricas de desempeño</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(7) > .font-medium.mt-1.text-\\[9px\\]",
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
+                 "html": "<div class=\"bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs\"><h4 class=\"text-xs font-bold text-slate-800\">Control Record</h4><p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Ciclo de vida lógico</p></div>",
+                 "target": Array [
+                   ".p-3.shadow-xs.bg-white:nth-child(8)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-[9px] text-slate-400 mt-1 font-medium\">Ciclo de vida lógico</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-3.shadow-xs.bg-white:nth-child(8) > .font-medium.mt-1.text-\\[9px\\]",
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
+           ".text-slate-500.text-\\[10px\\].font-medium",
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
    - generic [ref=e39]:
      - link "Volver al Portal Principal" [ref=e40] [cursor=pointer]:
        - /url: /
        - img [ref=e41]
        - text: Volver al Portal Principal
      - generic [ref=e44]:
        - generic [ref=e45]:
          - img [ref=e46]
          - heading "RAIA Metamodel Overview" [level=1] [ref=e49]
        - paragraph [ref=e50]: El metamodelo de RAIA define la estructura de información de nuestro repositorio de arquitectura de industria. Asegura que todos los activos compartan un esquema homogéneo de identificación, versionamiento y gobernanza.
        - heading "Diagrama Conceptual Metamodelo" [level=2] [ref=e51]
        - paragraph [ref=e52]: A continuación se presenta la jerarquía estructural y de relaciones lógicas del metamodelo canónico.
        - generic [ref=e53]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - text: Business Area (BA)
              - generic [ref=e56]: Contiene 1 o más Dominios
            - generic [ref=e58]:
              - text: Business Domain (BD)
              - generic [ref=e59]: Agrupa 1 o más Service Domains
            - generic [ref=e61]:
              - text: Service Domain (SD)
              - generic [ref=e62]: Unidad estable y evolutiva
          - generic [ref=e63]:
            - generic [ref=e64]: Componentes de un Service Domain
            - generic [ref=e65]:
              - generic [ref=e66]:
                - heading "Service Operation" [level=4] [ref=e67]
                - paragraph [ref=e68]: initiate, register, retrieve
              - generic [ref=e69]:
                - heading "Business Event" [level=4] [ref=e70]
                - paragraph [ref=e71]: produces, consumes
              - generic [ref=e72]:
                - heading "Business Object" [level=4] [ref=e73]
                - paragraph [ref=e74]: Focus & reference objects
              - generic [ref=e75]:
                - heading "Regulation" [level=4] [ref=e76]
                - paragraph [ref=e77]: Leyes y circulares de CONSAR
              - generic [ref=e78]:
                - heading "Control" [level=4] [ref=e79]
                - paragraph [ref=e80]: Controles reguladores y operativos
              - generic [ref=e81]:
                - heading "Evidence" [level=4] [ref=e82]
                - paragraph [ref=e83]: Bitácoras, acuses y firmas
              - generic [ref=e84]:
                - heading "KPI" [level=4] [ref=e85]
                - paragraph [ref=e86]: Métricas de desempeño
              - generic [ref=e87]:
                - heading "Control Record" [level=4] [ref=e88]
                - paragraph [ref=e89]: Ciclo de vida lógico
        - heading "Reglas y Cardinalidades" [level=2] [ref=e90]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - heading "1. Entidades Canónicas vs Vistas" [level=3] [ref=e93]
            - paragraph [ref=e94]: Cada elemento arquitectónico (como un Service Domain o un Objeto de Negocio) tiene una definición única y canónica en el repositorio. Las vistas (Value Chain View, Matrix View, etc.) no duplican ni modifican estas definiciones; únicamente las filtran, agrupan y proyectan para diferentes audiencias.
          - generic [ref=e95]:
            - heading "2. Identificación Inmutable" [level=3] [ref=e96]
            - paragraph [ref=e97]:
              - text: Todas las entidades de RAIA deben poseer un identificador permanente y tipado que responda al formato del metamodelo (ej.
              - code [ref=e98]: RAIA-BA-001
              - text: para áreas de negocio o
              - code [ref=e99]: RAIA-SD-001
              - text: para dominios de servicio).
          - generic [ref=e100]:
            - heading "3. Independencia de Implementación" [level=3] [ref=e101]
            - paragraph [ref=e102]: Las operaciones de servicio (Service Operations) definen capacidades lógicas puras (ej. registrar la solicitud). No deben asociarse en este nivel a tecnologías de transporte específicas como REST, gRPC, SOAP o mensajería síncrona/asíncrona.
        - heading "Glosario del Metamodelo" [level=2] [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e105]:
            - generic [ref=e106]: Architecture Repository
            - generic [ref=e107]: El almacén central y canónico de todo el conocimiento arquitectónico de la industria mexicana de ahorro para el retiro.
          - generic [ref=e108]:
            - generic [ref=e109]: Portal Module
            - generic [ref=e110]: Cada una de las secciones del portal que exponen u organizan los entregables (ej. Value Chain View, Business Object Model).
          - generic [ref=e111]:
            - generic [ref=e112]: Architecture Artifact
            - generic [ref=e113]: Unidad tangible de documentación o representación técnica (ej. un catálogo, un diagrama de flujo).
          - generic [ref=e114]:
            - generic [ref=e115]: Business Area
            - generic [ref=e116]: Clasificación de más alto nivel que agrupa dominios de negocio afines en la cadena de valor (ej. Inversiones).
          - generic [ref=e117]:
            - generic [ref=e118]: Business Domain
            - generic [ref=e119]: Agrupación intermedia de capacidades de negocio con un propósito común y delimitado.
          - generic [ref=e120]:
            - generic [ref=e121]: Service Domain
            - generic [ref=e122]: Unidad estable, versionada y evolutiva de responsabilidad funcional pura en la industria previsional.
          - generic [ref=e123]:
            - generic [ref=e124]: Service Operation
            - generic [ref=e125]: Operación lógica asociada a un Service Domain (initiate, register, retrieve, etc.) independiente de tecnologías.
          - generic [ref=e126]:
            - generic [ref=e127]: Control Record
            - generic [ref=e128]: Concepto lógico que define el ciclo de vida, estados y transiciones del objeto de negocio enfocado.
          - generic [ref=e129]:
            - generic [ref=e130]: Business Object
            - generic [ref=e131]: Modelo de información canónico que representa una entidad de datos real de la industria (ej. Trabajador).
          - generic [ref=e132]:
            - generic [ref=e133]: Business Event
            - generic [ref=e134]: Hecho de negocio significativo en el ciclo de vida de un Service Domain que puede representarse mediante evento, API, mensaje, archivo, lote o interacción manual.
          - generic [ref=e135]:
            - generic [ref=e136]: Business Scenario
            - generic [ref=e137]: Secuencia ordenada de interacciones entre Service Domains para materializar un trámite o proceso del SAR.
          - generic [ref=e138]:
            - generic [ref=e139]: Actor
            - generic [ref=e140]: Participante o rol del ecosistema (Afore, Trabajador, CONSAR, Empresa Operadora) con responsabilidades asignadas.
          - generic [ref=e141]:
            - generic [ref=e142]: Regulation
            - generic [ref=e143]: Disposición legal o circular aplicable que norma una capacidad u obligación previsional.
          - generic [ref=e144]:
            - generic [ref=e145]: Control
            - generic [ref=e146]: Mecanismo de mitigación y aseguramiento (regulatorio, operativo, financiero, de inversión, privacidad, seguridad, datos, continuidad o auditoría) mapeado a operaciones del Service Domain.
          - generic [ref=e147]:
            - generic [ref=e148]: Evidence
            - generic [ref=e149]: Registro de auditoría, acuse firmado digitalmente o bitácora que comprueba la ejecución de un control.
          - generic [ref=e150]:
            - generic [ref=e151]: KPI
            - generic [ref=e152]: Métrica de calidad o desempeño que mide la efectividad operativa de las operaciones del dominio.
  - contentinfo [ref=e153]:
    - generic [ref=e154]:
      - paragraph [ref=e155]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e156]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e162] [cursor=pointer]:
    - generic [ref=e165]:
      - text: Compiling
      - generic [ref=e166]:
        - generic [ref=e167]: .
        - generic [ref=e168]: .
        - generic [ref=e169]: .
  - alert [ref=e170]
```