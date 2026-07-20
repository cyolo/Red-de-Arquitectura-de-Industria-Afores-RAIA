# 01 - Inventario Funcional (Antes del Refactor)

Este documento detalla el inventario de todas las páginas de la aplicación, módulos, metadatos y escenarios de negocio activos de RAIA antes de realizar los cambios visuales y de UX.

## Resumen del Inventario

### Rutas Core
- **Inicio (Portal principal)** (`/`): Presenta el Hero de bienvenida, buscador global, KPIs de resumen de la arquitectura, releases e historial, y las tarjetas de navegación del repositorio.
- **Dashboard general** (`/dashboard`): Métricas complejas sobre la cobertura de información y completitud de campos de la cadena de valor.
- **Metamodelo conceptual** (`/metamodel`): Glosario y descripción de relaciones entre objetos del metamodelo.
- **Escenarios de Negocio** (`/business-scenarios`): Catálogo lateral de escenarios de negocio, diagrama de secuencia SVG interactivo, narrativa y pasos secuenciales.
- **Service Landscape (Value Chain Map)** (`/service-landscape/value-chain`): Estructura empresarial de tres columnas (Front-Office, Core-Office, Back-Office) con Business Areas, Business Domains y Service Domains, filtros en barra superior y sidebar contextual (`DetailSidebar`).
- **Ficha Técnica de Service Domain** (`/service-domains/[slug]`): Información detallada de capacidades, eventos, regulaciones y APIs asociadas a un Service Domain.
- **Fichas de Business Area & Business Domain** (`/business-areas/[slug]`, `/business-domains/[slug]`): Lista de dominios hijos y metadatos asociados.

### Cantidades de Elementos Registrados en Datos Estáticos
- **Áreas de Negocio (Business Areas):** 11
- **Dominios de Negocio (Business Domains):** 34
- **Dominios de Servicio (Service Domains):** 273
- **Relaciones (Landscape Relations):** 41
- **Escenarios de Negocio (Business Scenarios):** 18
- **Regulaciones:** 3
- **Versiones de Release:** 2 (Versión 0.1.0 y 0.2.0)

---

## Inventario de Rutas y Métricas de Scroll Iniciales

| Ruta | Título de Página | ScrollRatio (Desktop 1440x900) | ScrollCategory |
| :--- | :--- | :--- | :--- |
| `/` | RAIA Architecture Overview Portal | 4.84 | Excesivo |
| `/dashboard` | RAIA Architecture Dashboard | 1.11 | Compacto |
| `/metamodel` | RAIA Metamodel Overview | 2.69 | Alto |
| `/business-scenarios` | RAIA Business Scenarios | 7.20 | Excesivo |
| `/service-landscape/value-chain` | RAIA Service Landscape | 1.10 | Compacto |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | Detalle del Service Domain | 2.99 | Alto |

*Nota: La altura del header inicial era de 64px, y se redujo en la planificación para ganar espacio vertical útil.*
