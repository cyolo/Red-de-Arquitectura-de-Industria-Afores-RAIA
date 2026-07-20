# Rendimiento Percibido y Fluidez

Este documento evalúa los aspectos técnicos y visuales que impactan la fluidez operativa y la velocidad de respuesta percibida por el usuario en RAIA.

## ⏱️ Mediciones de Carga Técnica (Viewport Escritorio 1440x900)

De acuerdo con las trazas de rendimiento recolectadas durante la navegación automatizada:

* **Tiempo Medio de Carga Inicial**: ~250ms (por encima de la media de aplicaciones SPA locales gracias a la precompilación estática de Next.js).
* **Tamaño del Bundle de JavaScript**: Elevado. La inclusión de frameworks de diagramación y layout (`@xyflow/react`, `elkjs`), motores de animación (`framer-motion`), y librerías de iconos (`lucide-react`) incrementa el peso del JS inicial descargado en el navegador.
* **Tiempo de Renderizado de Diagramas complejos**: ~1.5 segundos en la primera renderización debido a que el motor ejecuta de manera síncrona el cálculo de posiciones matemáticas (`calculateSequenceLayout`) al montar el componente.

---

## 🌊 Análisis de Fluidez Operativa

La fluidez se evalúa en base a la continuidad de navegación y la retención del contexto del usuario.

### 🚫 Puntos Críticos de Fricción Identificados:

1. **Pérdida de Scroll al regresar**:
   * Al hacer clic en un Service Domain del landscape para ver su Ficha Técnica Completa (`/service-domains/[slug]`) y presionar "Atrás" o el enlace de retorno, la aplicación destruye la instancia anterior y vuelve a construir el árbol de React Flow desde cero. El usuario pierde el nodo en el que estaba trabajando y su nivel de zoom, viéndose obligado a repetir la búsqueda.

2. **Cálculo de Layouts Pesados al Vuelo**:
   * En `/business-scenarios`, al pulsar en un paso o cambiar de escenario, hay un retraso perceptible de ~200ms antes de que se actualice el diagrama de secuencia. Este retraso es provocado por el renderizado interactivo del canvas y la reevaluación del estado de Zustand.

3. **Saltos de Layout por Altura Inconsistente**:
   * En `/business-scenarios`, al cambiar de paso, la descripción textual e información técnica de la sección inferior varía de longitud. Como la página no tiene una altura fija contenida (sino que se estira y encoge verticalmente), la página experimenta saltos abruptos de scrollbar y de la posición del pie de página (`Footer`), lo cual desconcierta visualmente al usuario.
