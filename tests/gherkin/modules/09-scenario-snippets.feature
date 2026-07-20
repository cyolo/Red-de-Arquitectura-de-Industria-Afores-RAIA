# language: es

@raia @modulo @scenario_snippets
Característica: Scenario Snippets (RAIA-MOD-009)
  Como arquitecto o desarrollador de flujos del SAR
  Quiero consultar y utilizar fragmentos de secuencia reutilizables (snippets)
  Para estandarizar interacciones comunes de firma, biometría o consentimiento

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/business-scenarios/snippets"

  @smoke @as_is @RAIA_SNP_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Scenario Snippets"
      Y se muestra su código de módulo "RAIA-MOD-009"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_SNP_002 @data_integrity
  Regla: Atributos obligatorios y tipos de slots de Snippets

    Esquema del escenario: Visualización de slots de entrada y salida obligatorios
      Cuando el usuario selecciona el snippet "<id_snippet>"
      Entonces se visualiza el slot de entrada "<slot_in>"
      Y se visualiza el slot de salida "<slot_out>"
      Y se indica la versión semántica "<version_sem>"

      Ejemplos:
        | id_snippet  | slot_in             | slot_out           | version_sem |
        | RAIA-SNP-001| trabajador-curp     | identidad-validada | 1.0.0       |
        | RAIA-SNP-002| firma-manuscrita    | firma-digital      | 1.1.0       |
        | RAIA-SNP-003| consentimiento-txt  | consentimiento-hash| 2.0.0       |
        | RAIA-SNP-004| biometria-rostro    | biometria-score    | 1.0.2       |
        | RAIA-SNP-005| token-sms           | token-validado     | 1.3.0       |
        | RAIA-SNP-006| identificacion-img  | ocr-datos          | 2.1.0       |
        | RAIA-SNP-007| correo-electronico  | correo-confirmado  | 1.0.0       |
        | RAIA-SNP-008| telefono-movil      | telefono-validado  | 1.2.0       |

  @functional @as_is @RAIA_SNP_003 @traceability
  Regla: Usos y binding obligatorio de Service Domains

    Esquema del escenario: Asociación de slots a Service Domains
      Cuando el usuario inspecciona el binding del snippet "<id_snippet>"
      Entonces se verifica que se mapee al Service Domain "<id_sd>"

      Ejemplos:
        | id_snippet  | id_sd       |
        | RAIA-SNP-001| RAIA-SD-001 |
        | RAIA-SNP-002| RAIA-SD-030 |
        | RAIA-SNP-003| RAIA-SD-045 |
        | RAIA-SNP-004| RAIA-SD-090 |
        | RAIA-SNP-005| RAIA-SD-110 |
        | RAIA-SNP-006| RAIA-SD-150 |
        | RAIA-SNP-007| RAIA-SD-200 |
        | RAIA-SNP-008| RAIA-SD-250 |

  @functional @target_contract @gap @RAIA_SNP_004 @error_handling
  Regla: Validación de bindings incompatibles y versionamiento

    Escenario: Alerta al intentar asociar un Service Domain incompatible con el slot del snippet
      Dado que el snippet "RAIA-SNP-001" requiere un slot de tipo "identidad-biometrica"
      Cuando el desarrollador intenta asociar el Service Domain incompatible "RAIA-SD-090"
      Entonces el validador estático reporta un error de tipo "RAIA-SNP-BIND-ERR"
      Y la asociación es rechazada

    Escenario: Alerta por uso de snippet marcado como deprecado en el baseline
      Dado que el snippet "RAIA-SNP-003" versión "1.0.0" tiene el estado "deprecated"
      Cuando el validador de compilación analiza el escenario de negocio "RAIA-BS-0001" que lo incluye
      Entonces se muestra una advertencia de deprecación "RAIA-SNP-WARN-003"

  @accessibility @as_is @RAIA_SNP_005 @accessibility
  Regla: Accesibilidad en la previsualización del snippet

    Escenario: Consultar los pasos internos del snippet mediante lector de pantalla
      Cuando el usuario navega a la sección de pasos del snippet "RAIA-SNP-001"
      Entonces la interfaz despliega los pasos secuenciales en una estructura de lista accesible con roles "list" y "listitem"
      Y se lee la descripción alternativa de cada paso

    Esquema del escenario: Atajos de teclado en el catálogo de snippets
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces el catálogo de snippets realiza la acción "<accion>"

      Ejemplos:
        | tecla  | accion                                     |
        | Tab    | Avanzar al siguiente snippet del catálogo  |
        | Escape | Ocultar panel de detalles del snippet      |
        | Enter  | Seleccionar el snippet y expandir detalles |
        | Space  | Activar preview animada del flujo          |

  @security @target_contract @RAIA_SNP_006 @security
  Regla: Seguridad en binding de slots dinámicos

    Esquema del escenario: Sanitización de entradas en edición de slots de snippets
      Cuando el usuario introduce el payload "<payload>" en la edición de slots
      Entonces el sistema bloquea caracteres prohibidos y escapa la entrada de manera segura
      Y el slot se guarda sin ejecutar código malicioso

      Ejemplos:
        | payload                              |
        | <script>alert(1)</script>             |
        | " onclick="alert(1)                   |
        | '; DROP TABLE snippets;--             |
        | javascript:evil()                     |
        | ${7*7}                                |
        | %22%20onmouseover%3Dalert%281%29      |
