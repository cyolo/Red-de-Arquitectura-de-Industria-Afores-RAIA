# Trazabilidad de Requisitos de Pruebas RAIA

Este documento mapea la relación entre los requisitos funcionales declarados y los casos lógicos de prueba automatizados, incluyendo navegadores, viewports y evidencias asociadas.

## Matriz de Trazabilidad

| Requisito de Industria | Caso Lógico | Navegadores | Viewports | Evidencia Generada |
| :--- | :--- | :--- | :--- | :--- |
| **Carga de Escenarios** | `RAIA-BS-E2E-001` | Chromium, Firefox, WebKit | Desktop, Mobile | Screenshot en fallo, logs de consola |
| **Conteo de Catálogo** | `RAIA-BS-E2E-002` | Chromium, Firefox, WebKit | Desktop | Logs de consistencia JSON |
| **Identificadores Únicos** | `RAIA-BS-E2E-003` | Chromium | Desktop | Logs de consistencia JSON |
| **Reactividad al Selección** | `RAIA-BS-E2E-004` | Chromium, Firefox, WebKit | Desktop | Trazas de ejecución |
| **Diagrama de Secuencia** | `RAIA-BS-E2E-005` | Chromium, WebKit | Desktop | Screenshot en fallo, trazas |
| **Participantes Diagrama** | `RAIA-BS-E2E-006` | Chromium, Firefox, WebKit | Desktop | Logs del DOM SVG |
| **Mensajes en Diagrama** | `RAIA-BS-E2E-007` | Chromium, Firefox, WebKit | Desktop | Logs del DOM SVG |
| **Secuencia Cronológica** | `RAIA-BS-E2E-008` | Chromium | Desktop | Logs del DOM SVG |
| **Narrativa General** | `RAIA-BS-E2E-009` | Chromium, Firefox, WebKit | Desktop | Logs de texto visible |
| **Orden Narrativa-Pasos** | `RAIA-BS-E2E-010` | Chromium, Firefox, WebKit | Desktop | Comparación de posiciones en DOM |
| **Pasos en Columna Derecha** | `RAIA-BS-E2E-011` | Chromium, Firefox, WebKit | Desktop | Comparación de posiciones en DOM |
| **Análisis Aislado** | `RAIA-BS-E2E-012` | Chromium, Firefox, WebKit | Desktop | Logs de selectores del panel |
| **Panel de Análisis (Desktop)** | `RAIA-BS-E2E-013` | Chromium, Firefox, WebKit | Desktop (1280x800) | Trazas, screenshots |
| **Drawer de Análisis (Mobile)** | `RAIA-BS-E2E-014` | Mobile Chrome, Mobile Safari | Mobile (375x667) | Trazas, screenshots |
| **Botones Prev/Next** | `RAIA-BS-E2E-015` | Chromium, Firefox, WebKit | Desktop, Mobile | Trazas de ejecución |
| **Selección desde SVG** | `RAIA-BS-E2E-016` | Chromium | Desktop | Eventos click simulados |
| **Selección desde Combo Box** | `RAIA-BS-E2E-017` | Chromium, Firefox, WebKit | Desktop, Mobile | Eventos click en dropdown |
| **Control de Zoom/Fit/Reset** | `RAIA-BS-E2E-018` a `020` | Chromium | Desktop | Eventos click en toolbar |
| **Visualización Fullscreen** | `RAIA-BS-E2E-021` | Chromium, Firefox, WebKit | Desktop | Estado de fullscreen API y atributos fallback |
| **Salida por tecla Escape** | `RAIA-BS-E2E-022` | Chromium | Desktop, Mobile | Simulación de pulsación de teclado |
| **Limpieza de Estados** | `RAIA-BS-E2E-023` | Chromium, Firefox, WebKit | Desktop, Mobile | Estado del store React / Zustand |
| **Robustez ante Errores** | `RAIA-BS-E2E-024` a `025` | Chromium, Firefox, WebKit | Desktop, Mobile | Listeners en el ciclo de navegación |
