# Threat Model — RAIA (Red de Arquitectura de Industria Afores)

Este documento detalla el modelado de amenazas y las defensas implementadas en RAIA para proteger la integridad estructural de la información y la experiencia de los usuarios en el portal.

---

## 1. Vectores de Ataque y Mitigaciones

### 1.1 Navegación Arbitraria Externa
* **Amenaza**: Inyección de enlaces a través de datos dinámicos o inputs que redirijan a los usuarios a sitios maliciosos (`javascript:`, `data:`, o dominios externos de phishing).
* **Defensa**:
  * Implementación del `InternalRouteSchema` en Zod.
  * Uso obligatorio de la función de afirmación `assertInternalRoute(route)` antes de invocar `router.push`.
  * Validación estricta que rechaza esquemas ajenos, retrocesos de directorio (`..`) y barras invertidas (`\\`).

### 1.2 URLs Regulatorias Maliciosas o Falsificadas
* **Amenaza**: Suplantación de fuentes oficiales mediante enlaces HTTP no cifrados o dominios fraudulentos que finjan ser autoridades regulatorias.
* **Defensa**:
  * Creación del `OfficialRegulatoryUrlSchema`.
  * Restricción exclusiva a protocolo HTTPS sin credenciales embebidas ni puertos no estándar.
  * Allowlist explícita de dominios del sector previsional y gubernamental mexicano (`*.gob.mx`, `infonavit.org.mx`).

### 1.3 Inyección de Parámetros de Consulta (Query Parameter Pollution)
* **Amenaza**: Envío de parámetros de búsqueda o filtrado excesivamente largos, con caracteres de escape SQL/HTML, o con valores no esperados para alterar el comportamiento del frontend o generar denegación de servicio (DoS) del cliente.
* **Defensa**:
  * Validación y saneamiento campo por campo mediante el esquema Zod `QueryParamsSchema` en el hook `useEffect` de sincronización de la URL.
  * Si un parámetro no cumple con el esquema esperado (ej. un ID de área con patrón incorrecto), se descarta de forma segura y se le asigna el valor por defecto, aislando la inyección.

### 1.4 Ejecución de Scripts no Autorizados y XSS (Cross-Site Scripting)
* **Amenaza**: Inyección de scripts maliciosos en la aplicación para robar tokens, alterar la interfaz o realizar secuestros de sesión.
* **Defensa**:
  * Configuración de una Content Security Policy (CSP) robusta en `next.config.ts`.
  * **Remoción completa de `unsafe-eval`** de la política `script-src` en producción.
  * Encabezados de seguridad adicionales activados en producción:
    * `X-Frame-Options: DENY` (evita Clickjacking).
    * `X-Content-Type-Options: nosniff` (previene rastreo de MIME-type).
    * `Referrer-Policy: strict-origin-when-cross-origin`.

### 1.5 Vulnerabilidades de Dependencias en Tiempo de Ejecución (Node.js)
* **Amenaza**: Explotación de vulnerabilidades conocidas en Node.js v18 (EOL inminente).
* **Defensa**:
  * Migración y actualización de todo el entorno local y de despliegue a **Node.js v24 LTS**.
  * Restricción forzada de motores en `package.json` (`"engines": { "node": ">=22 <25" }`).
  * Archivos `.node-version` y `.nvmrc` creados para asegurar homogeneidad de entornos.

---

## 2. Matriz de Control de Amenazas

| ID | Amenaza | Gravedad | Componente Afectado | Control de Mitigación | Estado |
| --- | --- | --- | --- | --- | --- |
| **T-01** | Redirección abierta | Alta | Enrutador Frontend | `assertInternalRoute` | Mitigado |
| **T-02** | URLs de fuentes falsas | Media | Baseline Regulatorio | `OfficialRegulatoryUrlSchema` | Mitigado |
| **T-03** | Inyección en buscador | Baja | Barra de Búsqueda / URL | `QueryParamsSchema` | Mitigado |
| **T-04** | Ataques XSS / Scripts | Crítica | Navegador de Usuario | CSP sin `unsafe-eval` | Mitigado |
| **T-05** | Fallo en entorno | Media | Pipeline de compilación | Node 24 Engine Constraint | Mitigado |
