# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\visual.spec.ts >> RAIA Visual Regression Baseline Screenshots >> Dashboard page visual snapshot
- Location: tests\e2e\visual\visual.spec.ts:72:7

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  2604 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: dashboard.png

Call log:
  - Expect "toHaveScreenshot(dashboard.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2604 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2604 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2604 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 2604 pixels (ratio 0.01 of all image pixels) are different.

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
          - generic [ref=e37]:
            - heading "RAIA Architecture Dashboard" [level=1] [ref=e38]
            - paragraph [ref=e39]: "Vigencia del Baseline Regulatorio: 2026-07-12 • Último Análisis: 2026-07-12"
        - generic [ref=e40]:
          - link "Ver Value Chain" [ref=e41] [cursor=pointer]:
            - /url: /service-landscape/value-chain
            - img [ref=e42]
            - text: Ver Value Chain
          - link "Ver Metamodelo" [ref=e45] [cursor=pointer]:
            - /url: /metamodel
            - img [ref=e46]
            - text: Ver Metamodelo
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Áreas de Negocio
          - generic [ref=e51]: "11"
        - generic [ref=e52]:
          - generic [ref=e53]: Dominios de Negocio
          - generic [ref=e54]: "34"
        - generic [ref=e55]:
          - generic [ref=e56]: Service Domains
          - generic [ref=e57]: "273"
        - generic [ref=e58]:
          - generic [ref=e59]: Relaciones Lógicas
          - generic [ref=e60]: "41"
        - generic [ref=e61]:
          - generic [ref=e62]: Escenarios del SAR
          - generic [ref=e63]: "18"
        - generic [ref=e64]:
          - generic [ref=e65]: Regulaciones Mapeadas
          - generic [ref=e66]: "3"
        - generic [ref=e67]:
          - generic [ref=e68]: Controles Arquitectónicos
          - generic [ref=e69]: "275"
        - generic [ref=e70]:
          - generic [ref=e71]: Objetos de Negocio
          - generic [ref=e72]: "276"
      - generic [ref=e73]:
        - generic [ref=e74]:
          - generic [ref=e75]:
            - heading "Estado Editorial" [level=3] [ref=e76]
            - generic [ref=e77]:
              - generic [ref=e78]:
                - generic [ref=e79]: Active (Activo)
                - generic [ref=e81]: "0"
              - generic [ref=e82]:
                - generic [ref=e83]: Validated (Validado)
                - generic [ref=e85]: "0"
              - generic [ref=e86]:
                - generic [ref=e87]: Proposed (Propuesto)
                - generic [ref=e89]: "273"
              - generic [ref=e90]:
                - generic [ref=e91]: Draft (Borrador)
                - generic [ref=e93]: "0"
              - generic [ref=e94]:
                - generic [ref=e95]: Deprecated (Deprecado)
                - generic [ref=e97]: "0"
          - generic [ref=e99]:
            - generic [ref=e100]: Avance de Validación
            - generic [ref=e101]: 0%
        - generic [ref=e103]:
          - generic [ref=e104]:
            - heading "Madurez de los Dominios" [level=3] [ref=e105]
            - generic [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]: Adopted (Adoptado)
                - generic [ref=e110]: "0"
              - generic [ref=e111]:
                - generic [ref=e112]: Validated (Validado)
                - generic [ref=e114]: "0"
              - generic [ref=e115]:
                - generic [ref=e116]: Defined (Definido)
                - generic [ref=e118]: "0"
              - generic [ref=e119]:
                - generic [ref=e120]: Conceptual (Borrador)
                - generic [ref=e122]: "273"
          - generic [ref=e124]:
            - generic [ref=e125]: Completitud de Atributos
            - generic [ref=e126]: 78%
        - generic [ref=e129]:
          - heading "Anomalías de Cobertura" [level=3] [ref=e130]:
            - img [ref=e131]
            - text: Anomalías de Cobertura
          - generic [ref=e133]:
            - generic [ref=e134]:
              - img [ref=e135]
              - generic [ref=e137]:
                - generic [ref=e138]: Dominios sin Regulación
                - generic [ref=e139]: 0 dominios no tienen leyes o circulares de CONSAR/IMSS vinculadas.
            - generic [ref=e140]:
              - img [ref=e141]
              - generic [ref=e143]:
                - generic [ref=e144]: Dominios sin Relaciones
                - generic [ref=e145]: 230 dominios se encuentran aislados (sin flujos entrantes o salientes).
            - generic [ref=e146]:
              - img [ref=e147]
              - generic [ref=e149]:
                - generic [ref=e150]: Pendientes de Validación
                - generic [ref=e151]: 273 dominios están clasificados en estado borrador o propuesto.
  - contentinfo [ref=e152]:
    - generic [ref=e153]:
      - paragraph [ref=e154]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e155]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e161] [cursor=pointer]:
    - generic [ref=e164]:
      - text: Compiling
      - generic [ref=e165]:
        - generic [ref=e166]: .
        - generic [ref=e167]: .
        - generic [ref=e168]: .
  - alert [ref=e169]
```