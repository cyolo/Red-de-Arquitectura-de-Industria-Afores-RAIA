# Reporte de Calidad Semántica y Contenido (Service Domain Content Quality Report)

Este reporte detalla la auditoría de calidad semántica aplicada a los textos de definición, propósitos y relaciones de los 273 Service Domains.

## 1. Detección de Lenguaje Genérico e Incoherente

Se identificaron múltiples instancias de lenguaje ambiguo o de negocio que no definen una frontera clara de responsabilidad arquitectónica:

* **Término Auditado**: *"Garantizar la correcta operación y control de..."*
  - **Hallazgo**: Cláusula genérica que carece de límites.
  - **Ubicación**: Encontrada en descripciones de áreas de Gobierno y de Riesgo.
  - **Corrección**: Sustituido por verbos precisos: *Administrar, Validar, Registrar, Conciliar o Reportar*.
* **Término Auditado**: *"Maximizar rendimientos"*
  - **Hallazgo**: Objetivo comercial de negocio, no una capacidad lógica o de servicio de TI.
  - **Ubicación**: `RAIA-BA-006` (Inversión y SIEFORE).
  - **Corrección**: Reemplazado por: *"Administrar portafolios conforme al régimen de inversión y diversificación de riesgos..."*
* **Término Auditado**: *"Siguiente paso"*
  - **Hallazgo**: Utilizado como etiqueta de relación arquitectónica en el Landscape. Esto confunde el flujo procedimental de un escenario de negocio con dependencias estructurales estables.
  - **Ubicación**: `relations-0.1.0.json`.
  - **Corrección**: Reclasificado bajo tipos de relación lógicos: *depends-on, validates, consumes-information-from, etc.*

---

## 2. Diagnóstico de Objetos Duplicados y Capacidades Clonadas

* **Focus Objects Replicados**:
  - Se detectaron redundancias en el manejo del Expediente de Identificación y el Expediente de Trámite. 
  - **Ubicación**: `RAIA-BD-009` y `RAIA-BD-011`.
  - **Impacto**: Riesgo de inconsistencia de datos sobre el estado de la cuenta.
  - **Recomendación**: Homologar como objetos canónicos: `Expediente de Identificación` (mapeado a Identidad) y `Expediente de Trámite` (asociado a la operación).

* **Capacidades Clonadas**:
  - Varias capacidades técnicas de mensajería o guardado se duplicaban ad-hoc en múltiples dominios.
  - **Corrección**: Clasificadas bajo la capa `enterprise-enabler` (Capacidades Habilitadoras) y marcadas como dependencias de uso indirecto (`applicability: enabling`).
