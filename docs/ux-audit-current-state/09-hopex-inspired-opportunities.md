# Oportunidades de Diseño Inspiradas en HOPEX

Este documento analiza cómo incorporar de manera selectiva patrones de interfaces empresariales complejas (como MEGA HOPEX) en RAIA, con el fin de resolver el scroll excesivo y mejorar la densidad de información sin modificar la lógica de negocio.

## 📐 Patrones Recomendados para RAIA

### 1. Panel de Propiedades Lateral (Properties Panel) / Cajón Contextual (Drawer)
* **Problema en RAIA**: Actualmente, para consultar la ficha técnica completa de un Service Domain, el usuario debe navegar fuera de la página (`/service-domains/[slug]`), rompiendo el flujo.
* **Patrón HOPEX**: En lugar de recargar la página, se mantiene el mapa principal en pantalla y se abre un panel lateral derecho deslizante de ancho controlado (e.g., 400px-500px).
* **Solución**: Este panel contendrá pestañas (tabs) que distribuyen la información técnica (Metadatos, APIs Semánticas, Trazas Regulatorias, Dependencias).
* **Impacto**: Reduce la necesidad de navegar de ida y vuelta y disminuye el scroll vertical a 0 en la página principal.

### 2. Layout Dividido Fijo (Split Layout / Master-Detail) en Escenarios
* **Problema en RAIA**: En `/business-scenarios`, el diagrama de secuencia y los pasos estructurados están apilados verticalmente, forzando un scroll de 7.20 viewports.
* **Patrón HOPEX**: Un panel maestro de exploración (izquierda) y un panel de visualización y detalle dividido (derecha).
* **Solución**: Dividir la pantalla en dos secciones principales de altura fija (`h-[calc(100vh-14px)]`):
  * **Lado Izquierdo**: El Diagrama de Secuencia fijo ocupando el 50% del ancho del viewport.
  * **Lado Derecho**: La narrativa del paso y los metadatos técnicos en un contenedor scrollable independiente.
* **Impacto**: El usuario puede ver qué nodo y flujo se está ejecutando en el diagrama a la izquierda mientras lee los detalles técnicos a la derecha, manteniendo un control visual del contexto al 100%.

### 3. Pestañas Contextuales (Tabs) en Fichas Técnicas
* **Problema en RAIA**: Las fichas de áreas, dominios y servicios listan todo secuencialmente hacia abajo (títulos, descripciones, tablas de APIs, regulaciones, etc.).
* **Patrón HOPEX**: Agrupación por categorías de metadatos.
* **Solución**: Usar tabs en el cuerpo de la ficha técnica: `[General]`, `[APIs Semánticas]`, `[Regulación (SAR)]`, `[Relaciones de Dependencia]`.
* **Impacto**: Comprime una página de más de 2000px a una vista compacta de menos de 800px de altura, eliminando el scroll vertical casi por completo.

### 4. Barra de Filtros Persistente y Compacta
* **Problema en RAIA**: Los filtros en el landscape y escenarios ocupan bastante espacio vertical y se pierden de vista al hacer scroll.
* **Patrón HOPEX**: Toolbar superior colapsable y compacta.
* **Solución**: Implementar una barra de herramientas de filtros en una sola línea de altura fija, sticky debajo del Header de RAIA.
