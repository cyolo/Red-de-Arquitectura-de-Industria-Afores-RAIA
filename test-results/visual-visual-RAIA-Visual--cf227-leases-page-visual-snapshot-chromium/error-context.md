# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\visual.spec.ts >> RAIA Visual Regression Baseline Screenshots >> Releases page visual snapshot
- Location: tests\e2e\visual\visual.spec.ts:60:7

# Error details

```
Error: A snapshot doesn't exist at C:\Users\cesar\.gemini\antigravity\scratch\Red de Arquitectura de Industria Afores (RAIA)\tests\e2e\visual\visual.spec.ts-snapshots\releases-chromium-win32.png, writing actual.
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
          - img [ref=e44]
          - heading "Historial de Releases de RAIA" [level=1] [ref=e48]
        - paragraph [ref=e49]: Consulte la evolución histórica de la arquitectura de referencia propuesta para la industria previsional mexicana. Aquí se catalogan las incorporaciones de dominios, ajustes por cambios en las circulares de CONSAR y la Empresa Operadora de la Base de Datos Nacional SAR, y mejoras de modelado de capacidades.
      - generic [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]: v0.1.0
            - generic [ref=e55]:
              - heading "Versión Inicial RAIA" [level=2] [ref=e56]
              - paragraph [ref=e57]: "Fecha prevista: 2026-07-12 • Baseline Regulatorio: 2026-07-12"
          - generic [ref=e58]: Borrador
        - generic [ref=e59]:
          - heading "Resumen del Release" [level=3] [ref=e60]
          - paragraph [ref=e61]: Establecimiento inicial de la Red de Arquitectura de Industria Afores (RAIA), incluyendo la definición de la jerarquía de tres niveles y el catálogo inicial de 11 Áreas de Negocio, 34 Dominios de Negocio y 273 Service Domains del Sistema de Ahorro para el Retiro.
        - generic [ref=e62]:
          - generic [ref=e63]:
            - heading "Agregado" [level=4] [ref=e64]:
              - img [ref=e65]
              - text: Agregado
            - list [ref=e68]:
              - listitem [ref=e69]: Definición inicial del metamodelo conceptual de arquitectura RAIA.
              - listitem [ref=e70]: Carga de datos maestros correspondientes a las 11 Áreas de Negocio de la cadena de valor.
              - listitem [ref=e71]: Registro de 34 Dominios de Negocio y 273 Service Domains.
              - listitem [ref=e72]: Modelado inicial de 41 relaciones lógicas entre dominios.
              - listitem [ref=e73]: Estructura preliminar del catálogo regulatorio aplicable (Ley de los Sistemas de Ahorro para el Retiro, circulares de CONSAR, Procesar).
          - generic [ref=e74]:
            - heading "Modificado" [level=4] [ref=e75]:
              - img [ref=e76]
              - text: Modificado
            - list [ref=e79]:
              - listitem [ref=e80]: Ajustes de terminología para garantizar la neutralidad de industria (CONSAR, Empresa Operadora de la Base de Datos Nacional SAR).
  - contentinfo [ref=e81]:
    - generic [ref=e82]:
      - paragraph [ref=e83]: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
      - paragraph [ref=e84]: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
  - button "Open Next.js Dev Tools" [ref=e90] [cursor=pointer]:
    - img [ref=e91]
  - alert [ref=e94]
```