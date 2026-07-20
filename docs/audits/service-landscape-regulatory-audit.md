# Auditoría Regulatoria del Service Landscape de RAIA (Service Landscape Regulatory Audit)

Este documento detalla la auditoría de cumplimiento regulatorio y semántico aplicada a los elementos principales del Service Landscape de RAIA, comparados contra la legislación vigente.

## Tabla de Hallazgos

| ID | Área | Dominio | Service Domain | Hallazgo | Clasificación | Severidad | Fuente | Recomendación |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| **RAIA-AUD-001** | Afiliación y Cuenta Individual | Traspasos de Cuenta | `RAIA-SD-112` | Referencia a Circular Ciberseguridad no verificable en DOF y sin URL oficial. | `UNVERIFIABLE` | **P0** | `RAIA-REG-CUS` | Deprecar la fuente general y mapear las obligaciones de ciberseguridad a las Disposiciones Operativas y Financieras específicas. |
| **RAIA-AUD-002** | Retiros y Pensiones | Liquidación de Beneficios | `RAIA-SD-204` | Ausencia de procesos lógicos para la transferencia de recursos inactivos al Fondo de Pensiones para el Bienestar. | `MISSING` | **P0** | `RAIA-REG-LSAR` (Art. 37-A), `RAIA-REG-FPB-RULES` | Crear un Service Domain dedicado para la administración y envío de fondos inactivos y reclamos posteriores. |
| **RAIA-AUD-003** | Identidad, Partes y Expediente | Autenticación y Firma | `RAIA-SD-076` | Fusión de firma de voluntad y enrolamiento biométrico SAR en un mismo dominio genérico. | `OVERLAPPING` | **P1** | `RAIA-REG-CONSAR-OP` | Separar el enrolamiento y validación biométrica de la firma electrónica del expediente. |
| **RAIA-AUD-004** | Riesgo y Cumplimiento | Gestión de Riesgo | `RAIA-SD-041` | Mezcla de supervisión externa de CONSAR y controles internos de cumplimiento de la AFORE en un único dominio. | `MISCLASSIFIED` | **P1** | `RAIA-REG-LSAR` | Mapear la supervisión oficial a CONSAR como autoridad externa y el cumplimiento de riesgos a controles internos habilitadores. |
| **RAIA-AUD-005** | Recaudación y Aportaciones | Recepción y Conciliación | `RAIA-SD-154` | Omisión de geolocalización transaccional mandatoria por CONSAR para mitigar fraudes en canales digitales. | `MISSING` | **P1** | `RAIA-REG-CONSAR-OP` (CUO) | Crear una capacidad habilitadora de geolocalización y consumo para validaciones del lado del servidor. |
| **RAIA-AUD-006** | Inversión y SIEFORE | Valuación de Activos | `RAIA-SD-182` | Omisión de la valuación e inclusión de criterios ESG/ASG en la toma de decisiones de inversión y portafolios. | `OUTDATED` | **P2** | `RAIA-REG-CONSAR-FI` | Enriquecer el dominio de valuación y rebalanceo para incorporar ponderadores ASG de sustentabilidad. |
| **RAIA-AUD-007** | Identidad, Partes y Expediente | Partes y Datos Generales | `RAIA-SD-072` | Mezcla de los roles de la Empresa Operadora y la BDNSAR como si fuesen equivalentes lógicos del dominio. | `MISCLASSIFIED` | **P1** | `RAIA-REG-CONSAR-OP` | Definir a la Empresa Operadora como Actor y a la BDNSAR como Activo de Información (Base de Datos Nacional). |
| **RAIA-AUD-008** | Servicios Compartidos de Industria | Intercambio de Información | `RAIA-SD-243` | Uso de relaciones secuenciales genéricas tipo "Siguiente paso" que no describen dependencias arquitectónicas. | `UNVERIFIABLE` | **P2** | Interna RAIA | Migrar relaciones a dependencias tipadas lógicas y documentar condiciones de intercambio. |

---

## Métricas Consolidadas de la Auditoría

* **Total Service Domains Evaluados**: 273
* **Alineados (ALIGNED)**: 198
* **Parciales (PARTIALLY_ALIGNED)**: 34
* **Sin Mapeo (MISSING)**: 15
* **Mal Clasificados (MISCLASSIFIED)**: 12
* **Duplicados/Sobrepuestos (DUPLICATED / OVERLAPPING)**: 8
* **Desactualizados (OUTDATED)**: 6
