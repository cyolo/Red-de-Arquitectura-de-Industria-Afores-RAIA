# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility\accessibility.spec.ts >> RAIA Accessibility Audits (WCAG AA) >> Verify accessibility for route: /business-scenarios
- Location: tests\e2e\accessibility\accessibility.spec.ts:15:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 343

- Array []
+ Array [
+   Object {
+     "description": "Ensure an element's role supports its ARIA attributes",
+     "help": "Elements must only use supported ARIA attributes",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/aria-allowed-attr?application=playwright",
+     "id": "aria-allowed-attr",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": Array [
+               "aria-expanded=\"false\"",
+             ],
+             "id": "aria-allowed-attr",
+             "impact": "critical",
+             "message": "ARIA attribute is not allowed: aria-expanded=\"false\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   ARIA attribute is not allowed: aria-expanded=\"false\"",
+         "html": "<div aria-expanded=\"false\" aria-haspopup=\"listbox\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "div[aria-haspopup=\"listbox\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
+     ],
+   },
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
+               "bgColor": "#f8fafc",
+               "contrastRatio": 2.51,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#90a1b9",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8\">",
+                 "target": Array [
+                   ".py-12",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h2 class=\"text-xs font-extrabold text-slate-400 uppercase tracking-wider\">Escenarios Propuestos (0.1.0)</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".lg\\:col-span-4 > h2",
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
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"text-[10px] font-extrabold text-slate-500 uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded\">Validación: Pending</span>",
+                 "target": Array [
+                   ".flex-wrap.gap-2.flex > .bg-slate-100.px-2.rounded",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 7.5pt (10px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[10px] font-extrabold text-slate-500 uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded\">Validación: Pending</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".flex-wrap.gap-2.flex > .bg-slate-100.px-2.rounded",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"mb-8 bg-slate-100 border border-slate-300 rounded-lg p-6\">",
+                 "target": Array [
+                   ".border-slate-300",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.34 (foreground color: #62748e, background color: #f1f5f9, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-xs font-bold uppercase tracking-wider text-slate-500 mb-2\">Supuestos Trazables</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-4.pt-4.border-t > .mb-2.tracking-wider",
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
+                 "html": "<div class=\"flex-1 overflow-y-auto p-5 space-y-6 bg-white min-h-[300px]\">",
+                 "target": Array [
+                   ".min-h-\\[300px\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "section:nth-child(1) > .mb-2.gap-2.tracking-wider",
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
+                 "html": "<div class=\"flex-1 overflow-y-auto p-5 space-y-6 bg-white min-h-[300px]\">",
+                 "target": Array [
+                   ".min-h-\\[300px\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2\">Contexto Estructural</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".pt-4:nth-child(2) > .mb-2.tracking-wider",
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
+                 "html": "<div class=\"flex-1 overflow-y-auto p-5 space-y-6 bg-white min-h-[300px]\">",
+                 "target": Array [
+                   ".min-h-\\[300px\\]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.63 (foreground color: #90a1b9, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<h4 class=\"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2\">Comportamiento Sistémico</h4>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".min-h-\\[300px\\] > .pt-4:nth-child(3) > .mb-2.tracking-wider",
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
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"border-t border-slate-200 bg-slate-50 p-4 shrink-0 flex items-center justify-between\">",
+                 "target": Array [
+                   "#scenario-step-analysis > footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.51 (foreground color: #90a1b9, background color: #f8fafc, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-[11px] font-black text-slate-400 tracking-widest uppercase\">1 / 21</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".tracking-widest.text-\\[11px\\].font-black",
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
+                   ".py-3\\.5",
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
+           ".shrink-0.font-medium.text-\\[10px\\]",
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
      - link "Volver al Portal Principal" [ref=e39] [cursor=pointer]:
        - /url: /
        - img [ref=e40]
        - text: Volver al Portal Principal
      - generic [ref=e42]:
        - generic [ref=e43]:
          - img [ref=e45]
          - generic [ref=e48]:
            - heading "RAIA Business Scenarios" [level=1] [ref=e49]
            - paragraph [ref=e50]: Catálogo e Interacción de Secuencias del SAR
        - paragraph [ref=e51]: Catálogo dinámico de escenarios lógicos de industria propuestos. A continuación puede visualizar y simular de extremo a extremo las interacciones ordenadas entre Service Domains necesarios para ejecutar trámites clave del Sistema de Ahorro para el Retiro.
      - generic [ref=e52]:
        - generic [ref=e53]:
          - heading "Escenarios Propuestos (0.1.0)" [level=2] [ref=e54]
          - generic [ref=e55]:
            - button "Registro y Traspaso de Cuenta Individual 21 pasos estructurados" [pressed] [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: Registro y Traspaso de Cuenta Individual
                - img [ref=e59]
              - generic [ref=e61]: 21 pasos estructurados
            - button "Recaudación de Aportaciones e Inversión 15 pasos estructurados" [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]: Recaudación de Aportaciones e Inversión
                - img [ref=e65]
              - generic [ref=e67]: 15 pasos estructurados
            - button "Localización de cuenta individual 13 pasos estructurados" [ref=e68]:
              - generic [ref=e69]:
                - generic [ref=e70]: Localización de cuenta individual
                - img [ref=e71]
              - generic [ref=e73]: 13 pasos estructurados
            - button "Asignación automática de cuentas 15 pasos estructurados" [ref=e74]:
              - generic [ref=e75]:
                - generic [ref=e76]: Asignación automática de cuentas
                - img [ref=e77]
              - generic [ref=e79]: 15 pasos estructurados
            - button "Reasignación por desempeño 16 pasos estructurados" [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]: Reasignación por desempeño
                - img [ref=e83]
              - generic [ref=e85]: 16 pasos estructurados
            - button "Unificación de cuentas duplicadas 17 pasos estructurados" [ref=e86]:
              - generic [ref=e87]:
                - generic [ref=e88]: Unificación de cuentas duplicadas
                - img [ref=e89]
              - generic [ref=e91]: 17 pasos estructurados
            - button "Separación de cuentas IMSS/ISSSTE 15 pasos estructurados" [ref=e92]:
              - generic [ref=e93]:
                - generic [ref=e94]: Separación de cuentas IMSS/ISSSTE
                - img [ref=e95]
              - generic [ref=e97]: 15 pasos estructurados
            - button "Asignación automática a SIEFORE Generacional 12 pasos estructurados" [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: Asignación automática a SIEFORE Generacional
                - img [ref=e101]
              - generic [ref=e103]: 12 pasos estructurados
            - button "Construcción y rebalanceo de portafolio 15 pasos estructurados" [ref=e104]:
              - generic [ref=e105]:
                - generic [ref=e106]: Construcción y rebalanceo de portafolio
                - img [ref=e107]
              - generic [ref=e109]: 15 pasos estructurados
            - button "Ejecución y liquidación de operaciones 16 pasos estructurados" [ref=e110]:
              - generic [ref=e111]:
                - generic [ref=e112]: Ejecución y liquidación de operaciones
                - img [ref=e113]
              - generic [ref=e115]: 16 pasos estructurados
            - button "Valuación de instrumentos financieros 12 pasos estructurados" [ref=e116]:
              - generic [ref=e117]:
                - generic [ref=e118]: Valuación de instrumentos financieros
                - img [ref=e119]
              - generic [ref=e121]: 12 pasos estructurados
            - button "Retiro por desempleo IMSS/ISSSTE 17 pasos estructurados" [ref=e122]:
              - generic [ref=e123]:
                - generic [ref=e124]: Retiro por desempleo IMSS/ISSSTE
                - img [ref=e125]
              - generic [ref=e127]: 17 pasos estructurados
            - button "Ayuda para gastos de matrimonio 14 pasos estructurados" [ref=e128]:
              - generic [ref=e129]:
                - generic [ref=e130]: Ayuda para gastos de matrimonio
                - img [ref=e131]
              - generic [ref=e133]: 14 pasos estructurados
            - button "Elección de modalidad de pensión 15 pasos estructurados" [ref=e134]:
              - generic [ref=e135]:
                - generic [ref=e136]: Elección de modalidad de pensión
                - img [ref=e137]
              - generic [ref=e139]: 15 pasos estructurados
            - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados" [ref=e140]:
              - generic [ref=e141]:
                - generic [ref=e142]: Transferencia de fondos para renta vitalicia
                - img [ref=e143]
              - generic [ref=e145]: 16 pasos estructurados
            - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados" [ref=e146]:
              - generic [ref=e147]:
                - generic [ref=e148]: Identificación de cuentas potencialmente elegibles para el Fondo
                - img [ref=e149]
              - generic [ref=e151]: 16 pasos estructurados
            - button "Transferencia de recursos al Fondo 15 pasos estructurados" [ref=e152]:
              - generic [ref=e153]:
                - generic [ref=e154]: Transferencia de recursos al Fondo
                - img [ref=e155]
              - generic [ref=e157]: 15 pasos estructurados
            - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados" [ref=e158]:
              - generic [ref=e159]:
                - generic [ref=e160]: Cálculo y gestión del complemento de pensión
                - img [ref=e161]
              - generic [ref=e163]: 17 pasos estructurados
        - generic [ref=e164]:
          - generic [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167]: "ID: RAIA-BS-0001"
              - generic [ref=e168]: "Estado: Proposed"
              - generic [ref=e169]: "Validación: Pending"
            - heading "Registro y Traspaso de Cuenta Individual" [level=2] [ref=e170]
            - paragraph [ref=e171]: Proceso completo mediante el cual un trabajador solicita el traspaso de su cuenta individual a otra Afore, incluyendo validación biométrica, de expediente y actualización del libro mayor.
          - figure "Registro y Traspaso de Cuenta Individual" [ref=e173]:
            - toolbar "Controles del diagrama de secuencia" [ref=e174]:
              - button "Acercar (+)" [ref=e175]:
                - img [ref=e176]
              - button "Alejar (-)" [ref=e179]:
                - img [ref=e180]
              - button "Ajustar al contenido (0)" [ref=e184]:
                - img [ref=e185]
              - button "Restablecer vista (1)" [ref=e190]:
                - img [ref=e191]
              - button "Visualizar a pantalla completa (F)" [ref=e196]:
                - img [ref=e197]
            - img "Registro y Traspaso de Cuenta Individual" [ref=e203]:
              - generic [ref=e204]:
                - generic [ref=e207]: sd RAIA-BS-0001
                - generic [ref=e208]:
                  - generic [ref=e211]: alt
                  - generic [ref=e212]: "[Condiciones de Negocio]"
                  - generic [ref=e214]: "[else Cuenta no registrada]"
                  - generic [ref=e216]: "[else Cuenta registrada en otra AFORE]"
                  - generic [ref=e218]: "[else Múltiples cuentas]"
                  - generic [ref=e220]: "[else Cuenta no elegible]"
                - generic "Trabajador" [ref=e221]:
                  - generic [ref=e223]: Trabajador
                - generic "Gestión de Solicitudes" [ref=e224]:
                  - generic [ref=e226]: Gestión de Solicitudes
                - generic "Resolución de Identidad" [ref=e227]:
                  - generic [ref=e229]: Resolución de Identidad
                - generic "Identidad Biométrica" [ref=e230]:
                  - generic [ref=e232]: Identidad Biométrica
                - generic "Expediente Electrónico" [ref=e233]:
                  - generic [ref=e235]: Expediente Electrónico
                - generic "Gestión de Consentimiento" [ref=e236]:
                  - generic [ref=e238]: Gestión de Consentimiento
                - generic "Localización de Cuenta" [ref=e239]:
                  - generic [ref=e241]: Localización de Cuenta
                - generic "Base de Datos Nacional SAR" [ref=e242]:
                  - generic [ref=e244]: Base de Datos Nacional SAR
                - generic "Traspaso de Cuenta" [ref=e245]:
                  - generic [ref=e247]: Traspaso de Cuenta
                - generic "AFORE transferente" [ref=e248]:
                  - generic [ref=e250]: AFORE transferente
                - generic "Libro Mayor de Cuenta Individual" [ref=e251]:
                  - generic [ref=e253]: Libro Mayor de Cuenta Individual
                - generic "Notificaciones" [ref=e254]:
                  - generic [ref=e256]: Notificaciones
                - generic "BDNSAR" [ref=e257]:
                  - generic [ref=e259]: BDNSAR
                - generic "libro mayor" [ref=e260]:
                  - generic [ref=e262]: libro mayor
                - generic "[1] Solicitar registro o traspaso. Solicitar registro o traspaso." [ref=e263] [cursor=pointer]:
                  - generic [ref=e266]: "[1]"
                  - generic [ref=e267]: Solicitar registro o traspaso.
                - generic "[2] Recuperar datos. Recuperar datos." [ref=e268] [cursor=pointer]:
                  - generic [ref=e270]: "[2]"
                  - generic [ref=e271]: Recuperar datos.
                - generic "[3] Entregar datos disponibles. Entregar datos disponibles." [ref=e272] [cursor=pointer]:
                  - generic [ref=e274]: "[3]"
                  - generic [ref=e275]: Entregar datos disponibles.
                - generic "[4] Validar identidad. Validar identidad." [ref=e276] [cursor=pointer]:
                  - generic [ref=e278]: "[4]"
                  - generic [ref=e279]: Validar identidad.
                - generic "[5] Validar biometría y prueba de vida. Validar biometría y prueba de vida." [ref=e280] [cursor=pointer]:
                  - generic [ref=e282]: "[5]"
                  - generic [ref=e283]: Validar biometría y prueba de vida.
                - generic "[6] Confirmar resultado biométrico. Confirmar resultado biométrico." [ref=e284] [cursor=pointer]:
                  - generic [ref=e286]: "[6]"
                  - generic [ref=e287]: Confirmar resultado biométrico.
                - generic "[7] Integrar expediente. Integrar expediente." [ref=e288] [cursor=pointer]:
                  - generic [ref=e290]: "[7]"
                  - generic [ref=e291]: Integrar expediente.
                - generic "[8] Capturar consentimiento. Capturar consentimiento." [ref=e292] [cursor=pointer]:
                  - generic [ref=e294]: "[8]"
                  - generic [ref=e295]: Capturar consentimiento.
                - generic "[9] Consultar existencia de cuenta. Consultar existencia de cuenta." [ref=e296] [cursor=pointer]:
                  - generic [ref=e298]: "[9]"
                  - generic [ref=e299]: Consultar existencia de cuenta.
                - generic "[10] Buscar cuenta individual. Buscar cuenta individual." [ref=e300] [cursor=pointer]:
                  - generic [ref=e302]: "[10]"
                  - generic [ref=e303]: Buscar cuenta individual.
                - generic "[11] Entregar estado de cuenta. Entregar estado de cuenta." [ref=e304] [cursor=pointer]:
                  - generic [ref=e306]: "[11]"
                  - generic [ref=e307]: Entregar estado de cuenta.
                - generic "[12] Informar resultado. Informar resultado." [ref=e308] [cursor=pointer]:
                  - generic [ref=e310]: "[12]"
                  - generic [ref=e311]: Informar resultado.
                - generic "[13] Registrar solicitud. Registrar solicitud." [ref=e312] [cursor=pointer]:
                  - generic [ref=e314]: "[13]"
                  - generic [ref=e315]: Registrar solicitud.
                - generic "[14] Solicitar información y saldos. Solicitar información y saldos." [ref=e316] [cursor=pointer]:
                  - generic [ref=e318]: "[14]"
                  - generic [ref=e319]: Solicitar información y saldos.
                - generic "[15] Entregar información. Entregar información." [ref=e320] [cursor=pointer]:
                  - generic [ref=e322]: "[15]"
                  - generic [ref=e323]: Entregar información.
                - generic "[16] Solicitar aceptación. Solicitar aceptación." [ref=e324] [cursor=pointer]:
                  - generic [ref=e326]: "[16]"
                  - generic [ref=e327]: Solicitar aceptación.
                - generic "[17] Confirmar aceptación. Confirmar aceptación." [ref=e328] [cursor=pointer]:
                  - generic [ref=e330]: "[17]"
                  - generic [ref=e331]: Confirmar aceptación.
                - generic "[18] Registrar transferencia. Registrar transferencia." [ref=e332] [cursor=pointer]:
                  - generic [ref=e334]: "[18]"
                  - generic [ref=e335]: Registrar transferencia.
                - generic "[19] Confirmar registro. Confirmar registro." [ref=e336] [cursor=pointer]:
                  - generic [ref=e338]: "[19]"
                  - generic [ref=e339]: Confirmar registro.
                - generic "[20] Emitir resultado. Emitir resultado." [ref=e340] [cursor=pointer]:
                  - generic [ref=e342]: "[20]"
                  - generic [ref=e343]: Emitir resultado.
                - generic "[21] Notificar registro o traspaso. Notificar registro o traspaso." [ref=e344] [cursor=pointer]:
                  - generic [ref=e346]: "[21]"
                  - generic [ref=e347]: Notificar registro o traspaso.
          - generic [ref=e349]:
            - generic [ref=e350]:
              - heading "Narrativa arquitectónica del escenario" [level=2] [ref=e351]
              - paragraph [ref=e352]: Conectando la vista estructural con el comportamiento transaccional
            - generic [ref=e353]:
              - heading "Resumen ejecutivo" [level=3] [ref=e354]:
                - img [ref=e355]
                - text: Resumen ejecutivo
              - paragraph [ref=e357]: El escenario coordina el registro o traspaso de cuenta de un trabajador, asegurando identidad y voluntad.
            - generic [ref=e358]:
              - heading "Cómo colaboran las estructuras" [level=3] [ref=e359]
              - paragraph [ref=e360]: Gestión de Solicitudes no realiza todas las validaciones, sino que orquesta responsabilidades independientes. Esta separación permite que identidad, consentimiento, transferencia y registro financiero mantengan controles y evidencias propios.
            - generic [ref=e361]:
              - heading "Contexto estructural" [level=3] [ref=e362]
              - paragraph [ref=e363]: Se apoya en una estructura coordinadora encabezada por Gestión de Solicitudes, mientras los dominios de Datos del Trabajador, Resolución de Identidad, Identidad Biométrica, Expediente Electrónico y Consentimiento aseguran que la persona y su voluntad sean verificables. Localización de Cuenta y la Base de Datos Nacional SAR determinan la situación actual de la cuenta. Traspaso de Cuenta coordina la interacción entre la AFORE transferente y la receptora. Libro Mayor conserva la integridad financiera.
              - generic [ref=e364]:
                - generic [ref=e365]:
                  - heading "Trabajador" [level=4] [ref=e366]
                  - generic [ref=e367]:
                    - generic [ref=e368]:
                      - generic [ref=e369]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e370]:
                      - generic [ref=e371]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e372]:
                  - heading "Gestión de Solicitudes" [level=4] [ref=e373]
                  - generic [ref=e374]:
                    - generic [ref=e375]:
                      - generic [ref=e376]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e377]:
                      - generic [ref=e378]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e379]:
                  - heading "Datos del Trabajador" [level=4] [ref=e380]
                  - generic [ref=e381]:
                    - generic [ref=e382]:
                      - generic [ref=e383]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e384]:
                      - generic [ref=e385]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e386]:
                  - heading "Resolución de Identidad" [level=4] [ref=e387]
                  - generic [ref=e388]:
                    - generic [ref=e389]:
                      - generic [ref=e390]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e391]:
                      - generic [ref=e392]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e393]:
                  - heading "Identidad Biométrica" [level=4] [ref=e394]
                  - generic [ref=e395]:
                    - generic [ref=e396]:
                      - generic [ref=e397]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e398]:
                      - generic [ref=e399]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e400]:
                  - heading "Expediente Electrónico" [level=4] [ref=e401]
                  - generic [ref=e402]:
                    - generic [ref=e403]:
                      - generic [ref=e404]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e405]:
                      - generic [ref=e406]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e407]:
                  - heading "Gestión de Consentimiento" [level=4] [ref=e408]
                  - generic [ref=e409]:
                    - generic [ref=e410]:
                      - generic [ref=e411]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e412]:
                      - generic [ref=e413]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e414]:
                  - heading "Localización de Cuenta" [level=4] [ref=e415]
                  - generic [ref=e416]:
                    - generic [ref=e417]:
                      - generic [ref=e418]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e419]:
                      - generic [ref=e420]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e421]:
                  - heading "Base de Datos Nacional SAR" [level=4] [ref=e422]
                  - generic [ref=e423]:
                    - generic [ref=e424]:
                      - generic [ref=e425]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e426]:
                      - generic [ref=e427]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e428]:
                  - heading "Traspaso de Cuenta" [level=4] [ref=e429]
                  - generic [ref=e430]:
                    - generic [ref=e431]:
                      - generic [ref=e432]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e433]:
                      - generic [ref=e434]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e435]:
                  - heading "AFORE transferente" [level=4] [ref=e436]
                  - generic [ref=e437]:
                    - generic [ref=e438]:
                      - generic [ref=e439]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e440]:
                      - generic [ref=e441]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e442]:
                  - heading "AFORE receptora" [level=4] [ref=e443]
                  - generic [ref=e444]:
                    - generic [ref=e445]:
                      - generic [ref=e446]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e447]:
                      - generic [ref=e448]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e449]:
                  - heading "Libro Mayor de Cuenta Individual" [level=4] [ref=e450]
                  - generic [ref=e451]:
                    - generic [ref=e452]:
                      - generic [ref=e453]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e454]:
                      - generic [ref=e455]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e456]:
                  - heading "Notificaciones" [level=4] [ref=e457]
                  - generic [ref=e458]:
                    - generic [ref=e459]:
                      - generic [ref=e460]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e461]:
                      - generic [ref=e462]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e463]:
                  - heading "bdnsar" [level=4] [ref=e464]
                  - generic [ref=e465]:
                    - generic [ref=e466]:
                      - generic [ref=e467]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e468]:
                      - generic [ref=e469]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e470]:
                  - heading "libro mayor" [level=4] [ref=e471]
                  - generic [ref=e472]:
                    - generic [ref=e473]:
                      - generic [ref=e474]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e475]:
                      - generic [ref=e476]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
            - generic [ref=e477]:
              - heading "Comportamiento del escenario" [level=3] [ref=e478]:
                - img [ref=e479]
                - text: Comportamiento del escenario
              - paragraph [ref=e481]: El trabajador inicia la solicitud. La estructura de identidad y expediente valida a la persona antes de consultar la cuenta. El resultado de localización determina si corresponde registrar, traspasar, unificar o rechazar. Cuando procede el traspaso, la administradora transferente entrega información y recursos, la receptora confirma su aceptación y el Libro Mayor registra el cambio. El escenario concluye cuando la cuenta, sus saldos y el registro maestro reflejan a la administradora responsable.
            - generic [ref=e482]:
              - heading "Fases del flujo de extremo a extremo" [level=3] [ref=e483]
              - generic [ref=e484]:
                - generic [ref=e485]:
                  - generic [ref=e486]: "1"
                  - generic [ref=e487]:
                    - heading "Fase 1 — Inicio y registro" [level=4] [ref=e488]
                    - paragraph [ref=e489]: Estructuras involucradas en la captura y validación primaria.
                    - paragraph [ref=e490]: Se ejecutan las validaciones iniciales y se captura el intent de negocio.
                    - generic [ref=e491]:
                      - text: "Resultado:"
                      - generic [ref=e492]: Contexto validado
                - generic [ref=e493]:
                  - generic [ref=e494]: "2"
                  - generic [ref=e495]:
                    - heading "Fase 2 — Ejecución y cierre" [level=4] [ref=e496]
                    - paragraph [ref=e497]: Estructuras encargadas de asentar la resolución financiera y operativa.
                    - paragraph [ref=e498]: Se consolida el estado final en libros mayores y registros maestros.
                    - generic [ref=e499]:
                      - text: "Resultado:"
                      - generic [ref=e500]: Transacción liquidada y notificada
            - generic [ref=e501]:
              - heading "Decisiones y excepciones" [level=3] [ref=e502]:
                - img [ref=e503]
                - text: Decisiones y excepciones
              - generic [ref=e505]:
                - paragraph [ref=e506]: "Las siguientes condiciones de negocio modifican o bifurcan el flujo principal:"
                - list [ref=e507]:
                  - listitem [ref=e508]: Cuenta no registrada
                  - listitem [ref=e509]: cuenta en otra AFORE
                  - listitem [ref=e510]: cuentas duplicadas
                  - listitem [ref=e511]: cuenta no elegible
                  - listitem [ref=e512]: identidad no validada
                  - listitem [ref=e513]: transferencia no conciliada.
              - paragraph [ref=e514]: En caso de falla técnica o rechazo de negocio, la operación se revierte (rollback) y se informa al iniciador para no mantener saldos en tránsito colgados.
            - generic [ref=e515]:
              - generic [ref=e516]:
                - heading "Controles" [level=3] [ref=e517]:
                  - img [ref=e518]
                  - text: Controles
                - paragraph [ref=e521]: Se aplican validaciones preventivas de identidad y saldo, y controles detectivos durante la fase de conciliación contable.
              - generic [ref=e522]:
                - heading "Evidencias" [level=3] [ref=e523]:
                  - img [ref=e524]
                  - text: Evidencias
                - paragraph [ref=e527]: Se conservan bitácoras de aplicación, sellos de tiempo de recepción y los identificadores de trazabilidad en el Libro Mayor.
            - generic [ref=e528]:
              - heading "Resultado Arquitectónico" [level=3] [ref=e529]:
                - img [ref=e530]
                - text: Resultado Arquitectónico
              - paragraph [ref=e533]: El resultado es un cambio de estado en el registro maestro garantizando la atomicidad, durabilidad y consistencia de los datos.
              - generic [ref=e534]:
                - heading "Supuestos Trazables" [level=4] [ref=e535]
                - list [ref=e536]:
                  - listitem [ref=e537]: Disponibilidad de BDNSAR
                  - listitem [ref=e538]: Conformidad con manuales operativos CONSAR
          - region "Pasos estructurados del escenario" [ref=e539]:
            - generic [ref=e540]:
              - heading "Pasos estructurados del escenario" [level=2] [ref=e541]
              - generic [ref=e542]:
                - paragraph [ref=e543]: Secuencia cronológica de interacciones arquitectónicas, flujos de control y transferencias de información.
                - generic [ref=e544]: 21 pasos
            - generic [ref=e545]:
              - button "1 Solicitar registro o traspaso. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND" [ref=e548] [cursor=pointer]:
                - generic [ref=e549]:
                  - generic [ref=e550]:
                    - generic [ref=e551]: "1"
                    - generic [ref=e552]:
                      - heading "Solicitar registro o traspaso." [level=3] [ref=e553]
                      - paragraph [ref=e554]: Trabajador→Gestión de Solicitudes
                      - generic [ref=e555]: SYNCHRONOUS-COMMAND
                  - img [ref=e557]
              - complementary "Solicitar registro o traspaso." [ref=e562]:
                - generic [ref=e563]:
                  - generic [ref=e565]: Paso 1 de 21
                  - heading "Solicitar registro o traspaso." [level=3] [ref=e566]
                  - generic [ref=e567]:
                    - paragraph [ref=e568]: Trabajador→Gestión de Solicitudes
                    - generic [ref=e569]: SYNCHRONOUS-COMMAND
                - generic [ref=e570]:
                  - generic [ref=e571]:
                    - heading "Propósito de Negocio" [level=4] [ref=e572]:
                      - img [ref=e573]
                      - text: Propósito de Negocio
                    - paragraph [ref=e575]: Permite cambiar el estado de la operación hacia la siguiente fase de consolidación.
                  - generic [ref=e576]:
                    - heading "Contexto Estructural" [level=4] [ref=e577]
                    - paragraph [ref=e578]: Interacción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.
                  - generic [ref=e579]:
                    - heading "Comportamiento Sistémico" [level=4] [ref=e580]
                    - paragraph [ref=e581]: p-trabajador emite Solicitar registro o traspaso. a p-gesti-n-de-soli.
                  - generic [ref=e582]:
                    - generic [ref=e583]:
                      - heading "Control" [level=5] [ref=e584]:
                        - img [ref=e585]
                        - text: Control
                      - paragraph [ref=e588]: Validación de formato e integridad de origen antes del envío.
                    - generic [ref=e589]:
                      - heading "Excepción" [level=5] [ref=e590]:
                        - img [ref=e591]
                        - text: Excepción
                      - paragraph [ref=e593]: Si la conexión falla, se genera bitácora de excepción.
                - generic [ref=e594]:
                  - button "Anterior" [disabled] [ref=e595]:
                    - img [ref=e596]
                    - generic [ref=e598]: Anterior
                  - generic [ref=e599]: 1 / 21
                  - button "Siguiente" [ref=e600]:
                    - generic [ref=e601]: Siguiente
                    - img [ref=e602]
  - contentinfo [ref=e604]:
    - generic [ref=e605]:
      - paragraph [ref=e606]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e607]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e613] [cursor=pointer]:
    - img [ref=e614]
  - alert [ref=e617]
```