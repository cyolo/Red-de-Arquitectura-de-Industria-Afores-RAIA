# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: metamodel\metamodel.spec.ts >> RAIA Metamodel Overview Page >> RAIA-META-006: Validate glossary section
- Location: tests\e2e\metamodel\metamodel.spec.ts:31:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('metamodel-glossary').getByText('Service Domain')
Expected: visible
Error: strict mode violation: getByTestId('metamodel-glossary').getByText('Service Domain') resolved to 5 elements:
    1) <span class="text-xs font-extrabold text-raia-blue-inst shrink-0 sm:w-48">Service Domain</span> aka getByText('Service Domain', { exact: true })
    2) <span class="text-xs text-slate-600 leading-relaxed">Operación lógica asociada a un Service Domain (in…</span> aka getByText('Operación lógica asociada a')
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('metamodel-glossary').getByText('Service Domain')

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
    - img [ref=e163]
  - alert [ref=e167]
```