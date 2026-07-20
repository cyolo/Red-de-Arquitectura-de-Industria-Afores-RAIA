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
+ Received  + 168

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
+                   ".bg-slate-100.px-2.font-extrabold",
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
+           ".bg-slate-100.px-2.font-extrabold",
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
+           ".md\\:flex-row > p:nth-child(2)",
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
          - generic [ref=e38]:
            - heading "RAIA Business Scenarios" [level=1] [ref=e39]
            - paragraph [ref=e40]: Catálogo e Interacción de Secuencias del SAR
        - paragraph [ref=e41]: Catálogo dinámico de escenarios lógicos de industria propuestos. A continuación puede visualizar y simular de extremo a extremo las interacciones ordenadas entre Service Domains necesarios para ejecutar trámites clave del Sistema de Ahorro para el Retiro.
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Escenarios Propuestos (0.1.0)" [level=2] [ref=e44]
          - generic [ref=e45]:
            - button "Registro y Traspaso de Cuenta Individual 21 pasos estructurados" [pressed] [ref=e46]:
              - generic [ref=e47]:
                - generic [ref=e48]: Registro y Traspaso de Cuenta Individual
                - img [ref=e49]
              - generic [ref=e51]: 21 pasos estructurados
            - button "Recaudación de Aportaciones e Inversión 15 pasos estructurados" [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: Recaudación de Aportaciones e Inversión
                - img [ref=e55]
              - generic [ref=e57]: 15 pasos estructurados
            - button "Localización de cuenta individual 13 pasos estructurados" [ref=e58]:
              - generic [ref=e59]:
                - generic [ref=e60]: Localización de cuenta individual
                - img [ref=e61]
              - generic [ref=e63]: 13 pasos estructurados
            - button "Asignación automática de cuentas 15 pasos estructurados" [ref=e64]:
              - generic [ref=e65]:
                - generic [ref=e66]: Asignación automática de cuentas
                - img [ref=e67]
              - generic [ref=e69]: 15 pasos estructurados
            - button "Reasignación por desempeño 16 pasos estructurados" [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e72]: Reasignación por desempeño
                - img [ref=e73]
              - generic [ref=e75]: 16 pasos estructurados
            - button "Unificación de cuentas duplicadas 17 pasos estructurados" [ref=e76]:
              - generic [ref=e77]:
                - generic [ref=e78]: Unificación de cuentas duplicadas
                - img [ref=e79]
              - generic [ref=e81]: 17 pasos estructurados
            - button "Separación de cuentas IMSS/ISSSTE 15 pasos estructurados" [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]: Separación de cuentas IMSS/ISSSTE
                - img [ref=e85]
              - generic [ref=e87]: 15 pasos estructurados
            - button "Asignación automática a SIEFORE Generacional 12 pasos estructurados" [ref=e88]:
              - generic [ref=e89]:
                - generic [ref=e90]: Asignación automática a SIEFORE Generacional
                - img [ref=e91]
              - generic [ref=e93]: 12 pasos estructurados
            - button "Construcción y rebalanceo de portafolio 15 pasos estructurados" [ref=e94]:
              - generic [ref=e95]:
                - generic [ref=e96]: Construcción y rebalanceo de portafolio
                - img [ref=e97]
              - generic [ref=e99]: 15 pasos estructurados
            - button "Ejecución y liquidación de operaciones 16 pasos estructurados" [ref=e100]:
              - generic [ref=e101]:
                - generic [ref=e102]: Ejecución y liquidación de operaciones
                - img [ref=e103]
              - generic [ref=e105]: 16 pasos estructurados
            - button "Valuación de instrumentos financieros 12 pasos estructurados" [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]: Valuación de instrumentos financieros
                - img [ref=e109]
              - generic [ref=e111]: 12 pasos estructurados
            - button "Retiro por desempleo IMSS/ISSSTE 17 pasos estructurados" [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]: Retiro por desempleo IMSS/ISSSTE
                - img [ref=e115]
              - generic [ref=e117]: 17 pasos estructurados
            - button "Ayuda para gastos de matrimonio 14 pasos estructurados" [ref=e118]:
              - generic [ref=e119]:
                - generic [ref=e120]: Ayuda para gastos de matrimonio
                - img [ref=e121]
              - generic [ref=e123]: 14 pasos estructurados
            - button "Elección de modalidad de pensión 15 pasos estructurados" [ref=e124]:
              - generic [ref=e125]:
                - generic [ref=e126]: Elección de modalidad de pensión
                - img [ref=e127]
              - generic [ref=e129]: 15 pasos estructurados
            - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados" [ref=e130]:
              - generic [ref=e131]:
                - generic [ref=e132]: Transferencia de fondos para renta vitalicia
                - img [ref=e133]
              - generic [ref=e135]: 16 pasos estructurados
            - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados" [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: Identificación de cuentas potencialmente elegibles para el Fondo
                - img [ref=e139]
              - generic [ref=e141]: 16 pasos estructurados
            - button "Transferencia de recursos al Fondo 15 pasos estructurados" [ref=e142]:
              - generic [ref=e143]:
                - generic [ref=e144]: Transferencia de recursos al Fondo
                - img [ref=e145]
              - generic [ref=e147]: 15 pasos estructurados
            - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados" [ref=e148]:
              - generic [ref=e149]:
                - generic [ref=e150]: Cálculo y gestión del complemento de pensión
                - img [ref=e151]
              - generic [ref=e153]: 17 pasos estructurados
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - generic [ref=e157]: "ID: RAIA-BS-0001"
              - generic [ref=e158]: "Estado: Proposed"
              - generic [ref=e159]: "Validación: Pending"
            - heading "Registro y Traspaso de Cuenta Individual" [level=2] [ref=e160]
            - paragraph [ref=e161]: Proceso completo mediante el cual un trabajador solicita el traspaso de su cuenta individual a otra Afore, incluyendo validación biométrica, de expediente y actualización del libro mayor.
          - figure "Registro y Traspaso de Cuenta Individual" [ref=e163]:
            - toolbar "Controles del diagrama de secuencia" [ref=e164]:
              - button "Acercar (+)" [ref=e165]:
                - img [ref=e166]
              - button "Alejar (-)" [ref=e169]:
                - img [ref=e170]
              - button "Ajustar al contenido (0)" [ref=e174]:
                - img [ref=e175]
              - button "Restablecer vista (1)" [ref=e180]:
                - img [ref=e181]
              - button "Visualizar a pantalla completa (F)" [ref=e186]:
                - img [ref=e187]
            - img "Registro y Traspaso de Cuenta Individual" [ref=e193]:
              - generic [ref=e194]:
                - generic [ref=e197]: sd RAIA-BS-0001
                - generic [ref=e198]:
                  - generic [ref=e201]: alt
                  - generic [ref=e202]: "[Condiciones de Negocio]"
                  - generic [ref=e204]: "[else Cuenta no registrada]"
                  - generic [ref=e206]: "[else Cuenta registrada en otra AFORE]"
                  - generic [ref=e208]: "[else Múltiples cuentas]"
                  - generic [ref=e210]: "[else Cuenta no elegible]"
                - generic "Trabajador" [ref=e211]:
                  - generic [ref=e213]: Trabajador
                - generic "Gestión de Solicitudes" [ref=e214]:
                  - generic [ref=e216]: Gestión de Solicitudes
                - generic "Resolución de Identidad" [ref=e217]:
                  - generic [ref=e219]: Resolución de Identidad
                - generic "Identidad Biométrica" [ref=e220]:
                  - generic [ref=e222]: Identidad Biométrica
                - generic "Expediente Electrónico" [ref=e223]:
                  - generic [ref=e225]: Expediente Electrónico
                - generic "Gestión de Consentimiento" [ref=e226]:
                  - generic [ref=e228]: Gestión de Consentimiento
                - generic "Localización de Cuenta" [ref=e229]:
                  - generic [ref=e231]: Localización de Cuenta
                - generic "Base de Datos Nacional SAR" [ref=e232]:
                  - generic [ref=e234]: Base de Datos Nacional SAR
                - generic "Traspaso de Cuenta" [ref=e235]:
                  - generic [ref=e237]: Traspaso de Cuenta
                - generic "AFORE transferente" [ref=e238]:
                  - generic [ref=e240]: AFORE transferente
                - generic "Libro Mayor de Cuenta Individual" [ref=e241]:
                  - generic [ref=e243]: Libro Mayor de Cuenta Individual
                - generic "Notificaciones" [ref=e244]:
                  - generic [ref=e246]: Notificaciones
                - generic "BDNSAR" [ref=e247]:
                  - generic [ref=e249]: BDNSAR
                - generic "libro mayor" [ref=e250]:
                  - generic [ref=e252]: libro mayor
                - generic "[1] Solicitar registro o traspaso. Solicitar registro o traspaso." [ref=e253] [cursor=pointer]:
                  - generic [ref=e256]: "[1]"
                  - generic [ref=e257]: Solicitar registro o traspaso.
                - generic "[2] Recuperar datos. Recuperar datos." [ref=e258] [cursor=pointer]:
                  - generic [ref=e260]: "[2]"
                  - generic [ref=e261]: Recuperar datos.
                - generic "[3] Entregar datos disponibles. Entregar datos disponibles." [ref=e262] [cursor=pointer]:
                  - generic [ref=e264]: "[3]"
                  - generic [ref=e265]: Entregar datos disponibles.
                - generic "[4] Validar identidad. Validar identidad." [ref=e266] [cursor=pointer]:
                  - generic [ref=e268]: "[4]"
                  - generic [ref=e269]: Validar identidad.
                - generic "[5] Validar biometría y prueba de vida. Validar biometría y prueba de vida." [ref=e270] [cursor=pointer]:
                  - generic [ref=e272]: "[5]"
                  - generic [ref=e273]: Validar biometría y prueba de vida.
                - generic "[6] Confirmar resultado biométrico. Confirmar resultado biométrico." [ref=e274] [cursor=pointer]:
                  - generic [ref=e276]: "[6]"
                  - generic [ref=e277]: Confirmar resultado biométrico.
                - generic "[7] Integrar expediente. Integrar expediente." [ref=e278] [cursor=pointer]:
                  - generic [ref=e280]: "[7]"
                  - generic [ref=e281]: Integrar expediente.
                - generic "[8] Capturar consentimiento. Capturar consentimiento." [ref=e282] [cursor=pointer]:
                  - generic [ref=e284]: "[8]"
                  - generic [ref=e285]: Capturar consentimiento.
                - generic "[9] Consultar existencia de cuenta. Consultar existencia de cuenta." [ref=e286] [cursor=pointer]:
                  - generic [ref=e288]: "[9]"
                  - generic [ref=e289]: Consultar existencia de cuenta.
                - generic "[10] Buscar cuenta individual. Buscar cuenta individual." [ref=e290] [cursor=pointer]:
                  - generic [ref=e292]: "[10]"
                  - generic [ref=e293]: Buscar cuenta individual.
                - generic "[11] Entregar estado de cuenta. Entregar estado de cuenta." [ref=e294] [cursor=pointer]:
                  - generic [ref=e296]: "[11]"
                  - generic [ref=e297]: Entregar estado de cuenta.
                - generic "[12] Informar resultado. Informar resultado." [ref=e298] [cursor=pointer]:
                  - generic [ref=e300]: "[12]"
                  - generic [ref=e301]: Informar resultado.
                - generic "[13] Registrar solicitud. Registrar solicitud." [ref=e302] [cursor=pointer]:
                  - generic [ref=e304]: "[13]"
                  - generic [ref=e305]: Registrar solicitud.
                - generic "[14] Solicitar información y saldos. Solicitar información y saldos." [ref=e306] [cursor=pointer]:
                  - generic [ref=e308]: "[14]"
                  - generic [ref=e309]: Solicitar información y saldos.
                - generic "[15] Entregar información. Entregar información." [ref=e310] [cursor=pointer]:
                  - generic [ref=e312]: "[15]"
                  - generic [ref=e313]: Entregar información.
                - generic "[16] Solicitar aceptación. Solicitar aceptación." [ref=e314] [cursor=pointer]:
                  - generic [ref=e316]: "[16]"
                  - generic [ref=e317]: Solicitar aceptación.
                - generic "[17] Confirmar aceptación. Confirmar aceptación." [ref=e318] [cursor=pointer]:
                  - generic [ref=e320]: "[17]"
                  - generic [ref=e321]: Confirmar aceptación.
                - generic "[18] Registrar transferencia. Registrar transferencia." [ref=e322] [cursor=pointer]:
                  - generic [ref=e324]: "[18]"
                  - generic [ref=e325]: Registrar transferencia.
                - generic "[19] Confirmar registro. Confirmar registro." [ref=e326] [cursor=pointer]:
                  - generic [ref=e328]: "[19]"
                  - generic [ref=e329]: Confirmar registro.
                - generic "[20] Emitir resultado. Emitir resultado." [ref=e330] [cursor=pointer]:
                  - generic [ref=e332]: "[20]"
                  - generic [ref=e333]: Emitir resultado.
                - generic "[21] Notificar registro o traspaso. Notificar registro o traspaso." [ref=e334] [cursor=pointer]:
                  - generic [ref=e336]: "[21]"
                  - generic [ref=e337]: Notificar registro o traspaso.
          - generic [ref=e339]:
            - generic [ref=e340]:
              - heading "Narrativa arquitectónica del escenario" [level=2] [ref=e341]
              - paragraph [ref=e342]: Conectando la vista estructural con el comportamiento transaccional
            - generic [ref=e343]:
              - heading "Resumen ejecutivo" [level=3] [ref=e344]:
                - img [ref=e345]
                - text: Resumen ejecutivo
              - paragraph [ref=e347]: El escenario coordina el registro o traspaso de cuenta de un trabajador, asegurando identidad y voluntad.
            - generic [ref=e348]:
              - heading "Cómo colaboran las estructuras" [level=3] [ref=e349]
              - paragraph [ref=e350]: Gestión de Solicitudes no realiza todas las validaciones, sino que orquesta responsabilidades independientes. Esta separación permite que identidad, consentimiento, transferencia y registro financiero mantengan controles y evidencias propios.
            - generic [ref=e351]:
              - heading "Contexto estructural" [level=3] [ref=e352]
              - paragraph [ref=e353]: Se apoya en una estructura coordinadora encabezada por Gestión de Solicitudes, mientras los dominios de Datos del Trabajador, Resolución de Identidad, Identidad Biométrica, Expediente Electrónico y Consentimiento aseguran que la persona y su voluntad sean verificables. Localización de Cuenta y la Base de Datos Nacional SAR determinan la situación actual de la cuenta. Traspaso de Cuenta coordina la interacción entre la AFORE transferente y la receptora. Libro Mayor conserva la integridad financiera.
              - generic [ref=e354]:
                - generic [ref=e355]:
                  - heading "Trabajador" [level=4] [ref=e356]
                  - generic [ref=e357]:
                    - generic [ref=e358]:
                      - generic [ref=e359]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e360]:
                      - generic [ref=e361]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e362]:
                  - heading "Gestión de Solicitudes" [level=4] [ref=e363]
                  - generic [ref=e364]:
                    - generic [ref=e365]:
                      - generic [ref=e366]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e367]:
                      - generic [ref=e368]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e369]:
                  - heading "Datos del Trabajador" [level=4] [ref=e370]
                  - generic [ref=e371]:
                    - generic [ref=e372]:
                      - generic [ref=e373]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e374]:
                      - generic [ref=e375]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e376]:
                  - heading "Resolución de Identidad" [level=4] [ref=e377]
                  - generic [ref=e378]:
                    - generic [ref=e379]:
                      - generic [ref=e380]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e381]:
                      - generic [ref=e382]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e383]:
                  - heading "Identidad Biométrica" [level=4] [ref=e384]
                  - generic [ref=e385]:
                    - generic [ref=e386]:
                      - generic [ref=e387]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e388]:
                      - generic [ref=e389]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e390]:
                  - heading "Expediente Electrónico" [level=4] [ref=e391]
                  - generic [ref=e392]:
                    - generic [ref=e393]:
                      - generic [ref=e394]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e395]:
                      - generic [ref=e396]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e397]:
                  - heading "Gestión de Consentimiento" [level=4] [ref=e398]
                  - generic [ref=e399]:
                    - generic [ref=e400]:
                      - generic [ref=e401]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e402]:
                      - generic [ref=e403]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e404]:
                  - heading "Localización de Cuenta" [level=4] [ref=e405]
                  - generic [ref=e406]:
                    - generic [ref=e407]:
                      - generic [ref=e408]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e409]:
                      - generic [ref=e410]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e411]:
                  - heading "Base de Datos Nacional SAR" [level=4] [ref=e412]
                  - generic [ref=e413]:
                    - generic [ref=e414]:
                      - generic [ref=e415]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e416]:
                      - generic [ref=e417]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e418]:
                  - heading "Traspaso de Cuenta" [level=4] [ref=e419]
                  - generic [ref=e420]:
                    - generic [ref=e421]:
                      - generic [ref=e422]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e423]:
                      - generic [ref=e424]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e425]:
                  - heading "AFORE transferente" [level=4] [ref=e426]
                  - generic [ref=e427]:
                    - generic [ref=e428]:
                      - generic [ref=e429]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e430]:
                      - generic [ref=e431]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e432]:
                  - heading "AFORE receptora" [level=4] [ref=e433]
                  - generic [ref=e434]:
                    - generic [ref=e435]:
                      - generic [ref=e436]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e437]:
                      - generic [ref=e438]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e439]:
                  - heading "Libro Mayor de Cuenta Individual" [level=4] [ref=e440]
                  - generic [ref=e441]:
                    - generic [ref=e442]:
                      - generic [ref=e443]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e444]:
                      - generic [ref=e445]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e446]:
                  - heading "Notificaciones" [level=4] [ref=e447]
                  - generic [ref=e448]:
                    - generic [ref=e449]:
                      - generic [ref=e450]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e451]:
                      - generic [ref=e452]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e453]:
                  - heading "bdnsar" [level=4] [ref=e454]
                  - generic [ref=e455]:
                    - generic [ref=e456]:
                      - generic [ref=e457]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e458]:
                      - generic [ref=e459]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
                - generic [ref=e460]:
                  - heading "libro mayor" [level=4] [ref=e461]
                  - generic [ref=e462]:
                    - generic [ref=e463]:
                      - generic [ref=e464]: "Rol Estructural:"
                      - text: Service Domain coordinador / ejecutor
                    - generic [ref=e465]:
                      - generic [ref=e466]: "Responsabilidad:"
                      - text: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.
            - generic [ref=e467]:
              - heading "Comportamiento del escenario" [level=3] [ref=e468]:
                - img [ref=e469]
                - text: Comportamiento del escenario
              - paragraph [ref=e471]: El trabajador inicia la solicitud. La estructura de identidad y expediente valida a la persona antes de consultar la cuenta. El resultado de localización determina si corresponde registrar, traspasar, unificar o rechazar. Cuando procede el traspaso, la administradora transferente entrega información y recursos, la receptora confirma su aceptación y el Libro Mayor registra el cambio. El escenario concluye cuando la cuenta, sus saldos y el registro maestro reflejan a la administradora responsable.
            - generic [ref=e472]:
              - heading "Fases del flujo de extremo a extremo" [level=3] [ref=e473]
              - generic [ref=e474]:
                - generic [ref=e475]:
                  - generic [ref=e476]: "1"
                  - generic [ref=e477]:
                    - heading "Fase 1 — Inicio y registro" [level=4] [ref=e478]
                    - paragraph [ref=e479]: Estructuras involucradas en la captura y validación primaria.
                    - paragraph [ref=e480]: Se ejecutan las validaciones iniciales y se captura el intent de negocio.
                    - generic [ref=e481]:
                      - text: "Resultado:"
                      - generic [ref=e482]: Contexto validado
                - generic [ref=e483]:
                  - generic [ref=e484]: "2"
                  - generic [ref=e485]:
                    - heading "Fase 2 — Ejecución y cierre" [level=4] [ref=e486]
                    - paragraph [ref=e487]: Estructuras encargadas de asentar la resolución financiera y operativa.
                    - paragraph [ref=e488]: Se consolida el estado final en libros mayores y registros maestros.
                    - generic [ref=e489]:
                      - text: "Resultado:"
                      - generic [ref=e490]: Transacción liquidada y notificada
            - generic [ref=e491]:
              - heading "Decisiones y excepciones" [level=3] [ref=e492]:
                - img [ref=e493]
                - text: Decisiones y excepciones
              - generic [ref=e495]:
                - paragraph [ref=e496]: "Las siguientes condiciones de negocio modifican o bifurcan el flujo principal:"
                - list [ref=e497]:
                  - listitem [ref=e498]: Cuenta no registrada
                  - listitem [ref=e499]: cuenta en otra AFORE
                  - listitem [ref=e500]: cuentas duplicadas
                  - listitem [ref=e501]: cuenta no elegible
                  - listitem [ref=e502]: identidad no validada
                  - listitem [ref=e503]: transferencia no conciliada.
              - paragraph [ref=e504]: En caso de falla técnica o rechazo de negocio, la operación se revierte (rollback) y se informa al iniciador para no mantener saldos en tránsito colgados.
            - generic [ref=e505]:
              - generic [ref=e506]:
                - heading "Controles" [level=3] [ref=e507]:
                  - img [ref=e508]
                  - text: Controles
                - paragraph [ref=e511]: Se aplican validaciones preventivas de identidad y saldo, y controles detectivos durante la fase de conciliación contable.
              - generic [ref=e512]:
                - heading "Evidencias" [level=3] [ref=e513]:
                  - img [ref=e514]
                  - text: Evidencias
                - paragraph [ref=e517]: Se conservan bitácoras de aplicación, sellos de tiempo de recepción y los identificadores de trazabilidad en el Libro Mayor.
            - generic [ref=e518]:
              - heading "Resultado Arquitectónico" [level=3] [ref=e519]:
                - img [ref=e520]
                - text: Resultado Arquitectónico
              - paragraph [ref=e523]: El resultado es un cambio de estado en el registro maestro garantizando la atomicidad, durabilidad y consistencia de los datos.
              - generic [ref=e524]:
                - heading "Supuestos Trazables" [level=4] [ref=e525]
                - list [ref=e526]:
                  - listitem [ref=e527]: Disponibilidad de BDNSAR
                  - listitem [ref=e528]: Conformidad con manuales operativos CONSAR
          - region "Pasos estructurados del escenario" [ref=e529]:
            - generic [ref=e530]:
              - heading "Pasos estructurados del escenario" [level=2] [ref=e531]
              - paragraph [ref=e533]: Secuencia cronológica de interacciones arquitectónicas, flujos de control y transferencias de información.
            - button "1 Solicitar registro o traspaso. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND" [ref=e537] [cursor=pointer]:
              - generic [ref=e538]:
                - generic [ref=e539]:
                  - generic [ref=e540]: "1"
                  - generic [ref=e541]:
                    - heading "Solicitar registro o traspaso." [level=3] [ref=e542]
                    - paragraph [ref=e543]: Trabajador→Gestión de Solicitudes
                    - generic [ref=e544]: SYNCHRONOUS-COMMAND
                - img [ref=e546]
  - contentinfo [ref=e548]:
    - generic [ref=e549]:
      - paragraph [ref=e550]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e551]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e557] [cursor=pointer]:
    - img [ref=e558]
  - alert [ref=e561]
```