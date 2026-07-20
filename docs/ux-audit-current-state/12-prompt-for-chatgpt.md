# Prompt Consolidado para ChatGPT: Refactorización Visual y de UX de RAIA

Este documento consolida toda la evidencia recopilada en la auditoría visual y de UX de la aplicación RAIA (versión 0.1.0) para que actúe como un prompt autocontenido y listo para usar en ChatGPT.

---

## Contexto del Proyecto

**RAIA (Red de Arquitectura de Industria Afores)** es una plataforma web interactiva que modela las capacidades, dominios de negocio y dependencias operativas de la cadena de valor de las Afores en México, inspirada funcionalmente en la distribución de la línea base 14.0 de BIAN.

### Stack Tecnológico:
* **Framework**: Next.js v16.2.10 (App Router), React 19.2.4
* **Estilos**: Tailwind CSS v4.0.0 (PostCSS v4)
* **Estado**: Zustand v5.0.14
* **Diagramación**: `@xyflow/react` v12.11.2 (React Flow)
* **Animaciones**: `framer-motion` v12.42.2
* **Validación**: Zod v4.4.3
* **Buscador**: `fuse.js` v7.4.2

### Estructura de Carpetas Clave:
```text
src/
├── app/                              # Rutas del App Router
│   ├── layout.tsx                    # Layout Shell principal
│   ├── page.tsx                      # Inicio / Estadísticas
│   ├── service-landscape/value-chain # Canvas React Flow de la Cadena de Valor
│   ├── service-domains/[slug]        # Ficha Técnica de Service Domain
│   └── business-scenarios            # Escenarios de Negocio y Diagrama de Secuencia
├── components/
│   └── layout/
│       ├── Header.tsx                # Cabecera sticky superior (h-14)
│       ├── DetailSidebar.tsx         # Panel de propiedades lateral contextual
│       └── BusinessScenariosClient.tsx # Componente maestro de escenarios
└── features/
    └── business-scenarios/components/
        └── ScenarioStepsWorkspace.tsx # Listado de pasos cronológicos y detalles
```

---

## Evidencia Física Recopilada

### 1. Medición de Scroll (Viewport 1440x900)
* `/business-scenarios`: **7.20 viewports** (`scrollHeight: 6478px`). El diagrama de secuencia (SVG de React Flow, min-h 720px) se desvanece de la pantalla al hacer scroll para leer la narrativa y los campos de datos de los pasos estructurados.
* `/`: **4.84 viewports** (`scrollHeight: 4356px`). Apilado excesivo de tarjetas de módulos y versiones en la página de inicio.
* `/service-landscape/value-chain`: **3.21 viewports** (`scrollHeight: 2886px`). Bloqueo de scroll: el canvas interactivo absorbe los eventos de la rueda del ratón y ejecuta zoom en lugar de desplazar la página hacia el footer.

### 2. Problemas Críticos de Usabilidad (UX) y Accesibilidad (WCAG 2.2 AA)
* **Pérdida de Estado en Navegación**: Si el usuario navega del Value Chain a una ficha de detalle y regresa, la aplicación destruye el canvas y lo reconstruye en la posición por defecto. El usuario pierde el nodo seleccionado y su zoom.
* **Inaccesibilidad de Teclado**: Los nodos de React Flow carecen de `tabindex` y no pueden recibir foco del teclado ni ser activados por lectores de pantalla.
* **Bajo Contraste de Color**: Badges con relación de contraste inferior a `4.5:1` en temas claros.
* **Falta de Vista Master-Detalle**: La navegación obliga a saltar constantemente entre páginas completas en lugar de contar con paneles divididos.

---

## Fortalezas que deben conservarse al 100%
* Estilo estético moderno (Inter, paleta oscura refinada, gradientes suaves, bordes redondeados).
* Buscador difuso instantáneo global (Modal y trigger en Header).
* Validaciones estáticas automáticas de Zod en prebuild.
* Toda la lógica de negocio y datos de los archivos JSON de `src/data/`.

---

## Propuesta de Diseño Inspirada en MEGA HOPEX

Deseamos incorporar de forma selectiva estos patrones:
1. **Properties Panel (Panel Lateral Contextual)**: Para evitar salir del canvas al consultar detalles de Service Domains.
2. **Split Screen Layout (Pantalla Dividida Fija)**: Para `/business-scenarios` (Diagrama fijo a la izquierda al 50% de ancho, narrativa y pasos con scroll independiente a la derecha).
3. **Pestañas Contextuales (Tabs)**: Dentro de las fichas de detalle, agrupando información técnica para reducir la altura de la página de 2000px a menos de 800px.
4. **Persistencia en Zustand**: Guardar el nivel de zoom y nodo seleccionado en el Value Chain.

---

## Petición de Rediseño (Instrucción Final)

> Con base en esta evidencia, ayúdame a diseñar una propuesta visual y de experiencia de usuario para RAIA que reduzca el scroll, mejore la fluidez, aproveche mejor el viewport y adopte de forma selectiva patrones de aplicaciones empresariales como MEGA HOPEX, sin modificar ninguna funcionalidad, regla, API, contrato, modelo, permiso o comportamiento de negocio existente.
