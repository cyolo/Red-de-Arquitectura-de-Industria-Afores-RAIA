# language: es

@raia @modulo @dashboard
Característica: Architecture Dashboard (RAIA-MOD-014)
  Como administrador o auditor del repositorio de arquitectura RAIA
  Quiero consultar las métricas generales de cobertura, completitud y madurez
  Para monitorear el avance del modelado de referencia y la deuda arquitectónica de la industria

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/dashboard"

  @smoke @as_is @RAIA_DASH_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Architecture Dashboard"
      Y se muestra su código de módulo "RAIA-MOD-014"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_DASH_002 @data_integrity
  Regla: Métricas e indicadores claves de cobertura y madurez (KPIs)

    Esquema del escenario: Consulta de indicadores estadísticos en tarjetas de resumen
      Cuando el usuario visualiza la sección de KPIs
      Entonces la tarjeta con la métrica "<nombre_metrica>" muestra el valor consolidado "<valor_esperado>"

      Ejemplos:
        | nombre_metrica             | valor_esperado |
        | Service Domains Totales    | 273            |
        | Objetos de Negocio Canónicos| 15             |
        | Gaps Críticos Logueados    | 1              |
        | Mappings Regulatorios      | 18             |
        | Cobertura de Capacidades   | 100%           |
        | Cobertura Regulatoria      | 85%            |
        | Madurez Conceptual Promedio| defined        |
        | Releases Publicadas        | 1              |

  @functional @as_is @RAIA_DASH_003 @filter
  Regla: Filtrar métricas globales por Business Area

    Esquema del escenario: Reajustar conteos globales de KPIs al filtrar área
      Cuando el usuario filtra el dashboard por el área "<id_area>"
      Entonces la tarjeta de Service Domains se reajusta al conteo de "<conteo_esperado>"

      Ejemplos:
        | id_area     | conteo_esperado |
        | RAIA-BA-008 | 25              |
        | RAIA-BA-003 | 45              |
        | RAIA-BA-004 | 30              |
        | RAIA-BA-005 | 50              |
        | RAIA-BA-001 | 18              |
        | RAIA-BA-002 | 12              |
        | RAIA-BA-010 | 38              |
        | RAIA-BA-011 | 15              |
        | RAIA-BA-006 | 22              |
        | RAIA-BA-007 | 18              |

  @functional @target_contract @gap @RAIA_DASH_004 @error_handling
  Regla: Control de inconsistencias en el cálculo de fórmulas e indicadores

    Escenario: Alerta por fórmula con denominador en cero
      Dado que no existen Service Domains cargados en la base de datos local
      Cuando el motor del dashboard calcula la tasa de cobertura regulatoria
      Entonces el sistema controla la división entre cero de manera interna
      Y muestra un indicador de cobertura del 0% sin lanzar excepciones JavaScript

    Escenario: Mostrar fecha del baseline y versión de release activa
      Cuando el usuario abre la sección de información general del baseline
      Entonces se muestra la fecha del baseline "2026-07-20"
      Y se indica que la versión de release activa es la "0.1.0"

  @accessibility @as_is @RAIA_DASH_005 @accessibility
  Regla: Accesibilidad en gráficos y resúmenes analíticos del Dashboard

    Escenario: Alternar contraste visual en gráficos de barras de madurez
      Cuando el usuario activa el modo de contraste de color
      Entonces las barras de los gráficos de madurez aplican tramas y líneas punteadas diferenciadas
      Y los textos informativos en los tooltips cumplen con la relación de contraste de color 4.5:1

    Esquema del escenario: Navegación de KPIs mediante comandos de teclado
      Cuando el usuario enfoca la sección de KPIs y presiona "<tecla>"
      Entonces el sistema desplaza el foco a "<kpi_foco>"

      Ejemplos:
        | tecla  | kpi_foco                        |
        | Tab    | Service Domains Totales         |
        | Tab    | Objetos de Negocio Canónicos    |
        | Tab    | Gaps Críticos Logueados         |
        | Escape | Botón de selección de filtros   |

  @security @target_contract @RAIA_DASH_006 @security
  Regla: Seguridad en parámetros URL del Dashboard

    Esquema del escenario: Sanitizar parámetros de filtrado en URL del dashboard
      Cuando el usuario altera la URL agregando el payload "<payload>"
      Entonces el sistema filtra la entrada y carga el dashboard con los valores por defecto

      Ejemplos:
        | payload                              |
        | area=__proto__                       |
        | area=constructor                     |
        | area=<script>alert(1)</script>       |
        | area='; DROP TABLE kpis;--           |
        | area=${7*7}                          |
        | area=../../etc/passwd                |
