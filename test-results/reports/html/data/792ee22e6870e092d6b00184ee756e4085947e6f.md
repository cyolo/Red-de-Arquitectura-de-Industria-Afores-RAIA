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
          - heading "RAIA Metamodel Overview" [level=1] [ref=e36]
        - paragraph [ref=e37]: El metamodelo de RAIA define la estructura de información de nuestro repositorio de arquitectura de industria. Asegura que todos los activos compartan un esquema homogéneo de identificación, versionamiento y gobernanza.
        - heading "Diagrama Conceptual Metamodelo" [level=2] [ref=e38]
        - paragraph [ref=e39]: A continuación se presenta la jerarquía estructural y de relaciones lógicas del metamodelo canónico.
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]:
              - text: Business Area (BA)
              - generic [ref=e43]: Contiene 1 o más Dominios
            - generic [ref=e45]:
              - text: Business Domain (BD)
              - generic [ref=e46]: Agrupa 1 o más Service Domains
            - generic [ref=e48]:
              - text: Service Domain (SD)
              - generic [ref=e49]: Unidad estable y evolutiva
          - generic [ref=e50]:
            - generic [ref=e51]: Componentes de un Service Domain
            - generic [ref=e52]:
              - generic [ref=e53]:
                - heading "Service Operation" [level=4] [ref=e54]
                - paragraph [ref=e55]: initiate, register, retrieve
              - generic [ref=e56]:
                - heading "Business Event" [level=4] [ref=e57]
                - paragraph [ref=e58]: produces, consumes
              - generic [ref=e59]:
                - heading "Business Object" [level=4] [ref=e60]
                - paragraph [ref=e61]: Focus & reference objects
              - generic [ref=e62]:
                - heading "Regulation" [level=4] [ref=e63]
                - paragraph [ref=e64]: Leyes y circulares de CONSAR
              - generic [ref=e65]:
                - heading "Control" [level=4] [ref=e66]
                - paragraph [ref=e67]: Controles reguladores y operativos
              - generic [ref=e68]:
                - heading "Evidence" [level=4] [ref=e69]
                - paragraph [ref=e70]: Bitácoras, acuses y firmas
              - generic [ref=e71]:
                - heading "KPI" [level=4] [ref=e72]
                - paragraph [ref=e73]: Métricas de desempeño
              - generic [ref=e74]:
                - heading "Control Record" [level=4] [ref=e75]
                - paragraph [ref=e76]: Ciclo de vida lógico
        - heading "Reglas y Cardinalidades" [level=2] [ref=e77]
        - generic [ref=e78]:
          - generic [ref=e79]:
            - heading "1. Entidades Canónicas vs Vistas" [level=3] [ref=e80]
            - paragraph [ref=e81]: Cada elemento arquitectónico (como un Service Domain o un Objeto de Negocio) tiene una definición única y canónica en el repositorio. Las vistas (Value Chain View, Matrix View, etc.) no duplican ni modifican estas definiciones; únicamente las filtran, agrupan y proyectan para diferentes audiencias.
          - generic [ref=e82]:
            - heading "2. Identificación Inmutable" [level=3] [ref=e83]
            - paragraph [ref=e84]:
              - text: Todas las entidades de RAIA deben poseer un identificador permanente y tipado que responda al formato del metamodelo (ej.
              - code [ref=e85]: RAIA-BA-001
              - text: para áreas de negocio o
              - code [ref=e86]: RAIA-SD-001
              - text: para dominios de servicio).
          - generic [ref=e87]:
            - heading "3. Independencia de Implementación" [level=3] [ref=e88]
            - paragraph [ref=e89]: Las operaciones de servicio (Service Operations) definen capacidades lógicas puras (ej. registrar la solicitud). No deben asociarse en este nivel a tecnologías de transporte específicas como REST, gRPC, SOAP o mensajería síncrona/asíncrona.
        - heading "Glosario del Metamodelo" [level=2] [ref=e90]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]: Architecture Repository
            - generic [ref=e94]: El almacén central y canónico de todo el conocimiento arquitectónico de la industria mexicana de ahorro para el retiro.
          - generic [ref=e95]:
            - generic [ref=e96]: Portal Module
            - generic [ref=e97]: Cada una de las secciones del portal que exponen u organizan los entregables (ej. Value Chain View, Business Object Model).
          - generic [ref=e98]:
            - generic [ref=e99]: Architecture Artifact
            - generic [ref=e100]: Unidad tangible de documentación o representación técnica (ej. un catálogo, un diagrama de flujo).
          - generic [ref=e101]:
            - generic [ref=e102]: Business Area
            - generic [ref=e103]: Clasificación de más alto nivel que agrupa dominios de negocio afines en la cadena de valor (ej. Inversiones).
          - generic [ref=e104]:
            - generic [ref=e105]: Business Domain
            - generic [ref=e106]: Agrupación intermedia de capacidades de negocio con un propósito común y delimitado.
          - generic [ref=e107]:
            - generic [ref=e108]: Service Domain
            - generic [ref=e109]: Unidad estable, versionada y evolutiva de responsabilidad funcional pura en la industria previsional.
          - generic [ref=e110]:
            - generic [ref=e111]: Service Operation
            - generic [ref=e112]: Operación lógica asociada a un Service Domain (initiate, register, retrieve, etc.) independiente de tecnologías.
          - generic [ref=e113]:
            - generic [ref=e114]: Control Record
            - generic [ref=e115]: Concepto lógico que define el ciclo de vida, estados y transiciones del objeto de negocio enfocado.
          - generic [ref=e116]:
            - generic [ref=e117]: Business Object
            - generic [ref=e118]: Modelo de información canónico que representa una entidad de datos real de la industria (ej. Trabajador).
          - generic [ref=e119]:
            - generic [ref=e120]: Business Event
            - generic [ref=e121]: Hecho de negocio significativo en el ciclo de vida de un Service Domain que puede representarse mediante evento, API, mensaje, archivo, lote o interacción manual.
          - generic [ref=e122]:
            - generic [ref=e123]: Business Scenario
            - generic [ref=e124]: Secuencia ordenada de interacciones entre Service Domains para materializar un trámite o proceso del SAR.
          - generic [ref=e125]:
            - generic [ref=e126]: Actor
            - generic [ref=e127]: Participante o rol del ecosistema (Afore, Trabajador, CONSAR, Empresa Operadora) con responsabilidades asignadas.
          - generic [ref=e128]:
            - generic [ref=e129]: Regulation
            - generic [ref=e130]: Disposición legal o circular aplicable que norma una capacidad u obligación previsional.
          - generic [ref=e131]:
            - generic [ref=e132]: Control
            - generic [ref=e133]: Mecanismo de mitigación y aseguramiento (regulatorio, operativo, financiero, de inversión, privacidad, seguridad, datos, continuidad o auditoría) mapeado a operaciones del Service Domain.
          - generic [ref=e134]:
            - generic [ref=e135]: Evidence
            - generic [ref=e136]: Registro de auditoría, acuse firmado digitalmente o bitácora que comprueba la ejecución de un control.
          - generic [ref=e137]:
            - generic [ref=e138]: KPI
            - generic [ref=e139]: Métrica de calidad o desempeño que mide la efectividad operativa de las operaciones del dominio.
  - contentinfo [ref=e140]:
    - generic [ref=e141]:
      - paragraph [ref=e142]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e143]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e149] [cursor=pointer]:
    - generic [ref=e152]:
      - text: Compiling
      - generic [ref=e153]:
        - generic [ref=e154]: .
        - generic [ref=e155]: .
        - generic [ref=e156]: .
  - alert [ref=e157]
```