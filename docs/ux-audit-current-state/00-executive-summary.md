# Resumen Ejecutivo de la Auditoría Visual y de UX

Este documento resume los hallazgos de la auditoría técnica y visual del portal de arquitectura de referencia RAIA (v0.1.0).

## 📌 ¿Qué es RAIA?

La **Red de Arquitectura de Industria Afores (RAIA)** es una plataforma interactiva que actúa como un catálogo y gobernanza neutral del Service Landscape, capacidades y relaciones de la industria mexicana de ahorro para el retiro. Facilita la trazabilidad regulatoria y de procesos unificados sin alterar la lógica de negocio individual de cada Afore.

---

## 📊 Métricas Clave y Datos Cuantitativos

* **Rutas Totales Analizadas**: 22 rutas (11 Core implementadas, 11 en estado Planificado).
* **Screenshots Generados**: 133 capturas de pantalla organizadas por Viewport (Escritorio, Tablet, Móvil).
* **Componentes de Interfaz Identificados**: ~15 componentes clave de layout y visualización.
* **Contenedores con Scroll Interno**: 4 contenedores principales detectados con propiedades de desbordamiento.
* **Alertas de Consola**: 0 errores o advertencias reportadas (comportamiento técnico limpio en consola).

### Clasificación de Hallazgos por Severidad:
* **Críticos**: 1 (Apilado vertical en Escenarios de Negocio).
* **Altos**: 3 (Inaccesibilidad por teclado, Conflicto de scroll/zoom en el canvas, Pérdida de estado en navegación hacia atrás).
* **Medios**: 2 (Bajo contraste de color en badges, Ocultación de menú secundario en laptops).
* **Bajos**: 1 (Apilado largo en la página principal).

---

## 🚨 Tres Causas Principales del Scroll Excesivo

1. **Estructura Lineal Sencilla en Escenarios (`/business-scenarios`)**:
   El diagrama de secuencia y las descripciones del paso están apilados uno debajo del otro, sumando una altura total de `6478px` (7.2 viewports). El usuario pierde de vista el diagrama de secuencia al leer los pasos inferiores.
2. **Rejilla Vertical de Tarjetas en Inicio (`/`)**:
   La visualización en tarjetas de todos los módulos y el historial de versiones en la misma página principal alarga el scroll de la página de inicio a `4356px` (4.8 viewports).
3. **Falta de Agrupación por Pestañas (Tabs) en Fichas Técnicas**:
   Toda la información técnica de los Service Domains se lista linealmente en la página, en lugar de agruparse de manera organizada.

---

## 🌊 Tres Problemas Principales de Fluidez

1. **Pérdida de Estado al retroceder**: Al regresar de una ficha técnica hacia el landscape, el mapa de React Flow se destruye y reconstruye, obligando al usuario a volver a buscar el nodo.
2. **Conflicto de Eventos en React Flow**: El canvas atrapa el scroll del ratón e impide al usuario desplazarse hacia abajo de la página, a menos que mueva el ratón fuera del diagrama.
3. **Saltos de Layout**: Al cambiar de paso en los escenarios de negocio, la altura del bloque de pasos varía constantemente, empujando y jalando el pie de página de forma brusca.

---

## 💡 Cinco Oportunidades Principales de Mejora (Inspiradas en HOPEX)

1. **Layout de Pantalla Dividida (Split Screen Fijo)** para Escenarios.
2. **Panel Lateral Derecho Deslizable (Properties Panel)** para consultas rápidas de Service Domains en lugar de redirecciones.
3. **Distribución por Pestañas (Tabs)** en las Fichas de Detalle.
4. **Desactivación del Zoom del Ratón en React Flow** (activar solo con Ctrl + Scroll).
5. **Persistencia de Filtros y Zoom** de React Flow en el almacenamiento Zustand.

---

## ⚠️ Limitaciones de la Auditoría

* La auditoría se limitó a datos estáticos ya cargados.
* No se modificaron componentes ni archivos de estilos productivos en esta fase.
* Todas las observaciones y métricas se basan en evidencia directa medida con Playwright.
