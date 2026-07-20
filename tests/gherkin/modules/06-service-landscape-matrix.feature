# language: es

@raia @modulo @service_landscape @matrix
Característica: Service Landscape — Matrix (RAIA-MOD-006)
  Como analista de arquitectura o planificador del SAR
  Quiero cruzar dimensiones del paisaje de servicios en una matriz interactiva
  Para evaluar concentraciones, coberturas y modularidad operacional

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/service-landscape/matrix"

  @smoke @as_is @RAIA_SLMX_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Matrix View"
      Y se muestra su código de módulo "RAIA-MOD-006"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_SLMX_002 @filter
  Regla: Selección de dimensiones y recálculo de celdas

    Esquema del escenario: Configurar dimensiones de filas y columnas
      Cuando el usuario selecciona la fila "<dim_fila>"
      Y selecciona la columna "<dim_columna>"
      Y selecciona la métrica "<metrica>"
      Entonces las celdas se recalculan automáticamente
      Y el gran total mostrado coincide con "<total_esperado>"

      Ejemplos:
        | dim_fila      | dim_columna   | metrica        | total_esperado |
        | area          | status        | service-domain | 273            |
        | domain        | maturity      | service-domain | 273            |
        | area          | participant   | service-domain | 412            |
        | status        | maturity      | service-domain | 273            |
        | domain        | status        | service-domain | 273            |
        | participant   | status        | service-domain | 412            |
        | area          | capability    | service-domain | 273            |
        | status        | capability    | service-domain | 273            |
        | maturity      | capability    | service-domain | 273            |
        | domain        | participant   | service-domain | 412            |

  @functional @as_is @RAIA_SLMX_003 @filter
  Regla: Interacción con celdas y drill-down

    Esquema del escenario: Selección de celda y consulta de detalles de intersección
      Dado que la matriz cruza "area" con "status"
      Cuando el usuario hace clic en la intersección "<fila_valor>" y "<columna_valor>"
      Entonces se abre el panel de drill-down enumerando los Service Domains asociados
      Y el conteo de elementos en la celda coincide con "<conteo>"

      Ejemplos:
        | fila_valor  | columna_valor | conteo |
        | RAIA-BA-008 | active        | 5      |
        | RAIA-BA-003 | validated     | 12     |
        | RAIA-BA-004 | proposed      | 4      |
        | RAIA-BA-005 | in-development| 8      |
        | RAIA-BA-001 | draft         | 2      |
        | RAIA-BA-002 | active        | 3      |
        | RAIA-BA-010 | validated     | 9      |
        | RAIA-BA-011 | proposed      | 1      |
        | RAIA-BA-006 | active        | 6      |
        | RAIA-BA-007 | validated     | 4      |

  @functional @as_is @RAIA_SLMX_004 @export
  Regla: Exportación de matrices canónicas

    Escenario: Exportación a archivo estructurado CSV
      Cuando el usuario hace clic en el botón "Exportar CSV"
      Entonces se inicia la descarga del archivo "service-domain-matrix.csv"
      Y el archivo contiene el encabezado oficial del baseline

    Escenario: Exportación a estructura JSON
      Cuando el usuario hace clic en el botón "Exportar JSON"
      Entonces se inicia la descarga del archivo "service-domain-matrix.json"
      Y el archivo contiene un array válido de intersecciones de datos

  @accessibility @as_is @RAIA_SLMX_005 @accessibility
  Regla: Accesibilidad en la matriz de datos

    Escenario: Alternar contraste visual en el heatmap de la matriz
      Cuando el usuario presiona el selector de alto contraste
      Entonces las celdas con degradados de color se reemplazan por bordes con patrones y tramas
      Y los números de celda se vuelven legibles con un ratio superior a 4.5:1

    Esquema del escenario: Navegación del grid matricial con teclado
      Cuando el usuario está en la celda de la matriz y presiona "<tecla>"
      Entonces el foco de selección del teclado se desplaza a "<celda_foco>"

      Ejemplos:
        | tecla  | celda_foco                 |
        | ArrowRight| Siguiente columna en la fila |
        | ArrowLeft | Columna previa en la fila   |
        | ArrowDown | Siguiente fila en la columna|
        | ArrowUp   | Fila previa en la columna   |
        | Enter     | Abrir panel de drill-down   |

  @security @target_contract @RAIA_SLMX_006 @security
  Regla: Sanitización de parámetros URL del estado de la matriz

    Esquema del escenario: Validar valores maliciosos en parámetros de dimensión
      Cuando el usuario carga la matriz con el parámetro de fila "<payload>"
      Entonces el sistema bloquea la carga errónea
      Y muestra la dimensión por defecto "area" en las filas

      Ejemplos:
        | payload                              |
        | row=__proto__                        |
        | row=constructor                      |
        | row=<script>                         |
        | row='; DROP TABLE matrices;--        |
        | row=${7*7}                           |
        | row=../../etc/passwd                 |
        | row=constructor.prototype            |

  @performance @target_contract @RAIA_SLMX_007 @performance
  Regla: Virtualización de celdas con alta densidad

    Escenario: Desempeño del grid al renderizar 10,000 intersecciones lógicas
      Dado que la matriz se configura para cruzar 100 participantes con 100 capacidades L2
      Cuando el usuario despliega la cuadrícula
      Entonces el renderizado inicial se ejecuta en menos de 300ms utilizando virtualización del DOM
      Y el scroll no produce lags ni renders duplicados

  @functional @target_contract @gap @RAIA_SLMX_008 @traceability
  Regla: Mapeo de celdas con reglas de negocio cruzadas de gobernanza

    Esquema del escenario: Validación de relaciones no permitidas en intersección
      Cuando la matriz cruza la fila "<fila>" con la columna "<columna>"
      Entonces se verifica que la intersección "<celda>" sea clasificada como "<estado_celda>"

      Ejemplos:
        | fila        | columna      | celda       | estado_celda |
        | RAIA-BA-001 | conceptual   | SD-001      | permitida    |
        | RAIA-BA-008 | adopted      | SD-150      | permitida    |
        | RAIA-BA-014 | conceptual   | SD-270      | permitida    |
        | RAIA-BA-002 | active       | SD-090      | permitida    |
        | RAIA-BA-011 | deprecated   | SD-200      | advertencia  |
