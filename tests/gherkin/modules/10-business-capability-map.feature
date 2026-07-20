# language: es

@raia @modulo @capability_map
Característica: Business Capability Map (RAIA-MOD-010)
  Como director de arquitectura o líder estratégico del SAR
  Quiero consultar el mapa de capacidades de negocio y sus coberturas operativas
  Para evaluar la madurez, criticidad y gaps tecnológicos de la industria

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/capability-map"

  @smoke @as_is @RAIA_BCM_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Business Capability Map"
      Y se muestra su código de módulo "RAIA-MOD-010"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_BCM_002 @filter
  Regla: Navegación de la taxonomía jerárquica L1 y L2

    Esquema del escenario: Visualización de dominios L1 y capacidades L2 asociadas
      Cuando el usuario abre el mapa de capacidades
      Entonces se muestra el dominio L1 "<id_dominio>" con el título "<nombre_dominio>"
      Y se verifica la presencia de la capacidad L2 "<id_cap>" con el nombre "<nombre_cap>"

      Ejemplos:
        | id_dominio    | nombre_dominio                | id_cap            | nombre_cap                                  |
        | RAIA-CAPD-001 | Gobierno y Dirección del SAR  | RAIA-CAP-001-0001 | Definición de Política Sectorial           |
        | RAIA-CAPD-001 | Gobierno y Dirección del SAR  | RAIA-CAP-001-0002 | Planeación Estratégica del SAR              |
        | RAIA-CAPD-002 | Identidad y Partes            | RAIA-CAP-002-0001 | Administración de Identidad del Trabajador |
        | RAIA-CAPD-002 | Identidad y Partes            | RAIA-CAP-002-0003 | Resolución de Identidad                     |
        | RAIA-CAPD-003 | Afiliación y Movilidad        | RAIA-CAP-003-0001 | Registro de Cuenta                          |
        | RAIA-CAPD-003 | Afiliación y Movilidad        | RAIA-CAP-003-0003 | Traspaso de Cuenta                          |
        | RAIA-CAPD-004 | Administración de Cuenta      | RAIA-CAP-004-0002 | Administración de Subcuentas                |
        | RAIA-CAPD-004 | Administración de Cuenta      | RAIA-CAP-004-0003 | Administración de Saldos                    |
        | RAIA-CAPD-005 | Recaudación e Individualización| RAIA-CAP-005-0002 | Individualización de Recursos               |
        | RAIA-CAPD-006 | Inversión y SIEFORE           | RAIA-CAP-006-0002 | Valuación de Portafolio                     |

  @functional @as_is @RAIA_BCM_003 @filter
  Regla: Overlays visuales de Madurez, Criticidad y Tipo

    Esquema del escenario: Aplicar mapas de calor sobre el grid de capacidades
      Cuando el usuario activa el overlay de "<tipo_overlay>"
      Entonces las celdas cambian de color según su valor estratégico
      Y la celda "<id_cap>" muestra el valor del indicador "<valor_esperado>"

      Ejemplos:
        | tipo_overlay   | id_cap            | valor_esperado  |
        | criticality    | RAIA-CAP-001-0001 | high            |
        | criticality    | RAIA-CAP-001-0002 | medium          |
        | criticality    | RAIA-CAP-002-0001 | systemic        |
        | capabilityType | RAIA-CAP-001-0001 | regulatory-governance |
        | capabilityType | RAIA-CAP-002-0001 | industry-core   |
        | capabilityType | RAIA-CAP-009-0001 | industry-shared |
        | maturity       | RAIA-CAP-001-0001 | defined (L3)    |
        | health         | RAIA-CAP-001-0001 | healthy         |
        | investmentPriority | RAIA-CAP-001-0001 | improve     |
        | criticality    | RAIA-CAP-002-0003 | systemic        |

  @functional @target_contract @gap @RAIA_BCM_004 @error_handling
  Regla: Control de ciclos y duplicidad jerárquica

    Escenario: Alerta al detectar una capacidad con referencia circular padre-hijo
      Dado que la capacidad "RAIA-CAP-001-0001" se configura como hija de "RAIA-CAP-001-0002"
      Y que "RAIA-CAP-001-0002" se configura como hija de "RAIA-CAP-001-0001"
      Cuando el validador estático compila la taxonomía de capacidades
      Entonces se emite un error de ciclo jerárquico "RAIA-BCM-CYCLE-001"
      Y la compilación del baseline se cancela

    Escenario: Detalle lateral de capacidad y mappings realizadores
      Dado que el usuario hace clic en el tile "Definición de Política Sectorial"
      Cuando se abre la Detail Sidebar de la capacidad
      Entonces se muestra el Service Domain realizador "RAIA-SD-001"
      Y se muestra el estado de cobertura "full"

  @accessibility @as_is @RAIA_BCM_005 @accessibility
  Regla: Accesibilidad del Grid de capacidades

    Escenario: Cambio a vista accesible de árbol jerárquico (L0 a L3)
      Cuando el usuario hace clic en el botón de vista "Jerarquía"
      Entonces la interfaz despliega los dominios y subcapacidades en un árbol jerárquico accesible por teclado
      Y el visor del grid se oculta

    Esquema del escenario: Atajos de teclado en el grid de capacidades
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces se ejecuta la acción de "<accion>"

      Ejemplos:
        | tecla  | accion                                     |
        | Tab    | Avanzar al siguiente tile del grid         |
        | Escape | Ocultar panel lateral de detalles de tile  |
        | Enter  | Seleccionar el tile y abrir detalles       |
        | Space  | Activar o desactivar el overlay seleccionado|
        | ArrowRight| Navegar al tile adyacente derecho       |

  @security @target_contract @RAIA_BCM_006 @security
  Regla: Seguridad en parámetros URL del visor de capacidades

    Esquema del escenario: Sanitizar parámetros de consulta de filtros de capacidades
      Cuando el usuario carga la URL "/capability-map" con el parámetro "<payload>"
      Entonces la aplicación sanitiza la entrada y carga la vista por defecto
      Y se ignora el parámetro inválido

      Ejemplos:
        | payload                              |
        | tab=__proto__                        |
        | tab=constructor                      |
        | tab=<script>alert(1)</script>         |
        | tab='; DROP TABLE capabilities;--    |
        | tab=${7*7}                           |
        | tab=../../etc/passwd                 |

  @performance @target_contract @RAIA_BCM_007 @performance
  Regla: Rendimiento en el renderizado del mapa completo

    Escenario: Carga fluida del grid con alta densidad de tiles
      Dado que la base de datos contiene 14 dominios y 31 capacidades
      Cuando el usuario navega a la pestaña de "Mapa"
      Entonces el tiempo de renderizado de la cuadrícula es de menos de 150ms
      Y no se producen renders bloqueantes

  @functional @target_contract @gap @RAIA_BCM_008 @traceability
  Regla: Análisis de impacto cruzado de capacidades

    Esquema del escenario: Impacto de cambios en capacidades sobre Service Domains
      Dado que el usuario simula un cambio de criticidad en la capacidad "<id_cap>"
      Cuando consulta el simulador de impacto
      Entonces el sistema reporta que afectará a "<conteo_sd>" Service Domains realizadores

      Ejemplos:
        | id_cap            | conteo_sd |
        | RAIA-CAP-001-0001 | 1         |
        | RAIA-CAP-002-0003 | 1         |
        | RAIA-CAP-003-0001 | 0         |
        | RAIA-CAP-004-0002 | 0         |
        | RAIA-CAP-005-0002 | 0         |
