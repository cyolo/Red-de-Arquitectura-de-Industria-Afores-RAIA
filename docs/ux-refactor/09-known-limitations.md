# 09 - Limitaciones Conocidas (Known Limitations)

1. **Simulación de Pantalla Completa**:
   - Para navegadores móviles, el soporte nativo de la API de Fullscreen es limitado. Se mantiene un fallback de overlay fijo `data-fullscreen-mode="fallback"` con un alto de 100% de pantalla para asegurar la interacción del diagrama de secuencia en iOS y Android.
2. **Impresión de Gráficos de Relación**:
   - En navegadores antiguos, los gráficos de dependencias interactivos basados en D3/Canvas pueden requerir marcar la opción "Imprimir gráficos de fondo" en la configuración de la impresora de Chrome/Edge para que los bordes y colores de los nodos aparezcan impresos en la ficha.
