# Inventario de Pruebas RAIA

A continuación se detalla el catálogo de pruebas encontrado al inicio del proceso de remediación, incluyendo el objetivo declarado, lo que validan realmente y su clasificación técnica.

| Test Case ID | Archivo | Módulo | Objetivo declarado | Qué valida realmente | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RAIA-BS-001** | `scenarios.spec.ts` | Business Scenarios | Validar carga de página de escenarios | Que exista el texto "Business Scenarios" en la etiqueta `h1`. | `VALID` |
| **RAIA-BS-002** | `scenarios.spec.ts` | Business Scenarios | Validar presencia de al menos 18 escenarios | Busca elementos por texto coincidente con `RAIA-BS-\d{4}`. Las tarjetas visuales no muestran este ID de forma visible. | `NEEDS_SELECTOR_REPAIR` |
| **RAIA-BS-003** | `scenarios.spec.ts` | Business Scenarios | Seleccionar escenario actualiza la vista | Hace clic en un escenario y busca el texto genérico "Propósito". No verifica que el escenario haya cambiado de forma efectiva. | `NOT_TESTING_DECLARED_BEHAVIOR` |
| **RAIA-GLO-001** | `navigation.spec.ts` | Global Navigation | Validar carga del Home | Verifica que el h1 contenga "Red de Arquitectura", cuando el copy aprobado actual es "RAIA Architecture Overview Portal". | `NEEDS_EXPECTATION_REPAIR` |
| **RAIA-GLO-002** | `navigation.spec.ts` | Global Navigation | Validar existencia de rutas core | Realiza peticiones GET a las rutas `/metamodel`, `/releases`, etc. y espera un status 200. | `VALID` |
| **RAIA-GLO-003** | `navigation.spec.ts` | Global Navigation | Validar enlaces de retorno | Clic en el enlace de retorno y verifica que redireccione al Home. | `VALID` |
| **RAIA-GLO-004** | `navigation.spec.ts` | Global Navigation | Validar redirección de tarjetas | Clic en tarjetas de módulo y comprueba que cambie la URL. | `VALID` |
| **RAIA-GLO-014** | `navigation.spec.ts` | Global Navigation | Validar página 404 | Accede a una ruta inexistente y verifica que responda con status 404 y el texto "404". | `VALID` |
| **Layout UI** | `business-scenarios-layout.spec.ts` | Business Scenarios | Placement correcto de elementos estructurados | Compara coordenadas visuales y busca elementos usando selectores obsoletos como `scenario-structured-steps` (fue renombrado a `scenario-steps-workspace`). | `NEEDS_SELECTOR_REPAIR` |
| **Sync Desktop** | `scenario-step-analysis.spec.ts` | Business Scenarios | Sincronización de lista, panel y diagrama | Busca texto "Análisis del paso seleccionado" en la narrativa (no está ahí en el componente actual) y utiliza clics de texto en IDs no visibles. | `NEEDS_SELECTOR_REPAIR` |
| **Mobile Drawer** | `scenario-step-analysis.spec.ts` | Business Scenarios | Comportamiento del drawer en móvil | Clic en el paso, verifica que el drawer aparezca y se cierre. Usa selectores obsoletos e IDs de escenario no visibles. | `NEEDS_SELECTOR_REPAIR` |
| **Console Errors** | `scenario-step-analysis.spec.ts` | Business Scenarios | Ausencia de errores de consola | Registra el listener de errores después de que la página ya ha sido cargada. | `NOT_TESTING_DECLARED_BEHAVIOR` |
| **SVG Engine** | `sequence-diagram.spec.ts` | Business Scenarios | Visualización interactiva y fullscreen del SVG | Interactúa con zoom y fullscreen. Falla porque asume que fullscreen sólo usa clases CSS (fixed/inset-0) ignorando la API nativa de Fullscreen del navegador. | `NEEDS_SELECTOR_REPAIR` |
