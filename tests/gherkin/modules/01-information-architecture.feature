# language: es

@raia @modulo @information_architecture
Característica: Information Architecture (RAIA-MOD-001)
  Como arquitecto o analista de información de la industria previsional
  Quiero consultar, navegar y validar el linaje e integridad del modelo de información
  Para asegurar consistencia en la terminología y la gobernanza de datos del SAR

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/information-architecture"

  @smoke @as_is @RAIA_IA_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Information Architecture"
      Y se muestra su código de módulo "RAIA-MOD-001"
      Y se muestra su versión "0.1.0"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_IA_002 @data_integrity
  Regla: Consulta de dominios y conceptos de información

    Esquema del escenario: Visualización consistente de dominios de información
      Cuando el usuario filtra por el dominio de información "<id_dominio>"
      Entonces se muestra la tarjeta del dominio con el título "<nombre_dominio>"
      Y el conteo de conceptos relacionados es de "<conteo_conceptos>"

      Ejemplos:
        | id_dominio    | nombre_dominio                | conteo_conceptos |
        | RAIA-ID-001   | Identidad del Trabajador      | 8                |
        | RAIA-ID-002   | Cuenta Individual             | 10               |
        | RAIA-ID-003   | Recaudación e Individualización| 7                |
        | RAIA-ID-004   | Inversión y Valuación          | 6                |
        | RAIA-ID-005   | Retiros y Prestaciones         | 9                |
        | RAIA-ID-006   | Pensiones y Desacumulación     | 11               |
        | RAIA-ID-007   | Riesgos y Cumplimiento         | 5                |
        | RAIA-ID-008   | Servicio al Cliente            | 4                |

  @functional @as_is @RAIA_IA_003 @data_integrity
  Regla: Trazabilidad e integración de objetos de negocio canónicos

    Esquema del escenario: Navegación cruzada y linaje de objetos canónicos
      Cuando el usuario selecciona el objeto de negocio "<id_objeto>"
      Entonces se visualizan sus atributos estructurados en la sección de linaje
      Y se muestra el rol del owner responsable "<owner_rol>"
      Y se muestra el steward "<steward_rol>"
      Y se muestra su clasificación de privacidad "<privacidad>"

      Ejemplos:
        | id_objeto    | owner_rol          | steward_rol        | privacidad  |
        | RAIA-BO-0001 | CONSAR Maintainers | Oficial de Datos  | publica     |
        | RAIA-BO-0002 | AFORE Maintainers  | Administrador SAR | confidencial|
        | RAIA-BO-0003 | Procesadora        | Supervisor Datos  | reservada   |
        | RAIA-BO-0004 | ISSSTE             | Custodio Datos     | confidencial|
        | RAIA-BO-0005 | IMSS               | Auditor de Datos   | confidencial|
        | RAIA-BO-0006 | INFONAVIT          | Validador Datos    | publica     |
        | RAIA-BO-0007 | BANXICO            | Analista Datos     | reservada   |
        | RAIA-BO-0008 | Secretaría Hacienda| Administrador Fin  | publica     |

  @functional @target_contract @gap @RAIA_IA_004 @data_integrity
  Regla: Detección y reporte de anomalías en el linaje

    Escenario: Alerta de objetos sin clasificación de privacidad asociada
      Dado que existe un objeto de negocio "RAIA-BO-9999" registrado sin metadatos de privacidad
      Cuando el usuario ejecuta la auditoría del linaje
      Entonces el sistema resalta el objeto "RAIA-BO-9999" con una advertencia de riesgo
      Y se registra la anomalía en el reporte de calidad de datos

    Escenario: Bloqueo de ciclo circular en linaje upstream y downstream
      Dado que existe una relación circular simulada entre "RAIA-BO-0001" y "RAIA-BO-0002"
      Cuando el motor del validador de linaje analiza el grafo de dependencias
      Entonces se reporta un error de ciclo "RAIA-CYC-ERR-001" indicando recursividad infinita
      Y la interfaz inhabilita el renderizado del grafo cíclico

  @accessibility @as_is @RAIA_IA_005 @keyboard
  Regla: Accesibilidad en la navegación del linaje

    Escenario: Alternar entre vista de grafo visual y tabla estructurada
      Cuando el usuario presiona el botón de accesibilidad para alternancia tabular
      Entonces el grafo del linaje se oculta visualmente
      Y se muestra una tabla accesible con atributos "id", "concepto" y "dependencias"
      Y el foco del teclado se desplaza al primer elemento de la tabla

    Esquema del escenario: Atajos de teclado en el visor del linaje
      Cuando el usuario presiona la tecla "<tecla>" en el nodo del linaje
      Entonces el sistema ejecuta la acción "<accion_esperada>"

      Ejemplos:
        | tecla  | accion_esperada                           |
        | Enter  | Desplegar detalles del concepto           |
        | Escape | Cerrar panel de detalles lateral          |
        | Space  | Expandir nodos hijos en el diagrama       |
        | Tab    | Avanzar al siguiente nodo del linaje      |
        | ArrowUp| Navegar al nodo padre inmediato           |

  @security @target_contract @RAIA_IA_006 @security
  Regla: Sanitización y seguridad en filtros de búsqueda

    Esquema del escenario: Prevención de inyección de código malicioso en buscador de conceptos
      Cuando el usuario introduce el texto malicioso "<payload>" en la búsqueda
      Entonces el sistema sanitiza la entrada y no ejecuta código script
      Y se muestra el estado de sin resultados encontrados

      Ejemplos:
        | payload                           |
        | <script>alert('XSS')</script>     |
        | javascript:void(0)                |
        | ' OR '1'='1                       |
        | ../../../etc/passwd               |
        | <iframe src="evil.com"></iframe>  |
        | %20SELECT%20*%20FROM%20users      |

  @performance @target_contract @RAIA_IA_007 @performance
  Regla: Rendimiento del renderizado del linaje completo

    Escenario: Tiempo de carga de linaje extenso en pantalla completa
      Dado que el usuario tiene 500 objetos de negocio cargados en la memoria
      Cuando el usuario abre la vista de pantalla completa
      Entonces el linaje se renderiza en menos de 300ms utilizando virtualización del canvas
      Y la tasa de refresco del navegador se mantiene por encima de los 55 fps

  @functional @target_contract @gap @RAIA_IA_008 @traceability
  Regla: Integración cruzada con Service Landscape

    Escenario: Vincular Service Domain realizador con el linaje de datos
      Cuando el usuario inspecciona el linaje del objeto "RAIA-BO-0002"
      Entonces se muestra una sección con los Service Domains realizadores
      Y el enlace apunta correctamente a la ruta "/service-landscape/value-chain?selected=RAIA-SD-001"
      Y no se pierde la selección del objeto al regresar del enlace

  @functional @target_contract @gap @RAIA_IA_009 @traceability
  Regla: Mappings regulatorios aplicados a Data Products

    Esquema del escenario: Verificación de Data Products regulados
      Cuando el usuario selecciona el Data Product "<id_product>"
      Entonces se muestra el linaje regulatorio asociado con la circular "<circular>"
      Y se valida que las reglas de retención de "<retencion>" años se cumplan

      Ejemplos:
        | id_product  | circular     | retencion |
        | RAIA-DP-001 | CUO CONSAR   | 10        |
        | RAIA-DP-002 | LEY SAR Art4 | 15        |
        | RAIA-DP-003 | Circular AF  | 5         |
        | RAIA-DP-004 | Circular TI  | 7         |
        | RAIA-DP-005 | Circular BI  | 10        |
        | RAIA-DP-006 | Ley Federal  | 5         |
        | RAIA-DP-007 | Circular SG  | 20        |
        | RAIA-DP-008 | Circular PLD | 10        |
