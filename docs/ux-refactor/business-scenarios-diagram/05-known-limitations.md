# 05 - Limitaciones Conocidas (Known Limitations)

Este documento detalla advertencias técnicas y limitaciones del diagrama de secuencia central de escenarios de negocio.

## Limitaciones de Visualización

1. **Relación de Aspecto en Pantallas Ultra-Anchas (Ultra-Wide)**:
   - Al alinear el diagrama arriba de forma fija a `targetY = 24`, los diagramas con una relación de aspecto muy horizontal (pocos pasos pero muchos participantes) tendrán un espacio vacío considerable en la parte inferior del canvas. Esto es un comportamiento normal de diseño técnico que preserva la proporcionalidad y evita recortes horizontales.

2. **Doble requestAnimationFrame en Carga Inicial**:
   - Debido al ciclo de renderizado de React en Next.js (donde el DOM tarda un ciclo de vida en estabilizar las dimensiones del layout central al ocultar/mostrar paneles laterales), se utiliza un doble ciclo de `requestAnimationFrame` en `useSequenceDiagramZoom.ts` para evitar saltos o parpadeos en el cálculo de zoom. Esto es estable, pero es importante tenerlo en cuenta al auditar la carga inicial del DOM.
