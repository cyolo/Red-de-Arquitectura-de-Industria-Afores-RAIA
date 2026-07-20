# 05 - Resultados de Accesibilidad (Accessibility Results)

Este documento registra los resultados y mejoras del cumplimiento de accesibilidad WCAG 2.2 AA.

## Mejoras de Accesibilidad Implementadas
1. **Skip Link ("Saltar al contenido principal")**:
   - Implementado en `layout.tsx` para permitir a usuarios que navegan únicamente con teclado saltar directamente sobre el menú de navegación del header.
2. **Outlines de Foco Consistentes**:
   - Se agregaron clases Tailwind CSS `focus-visible:ring-2 focus-visible:ring-emerald-500` a todos los botones, tarjetas interactivas y enlaces de navegación del Header y el Portal Principal.
3. **Roles Semánticos**:
   - El sidebar de detalles de la cadena de valor se convirtió en un elemento semántico `<aside>` con los atributos `role="complementary"` y `aria-label`.
4. **Cierre por Teclado (Esc)**:
   - Se añadió un listener de teclado global en `DetailSidebar` para permitir que el panel se cierre presionando la tecla `Escape`.
5. **Navegación por Pestañas**:
   - Los selectores de pestañas de filtrado de módulos y detalles del Service Domain implementan los atributos ARIA recomendados (`role="tablist"`, `role="tab"`, `aria-selected="..."`).
