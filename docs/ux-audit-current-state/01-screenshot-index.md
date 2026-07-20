# Índice de Capturas de Pantalla (Screenshots)

Este documento sirve como índice e inventario visual de las capturas de pantalla tomadas durante la auditoría automatizada en `docs/ux-audit-current-state/screenshots/`.

## 📸 Capturas de Pantalla Destacadas

### 1. Escritorio (1440x900)

| Archivo de Captura | Ruta URL | Viewport / Estado | Propósito | Componente Asociado | Observación / Problema detectado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `001-home-desktop-1440x900-default-viewport.png` | `/` | Superior / Inicio | Vista principal | `src/app/page.tsx` | Cabecera y banner Hero con bajo contraste en badges. |
| `001-home-desktop-1440x900-default-fullpage.png` | `/` | Página Completa | Mapa general | `src/app/page.tsx` | Altura excesiva (`4356px`), lista de módulos muy larga. |
| `007-dashboard-desktop-1440x900-default-viewport.png` | `/dashboard` | Superior / Default | Ver estadísticas | `src/app/dashboard/page.tsx` | Correcto, compacto, sin scroll excesivo. |
| `019-business-scenarios-desktop-1440x900-default-viewport.png` | `/business-scenarios` | Superior / Default | Vista escenarios | `BusinessScenariosClient.tsx` | Muestra el selector y el diagrama de secuencia. |
| `019-business-scenarios-desktop-1440x900-default-fullpage.png` | `/business-scenarios` | Página Completa | Flujo completo | `BusinessScenariosClient.tsx` | Altura de `6478px` (7.2 viewports). La narrativa empuja todo hacia abajo. |
| `025-service-landscape-value-chain-desktop-1440x900-default-viewport.png` | `/service-landscape/value-chain` | Superior / Default | Canvas interactivo | `ValueChainViewClient.tsx` | React Flow. Atrapa la rueda del ratón bloqueando scroll vertical. |
| `031-service-domains-politica-...` | `/service-domains/[slug]` | Ficha completa | Detalle de servicio | `DetailSidebar.tsx` | Muestra APIs y regulaciones apiladas. |

---

## 📱 Capturas en Tablet y Móvil (Verificación de colapso)

* **Tablet (1024x768 y 768x1024)**:
  * Los diagramas de secuencia e interacciones de React Flow colapsan horizontalmente, forzando barras de scroll horizontal anidadas difíciles de manipular en pantallas táctiles.
  * El Header principal oculta la barra de búsqueda global y comprime el menú de navegación secundario en un botón de hamburguesa.

* **Móvil (390x844)**:
  * El cajón lateral de análisis (`ScenarioStepAnalysisDrawer.tsx`) se activa automáticamente en móviles para evitar que el panel de propiedades compita horizontalmente con la lista de pasos.
  * Sin embargo, el diagrama de secuencia principal se vuelve ilegible debido a la alta densidad de líneas de vida verticales alineadas en un ancho de 390px.
