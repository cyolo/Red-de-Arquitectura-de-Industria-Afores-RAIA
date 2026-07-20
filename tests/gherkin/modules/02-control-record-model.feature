# language: es

@raia @modulo @control_record_model
Característica: Control Record Model (RAIA-MOD-002)
  Como arquitecto de procesos o validador del SAR
  Quiero consultar el catálogo de registros principales de control y sus máquinas de estado
  Para asegurar la consistencia transaccional y el cumplimiento en el ciclo de vida del trámite

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/control-record-model"

  @smoke @as_is @RAIA_CRM_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Control Record Model"
      Y se muestra su código de módulo "RAIA-MOD-002"
      Y se muestra su versión "0.1.0"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_CRM_002 @data_integrity
  Regla: Ciclo de vida y estados del Control Record

    Esquema del escenario: Visualización de estados y transiciones válidas
      Cuando el usuario selecciona el Control Record "<id_control>"
      Entonces se muestra el estado inicial "<estado_inicial>"
      Y se muestra la transición "<transicion>" hacia el estado final "<estado_final>"

      Ejemplos:
        | id_control    | estado_inicial | transicion        | estado_final    |
        | RAIA-CR-001   | registrado     | autenticar        | autenticado     |
        | RAIA-CR-001   | autenticado    | enviar            | enviado         |
        | RAIA-CR-001   | enviado        | validar           | validado        |
        | RAIA-CR-001   | validado       | conciliar         | conciliado      |
        | RAIA-CR-002   | solicitado     | evaluar           | evaluado        |
        | RAIA-CR-002   | evaluado       | dictaminar        | dictaminado     |
        | RAIA-CR-002   | dictaminado    | liquidar          | liquidado       |
        | RAIA-CR-002   | liquidado      | cerrar            | cerrado         |
        | RAIA-CR-003   | pre-solicitud  | capturar          | capturado       |
        | RAIA-CR-003   | capturado      | firmar            | firmado         |

  @functional @as_is @RAIA_CRM_003 @data_integrity
  Regla: Service Domain responsable del Control Record

    Esquema del escenario: Asociación del Service Domain responsable
      Cuando el usuario consulta el Control Record "<id_control>"
      Entonces se indica que el Service Domain responsable es "<id_sd>"

      Ejemplos:
        | id_control  | id_sd       |
        | RAIA-CR-001 | RAIA-SD-001 |
        | RAIA-CR-002 | RAIA-SD-030 |
        | RAIA-CR-003 | RAIA-SD-045 |
        | RAIA-CR-004 | RAIA-SD-090 |
        | RAIA-CR-005 | RAIA-SD-110 |
        | RAIA-CR-006 | RAIA-SD-150 |
        | RAIA-CR-007 | RAIA-SD-200 |
        | RAIA-CR-008 | RAIA-SD-250 |
        | RAIA-CR-009 | RAIA-SD-260 |
        | RAIA-CR-010 | RAIA-SD-270 |

  @functional @target_contract @gap @RAIA_CRM_004 @error_handling
  Regla: Identificación de callejones sin salida y estados huérfanos

    Escenario: Alerta al detectar un estado sin transiciones salientes que no es terminal
      Dado que existe un Control Record simulado con el estado "pendiente-firma"
      Y que "pendiente-firma" no está marcado como estado terminal
      Y que no tiene transiciones salientes configuradas
      Cuando el validador analiza el mapa de estados del Control Record
      Entonces se emite una alerta de tipo dead-end "RAIA-CRM-DEAD-001"

    Escenario: Alerta al detectar un estado inalcanzable desde el estado inicial
      Dado que existe el estado "archivado-historico" inalcanzable en el Control Record "RAIA-CR-001"
      Cuando el validador estático de diagramas de estado realiza el análisis de conectividad
      Entonces se reporta que el estado "archivado-historico" es inalcanzable

  @functional @as_is @RAIA_CRM_005 @visual
  Regla: Simulador interactivo de transiciones de estado

    Escenario: Simular una transición exitosa
      Dado que el usuario tiene seleccionado el Control Record "RAIA-CR-001"
      Y que el estado actual en la simulación es "registrado"
      Cuando el usuario hace clic en el trigger "autenticar"
      Entonces el estado actual de la simulación cambia a "autenticado"
      Y el diagrama resalta visualmente el nodo "autenticado"

    Escenario: Reiniciar simulación de Control Record
      Dado que la simulación se encuentra en el estado avanzado "conciliado"
      Cuando el usuario hace clic en el botón de reinicio
      Entonces la simulación regresa al estado inicial "registrado"

  @accessibility @as_is @RAIA_CRM_006 @keyboard
  Regla: Accesibilidad en diagramas de máquina de estados

    Esquema del escenario: Navegación de estados por teclado
      Cuando el usuario presiona la tecla "<tecla>" en el visor
      Entonces el foco de selección del lector de pantalla cambia a "<elemento_foco>"

      Ejemplos:
        | tecla  | elemento_foco                 |
        | ArrowRight| Siguiente estado en el ciclo |
        | ArrowLeft | Estado previo en el ciclo    |
        | Escape    | Cerrar panel de simulación   |
        | Enter     | Disparar la transición activa|
        | Space     | Pausar la simulación animada |

  @security @target_contract @RAIA_CRM_007 @security
  Regla: Seguridad en parámetros URL del simulador

    Esquema del escenario: Sanitización de parámetros URL en máquina de estados
      Cuando el usuario carga la URL "/control-record-model" con el parámetro "<parametro>"
      Entonces la aplicación omite el parámetro malicioso
      Y carga el Control Record por defecto sin lanzar excepciones

      Ejemplos:
        | parametro                         |
        | state=__proto__                   |
        | state=constructor                 |
        | state=<script>                    |
        | state=drop%20table                |
        | state=../../etc/passwd            |
        | state=%20UNION%20SELECT           |

  @performance @target_contract @RAIA_CRM_008 @performance
  Regla: Virtualización de diagramas complejos en fullscreen

    Escenario: Rendimiento de renderizado con alta densidad de estados
      Dado que un Control Record posee más de 50 estados y 120 transiciones
      Cuando el usuario activa el modo fullscreen
      Entonces el diagrama se ajusta al viewport en menos de 250ms
      Y se puede interactuar con el zoom de forma fluida a 60 fps

  @functional @target_contract @gap @RAIA_CRM_009 @traceability
  Regla: Invariantes y guardias de transición de estado

    Esquema del escenario: Validación de invariantes de negocio en Control Records
      Dado que el estado de la máquina es "<estado_actual>"
      Cuando se intenta disparar la transición "<transicion>" sin cumplir la guardia "<guardia>"
      Entonces la transición es rechazada por el motor
      Y la máquina se mantiene en el estado "<estado_actual>"

      Ejemplos:
        | estado_actual | transicion | guardia              |
        | registrado    | enviar     | biometria-validada   |
        | solicitado    | dictaminar | expediente-completo  |
        | dictaminado   | liquidar   | recursos-conciliados |
        | liquidado     | cerrar     | folio-confirmado     |
