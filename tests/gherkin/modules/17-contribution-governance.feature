# language: es

@raia @modulo @governance
Característica: Contribution and Governance (RAIA-MOD-017)
  Como contribuyente o mantenedor de RAIA
  Quiero consultar el flujo de gobernanza editorial, guías de contribución y automatizaciones
  Para asegurar el orden, consistencia y trazabilidad de los cambios en el metamodelo

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/contribute"

  @smoke @as_is @RAIA_GOV_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Guía de Contribución"
      Y se muestra su código de módulo "RAIA-MOD-017"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_GOV_002 @governance
  Regla: Estados editoriales y flujos de revisión de cambios

    Esquema del escenario: Transiciones de estados en propuestas de cambios
      Cuando una propuesta se encuentra en el estado "<estado_inicial>"
      Y se recibe la acción de gobernanza "<accion>"
      Entonces la propuesta cambia al estado "<estado_final>"

      Ejemplos:
        | estado_inicial | accion             | estado_final    |
        | draft          | proponer           | proposed        |
        | proposed       | revisar-arquitecto | reviewed        |
        | reviewed       | aprobar-operativo  | validated       |
        | validated      | deprecar           | deprecated      |
        | proposed       | rechazar           | draft           |
        | reviewed       | rechazar           | draft           |
        | proposed       | solicitar-cambios  | draft           |
        | reviewed       | solicitar-cambios  | draft           |

  @functional @as_is @RAIA_GOV_003 @traceability
  Regla: Naming conventions y reglas de validación estática de IDs

    Esquema del escenario: Validación de formato de identificador canónico
      Cuando el contribuyente registra un nuevo objeto de negocio con el ID "<id_nuevo>"
      Entonces el validador de nomenclatura estática responde con el resultado "<resultado>"

      Ejemplos:
        | id_nuevo     | resultado  |
        | RAIA-BO-0001 | aprobado   |
        | RAIA-SD-030  | aprobado   |
        | RAIA-CR-001  | aprobado   |
        | RAIA-CAP-001 | aprobado   |
        | TEST-BO-001  | aprobado   |
        | INVALID-ID   | rechazado  |
        | RAIA_BO_001  | rechazado  |
        | RAIA-BO-999A | rechazado  |

  @functional @target_contract @gap @RAIA_GOV_004 @error_handling
  Regla: Prevención de fuga de información y secretos en contribuciones

    Escenario: Alerta por contraseña o llave de API detectada en la propuesta de cambios
      Dado que el archivo de la propuesta contiene la cadena de texto "SECRET_KEY=12345"
      Cuando el validador estático de pre-commit analiza el archivo de datos
      Entonces se bloquea el commit y se emite un error de seguridad "RAIA-GOV-SEC-001"

    Escenario: Alerta al intentar marcar una propuesta como validada sin aprobación operativa
      Dado que una propuesta en estado "proposed" no tiene firmas digitales de aprobación
      Cuando el usuario intenta guardarla en el baseline canónico en la interfaz
      Entonces se muestra una advertencia de gobernanza bloqueante "RAIA-GOV-ERR-009"

  @accessibility @as_is @RAIA_GOV_005 @accessibility
  Regla: Accesibilidad en la lectura de la guía editorial

    Escenario: Consultar la lista estructurada de pasos de contribución
      Cuando el usuario activa el lector de pantalla en la sección "Workflow de Contribución"
      Entonces los pasos se estructuran en una lista de definiciones ordenada con roles "list" y "listitem"
      Y el foco lógico avanza de forma consistente a través de los títulos de las secciones

    Esquema del escenario: Comandos de teclado en el workflow interactivo
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces el panel de workflow interactivo realiza la acción "<accion_teclado>"

      Ejemplos:
        | tecla  | accion_teclado                        |
        | Tab    | Avanzar al siguiente paso del workflow|
        | Escape | Ocultar panel de detalles del workflow|
        | Enter  | Seleccionar el paso y expandir detalles|
        | Space  | Activar o desactivar filtro de roles  |

  @security @target_contract @RAIA_GOV_006 @security
  Regla: Seguridad en parámetros URL del módulo de gobernanza

    Esquema del escenario: Sanitizar filtros de gobernanza en la URL de consulta
      Cuando el usuario carga la URL "/contribute" con el parámetro "<payload>"
      Entonces el sistema previene la inyección de script o comandos SQL
      Y carga el catálogo básico sin fallos de seguridad

      Ejemplos:
        | payload                              |
        | role=__proto__                       |
        | role=constructor                     |
        | role=<script>alert(1)</script>       |
        | role='; DROP TABLE contributors;--   |
        | role=${7*7}                          |
        | role=../../etc/passwd                |
