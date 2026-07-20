# language: es

@raia @modulo @industry_reference_model
Característica: Industry Reference Model (RAIA-MOD-004)
  Como arquitecto jefe o director de tecnología del SAR
  Quiero consultar el metamodelo unificado y los diagramas de arquitectura de referencia
  Para comprender el alineamiento entre las capas operativa, de información y de procesos

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/reference-model"

  @smoke @as_is @RAIA_IRM_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Reference Model"
      Y se muestra su código de módulo "RAIA-MOD-004"
      Y se muestra su versión "0.1.0"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_IRM_002 @data_integrity
  Regla: Navegación de Viewpoints canónicos de arquitectura

    Esquema del escenario: Carga de vistas por Viewpoint
      Cuando el usuario selecciona el Viewpoint "<viewpoint_id>"
      Entonces se muestra el título del Viewpoint "<titulo>"
      Y se renderizan exactamente "<conteo_nodos>" nodos principales

      Ejemplos:
        | viewpoint_id  | titulo                           | conteo_nodos |
        | RAIA-RMV-001  | Ecosystem Architecture           | 5            |
        | RAIA-RMV-002  | Service Domain Value Chain       | 273          |
        | RAIA-RMV-003  | Information & Business Objects   | 15           |
        | RAIA-RMV-004  | Control Records State Machines   | 8            |
        | RAIA-RMV-005  | End-to-End Scenarios Overview    | 12           |
        | RAIA-RMV-006  | Regulatory Coverage Matrix       | 18           |
        | RAIA-RMV-007  | Capability Map alignment         | 31           |
        | RAIA-RMV-008  | Governance & Release Baseline    | 4            |

  @functional @as_is @RAIA_IRM_003 @data_integrity
  Regla: Resolución de referencias cruzadas entre capas de arquitectura

    Esquema del escenario: Trazabilidad de nodos en el grafo de referencia
      Dado que el usuario navega en el Viewpoint "<viewpoint_id>"
      Cuando selecciona el nodo "<id_nodo>"
      Entonces el panel lateral muestra las referencias del tipo "<tipo_ref>" hacia el elemento "<id_ref>"

      Ejemplos:
        | viewpoint_id | id_nodo     | tipo_ref       | id_ref       |
        | RAIA-RMV-002 | RAIA-SD-001 | capability     | RAIA-CAP-002-0001 |
        | RAIA-RMV-002 | RAIA-SD-030 | business-object| RAIA-BO-0002 |
        | RAIA-RMV-003 | RAIA-BO-0002| information-dom| RAIA-ID-002  |
        | RAIA-RMV-004 | RAIA-CR-001 | service-domain | RAIA-SD-001  |
        | RAIA-RMV-005 | RAIA-BS-0002| scenario-snipp | RAIA-SNP-002 |
        | RAIA-RMV-006 | RAIA-REG-001| mapping        | RAIA-SD-001  |
        | RAIA-RMV-007 | RAIA-CAP-002| domain         | RAIA-CAPD-002 |
        | RAIA-RMV-008 | RAIA-REL-010| artifact       | RAIA-MOD-010 |
        | RAIA-RMV-002 | RAIA-SD-045 | capability     | RAIA-CAP-003-0001 |
        | RAIA-RMV-002 | RAIA-SD-090 | business-object| RAIA-BO-0003 |

  @functional @target_contract @gap @RAIA_IRM_004 @error_handling
  Regla: Control de nodos y enlaces huérfanos

    Escenario: Alerta de nodo sin relaciones válidas en el Viewpoint
      Dado que el nodo de prueba "TEST-ORPHAN-NODE" no tiene enlaces mapeados
      Cuando el validador estático compila el Viewpoint "RAIA-RMV-002"
      Entonces se emitiza un aviso de nodo huérfano "RAIA-IRM-WARN-004"

    Escenario: Alerta al hacer referencia a un artefacto no disponible
      Dado que un enlace hace referencia al ID inexistente "RAIA-BO-9999"
      Cuando el usuario intenta consultar el linaje del nodo
      Entonces el sistema muestra una advertencia de referencia rota "RAIA-IRM-ERR-404"

  @accessibility @as_is @RAIA_IRM_005 @accessibility
  Regla: Accesibilidad en diagramas interactivos del metamodelo

    Escenario: Alternar a vista de listado estructurado para accesibilidad visual
      Cuando el usuario activa el modo de compatibilidad de contraste en el diagrama
      Entonces los contornos de los nodos se renderizan con un grosor de 3px
      Y los colores de las capas se reemplazan con texturas distintivas de alto contraste

    Esquema del escenario: Navegación del grafo por comandos de teclado
      Cuando el usuario enfoca el diagrama y presiona "<tecla>"
      Entonces el visor realiza la acción "<accion>"

      Ejemplos:
        | tecla  | accion                                    |
        | +      | Acercar zoom en un 10%                    |
        | -      | Alejar zoom en un 10%                     |
        | Escape | Resetear zoom y centrar vista             |
        | Enter  | Seleccionar el nodo enfocado              |
        | Tab    | Mover el foco al siguiente nodo del grafo |

  @security @target_contract @RAIA_IRM_006 @security
  Regla: Seguridad en diagramas generados dinámicamente

    Esquema del escenario: Sanitización de scripts en cargador de diagramas customizados
      Cuando el usuario importa un diagrama personalizado con el payload "<payload>"
      Entonces el parser el archivo y previene ataques scripting
      Y se muestra un mensaje de error de formato inválido

      Ejemplos:
        | payload                              |
        | <svg onload="alert(1)">              |
        | eval(atob('YWxlcnQoMSk='))           |
        | data:image/svg+xml;base64,PHN2Zy... |
        | onload=javascript:evil()             |
        | <?xml version="1.0" standalone="no"?>|
        | <!ENTITY xxe SYSTEM "file:///etc">   |

  @performance @target_contract @RAIA_IRM_007 @performance
  Regla: Rendimiento del renderizado jerárquico

    Escenario: Carga inicial de Viewpoints extensos
      Dado que el Viewpoint posee 300 nodos y 600 relaciones direccionadas
      Cuando el usuario selecciona la vista "Service Domain Value Chain"
      Entonces el tiempo transcurrido hasta que el diagrama es interactivo es menor a 400ms
      Y el navegador consume menos de 100MB de memoria RAM

  @functional @target_contract @gap @RAIA_IRM_008 @traceability
  Regla: Leyenda explicativa de diagramas de arquitectura

    Esquema del escenario: Consulta de significado de la simbología del grafo
      Cuando el usuario abre la leyenda explicativa del Viewpoint "<viewpoint_id>"
      Entonces se muestra el significado correcto para el conector "<conector>"

      Ejemplos:
        | viewpoint_id | conector    | significado                   |
        | RAIA-RMV-001 | compuesto   | Relación de composición       |
        | RAIA-RMV-002 | realiza     | Relación de realización lógica|
        | RAIA-RMV-003 | asocia      | Relación de asociación simple |
        | RAIA-RMV-004 | dispara     | Evento disparador de estado   |
        | RAIA-RMV-005 | invoca      | Relación de invocación        |
