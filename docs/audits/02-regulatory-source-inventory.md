# 02 - Inventario de Fuentes Regulatorias

Este informe detalla las fuentes primarias y secundarias que componen la línea base oficial para la regulación de la industria del retiro en México (Versión 0.2.0, auditada al 2026-07-20).

## Fuentes Oficiales Registradas en la Base de Datos

| ID de Fuente | Nombre Corto | Tipo | Autoridad Emisora | Última Reforma / Publicación | Estatus | Estado de Verificación |
|---|---|---|---|---|---|---|
| **RAIA-REG-LSAR** | Ley SAR | law | CONGRESOMX | 2025-11-14 | current | source-verified |
| **RAIA-REG-LSS** | Ley Seguro Social (IMSS) | law | CONGRESOMX | 2026-01-15 | current | source-verified |
| **RAIA-REG-LISSSTE** | Ley ISSSTE | law | CONGRESOMX | 2026-01-15 | current | source-verified |
| **RAIA-REG-LINFONAVIT** | Ley INFONAVIT | law | CONGRESOMX | 2025-11-14 | current | source-verified |
| **RAIA-REG-LFPDPPP** | LFPDPPP (Privacidad) | law | CONGRESOMX | 2025-11-14 | current | source-verified |
| **RAIA-REG-LFPDPPP-LEGACY** | LFPDPPP 2010 | law | CONGRESOMX | 2010-07-05 | abrogated | source-verified |
| **RAIA-REG-CONSAR-OP** | Circular Única Operativa (CUO) | general-provision | CONSAR | 2026-02-12 | current | source-verified |
| **RAIA-REG-CONSAR-FI** | Circular Única Financiera (CUF) | general-provision | CONSAR | 2025-09-18 | current | source-verified |
| **RAIA-REG-FPB-RULES** | Reglas Fondo Bienestar | operating-rule | FPB | 2025-06-14 | current | source-verified |
| **RAIA-REG-CUS** | Circular Ciberseguridad (CNBV/CONSAR) | circular | CONSAR | 2018-09-10 | pending-verification | pending |

## Criterios de Calidad de Fuentes
* Todas las fuentes tienen su respectiva `officialUrl` validada y apuntan a páginas oficiales de la Cámara de Diputados, el Diario Oficial de la Federación (DOF) o la autoridad correspondiente.
* Las fuentes de datos vigentes cumplen estrictamente con los límites de reforma de la línea base.
* Se registran fuentes abrogadas/históricas explícitas (`abrogated`) para trazabilidad del marco legacy.
