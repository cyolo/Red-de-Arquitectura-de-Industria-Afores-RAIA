# 06 - Informe de Clasificación de Participantes

Este informe describe la estructura canónica de los participantes de la industria SAR modelados en `actors-0.2.0.json`.

## Participantes Canónicos Registrados

| ID de Participante | Nombre del Participante | Tipo de Participante | Estatus |
|---|---|---|---|
| **ACT-OPERATOR** | Empresa Operadora de la BDNSAR | industry-operator | active |
| **ACT-WORKER** | Trabajador del SAR | worker | generic-role |
| **ACT-EMPLOYER** | Patrón / Empleador | employer | generic-role |
| **ACT-AFORE** | Administradora de Fondos para el Retiro | afore | generic-role |
| **ACT-CONSAR** | Comisión Nacional del Sistema de Ahorro para el Retiro | authority | active |
| **ACT-IMSS** | Instituto Mexicano del Seguro Social | social-security-institute | active |
| **ACT-ISSSTE** | Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado | social-security-institute | active |
| **ACT-INFONAVIT** | Instituto del Fondo Nacional de la Vivienda para los Trabajadores | housing-institute | active |
| **ACT-FOVISSSTE** | Fondo de la Vivienda del ISSSTE | housing-institute | active |
| **ACT-FPB-TRUSTEE** | Banco de México en su rol fiduciario del Fondo de Pensiones para el Bienestar | fiduciary | active |

## Reglas de Integridad Aplicadas
* **Cero Colisiones:** Los participantes son entidades organizacionales o roles genéricos oficiales; no se mezclan con activos de información ni con Service Domains.
* **BDNSAR vs Empresa Operadora:** La BDNSAR se clasifica estrictamente como un activo de información de la Nación, mientras que el rol de administración recae lógicamente en la **Empresa Operadora** (ACT-OPERATOR).
