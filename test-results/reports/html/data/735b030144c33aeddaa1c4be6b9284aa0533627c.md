# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\scenarios.spec.ts >> Business Scenarios >> RAIA-BS-002: Validate presence of at least 18 scenarios in the catalog
- Location: tests\e2e\business-scenarios\scenarios.spec.ts:12:7

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 18
Received:    0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "RAIA 0.1.0" [ref=e5]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e13]:
          - generic [ref=e14]: RAIA
          - generic [ref=e15]: 0.1.0
      - generic [ref=e16]:
        - button "Buscar en el portal (Presione Control + K)" [ref=e17]:
          - generic [ref=e18]:
            - img [ref=e19]
            - generic [ref=e22]: Buscar en RAIA...
        - button "Abrir menú" [ref=e23]:
          - img [ref=e24]
  - main [ref=e25]:
    - generic [ref=e27]:
      - link "Volver al Portal Principal" [ref=e28]:
        - /url: /
        - img [ref=e29]
        - text: Volver al Portal Principal
      - generic [ref=e31]:
        - generic [ref=e32]:
          - img [ref=e34]
          - generic [ref=e37]:
            - heading "RAIA Business Scenarios" [level=1] [ref=e38]
            - paragraph [ref=e39]: Catálogo e Interacción de Secuencias del SAR
        - paragraph [ref=e40]: Catálogo dinámico de escenarios lógicos de industria propuestos. A continuación puede visualizar y simular de extremo a extremo las interacciones ordenadas entre Service Domains necesarios para ejecutar trámites clave del Sistema de Ahorro para el Retiro.
  - contentinfo [ref=e41]:
    - generic [ref=e42]:
      - paragraph [ref=e43]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e44]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e50] [cursor=pointer]:
    - img [ref=e51]
```