# Auditoría de Accesibilidad (WCAG 2.2 AA)

Este documento detalla la revisión de accesibilidad de la aplicación RAIA, identificando problemas críticos que impiden a personas con discapacidades motoras o visuales utilizar la herramienta de forma eficiente.

## ♿ Resumen de Hallazgos WCAG 2.2 AA

| ID | Criterio WCAG | Ruta | Componente / Archivo | Hallazgo / Evidencia | Severidad | Impacto |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ACC-001** | `2.1.1: Teclado` | `/service-landscape/value-chain` | `React Flow Canvas` | Los nodos de Service Domains y las relaciones del mapa de la cadena de valor no son accesibles con la tecla `Tab` ni se pueden activar mediante teclado. | **Crítico** | Usuarios que dependen únicamente del teclado (sin ratón). |
| **ACC-002** | `2.4.7: Foco Visible` | Global | Varios enlaces y botones | No hay un contorno visible (`focus-ring`) consistente en los enlaces primarios del Header y en las tarjetas al navegar con el teclado. | **Alto** | Usuarios con baja visión. |
| **ACC-003** | `1.4.3: Contraste Mínimo` | Global | Badges de Estado (`HomePage.tsx`) | Los badges de estado (e.g., "Disponible" con texto verde sobre verde claro) no alcanzan la relación de contraste de `4.5:1` recomendada para textos pequeños. | **Medio** | Usuarios con daltonismo o debilidad visual. |
| **ACC-004** | `1.3.1: Info y Relaciones` | `/service-domains/[slug]` | Ficha de Detalle | La barra lateral de propiedades (`DetailSidebar.tsx`) no utiliza etiquetas semánticas HTML5 como `<aside>` y carece de un rol ARIA adecuado para lectores de pantalla. | **Medio** | Usuarios de lectores de pantalla. |
| **ACC-005** | `2.4.1: Evitar Bloques` | Global | Layout raíz (`layout.tsx`) | No existe un enlace de salto de contenido (`Skip to main content`) al inicio de la página para omitir la cabecera. | **Bajo** | Usuarios de teclado y lectores de pantalla. |

---

## 🛠️ Recomendaciones de Mejora (Priorizando HTML Semántico)

1. **Atributos de Foco y ARIA en React Flow**:
   * Asegurar que cada nodo inyectado en el canvas contenga `tabIndex={0}` y maneje el evento `onKeyDown` para activar el panel de propiedades al pulsar `Enter` o `Space`.
2. **Uso de Etiquetas Semánticas HTML5**:
   * Cambiar los contenedores `<div>` que actúan como barras de propiedades laterales o paneles de filtros por etiquetas `<aside>` y `<section>` con sus respectivos encabezados descriptivos.
3. **Optimización de Iconos**:
   * Todos los iconos importados de `lucide-react` que sean decorativos deben llevar explicitamente `aria-hidden="true"` para evitar que los lectores de pantalla lean caracteres confusos o nombres de icono irrelevantes.
