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
        - link "RAIA 0.1.0 Red de Arquitectura de Industria" [ref=e5]:
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
        - link "Overview" [ref=e29]:
          - /url: /
        - link "Service Landscape" [ref=e30]:
          - /url: /service-landscape/value-chain
        - link "Scenarios" [ref=e31]:
          - /url: /business-scenarios
        - button "Más" [ref=e33]:
          - text: Más
          - img [ref=e34]
  - main [ref=e36]:
    - generic [ref=e38]:
      - link "Volver al Portal Principal" [ref=e39]:
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
              - generic: Diagrama de secuencia vectorial con 14 participantes y 21 interacciones.
              - generic [ref=e208]:
                - generic [ref=e211]: sd RAIA-BS-0001
                - generic [ref=e212]:
                  - generic [ref=e215]: alt
                  - generic [ref=e216]: "[Condiciones de Negocio]"
                  - generic [ref=e218]: "[else Cuenta no registrada]"
                  - generic [ref=e220]: "[else Cuenta registrada en otra AFORE]"
                  - generic [ref=e222]: "[else Múltiples cuentas]"
                  - generic [ref=e224]: "[else Cuenta no elegible]"
                - generic "Trabajador" [ref=e225]:
                  - generic [ref=e227]: Trabajador
                - generic "Gestión de Solicitudes" [ref=e228]:
                  - generic [ref=e230]: Gestión de Solicitudes
                - generic "Resolución de Identidad" [ref=e231]:
                  - generic [ref=e233]: Resolución de Identidad
                - generic "Identidad Biométrica" [ref=e234]:
                  - generic [ref=e236]: Identidad Biométrica
                - generic "Expediente Electrónico" [ref=e237]:
                  - generic [ref=e239]: Expediente Electrónico
                - generic "Gestión de Consentimiento" [ref=e240]:
                  - generic [ref=e242]: Gestión de Consentimiento
                - generic "Localización de Cuenta" [ref=e243]:
                  - generic [ref=e245]: Localización de Cuenta
                - generic "Base de Datos Nacional SAR" [ref=e246]:
                  - generic [ref=e248]: Base de Datos Nacional SAR
                - generic "Traspaso de Cuenta" [ref=e249]:
                  - generic [ref=e251]: Traspaso de Cuenta
                - generic "AFORE transferente" [ref=e252]:
                  - generic [ref=e254]: AFORE transferente
                - generic "Libro Mayor de Cuenta Individual" [ref=e255]:
                  - generic [ref=e257]: Libro Mayor de Cuenta Individual
                - generic "Notificaciones" [ref=e258]:
                  - generic [ref=e260]: Notificaciones
                - generic "BDNSAR" [ref=e261]:
                  - generic [ref=e263]: BDNSAR
                - generic "libro mayor" [ref=e264]:
                  - generic [ref=e266]: libro mayor
                - generic "[1] Solicitar registro o traspaso. Solicitar registro o traspaso." [ref=e267] [cursor=pointer]:
                  - generic [ref=e270]: "[1]"
                  - generic [ref=e271]: Solicitar registro o traspaso.
                - generic "[2] Recuperar datos. Recuperar datos." [ref=e272] [cursor=pointer]:
                  - generic [ref=e274]: "[2]"
                  - generic [ref=e275]: Recuperar datos.
                - generic "[3] Entregar datos disponibles. Entregar datos disponibles." [ref=e276] [cursor=pointer]:
                  - generic [ref=e278]: "[3]"
                  - generic [ref=e279]: Entregar datos disponibles.
                - generic "[4] Validar identidad. Validar identidad." [ref=e280] [cursor=pointer]:
                  - generic [ref=e282]: "[4]"
                  - generic [ref=e283]: Validar identidad.
                - generic "[5] Validar biometría y prueba de vida. Validar biometría y prueba de vida." [ref=e284] [cursor=pointer]:
                  - generic [ref=e286]: "[5]"
                  - generic [ref=e287]: Validar biometría y prueba de vida.
                - generic "[6] Confirmar resultado biométrico. Confirmar resultado biométrico." [ref=e288] [cursor=pointer]:
                  - generic [ref=e290]: "[6]"
                  - generic [ref=e291]: Confirmar resultado biométrico.
                - generic "[7] Integrar expediente. Integrar expediente." [ref=e292] [cursor=pointer]:
                  - generic [ref=e294]: "[7]"
                  - generic [ref=e295]: Integrar expediente.
                - generic "[8] Capturar consentimiento. Capturar consentimiento." [ref=e296] [cursor=pointer]:
                  - generic [ref=e298]: "[8]"
                  - generic [ref=e299]: Capturar consentimiento.
                - generic "[9] Consultar existencia de cuenta. Consultar existencia de cuenta." [ref=e300] [cursor=pointer]:
                  - generic [ref=e302]: "[9]"
                  - generic [ref=e303]: Consultar existencia de cuenta.
                - generic "[10] Buscar cuenta individual. Buscar cuenta individual." [ref=e304] [cursor=pointer]:
                  - generic [ref=e306]: "[10]"
                  - generic [ref=e307]: Buscar cuenta individual.
                - generic "[11] Entregar estado de cuenta. Entregar estado de cuenta." [ref=e308] [cursor=pointer]:
                  - generic [ref=e310]: "[11]"
                  - generic [ref=e311]: Entregar estado de cuenta.
                - generic "[12] Informar resultado. Informar resultado." [ref=e312] [cursor=pointer]:
                  - generic [ref=e314]: "[12]"
                  - generic [ref=e315]: Informar resultado.
                - generic "[13] Registrar solicitud. Registrar solicitud." [ref=e316] [cursor=pointer]:
                  - generic [ref=e318]: "[13]"
                  - generic [ref=e319]: Registrar solicitud.
                - generic "[14] Solicitar información y saldos. Solicitar información y saldos." [ref=e320] [cursor=pointer]:
                  - generic [ref=e322]: "[14]"
                  - generic [ref=e323]: Solicitar información y saldos.
                - generic "[15] Entregar información. Entregar información." [ref=e324] [cursor=pointer]:
                  - generic [ref=e326]: "[15]"
                  - generic [ref=e327]: Entregar información.
                - generic "[16] Solicitar aceptación. Solicitar aceptación." [ref=e328] [cursor=pointer]:
                  - generic [ref=e330]: "[16]"
                  - generic [ref=e331]: Solicitar aceptación.
                - generic "[17] Confirmar aceptación. Confirmar aceptación." [ref=e332] [cursor=pointer]:
                  - generic [ref=e334]: "[17]"
                  - generic [ref=e335]: Confirmar aceptación.
                - generic "[18] Registrar transferencia. Registrar transferencia." [ref=e336] [cursor=pointer]:
                  - generic [ref=e338]: "[18]"
                  - generic [ref=e339]: Registrar transferencia.
                - generic "[19] Confirmar registro. Confirmar registro." [ref=e340] [cursor=pointer]:
                  - generic [ref=e342]: "[19]"
                  - generic [ref=e343]: Confirmar registro.
                - generic "[20] Emitir resultado. Emitir resultado." [ref=e344] [cursor=pointer]:
                  - generic [ref=e346]: "[20]"
                  - generic [ref=e347]: Emitir resultado.
                - generic "[21] Notificar registro o traspaso. Notificar registro o traspaso." [ref=e348] [cursor=pointer]:
                  - generic [ref=e350]: "[21]"
                  - generic [ref=e351]: Notificar registro o traspaso.
          - generic [ref=e353]:
            - generic [ref=e354]:
              - heading "Narrativa arquitectónica del escenario" [level=2] [ref=e355]
              - paragraph [ref=e356]: Conectando la vista estructural con el comportamiento transaccional
            - generic [ref=e357]:
              - heading "Resumen ejecutivo" [level=3] [ref=e358]:
                - img [ref=e359]
                - text: Resumen ejecutivo
              - paragraph [ref=e361]: El escenario coordina el registro o traspaso de cuenta de un trabajador, asegurando identidad y voluntad.
            - generic [ref=e362]:
              - heading "Cómo colaboran las estructuras" [level=3] [ref=e363]
              - paragraph [ref=e364]: Gestión de Solicitudes no realiza todas las validaciones, sino que orquesta responsabilidades independientes. Esta separación permite que identidad, consentimiento, transferencia y registro financiero mantengan controles y evidencias propios.
            - generic [ref=e365]:
              - heading "Contexto estructural" [level=3] [ref=e366]
              - paragraph [ref=e367]: Se apoya en una estructura coordinadora encabezada por Gestión de Solicitudes, mientras los dominios de Datos del Trabajador, Resolución de Identidad, Identidad Biométrica, Expediente Electrónico y Consentimiento aseguran que la persona y su voluntad sean verificables. Localización de Cuenta y la Base de Datos Nacional SAR determinan la situación actual de la cuenta. Traspaso de Cuenta coordina la interacción entre la AFORE transferente y la receptora. Libro Mayor conserva la integridad financiera.
              - generic [ref=e368]:
                - generic [ref=e369]:
                  - heading "Trabajador" [level=4] [ref=e370]
                  - generic [ref=e371]:
                    - generic [ref=e372]:
                      - generic [ref=e373]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e374]:
                      - generic [ref=e375]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e376]:
                  - heading "Gestión de Solicitudes" [level=4] [ref=e377]
                  - generic [ref=e378]:
                    - generic [ref=e379]:
                      - generic [ref=e380]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e381]:
                      - generic [ref=e382]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e383]:
                  - heading "Datos del Trabajador" [level=4] [ref=e384]
                  - generic [ref=e385]:
                    - generic [ref=e386]:
                      - generic [ref=e387]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e388]:
                      - generic [ref=e389]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e390]:
                  - heading "Resolución de Identidad" [level=4] [ref=e391]
                  - generic [ref=e392]:
                    - generic [ref=e393]:
                      - generic [ref=e394]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e395]:
                      - generic [ref=e396]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e397]:
                  - heading "Identidad Biométrica" [level=4] [ref=e398]
                  - generic [ref=e399]:
                    - generic [ref=e400]:
                      - generic [ref=e401]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e402]:
                      - generic [ref=e403]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e404]:
                  - heading "Expediente Electrónico" [level=4] [ref=e405]
                  - generic [ref=e406]:
                    - generic [ref=e407]:
                      - generic [ref=e408]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e409]:
                      - generic [ref=e410]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e411]:
                  - heading "Gestión de Consentimiento" [level=4] [ref=e412]
                  - generic [ref=e413]:
                    - generic [ref=e414]:
                      - generic [ref=e415]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e416]:
                      - generic [ref=e417]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e418]:
                  - heading "Localización de Cuenta" [level=4] [ref=e419]
                  - generic [ref=e420]:
                    - generic [ref=e421]:
                      - generic [ref=e422]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e423]:
                      - generic [ref=e424]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e425]:
                  - heading "Base de Datos Nacional SAR" [level=4] [ref=e426]
                  - generic [ref=e427]:
                    - generic [ref=e428]:
                      - generic [ref=e429]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e430]:
                      - generic [ref=e431]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e432]:
                  - heading "Traspaso de Cuenta" [level=4] [ref=e433]
                  - generic [ref=e434]:
                    - generic [ref=e435]:
                      - generic [ref=e436]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e437]:
                      - generic [ref=e438]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e439]:
                  - heading "AFORE transferente" [level=4] [ref=e440]
                  - generic [ref=e441]:
                    - generic [ref=e442]:
                      - generic [ref=e443]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e444]:
                      - generic [ref=e445]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e446]:
                  - heading "AFORE receptora" [level=4] [ref=e447]
                  - generic [ref=e448]:
                    - generic [ref=e449]:
                      - generic [ref=e450]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e451]:
                      - generic [ref=e452]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e453]:
                  - heading "Libro Mayor de Cuenta Individual" [level=4] [ref=e454]
                  - generic [ref=e455]:
                    - generic [ref=e456]:
                      - generic [ref=e457]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e458]:
                      - generic [ref=e459]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e460]:
                  - heading "Notificaciones" [level=4] [ref=e461]
                  - generic [ref=e462]:
                    - generic [ref=e463]:
                      - generic [ref=e464]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e465]:
                      - generic [ref=e466]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e467]:
                  - heading "bdnsar" [level=4] [ref=e468]
                  - generic [ref=e469]:
                    - generic [ref=e470]:
                      - generic [ref=e471]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e472]:
                      - generic [ref=e473]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e474]:
                  - heading "libro mayor" [level=4] [ref=e475]
                  - generic [ref=e476]:
                    - generic [ref=e477]:
                      - generic [ref=e478]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e479]:
                      - generic [ref=e480]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
            - generic [ref=e481]:
              - heading "Comportamiento del escenario" [level=3] [ref=e482]:
                - img [ref=e483]
                - text: Comportamiento del escenario
              - paragraph [ref=e485]: El trabajador inicia la solicitud. La estructura de identidad y expediente valida a la persona antes de consultar la cuenta. El resultado de localización determina si corresponde registrar, traspasar, unificar o rechazar. Cuando procede el traspaso, la administradora transferente entrega información y recursos, la receptora confirma su aceptación y el Libro Mayor registra el cambio. El escenario concluye cuando la cuenta, sus saldos y el registro maestro reflejan a la administradora responsable.
            - generic [ref=e486]:
              - heading "Fases del flujo de extremo a extremo" [level=3] [ref=e487]
              - generic [ref=e488]:
                - generic [ref=e489]:
                  - generic [ref=e490]: "1"
                  - generic [ref=e491]:
                    - heading "Fase 1 — Inicio y registro" [level=4] [ref=e492]
                    - paragraph [ref=e493]: Estructuras involucradas en la captura y validación primaria.
                    - paragraph [ref=e494]: Se ejecutan las validaciones iniciales y se captura el intent de negocio.
                    - generic [ref=e495]:
                      - text: "Resultado:"
                      - generic [ref=e496]: Contexto validado
                - generic [ref=e497]:
                  - generic [ref=e498]: "2"
                  - generic [ref=e499]:
                    - heading "Fase 2 — Ejecución y cierre" [level=4] [ref=e500]
                    - paragraph [ref=e501]: Estructuras encargadas de asentar la resolución financiera y operativa.
                    - paragraph [ref=e502]: Se consolida el estado final en libros mayores y registros maestros.
                    - generic [ref=e503]:
                      - text: "Resultado:"
                      - generic [ref=e504]: Transacción liquidada y notificada
            - generic [ref=e505]:
              - heading "Decisiones y excepciones" [level=3] [ref=e506]:
                - img [ref=e507]
                - text: Decisiones y excepciones
              - generic [ref=e509]:
                - paragraph [ref=e510]: "Las siguientes condiciones de negocio modifican o bifurcan el flujo principal:"
                - list [ref=e511]:
                  - listitem [ref=e512]: Cuenta no registrada
                  - listitem [ref=e513]: cuenta en otra AFORE
                  - listitem [ref=e514]: cuentas duplicadas
                  - listitem [ref=e515]: cuenta no elegible
                  - listitem [ref=e516]: identidad no validada
                  - listitem [ref=e517]: transferencia no conciliada.
              - paragraph [ref=e518]: En caso de falla técnica o rechazo de negocio, la operación se revierte (rollback) y se informa al iniciador para no mantener saldos en tránsito colgados.
            - generic [ref=e519]:
              - generic [ref=e520]:
                - heading "Controles" [level=3] [ref=e521]:
                  - img [ref=e522]
                  - text: Controles
                - paragraph [ref=e525]: Se aplican validaciones preventivas de identidad y saldo, y controles detectivos durante la fase de conciliación contable.
              - generic [ref=e526]:
                - heading "Evidencias" [level=3] [ref=e527]:
                  - img [ref=e528]
                  - text: Evidencias
                - paragraph [ref=e531]: Se conservan bitácoras de aplicación, sellos de tiempo de recepción y los identificadores de trazabilidad en el Libro Mayor.
            - generic [ref=e532]:
              - heading "Resultado Arquitectónico" [level=3] [ref=e533]:
                - img [ref=e534]
                - text: Resultado Arquitectónico
              - paragraph [ref=e537]: El resultado es un cambio de estado en el registro maestro garantizando la atomicidad, durabilidad y consistencia de los datos.
              - generic [ref=e538]:
                - heading "Supuestos Trazables" [level=4] [ref=e539]
                - list [ref=e540]:
                  - listitem [ref=e541]: Disponibilidad de BDNSAR
                  - listitem [ref=e542]: Conformidad con manuales operativos CONSAR
          - region "Pasos estructurados del escenario" [ref=e543]:
            - generic [ref=e544]:
              - heading "Pasos estructurados del escenario" [level=2] [ref=e545]
              - generic [ref=e546]:
                - paragraph [ref=e547]: Secuencia cronológica de interacciones arquitectónicas, flujos de control y transferencias de información.
                - generic [ref=e548]: 21 pasos
            - generic [ref=e549]:
              - button "1 Solicitar registro o traspaso. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND" [ref=e552] [cursor=pointer]:
                - generic [ref=e553]:
                  - generic [ref=e554]:
                    - generic [ref=e555]: "1"
                    - generic [ref=e556]:
                      - heading "Solicitar registro o traspaso." [level=3] [ref=e557]
                      - paragraph [ref=e558]: Trabajador→Gestión de Solicitudes
                      - generic [ref=e559]: SYNCHRONOUS-COMMAND
                  - img [ref=e561]
              - complementary "Solicitar registro o traspaso." [ref=e566]:
                - generic [ref=e567]:
                  - generic [ref=e569]: Paso 1 de 21
                  - heading "Solicitar registro o traspaso." [level=3] [ref=e570]
                  - generic [ref=e571]:
                    - paragraph [ref=e572]: Trabajador→Gestión de Solicitudes
                    - generic [ref=e573]: SYNCHRONOUS-COMMAND
                - generic [ref=e574]:
                  - generic [ref=e575]:
                    - heading "Propósito de Negocio" [level=4] [ref=e576]:
                      - img [ref=e577]
                      - text: Propósito de Negocio
                    - paragraph [ref=e579]: Permite cambiar el estado de la operación hacia la siguiente fase de consolidación.
                  - generic [ref=e580]:
                    - heading "Contexto Estructural" [level=4] [ref=e581]
                    - paragraph [ref=e582]: Interacción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.
                  - generic [ref=e583]:
                    - heading "Comportamiento Sistémico" [level=4] [ref=e584]
                    - paragraph [ref=e585]: p-trabajador emite Solicitar registro o traspaso. a p-gesti-n-de-soli.
                  - generic [ref=e586]:
                    - generic [ref=e587]:
                      - heading "Control" [level=5] [ref=e588]:
                        - img [ref=e589]
                        - text: Control
                      - paragraph [ref=e592]: Validación de formato e integridad de origen antes del envío.
                    - generic [ref=e593]:
                      - heading "Excepción" [level=5] [ref=e594]:
                        - img [ref=e595]
                        - text: Excepción
                      - paragraph [ref=e597]: Si la conexión falla, se genera bitácora de excepción.
                - generic [ref=e598]:
                  - button "Anterior" [disabled] [ref=e599]:
                    - img [ref=e600]
                    - generic [ref=e602]: Anterior
                  - generic [ref=e603]: 1 / 21
                  - button "Siguiente" [ref=e604]:
                    - generic [ref=e605]: Siguiente
                    - img [ref=e606]
  - contentinfo [ref=e608]:
    - generic [ref=e609]:
      - paragraph [ref=e610]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e611]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e617] [cursor=pointer]:
    - generic [ref=e620]:
      - text: Compiling
      - generic [ref=e621]:
        - generic [ref=e622]: .
        - generic [ref=e623]: .
        - generic [ref=e624]: .
  - alert [ref=e625]
```