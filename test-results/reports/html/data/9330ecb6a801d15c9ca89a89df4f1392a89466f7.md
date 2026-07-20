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
    3) <span class="text-xs text-slate-600 leading-relaxed">Hecho de negocio significativo en el ciclo de vid…</span> aka getByText('Hecho de negocio')
    4) <span class="text-xs text-slate-600 leading-relaxed">Secuencia ordenada de interacciones entre Service…</span> aka getByText('Secuencia ordenada de')
    5) <span class="text-xs text-slate-600 leading-relaxed">Mecanismo de mitigación y aseguramiento (regulato…</span> aka getByText('Mecanismo de mitigación y')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('metamodel-glossary').getByText('Service Domain')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Saltar al contenido principal" [ref=e2]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "RAIA 0.1.0" [ref=e6]:
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
      - link "Volver al Portal Principal" [ref=e29]:
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
    - img [ref=e150]
  - alert [ref=e155]
```