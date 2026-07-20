# Registro de Gaps Arquitectónicos — Control Record Model (RAIA-CRM)

Este reporte detalla los conflictos semánticos, contradicciones de estado, ausencias de controles y desalineaciones de escenarios identificados durante el modelado inicial del ciclo de vida de los Control Records del SAR.

---

## GAP-CRM-001: Transición de Traspaso sin Controles Normativos
* **Gravedad**: `P0 (Crítico)`
* **Control Record**: Solicitud de Traspaso (`RAIA-CRM-004`)
* **Transición**: Autorizar Traspaso (`RAIA-CRT-004-01`)
* **Descripción**: La transición para autorizar un traspaso de recursos entre AFOREs carece de reglas explícitas de firma electrónica avanzada (FEA) o validación de enrolamiento biométrico de identidad en el baseline arquitectónico.
* **Recomendación**: Agregar una precondición obligatoria (Guard) que valide la firma electrónica del expediente digital del trabajador antes de transicionar al estado aprobada.
* **Estado**: `Abierto`

---

## GAP-CRM-002: Cuenta Individual sin Transición de Cancelación de CURP
* **Gravedad**: `P1 (Alta)`
* **Control Record**: Cuenta Individual (`RAIA-CRM-001`)
* **Descripción**: Las cuentas individuales activas o identificadas no contemplan un flujo de unificación o cancelación por duplicidad de CURP (homonimia), lo que puede congelar saldos.
* **Recomendación**: Modelar una transición de compensación o reversa hacia un estado cerrado especial por orden de la autoridad (CONSAR).
* **Estado**: `Abierto`
