# Reporte de Migración de Objetos de Negocio

Este reporte documenta los resultados de la extracción y normalización de objetos de negocio embebidos en el Landscape.

## 1. Métricas de Extracción
- **Total de objetos extraídos**: 24
- **Fecha de migración**: 2026-07-20T00:00:00Z

## 2. Recomendaciones de Normalización
| Nombre Original | Frecuencia | Acción Recomendada | Motivo |
| --- | --- | --- | --- |
| Cuenta Individual | 12 | KEEP | Objeto núcleo estructurado central. |
| Trabajador | 8 | KEEP | Sujeto principal previsional. |
| Expediente de Identificación | 4 | MERGE | Consolidar con Identidad del Trabajador. |
