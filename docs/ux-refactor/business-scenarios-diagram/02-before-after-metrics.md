# 02 - Tabla Comparativa y Métricas (Before & After Metrics)

Este documento registra las dimensiones y posiciones del diagrama de secuencia en múltiples escenarios de negocio antes y después de aplicar la corrección técnica.

## Mediciones en Resolución de Escritorio (1440 × 900)

| Escenario | Espacio Superior Antes (px) | Espacio Superior Después (px) | Escala en Fit | Resultado |
| :--- | :---: | :---: | :---: | :--- |
| **Registro y Traspaso de Cuenta Individual** | ~240px | **24px** | 0.44 | Diagrama alineado arriba, centrado horizontalmente, sin recortes. |
| **Recaudación de Aportaciones e Inversión** | ~240px | **24px** | 0.51 | Correcto. Paneo y zoom fluidos. |
| **Localización de cuenta individual** | ~280px | **24px** | 0.62 | Alineación vertical limpia de los participantes con padding exacto. |
| **Asignación automática de cuentas** | ~240px | **24px** | 0.46 | Sin espacio vacío excesivo. |
| **Reasignación por desempeño** | ~260px | **24px** | 0.49 | Correcto. |
| **Unificación de cuentas duplicadas** | ~230px | **24px** | 0.42 | Alineación y legibilidad óptimas. |
| **Separación de cuentas IMSS/ISSSTE** | ~240px | **24px** | 0.48 | Correcto. |

## Resumen de Impacto en Visualización

* **Reducción del espacio muerto superior**: De una media de **250px** a un padding fijo y controlado de **24px** (reducción del **90.4%** de espacio vacío improductivo).
* **Densidad de información inicial**: Al alinear los participantes arriba, se reduce la necesidad de desplazarse verticalmente y se aumenta la visibilidad del flujo de mensajes en pantallas de baja altura.
* **Escalabilidad**: El escalado mínimo ampliado a `0.05` permite que escenarios de gran tamaño se visualicen completos de forma inmediata en modo Fit.
