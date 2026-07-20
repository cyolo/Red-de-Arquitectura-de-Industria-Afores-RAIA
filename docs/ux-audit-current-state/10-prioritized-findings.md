# Hallazgos Priorizados y Matriz de Acciones

Este documento clasifica todos los problemas detectados en la auditoría visual y de UX de RAIA, ordenados por severidad, impacto y esfuerzo de implementación para guiar una refactorización segura.

## 📊 Matriz de Hallazgos y Priorización

| ID | Hallazgo | Severidad | Frecuencia | Impacto | Esfuerzo | Riesgo Funcional | Prioridad |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AUD-001** | Apilado vertical excesivo en Escenarios de Negocio (`/business-scenarios`). | **Crítico** | Alta | Alto (pérdida de contexto visual) | Medio | Muy Bajo | **Crítica** |
| **AUD-002** | Inaccesibilidad por teclado (`tabindex`) de los nodos y relaciones en React Flow. | **Alto** | Alta | Alto (bloqueo para accesibilidad) | Medio | Muy Bajo | **Alta** |
| **AUD-003** | Conflicto de scroll/zoom de ratón atrapado sobre el canvas de React Flow. | **Alto** | Alta | Alto (fricción en navegación de página) | Medio | Muy Bajo | **Alta** |
| **AUD-004** | Pérdida de zoom, filtros y estado seleccionado al usar retroceso del navegador. | **Alto** | Alta | Alto (esfuerzo repetitivo del usuario) | Medio | Bajo | **Alta** |
| **AUD-005** | Relación de contraste insuficiente en badges de estado y textos pequeños. | **Medio** | Alta | Medio (dificultad para baja visión) | Bajo | Muy Bajo | **Media** |
| **AUD-006** | Menú secundario colapsado e inaccesible en pantallas medianas / laptop. | **Medio** | Media | Medio (oculta herramientas del repositorio) | Bajo | Muy Bajo | **Media** |
| **AUD-007** | Apilado masivo en la página principal (`/`) que alarga innecesoramente el scroll. | **Bajo** | Alta | Bajo (percepción de desorden) | Bajo | Muy Bajo | **Baja** |

---

## 🛠️ Detalle de Hallazgos Críticos y Altos

### AUD-001: Apilado vertical en Escenarios
* **Impacto**: Con un scrollRatio de `7.20`, leer la descripción de un paso intermedio desplaza el diagrama fuera del viewport. El usuario no puede relacionar la descripción textual con la flecha o nodo del flujo.
* **Solución**: Refactorizar a un split pane horizontal o split layout fijo (`h-[calc(100vh-h-header)]`). El diagrama de secuencia a la izquierda permanece estático, mientras que el panel derecho de descripción y pasos hace scroll internamente.

### AUD-002: Inaccesibilidad por teclado en React Flow
* **Impacto**: Los nodos SVG no reciben foco en el DOM. Un usuario de lector de pantallas o sin ratón no puede navegar ni explorar las capacidades o los service domains.
* **Solución**: Configurar los nodos personalizados de React Flow para inyectar `tabIndex={0}`, y mapear controles de teclado básicos.

### AUD-003: Conflicto de scroll/zoom en el Canvas
* **Impacto**: El usuario intenta hacer scroll vertical para ver el Footer de la página y la página se detiene mientras el canvas de React Flow hace zoom out hasta el infinito.
* **Solución**: Deshabilitar el zoom con la rueda del ratón por defecto (`zoomOnScroll={false}`) en React Flow. Habilitarlo únicamente al presionar la tecla `Ctrl` o mediante un botón de bloqueo explícito en el toolbar.
