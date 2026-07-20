# 10 - Reporte de Migración y Hitos de Versión

Este reporte documenta el hito de migración al release **0.2.0** y la consolidación del baseline.

## Detalle del Release 0.2.0
* **Nombre:** Remediación Regulatoria y Consolidación Semántica
* **Fecha de Lanzamiento:** 2026-07-20
* **Estatus:** published
* **Fecha de Baseline Regulatorio:** 2026-07-20
* **Resumen:** Consolidación normativa y de trazabilidad regulatoria de RAIA. Integración de la reforma 2025 de la LFPDPPP, corrección de mapeos de Traspasos (LSAR Art. 74) y Fondo de Pensiones para el Bienestar (LSS Art. 302 / LISSSTE Art. 251), y reestructuración de relaciones semánticas.

### Cambios Agregados (`added`)
* Implementación del validador estricto de esquemas Zod con validaciones condicionadas por capabilityType.
* Registro formal de evidencias reales de verificación legal y auditoría.
* Mapeo de desinversión y transferencia para el Fondo de Pensiones para el Bienestar segregado por régimen (IMSS/ISSSTE).

### Cambios Modificados (`changed`)
* Actualización del baseline de LFPDPPP a la versión de reforma del 14 de noviembre de 2025 (abrogando el baseline de 2010).
* Remediación de mapeos normativos de Traspasos a la fundamentación legal correcta (LSAR Art. 74 en lugar de Art. 37).
* Reconstrucción total de relaciones lógicas de la industria para eliminar secuencias procedimentales y flujos temporales del Service Landscape.
* Sustitución de agrupación visual rígida (front/core/back-office) por capas arquitectónicas dinámicas (landscapeLayer).

### Cambios Deprecados (`deprecated`)
* Deprecación y eliminación del uso del archivo de regulaciones estáticas legacy regulations-0.1.0.json.

### Cambios Removidos (`removed`)
* Eliminación de componentes ocultos en el DOM (hacks de conteo de cards para pruebas).

### Cambios Disruptivos (`breakingChanges`)
* Migración del modelo de datos de relaciones LandscapeRelation a la estructura enriquecida con metadatos y validaciones obligatorias de label y description.
