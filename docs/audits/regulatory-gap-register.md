# Registro de Gaps Regulatorios (Regulatory Gap Register)

Este registro documenta las brechas de capacidades de arquitectura identificadas al auditar el Landscape contra las reformas y modificaciones regulatorias de CONSAR.

## Brechas Detectadas (Gaps)

### GAP-001: Transferencia al Fondo de Pensiones para el Bienestar
* **Severidad**: `P0`
* **Descripción**: El Landscape actual no contempla las responsabilidades lógicas para la desinversión, aviso, transferencia y conciliación de recursos inactivos hacia el Fondo de Pensiones para el Bienestar, de acuerdo al decreto presidencial del 1 de mayo de 2024 y reglas de operación (DOF 18/06/2024).
* **Fuentes Relacionadas**:
  - `RAIA-REG-LSAR` (Art. 37-A)
  - `RAIA-REG-FPB-RULES`
* **Impacto**:
  - `RAIA-BA-007` (Retiros, Prestaciones y Pensiones)
  - `RAIA-BD-021` (Liquidación de Beneficios)
* **Recomendación**: Crear un Service Domain dedicado denominado `Transferencia a Fondos Públicos de Pensiones` o enriquecer la liquidación de retiros para desglosar la transferencia y su posterior devolución o reclamación.

### GAP-002: Geolocalización en Canales Digitales
* **Severidad**: `P1`
* **Descripción**: CONSAR modificó las Disposiciones Operativas (CUO) obligando a registrar la geolocalización en tiempo real del dispositivo del trabajador al realizar transacciones de cuenta (ej. retiros por desempleo, traspasos, retiros voluntarios) para mitigar fraudes.
* **Fuentes Relacionadas**:
  - `RAIA-REG-CONSAR-OP` (CUO)
* **Impacto**:
  - `RAIA-BA-003` (Identidad, Partes y Expediente)
  - `RAIA-BA-008` (Servicio, Canales y Experiencia)
* **Recomendación**: Crear la capacidad de `Geolocalización Transaccional` como un habilitador tecnológico (`enterprise-enabler`) que proporcione coordenadas georreferenciadas y metadatos de red validados a las operaciones de la cuenta.

### GAP-003: Autenticación Biométrica y Firma SAR
* **Severidad**: `P1`
* **Descripción**: Confusión semántica entre la firma de consentimiento y la autenticación biométrica de enrolamiento. Cada trámite crítico (Traspaso, Registro, Retiro Total) requiere validación de enrolamiento biométrico de CONSAR contra la base de datos nacional antes del consentimiento de la transacción.
* **Fuentes Relacionadas**:
  - `RAIA-REG-CONSAR-OP`
* **Impacto**:
  - `RAIA-BA-003` (Identidad, Partes y Expediente)
  - `RAIA-BD-009` (Expediente y Firma)
* **Recomendación**: Dividir las responsabilidades de enrolamiento biométrico de las de firma de voluntad y gestión de llaves criptográficas de consentimiento.

### GAP-004: Prevención de Riesgo Documental en Expedientes
* **Severidad**: `P2`
* **Descripción**: Falta de controles específicos para validar la integridad, vigencia y legitimidad de los documentos digitalizados del trabajador (ej. comprobante de domicilio, actas de nacimiento) para evitar la suplantación de identidad mediante alteración de archivos PDF/imágenes.
* **Fuentes Relacionadas**:
  - `RAIA-REG-CONSAR-OP` (CUO)
* **Impacto**:
  - `RAIA-BA-003` (Identidad, Partes y Expediente)
  - `RAIA-BD-008` (Partes y Datos Generales)
* **Recomendación**: Integrar el control de `Validación de Riesgo Documental` en el Service Domain de integración de expedientes.

### GAP-005: Criterios ESG Sostenibles en Régimen de Inversión
* **Severidad**: `P2`
* **Descripción**: Las modificaciones al régimen de inversión de las SIEFORE obligan a incluir criterios ambientales, sociales y de gobierno corporativo (ESG/ASG) en el rebalanceo de portafolios y valuación de activos.
* **Fuentes Relacionadas**:
  - `RAIA-REG-CONSAR-FI` (CUF)
* **Impacto**:
  - `RAIA-BA-006` (Inversión y SIEFORE)
  - `RAIA-BD-016` (Estrategia y Portafolio)
* **Recomendación**: Integrar el control preoperación `Evaluación de Sostenibilidad ASG` en la estrategia de inversión.
