# Inventario de Aplicación RAIA

Este documento detalla el inventario completo de las rutas, módulos, pantallas, fuentes de datos y acciones del usuario observadas de forma directa en el código y en la interfaz de RAIA.

## 📌 Resumen de Rutas y Módulos

La aplicación se compone de 22 rutas principales organizadas de la siguiente manera:

### 1. Módulos Core (Implementados con Lógica Completa)

| Ruta | Nombre Funcional | Título de la Página | Componente de Feature / Archivo | Estado del Metamodelo |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Inicio / Dashboard General | RAIA Architecture Overview Portal | `src/app/page.tsx` | Producción / Completo |
| `/dashboard` | Dashboard de Repositorio | RAIA Architecture Dashboard | `src/app/dashboard/page.tsx` | Producción / Completo |
| `/metamodel` | Metamodelo Conceptual | RAIA Metamodel Overview | `src/app/metamodel/page.tsx` | Producción / Completo |
| `/business-scenarios` | Escenarios de Negocio | RAIA Business Scenarios | `src/components/layout/BusinessScenariosClient.tsx` | Producción / Completo |
| `/service-landscape/value-chain` | Canvas del Landscape | RAIA Service Landscape 0.1.0 — Value Chain View | `src/app/service-landscape/value-chain/page.tsx` | Producción / Completo |
| `/service-domains/[slug]` | Ficha Técnica de Service Domain | RAIA Service Landscape 0.1.0 — Value Chain View | `src/app/service-domains/[slug]/page.tsx` | Producción / Completo |
| `/business-areas/[slug]` | Ficha Técnica de Business Area | RAIA Service Landscape 0.1.0 — Value Chain View | `src/app/business-areas/[slug]/page.tsx` | Producción / Completo |
| `/business-domains/[slug]` | Ficha Técnica de Business Domain | RAIA Service Landscape 0.1.0 — Value Chain View | `src/app/business-domains/[slug]/page.tsx` | Producción / Completo |

### 2. Módulos Secundarios (Informativos o de Gobierno)

| Ruta | Nombre Funcional | Título de la Página | Componente de Feature / Archivo | Estado |
| :--- | :--- | :--- | :--- | :--- |
| `/releases` | Historial de Versiones | RAIA Releases | `src/app/releases/page.tsx` | Producción / Completo |
| `/methodology` | Metodología del Portal | RAIA Service Landscape 0.1.0 — Value Chain View | `src/app/methodology/page.tsx` | Producción / Completo |
| `/contribute` | Guía de Contribución | Contribuir a RAIA - Gobierno de Contenidos | `src/app/contribute/page.tsx` | Producción / Completo |

### 3. Módulos Planificados (Renderizan fallback de Mock/Wireframe)

Estas rutas están declaradas pero muestran una pantalla genérica de "Módulo Planificado" (`PlannedModulePage.tsx`):

- `/regulatory-architecture`
- `/reference-model`
- `/control-record-model`
- `/business-object-model`
- `/architecture-overview`
- `/information-architecture`
- `/wireframes`
- `/capability-map`
- `/capability-map/views`
- `/business-scenarios/snippets`
- `/service-landscape/matrix`
- `/service-landscape/overview-diagrams`

---

## 💾 Fuentes de Datos Estáticos (JSON)

Toda la información arquitectónica de la aplicación proviene de archivos estáticos en `src/data/`:

1. **`raia-landscape-0.1.0.json`**: Estructura jerárquica de áreas de negocio, dominios de negocio, y service domains.
2. **`relations-0.1.0.json`**: Relaciones (dependencias) directas de negocio entre Service Domains.
3. **`scenarios-0.1.0.json`**: Listado de escenarios de negocio lógicos e industria.
4. **`scenario-sequences.json`**: Estructuras detalladas de pasos y participantes de los diagramas de secuencia.
5. **`scenario-narratives.json`**: Narrativas conceptuales detalladas de arquitectura y pasos específicos.
6. **`portal-modules.json`**: Configuración de los paneles de navegación del portal de inicio.

---

## 🖱️ Acciones Disponibles del Usuario

Durante la auditoría visual se verificaron las siguientes interacciones funcionales sin alteraciones del estado de negocio:

* **Búsqueda Global**: Activación mediante la tecla `/` o clic en el buscador del header. Permite filtrar y navegar rápidamente hacia cualquier Service Domain o Escenario.
* **Canvas Interactivo (React Flow)**: En el mapa de la cadena de valor (`/service-landscape/value-chain`), se permite hacer zoom, panning, encuadrar la vista, y hacer clic en cualquier Service Domain para abrir su panel lateral de propiedades.
* **Simulador de Escenarios**: En `/business-scenarios`, se permite cambiar de escenario propuesto, hacer clic en los pasos numerados del diagrama de secuencia para centrar la narrativa, usar botones "Anterior" y "Siguiente", y colapsar o expandir el cajón lateral de análisis en dispositivos móviles/tablets.
* **Navegación por Filtros**: Filtrado por Áreas y Dominios de Negocio en las vistas del landscape y búsqueda integrada.
