# Mapa de Construcción Frontend

Este documento detalla el stack tecnológico actual de la aplicación RAIA y cómo se estructura el código para dar soporte al portal.

## 🛠️ Inventario Tecnológico

Basado en la inspección directa del archivo `package.json`, la aplicación utiliza las siguientes dependencias productivas:

* **Framework Core**: Next.js v16.2.10 (con React 19.2.4 y React DOM 19.2.4).
* **Manejador de Estado**: Zustand v5.0.14.
* **Esquemas y Validación**: Zod v4.4.3 (empleado para validar estáticamente la consistencia estructural de los JSONs al arrancar).
* **Solución de Estilos**: Tailwind CSS v4.0.0 (con PostCSS v4.0.0 para compilación de clases de utilidad).
* **Librerías Visuales y Gráficas**:
  * `@xyflow/react` v12.11.2 (React Flow, utilizado para renderizar el Value Chain interactivo y el diagrama de secuencia de escenarios).
  * `framer-motion` v12.42.2 (para animaciones y transiciones de la UI).
  * `lucide-react` v1.24.0 (para el catálogo de iconos de la interfaz).
  * `d3-selection` v3.0.0 y `d3-zoom` v3.0.0 (para controlar el zoom y paneo personalizados).
  * `elkjs` v0.11.1 (para el cálculo de layouts deterministas automáticos en diagramas).
  * `fuse.js` v7.4.2 (para la lógica del buscador global difuso en tiempo real).
* **Compilación y Tipado**: TypeScript v5 con configuración estricta en `tsconfig.json`.

---

## 🏗️ Estructura del Proyecto

El código fuente de la aplicación se distribuye bajo el patrón estándar de Next.js App Router en `src/`:

```text
src/
├── app/             # Rutas y páginas de la aplicación Next.js
│   ├── page.tsx                          # Inicio y Estadísticas
│   ├── layout.tsx                        # Layout raíz con Header, Footer y SearchModal
│   ├── globals.css                       # Estilos Tailwind CSS globales
│   ├── service-landscape/value-chain/    # Canvas interactivo del Landscape
│   ├── service-domains/[slug]/           # Ficha técnica de Service Domain
│   ├── business-areas/[slug]/            # Ficha técnica de Business Area
│   └── business-scenarios/               # Escenarios de Negocio
├── components/      # Componentes UI reutilizables
│   ├── layout/      # Header, Footer, DetailSidebar, BusinessScenariosClient
│   └── portal/      # GlobalSearch, GlobalSearchModal, GlobalSearchTrigger
├── data/            # Datos estáticos en formato JSON (Service Landscape, Relaciones, Escenarios)
├── domain/          # Lógica de negocio e infraestructura de datos
│   ├── schemas/     # Esquemas de validación con Zod
│   ├── types/       # Definiciones de tipos TypeScript
│   └── repositories/# Repositorios tipados para leer los archivos JSON
└── features/        # Módulos específicos de visualización compleja
    ├── business-scenarios/   # Componentes para secuencias y narrativas de escenarios
    └── service-landscape/    # Hooks de zoom, canvas y almacenamiento Zustand
```

---

## 📐 Estructura del Layout Principal

El cascarón de la aplicación (`src/app/layout.tsx`) se define con la siguiente jerarquía estructural en HTML:

```html
<html lang="es" class="font-inter h-full antialiased">
  <body class="min-h-full flex flex-col bg-slate-50 text-slate-900">
    <Header />  <!-- Altura fija h-14, posición sticky/relative en z-40 -->
    <main class="flex-1 flex flex-col min-h-0 relative overflow-hidden">
      {children} <!-- El contenido inyectado por las páginas -->
    </main>
    <Footer />  <!-- Pie de página convencional de altura variable -->
    <GlobalSearchModal />
  </body>
</html>
```

### Comportamiento del Contenedor de Scroll:
* El contenedor principal `<main>` tiene las clases `flex-1 flex flex-col min-h-0 relative overflow-hidden`. Esto restringe la altura del contenedor principal y busca evitar que la ventana completa (`window`) haga scroll.
* Sin embargo, en las páginas de contenido (como la página de inicio o la página de escenarios de negocio), se inyectan contenedores con la clase `overflow-y-auto` en su raíz (por ejemplo, `<div className="flex-1 overflow-y-auto bg-slate-50 py-12...">` en `HomePage` y `BusinessScenariosClient`).
* Esto desplaza el scrollbar hacia el interior del contenedor en lugar de usar el scroll nativo de la página, lo que genera problemas de doble scroll o comportamientos inconsistentes cuando hay grids de altura variable y componentes fijos como diagramas o paneles interactivos.
