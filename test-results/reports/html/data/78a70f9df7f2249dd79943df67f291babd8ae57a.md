# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global\navigation.spec.ts >> Global Navigation >> RAIA-GLO-004: Validate module cards redirection
- Location: tests\e2e\global\navigation.spec.ts:41:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*\/metamodel/
Received string:  "http://localhost:3000/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "http://localhost:3000/"

```

```yaml
- link "Saltar al contenido principal":
  - /url: "#main-content"
- banner:
  - link "RAIA 0.1.0":
    - /url: /
  - button "Buscar en el portal (Presione Control + K)": Buscar en RAIA...
  - button "Abrir menú"
- main:
  - text: "RAIA Release 0.1.0 Regulatory Baseline: 12 July 2026 Reference Architecture"
  - heading "RAIA Architecture Overview Portal" [level=1]
  - paragraph: Red de Arquitectura de Industria Afores
  - link "Value Landscape":
    - /url: /service-landscape/value-chain
  - link "Metodología":
    - /url: /metamodel
  - link "Releases":
    - /url: /releases
  - paragraph: Explore las capacidades, dominios, escenarios de negocio, objetos y regulaciones que definen la arquitectura de referencia del Sistema de Ahorro para el Retiro.
  - button "Buscar en el portal (Presione Control + K)": Buscar en RAIA...
  - text: 11 Áreas de Negocio 34 Dominios 273 Servicios (SD) 41 Relaciones
  - heading "Módulos de Arquitectura" [level=2]
  - tablist "Módulos de arquitectura":
    - tab "Todos17" [selected]
    - tab "Referencia5"
    - tab "Landscape3"
    - tab "Escenarios/Capacidades5"
    - tab "Regulación/Gobierno4"
  - 'link "v0.1.0 Information Architecture RAIA-MOD-001 Estructura semántica, linaje y propiedad de la información en el SAR. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003, RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar"':
    - /url: /information-architecture
    - text: v0.1.0
    - heading "Information Architecture" [level=3]
    - text: RAIA-MOD-001
    - paragraph: Estructura semántica, linaje y propiedad de la información en el SAR.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003, RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar"
  - 'link "v0.1.0 Control Record Model RAIA-MOD-002 Definición del ciclo de vida y estado de los registros principales de control. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003 Roadmap: [object Object] → [object Object] Planeado Explorar"':
    - /url: /control-record-model
    - text: v0.1.0
    - heading "Control Record Model" [level=3]
    - text: RAIA-MOD-002
    - paragraph: Definición del ciclo de vida y estado de los registros principales de control.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-003 Roadmap: [object Object] → [object Object] Planeado Explorar"
  - 'link "v0.1.0 Business Object Model RAIA-MOD-003 Catálogo y diccionario de los objetos de negocio estructurados de la industria. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar"':
    - /url: /business-object-model
    - text: v0.1.0
    - heading "Business Object Model" [level=3]
    - text: RAIA-MOD-003
    - paragraph: Catálogo y diccionario de los objetos de negocio estructurados de la industria.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012 Roadmap: [object Object] → [object Object] Planeado Explorar"
  - 'link "v0.1.0 Industry Reference Model RAIA-MOD-004 Modelo integral de referencia de la arquitectura de la industria previsional. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005, RAIA-MOD-012 Roadmap: [object Object] Planeado Explorar"':
    - /url: /reference-model
    - text: v0.1.0
    - heading "Industry Reference Model" [level=3]
    - text: RAIA-MOD-004
    - paragraph: Modelo integral de referencia de la arquitectura de la industria previsional.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005, RAIA-MOD-012 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Service Landscape — Value Chain RAIA-MOD-005 Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012, RAIA-MOD-015 Roadmap: [object Object] → [object Object] → [object Object] En Desarrollo Explorar"':
    - /url: /service-landscape/value-chain
    - text: v0.1.0
    - heading "Service Landscape — Value Chain" [level=3]
    - text: RAIA-MOD-005
    - paragraph: Mapa interactivo de la cadena de valor de la industria de Afores en tres niveles jerárquicos.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-012, RAIA-MOD-015 Roadmap: [object Object] → [object Object] → [object Object] En Desarrollo Explorar"
  - 'link "v0.1.0 Service Landscape — Matrix RAIA-MOD-006 Vista bidimensional del paisaje combinando clasificaciones configurables. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"':
    - /url: /service-landscape/matrix
    - text: v0.1.0
    - heading "Service Landscape — Matrix" [level=3]
    - text: RAIA-MOD-006
    - paragraph: Vista bidimensional del paisaje combinando clasificaciones configurables.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Service Landscape — Overview Diagrams RAIA-MOD-007 Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"':
    - /url: /service-landscape/overview-diagrams
    - text: v0.1.0
    - heading "Service Landscape — Overview Diagrams" [level=3]
    - text: RAIA-MOD-007
    - paragraph: Diagramas de alto nivel que representan flujos transaccionales y operativos sectoriales.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Business Scenarios RAIA-MOD-008 Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] → [object Object] En Desarrollo Explorar"':
    - /url: /business-scenarios
    - text: v0.1.0
    - heading "Business Scenarios" [level=3]
    - text: RAIA-MOD-008
    - paragraph: Catálogo de escenarios transaccionales típicos del SAR que involucran múltiples Service Domains.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] → [object Object] En Desarrollo Explorar"
  - 'link "v0.1.0 Scenario Snippets RAIA-MOD-009 Fragmentos reutilizables de interacción y lógica de servicio común. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar"':
    - /url: /business-scenarios/snippets
    - text: v0.1.0
    - heading "Scenario Snippets" [level=3]
    - text: RAIA-MOD-009
    - paragraph: Fragmentos reutilizables de interacción y lógica de servicio común.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Business Capability Map RAIA-MOD-010 Estructura jerárquica de capacidades de negocio que posee la industria. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"':
    - /url: /capability-map
    - text: v0.1.0
    - heading "Business Capability Map" [level=3]
    - text: RAIA-MOD-010
    - paragraph: Estructura jerárquica de capacidades de negocio que posee la industria.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Capability Views RAIA-MOD-011 Proyecciones específicas de capacidades de negocio filtradas por participante o regulación. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-010 Roadmap: [object Object] Planeado Explorar"':
    - /url: /capability-map/views
    - text: v0.1.0
    - heading "Capability Views" [level=3]
    - text: RAIA-MOD-011
    - paragraph: Proyecciones específicas de capacidades de negocio filtradas por participante o regulación.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-010 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Metamodel Overview RAIA-MOD-012 Definiciones y relaciones formales de las entidades y conceptos que integran RAIA. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"':
    - /url: /metamodel
    - text: v0.1.0
    - heading "Metamodel Overview" [level=3]
    - text: RAIA-MOD-012
    - paragraph: Definiciones y relaciones formales de las entidades y conceptos que integran RAIA.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"
  - 'link "v0.1.0 Wireframes Overview RAIA-MOD-013 Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar"':
    - /url: /wireframes
    - text: v0.1.0
    - heading "Wireframes Overview" [level=3]
    - text: RAIA-MOD-013
    - paragraph: Patrones interactivos de UX/UI y flujos de pantallas de referencia para el SAR.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-008 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 Architecture Dashboard RAIA-MOD-014 Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"':
    - /url: /dashboard
    - text: v0.1.0
    - heading "Architecture Dashboard" [level=3]
    - text: RAIA-MOD-014
    - paragraph: Métricas de cobertura, calidad, completitud y madurez del repositorio de arquitectura.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"
  - 'link "v0.1.0 Regulatory Architecture RAIA-MOD-015 Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains. Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"':
    - /url: /regulatory-architecture
    - text: v0.1.0
    - heading "Regulatory Architecture" [level=3]
    - text: RAIA-MOD-015
    - paragraph: Mapeo exhaustivo de la base regulatoria aplicable y su impacto en los Service Domains.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Dependencias: RAIA-MOD-005 Roadmap: [object Object] Planeado Explorar"
  - 'link "v0.1.0 RAIA Releases RAIA-MOD-016 Historial de versiones de la arquitectura de referencia, changelog y notas de migración. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] En Desarrollo Explorar"':
    - /url: /releases
    - text: v0.1.0
    - heading "RAIA Releases" [level=3]
    - text: RAIA-MOD-016
    - paragraph: Historial de versiones de la arquitectura de referencia, changelog y notas de migración.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] En Desarrollo Explorar"
  - 'link "v0.1.0 Contribution and Governance RAIA-MOD-017 Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia. Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"':
    - /url: /contribute
    - text: v0.1.0
    - heading "Contribution and Governance" [level=3]
    - text: RAIA-MOD-017
    - paragraph: Guía editorial de gobernanza y proceso de contribución a la arquitectura de referencia.
    - text: "Owner: RAIA Maintainers Validación: pending-industry-review Roadmap: [object Object] → [object Object] En Desarrollo Explorar"
  - button "Cambios Recientes (Release 0.1.0)":
    - heading "Cambios Recientes (Release 0.1.0)" [level=3]
  - paragraph: Toca para expandir historial.
  - text: Aviso de Neutralidad y Propósito
  - paragraph: RAIA es una arquitectura de referencia propuesta. No sustituye leyes, reglamentos, disposiciones, criterios, manuales, publicaciones oficiales ni asesoría legal, actuarial, financiera, operativa o de gobierno sectorial.
  - button "Ver aviso legal completo"
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```