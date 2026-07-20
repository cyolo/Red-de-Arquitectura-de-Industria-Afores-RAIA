# 02 - Decisiones de Diseño (Design Decisions)

## Decisión 1: Layout en Split-Screen para Escenarios de Negocio
- **Contexto**: Anteriormente, la página de escenarios de negocio requería scroll de más de 7 viewports.
- **Problema**: Al hacer scroll para ver los pasos, el diagrama de secuencia (que muestra la interacción visual entre los componentes) desaparecía del viewport del usuario.
- **Decisión**: Fijar la altura del workspace de la página a la altura del viewport (`100vh`) menos la altura del header. Dividir el workspace en tres paneles: Lista lateral de escenarios (colapsable), Contenedor de diagrama interactivo (centro, estático), y Panel de narrativa/pasos (derecha, scrollable).
- **Consecuencias**: Reducción del scroll ratio externo a 1.0 (cero scroll de página completo). Relación visual directa e interactiva de cada paso con su correspondiente mensaje destacado en el SVG.

---

## Decisión 2: Pestañas Interactivas en la Ficha de Service Domains
- **Contexto**: Las fichas técnicas contienen información técnica, gobernanza, requerimientos no funcionales y relaciones.
- **Problema**: El apilado vertical resultaba en un scroll excesivo e ineficiente.
- **Decisión**: Implementar un selector de pestañas (Tabs) en pantalla.
- **Consecuencias**: Mayor velocidad de lectura y exploración. Menor fatiga visual.

---

## Decisión 3: Impresión Multi-Tab Mediante CSS Puro (`print:block`)
- **Contexto**: El usuario necesita imprimir o exportar a PDF la ficha completa del Service Domain.
- **Problema**: Al usar pestañas en pantalla, el navegador por defecto solo imprime la pestaña activa, perdiendo el 85% de la especificación técnica.
- **Decisión**: Añadir la clase `print:block` a los contenedores de las pestañas en el DOM y títulos condicionales visibles únicamente al imprimir (`hidden print:block`).
- **Consecuencias**: Al disparar `window.print()`, todas las secciones se imprimen ordenadamente de forma secuencial sin requerir scripts adicionales de manipulación de estado.
