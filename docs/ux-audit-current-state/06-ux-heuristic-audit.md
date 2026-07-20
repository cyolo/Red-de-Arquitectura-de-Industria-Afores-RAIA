# Auditoría Heurística de Experiencia de Usuario (UX)

Este documento presenta una evaluación detallada de la experiencia de usuario de RAIA según las heurísticas tradicionales de diseño de interacción y dimensiones clave de usabilidad.

## ⚖️ Evaluación de Heurísticas de Jakob Nielsen

### 1. Visibilidad del Estado del Sistema (Calificación: 4/5)
* **Fortaleza**: El paso activo en el simulador de escenarios se ilumina claramente tanto en el selector numérico como en las líneas de vida del diagrama de secuencia.
* **Debilidad**: En el mapa general de la cadena de valor (`/service-landscape/value-chain`), al seleccionar un nodo, el panel lateral aparece de forma abrupta sin transiciones suaves de entrada.

### 2. Correspondencia entre el Sistema y el Mundo Real (Calificación: 5/5)
* **Fortaleza**: Toda la nomenclatura de negocio mapea exactamente los términos del Sistema de Ahorro para el Retiro (SAR) en México (e.g., SIEFORE Generacional, Cuenta Individual, AFORE, Traspaso, Recaudación), facilitando la adopción por arquitectos del sector.

### 3. Control y Libertad del Usuario (Calificación: 2/5)
* **Debilidad**: El usuario se siente atrapado por el scroll. En `/service-landscape/value-chain`, no hay una forma sencilla de escapar del zoom del ratón para hacer scroll vertical en la página.
* **Debilidad**: Al cambiar de página para ver los detalles de un dominio de servicio y luego volver atrás, el mapa de la cadena de valor se reinicia por completo, obligando al usuario a volver a buscar y hacer zoom manualmente.

### 4. Consistencia y Estándares (Calificación: 4/5)
* **Fortaleza**: Los colores institucionales y la tipografía (Inter) son consistentes en todas las vistas. Los códigos de color para clasificar los módulos (Disponible, Planeado, En Desarrollo) se respetan globalmente.

### 5. Reconocimiento antes que Memoria (Calificación: 2/5)
* **Debilidad**: En `/business-scenarios`, debido al scroll vertical masivo (7.20 viewports), el usuario debe "recordar" qué participantes están interactuando en la parte superior del diagrama de secuencia mientras lee las especificaciones técnicas detalladas y los campos de datos en la parte inferior de la pantalla.

### 6. Flexibilidad y Eficiencia de Uso (Calificación: 2/5)
* **Debilidad**: La aplicación obliga a los usuarios expertos a realizar múltiples recorridos de scroll repetitivos. No existen vistas compactas tipo "matriz" o "lista plana" de fácil consulta para ingenieros que necesitan ver los esquemas técnicos rápidamente.

---

## 📈 Calificación de Dimensiones UX (Escala 1 a 5)

* **Utilidad (4/5)**: La información de los Service Domains y flujos es de altísimo valor para los arquitectos del SAR.
* **Encontrabilidad (3/5)**: El buscador global ayuda, pero el menú secundario está muy escondido.
* **Comprensión (4/5)**: Los diagramas de secuencia representan las interacciones de forma clara una vez que se logran ver completos.
* **Eficiencia (2/5)**: Penalizada por el scroll excesivo y recargas de estado de navegación.
* **Fluidez (2/5)**: Se rompe constantemente el flujo al perder el contexto visual de los diagramas al hacer scroll.
* **Densidad de Información (2.5/5)**: Muy baja densidad en escritorio. Tarjetas gigantescas con poco contenido útil y demasiado espacio en blanco.
