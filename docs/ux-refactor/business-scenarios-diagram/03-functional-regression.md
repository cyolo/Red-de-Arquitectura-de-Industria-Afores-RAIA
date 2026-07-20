# 03 - Pruebas y Regresión Funcional (Functional Regression Results)

Este documento detalla las pruebas realizadas para asegurar que la reestructuración de diseño no introdujera regresiones funcionales en la sección de escenarios de negocio.

## Lógica y Funcionalidades Verificadas

Se probó de forma manual e interactiva cada uno de los componentes de interacción del diagrama central:

1. **Ajuste de Escala (Fit to Viewport)**:
   - Al hacer clic en el botón de **Fit (Ajustar al contenido)** en la toolbar, el diagrama se escala de manera óptima para encajar exactamente en el viewport disponible del lienzo, alineándose a 24px del borde superior y centrándose horizontalmente.
   - **Resultado**: Aprobado.

2. **Restablecer Escala (Reset Zoom)**:
   - Al presionar el botón de **Reset**, el lienzo regresa a escala `100%` (scale `1`) trasladado horizontalmente al centro y verticalmente a `24px` del borde superior.
   - **Resultado**: Aprobado.

3. **Zoom In & Zoom Out**:
   - Funcionalidad de zoom mediante botones de la barra de herramientas y la rueda del ratón.
   - **Resultado**: Aprobado.

4. **Paneo y Arrastre (Pan & Drag)**:
   - Capacidad de agarrar el canvas del diagrama y arrastrarlo libremente para explorar interacciones y mensajes específicos.
   - **Resultado**: Aprobado.

5. **Pantalla Completa (Fullscreen Mode)**:
   - Al alternar el modo fullscreen, el lienzo se expande a `100dvh` ocupando toda la pantalla. Al salir de fullscreen, se restablece el tamaño original en el panel izquierdo/derecho del workspace y el diagrama vuelve a re-calcular su escala con `fitDiagramToViewport` de forma fluida.
   - **Resultado**: Aprobado.

6. **Interacción con Pasos y Selección Lateral**:
   - Al hacer clic sobre cualquier flecha o número de paso en el diagrama de secuencia vectorial, el paso activo se selecciona, resaltándolo visualmente, y se actualiza el panel de "Pasos y Flujo" en el costado derecho con la definición detallada del paso.
   - **Resultado**: Aprobado.
