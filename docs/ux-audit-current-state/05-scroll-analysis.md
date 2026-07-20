# Análisis Detallado del Scroll y Viewport

Este documento presenta los resultados de la medición automatizada del scroll en la aplicación RAIA y diagnostica las causas del scroll excesivo.

## 📊 Métricas de Altura y Scroll por Pantalla (Viewport Escritorio 1440x900)

| Ruta | Altura de Viewport | Altura Total del Documento (`scrollHeight`) | Viewports Verticales (`scrollRatio`) | Clasificación |
| :--- | :---: | :---: | :---: | :---: |
| `/` | 900px | 4356px | 4.84 | **Excesivo** |
| `/business-scenarios` | 900px | 6478px | 7.20 | **Excesivo** |
| `/service-landscape/value-chain` | 900px | 2886px | 3.21 | **Excesivo** |
| `/service-domains/politica-...` | 900px | 2689px | 2.99 | **Alto** |
| `/metamodel` | 900px | 2424px | 2.69 | **Alto** |
| `/dashboard` | 900px | 1000px | 1.11 | **Compacto** |

---

## 🔍 Diagnóstico de las Causas Principales del Scroll

### 🚨 1. Apilado Vertical Crítico en Escenarios de Negocio (`/business-scenarios`)
* **Evidencia**: Esta pantalla tiene el ratio más alto de la aplicación (`7.20` viewports de altura).
* **Causa**: Se colocan secuencialmente en un layout vertical de una sola columna:
  1. El Header y Logo de RAIA (140px).
  2. Un banner Hero descriptivo del módulo (180px).
  3. El selector de escenario en Grid (320px).
  4. El diagrama de secuencia gráfico con una altura mínima fija de `720px`.
  5. La narrativa detallada de la arquitectura (`ScenarioArchitectureNarrativeComponent`, aprox. 500px).
  6. El contenedor de Pasos Estructurados (`ScenarioStepsWorkspace`), que en escenarios complejos como `Registro y Traspaso de Cuenta Individual` (6 pasos con narrativa por paso) o `Recaudación de Aportaciones e Inversión` (5 pasos) ocupa más de `3000px`.
* **Impacto**: El usuario pierde por completo la visibilidad del diagrama de secuencia en cuanto hace scroll para leer el paso 2 o 3. Hay una pérdida absoluta de contexto visual y espacial.

### 🚨 2. Estructura de Inicio Secuencial (`/`)
* **Evidencia**: Altura total de `4356px` (`4.84` viewports).
* **Causa**: Se apila el banner Hero de bienvenida, una tarjeta de estadísticas del repositorio, y un listado extendido de módulos de arquitectura organizados en una rejilla de tarjetas. Adicionalmente, se renderiza el historial de versiones en la misma página de inicio.
* **Impacto**: El usuario final de negocio tiene que hacer scroll constante para buscar qué módulos están disponibles, en lugar de contar con un panel de control con accesos directos compactos.

### 🚨 3. Conflicto de Scroll/Zoom en el Landscape (`/service-landscape/value-chain`)
* **Evidencia**: Altura total de `2886px` (`3.21` viewports).
* **Causa**: El canvas interactivo de React Flow está incrustado en el cuerpo de la página debajo de los filtros y un bloque de título grande.
* **Impacto**: Se produce un conflicto de interacción severo: cuando el cursor del ratón está encima del canvas de React Flow, la rueda del ratón ejecuta el zoom in/out sobre el diagrama. Si el usuario desea hacer scroll hacia abajo para ver el pie de página o las fichas, el scroll se bloquea porque el canvas absorbe el evento. El usuario se siente atrapado en la vista.

---

## 🛠️ Inventario de Contenedores con Overflow / Scroll Interno

El análisis DOM reporta los siguientes selectores que manejan propiedades `overflow`:

| Ruta | Selector DOM | Alto Visible | Alto Total | Tipo de Scroll | Riesgo |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `/` | `div.flex-1.overflow-y-auto.bg-slate-50...` | 900px | 4254px | Vertical | Ninguno (cuerpo principal) |
| `/business-scenarios` | `div.flex-1.overflow-y-auto.bg-slate-50...` | 900px | 6378px | Vertical | Alto (pérdida de diagrama fijo) |
| `/service-landscape/value-chain` | `.react-flow__viewport` | Variable | Variable | Bidireccional | Medio (captura el scroll de página) |
| `/service-domains/[slug]` | `div.flex-1.overflow-y-auto...` | 900px | 2589px | Vertical | Bajo |
