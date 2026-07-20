# language: es

@raia @modulo @service_landscape @value_chain
Característica: Service Landscape — Value Chain (RAIA-MOD-005)
  Como arquitecto de soluciones o líder de negocio del SAR
  Quiero navegar el mapa de la cadena de valor previsional de la industria
  Para comprender el mapa de capacidades operativas y sus Service Domains asociados

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/service-landscape/value-chain"

  @smoke @as_is @RAIA_SLVC_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Value Chain"
      Y se muestra su código de módulo "RAIA-MOD-005"
      Y no se presentan errores de consola

  @functional @as_is @RAIA_SLVC_002 @filter
  Regla: Filtrar la cadena de valor por Business Area y Business Domain

    Esquema del escenario: Aplicar filtros jerárquicos
      Cuando el usuario selecciona el filtro de área "<id_area>"
      Y selecciona el filtro de dominio "<id_dominio>"
      Entonces la interfaz despliega los Service Domains correspondientes
      Y el conteo de resultados en pantalla es "<conteo_esperado>"

      Ejemplos:
        | id_area     | id_dominio  | conteo_esperado |
        | RAIA-BA-008 | RAIA-BD-022 | 8               |
        | RAIA-BA-003 | RAIA-BD-009 | 15              |
        | RAIA-BA-004 | RAIA-BD-012 | 10              |
        | RAIA-BA-005 | RAIA-BD-015 | 12              |
        | RAIA-BA-001 | RAIA-BD-001 | 6               |
        | RAIA-BA-002 | RAIA-BD-004 | 4               |
        | RAIA-BA-010 | RAIA-BD-028 | 11              |
        | RAIA-BA-011 | RAIA-BD-030 | 5               |
        | RAIA-BA-006 | RAIA-BD-018 | 9               |
        | RAIA-BA-007 | RAIA-BD-020 | 7               |

  @functional @as_is @RAIA_SLVC_003 @navigation
  Regla: Sincronización del estado del filtro con parámetros de la URL

    Esquema del escenario: Navegación por deep link con filtros preestablecidos
      Cuando el usuario abre directamente la URL "/service-landscape/value-chain?area=<id_area>&status=<estado>"
      Entonces la interfaz inicializa los selectores con los valores indicados
      Y los Service Domains visibles corresponden al estado "<estado>"

      Ejemplos:
        | id_area     | estado      |
        | RAIA-BA-008 | validated   |
        | RAIA-BA-003 | active      |
        | RAIA-BA-004 | proposed    |
        | RAIA-BA-005 | in-development |
        | RAIA-BA-001 | draft       |
        | RAIA-BA-002 | active      |
        | RAIA-BA-010 | validated   |
        | RAIA-BA-011 | proposed    |
        | RAIA-BA-006 | active      |
        | RAIA-BA-007 | validated   |

  @functional @as_is @RAIA_SLVC_004 @navigation
  Regla: Detail Sidebar con información contextualizada

    Escenario: Mostrar la ficha resumen en el panel lateral al seleccionar un Service Domain
      Dado que el usuario hace clic en el Service Domain "RAIA-SD-001"
      Cuando se expande la barra lateral derecha
      Entonces se muestra el título "Resolución de Identidad"
      Y se visualizan las pestañas "Resumen", "Gobierno", "Regulación" y "Relaciones"
      Y se muestra el enlace directo "Ver capacidades realizadas"

    Escenario: Navegación de retorno al cerrar la Detail Sidebar
      Dado que el panel lateral de detalles está abierto con la selección "RAIA-SD-001"
      Cuando el usuario hace clic en el botón de cerrar
      Entonces la URL remueve el parámetro "selected"
      Y la barra lateral derecha se oculta
      Y el foco regresa al grid principal de la cadena de valor

  @accessibility @as_is @RAIA_SLVC_005 @accessibility
  Regla: Accesibilidad en la navegación del explorador de la cadena de valor

    Escenario: Soporte para zoom elevado del navegador
      Cuando el usuario incrementa el zoom del navegador al 200%
      Entonces la cuadrícula de la cadena de valor se reorganiza en columnas responsivas sin solapar textos
      Y no se genera scroll horizontal en el panel de detalle lateral

    Esquema del escenario: Navegación de pestañas del panel lateral por teclado
      Cuando el panel lateral está enfocado y se presiona "<tecla>"
      Entonces la pestaña activa cambia a "<pestaña_esperada>"

      Ejemplos:
        | tecla  | pestaña_esperada |
        | Tab    | Gobierno         |
        | Tab    | Regulación       |
        | Tab    | Relaciones       |
        | Escape | Cerrar panel     |

  @security @target_contract @RAIA_SLVC_006 @security
  Regla: Sanitización de parámetros URL maliciosos

    Esquema del escenario: Evitar inyección en parámetros de consulta de filtros
      Cuando el usuario altera la URL agregando el parámetro malicioso "<payload>"
      Entonces la aplicación filtra la entrada insegura y renderiza la vista básica sin errores
      Y se ignora el parámetro inválido

      Ejemplos:
        | payload                              |
        | selected=javascript:alert(1)         |
        | area=<svg/onload=alert(1)>           |
        | domain='; DROP TABLE domains;--      |
        | status=${7*7}                        |
        | maturity=__proto__                   |
        | selected=constructor                 |

  @performance @target_contract @RAIA_SLVC_007 @performance
  Regla: Desempeño y virtualización del árbol jerárquico

    Escenario: Tiempo de renderizado con el catálogo completo de dominios
      Dado que existen 273 Service Domains registrados en el baseline canónico
      Cuando el usuario remueve todos los filtros de búsqueda
      Entonces la carga del explorador se completa en menos de 200ms
      Y el scroll vertical de la página es fluido y sin retrasos

  @functional @target_contract @gap @RAIA_SLVC_008 @traceability
  Regla: Validación de mappings de capacidades realizadas

    Esquema del escenario: Mapeo de Service Domains a Business Capabilities L2
      Cuando el usuario filtra por la capacidad "<id_cap>"
      Entonces se muestra el Service Domain realizador "<id_sd>" en la cadena de valor

      Ejemplos:
        | id_cap            | id_sd       |
        | RAIA-CAP-001-0001 | RAIA-SD-001 |
        | RAIA-CAP-002-0003 | RAIA-SD-030 |
        | RAIA-CAP-003-0001 | RAIA-SD-045 |
        | RAIA-CAP-004-0002 | RAIA-SD-090 |
        | RAIA-CAP-005-0002 | RAIA-SD-110 |
        | RAIA-CAP-006-0002 | RAIA-SD-150 |
        | RAIA-CAP-007-0002 | RAIA-SD-200 |
        | RAIA-CAP-008-0001 | RAIA-SD-250 |
