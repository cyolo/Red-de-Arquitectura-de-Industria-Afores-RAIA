# language: es

@raia @modulo @wireframes
Característica: Wireframes Overview (RAIA-MOD-013)
  Como diseñador UX o desarrollador frontend del SAR
  Quiero consultar los flujos de pantallas de referencia y wireframes interactivos
  Para asegurar la consistencia visual y de experiencia del trabajador en la industria

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/wireframes"

  @smoke @as_is @RAIA_WFO_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Wireframes Overview"
      Y se muestra su código de módulo "RAIA-MOD-013"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_WFO_002 @data_integrity
  Regla: Flujo de pantallas y wireframes por Escenario de Negocio

    Esquema del escenario: Visualización de wireframes asociados a escenarios
      Cuando el usuario selecciona el wireframe del escenario "<id_escenario>"
      Entonces se muestra la miniatura de la pantalla "<nombre_pantalla>"
      Y se indica el estado visual de la interfaz "<estado_visual>"

      Ejemplos:
        | id_escenario | nombre_pantalla                    | estado_visual |
        | RAIA-BS-0001 | Solicitud de Traspaso Inicial      | normal        |
        | RAIA-BS-0001 | Firma Digital de Consentimiento    | normal        |
        | RAIA-BS-0001 | Carga de Identificación Oficial    | loading       |
        | RAIA-BS-0001 | Confirmación y Folio de Traspaso   | success       |
        | RAIA-BS-0002 | Preregistro Captura de CURP        | normal        |
        | RAIA-BS-0002 | Captura de Datos de Contacto       | error         |
        | RAIA-BS-0002 | Validación Biométrica Facial       | normal        |
        | RAIA-BS-0002 | Acuse de Registro y Envío          | success       |

  @functional @as_is @RAIA_WFO_003 @filter
  Regla: Simulación de estados de pantalla (loading, empty, error, success)

    Esquema del escenario: Alternancia de estados visuales del wireframe
      Dado que el usuario tiene abierto el wireframe "Firma Digital de Consentimiento"
      Cuando selecciona el estado simulado "<estado_simulado>"
      Entonces el visor de wireframes actualiza el contenedor de la pantalla
      Y se muestra el elemento visual "<elemento_visual>"

      Ejemplos:
        | estado_simulado | elemento_visual                |
        | loading         | spinner de carga animado       |
        | empty           | mensaje de sin datos de firma  |
        | error           | banner de error de conexión    |
        | success         | checkmark de acuse firmado     |
        | normal          | formulario de consentimiento   |
        | disabled        | botón de firma inhabilitado    |
        | offline         | alerta de sin conexión local   |
        | readonly        | campos de solo lectura         |

  @functional @target_contract @gap @RAIA_WFO_004 @error_handling
  Regla: Integración con Business Scenarios y trazabilidad

    Escenario: Navegación desde wireframe hacia su escenario de negocio propietario
      Dado que el usuario inspecciona el wireframe "Firma Digital de Consentimiento"
      Cuando hace clic en el enlace "Ver flujo transaccional"
      Entonces el sistema navega a la ruta "/business-scenarios?scenario=RAIA-BS-0001"
      Y no se presentan errores visuales de carga

    Escenario: Alerta al detectar wireframes sin escenario asociado
      Dado que existe un wireframe de prueba "TEST-ORPHAN-WF" sin escenario de negocio configurado
      Cuando el validador estático analiza el catálogo de UX
      Entonces se muestra una advertencia de consistencia de diseño "RAIA-WFO-WARN-006"

  @accessibility @as_is @RAIA_WFO_005 @accessibility
  Regla: Accesibilidad en formularios y diálogos de los wireframes

    Escenario: Lector de pantalla en formulario de consentimiento
      Dado que el usuario enfoca el formulario de firma digital
      Cuando navega mediante el tabulador por los campos
      Entonces cada input tiene un tag "label" explícito y un rol ARIA adecuado
      Y el orden del foco es lógico de arriba hacia abajo

    Esquema del escenario: Uso del teclado para cerrar diálogos modales en wireframes
      Cuando el diálogo modal "<nombre_modal>" está abierto
      Y el usuario presiona la tecla "<tecla>"
      Entonces el diálogo se cierra y el foco regresa al botón disparador

      Ejemplos:
        | nombre_modal             | tecla  |
        | Modal de Términos        | Escape |
        | Modal de Ayuda Biométrica | Escape |
        | Modal de Confirmación    | Escape |
        | Modal de Error de Firma  | Escape |

  @security @target_contract @RAIA_WFO_006 @security
  Regla: Seguridad e higiene de datos personales en mockups visuales

    Esquema del escenario: Uso exclusivo de datos personales sintéticos en wireframes
      Cuando el usuario consulta los campos prellenados del wireframe
      Entonces el dato mostrado "<campo>" coincide con un valor sintético "<valor_sintetico>" y no real

      Ejemplos:
        | campo    | valor_sintetico       |
        | CURP     | XXXX999999XXXXXX99    |
        | RFC      | XXXX999999XXX         |
        | Nombre   | Juan Pérez García     |
        | NSS      | 99999999999           |
        | Correo   | juan.perez@example.com|
        | Teléfono | 555-999-9999          |
