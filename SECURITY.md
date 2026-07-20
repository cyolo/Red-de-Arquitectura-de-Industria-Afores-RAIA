# Política de Seguridad — RAIA (Red de Arquitectura de Industria Afores)

## Versiones Soportadas

Actualmente, solo proporcionamos parches de seguridad para la última versión de desarrollo de RAIA.

| Versión | Soportada |
| ------- | --------- |
| dev-001  | Yes       |
| < 0.1.0 | No        |

## Reportar una Vulnerabilidad

Si descubre una vulnerabilidad de seguridad en este proyecto, por favor NO abra una issue pública en GitHub. En su lugar, reporte la vulnerabilidad de manera confidencial siguiendo este procedimiento:

1. Envíe un correo electrónico detallado a **security@raia.industria.gob.mx**.
2. Incluya una descripción clara del problema, los pasos para reproducirlo y cualquier código de prueba de concepto (PoC).
3. Le acusaremos recibo en un plazo de 48 horas y trabajaremos con usted para remediar y divulgar la vulnerabilidad de forma coordinada.

## Canales y Recursos Adicionales

* **Informes de Arquitectura de Seguridad**: Ubicados localmente bajo `docs/security/`.
* **Esquemas de Datos Seguros**: Validados automáticamente mediante esquemas Zod en `src/domain/schemas/`.
* **Content Security Policy (CSP)**: Definida estrictamente en `next.config.ts`.
