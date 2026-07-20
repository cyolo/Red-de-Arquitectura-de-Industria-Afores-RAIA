# 00 - Causa Raíz (Root Cause Analysis)

Este documento detalla el análisis técnico de las capas y decisiones de diseño frontend que causaban el espacio en blanco desproporcionado sobre el diagrama de secuencia de escenarios de negocio (`/business-scenarios`).

## Diagnóstico Técnico

El espacio vacío superior era provocado por una superposición de múltiples ajustes de alineación y centrado redundantes:

1. **Contenedor Padre (Flexbox/justify-center)**:
   En `BusinessScenariosClient.tsx`, el wrapper del panel central aplicaba la clase `flex-col justify-center` al contenedor del diagrama:
   ```tsx
   <div className="flex-1 min-h-0 overflow-hidden p-4 flex flex-col justify-center" data-testid="scenario-sequence-diagram">
   ```
   Esta alineación centraba verticalmente todo el componente del diagrama dentro del espacio disponible, empujándolo hacia abajo.

2. **Altura Fija y Clamping en Componente de Secuencia**:
   En `RaiaSequenceDiagram.tsx`, se forzaba una altura estricta en el modo de visualización normal (no fullscreen):
   ```css
   min-h-[720px] h-[clamp(720px,78vh,1040px)]
   ```
   Esto impedía que el diagrama heredara el tamaño real del workspace del navegador, forzando un lienzo sobredimensionado y desalineado con pantallas más compactas.

3. **Escalado del SVG (viewBox/meet)**:
   El elemento `<svg>` en `SequenceDiagramCanvas.tsx` utilizaba `viewBox` y `preserveAspectRatio="xMidYMid meet"`. Esta directiva causaba un primer centrado vertical y horizontal automático por parte del navegador para encajar el diagrama dentro de la altura de 720px–1040px calculada anteriormente.

4. **Segundo Ajuste y Centrado con D3**:
   En el hook `useSequenceDiagramZoom.ts`, la lógica matemática de D3 calculaba las traslaciones de forma independiente a la visualización nativa del SVG, utilizando la fórmula:
   ```typescript
   const targetY = Math.max((wrapperHeight - safeHeight * targetScale) / 2, 20);
   ```
   Esto centraba verticalmente la capa de zoom `.zoom-layer` con respecto al contenedor, aplicando un **segundo centrado vertical** redundante sobre el que ya realizaba el `viewBox` de SVG.

## Resolución y Estabilidad de la Corrección

Para corregir la anomalía de manera robusta y estable:
* Se eliminó el centrado vertical Flexbox (`justify-center`) en el contenedor de `BusinessScenariosClient.tsx`, sustituyéndose por `flex items-stretch` para dar flexibilidad dimensional completa.
* Se removió la altura fija en `RaiaSequenceDiagram.tsx` (`h-full min-h-0`), lo que permite que el contenedor herede exactamente el espacio del panel central.
* Se eliminaron los atributos `viewBox` y `preserveAspectRatio` del SVG en `SequenceDiagramCanvas.tsx`. Al hacer esto, **D3 Zoom se establece como la única autoridad de escalado y traslación**, eliminando el conflicto de doble ajuste.
* Se modificaron los algoritmos de ajuste (`fitDiagramToViewport` y `resetZoom`) en `useSequenceDiagramZoom.ts` para fijar la traslación vertical `targetY = 24` (alineado al borde superior con un padding elegante de 24px) y centrar horizontalmente el contenido basándose en el ancho real.
* Se redujo el límite de zoom mínimo de `0.35` a `0.05` en D3, garantizando que diagramas masivos de hasta 21 pasos y múltiples participantes quepan en pantalla completa sin recortar contenido.
