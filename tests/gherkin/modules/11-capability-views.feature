# language: es

@raia @modulo @capability_views
Característica: Capability Views (RAIA-MOD-011)
  Como analista de gobernanza o regulador de la industria
  Quiero consultar proyecciones filtradas de capacidades de negocio (por participante o régimen)
  Para enfocar el análisis de cumplimiento y gobernanza sectorial sin duplicar catálogos

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/capability-map/views"

  @smoke @as_is @RAIA_CVW_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Capability Views"
      Y se muestra su código de módulo "RAIA-MOD-011"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_CVW_002 @filter
  Regla: Proyecciones filtradas por Participante de la industria

    Esquema del escenario: Carga de vista por Participante
      Cuando el usuario selecciona la vista del participante "<participante>"
      Entonces se ocultan las capacidades no aplicables
      Y se muestra el listado de capacidades L2 obligatorias
      Y el conteo coincide con "<conteo_esperado>"

      Ejemplos:
        | participante      | conteo_esperado |
        | AFORE             | 18              |
        | CONSAR            | 5               |
        | Procesadora       | 4               |
        | Trabajador        | 2               |
        | IMSS              | 3               |
        | ISSSTE            | 3               |
        | INFONAVIT         | 2               |
        | BANXICO           | 1               |

  @functional @as_is @RAIA_CVW_003 @filter
  Regla: Proyecciones filtradas por Régimen y Regulación

    Esquema del escenario: Proyecciones de cumplimiento normativo
      Cuando el usuario filtra la vista por la regulación "<regulacion>"
      Entonces se despliega la lista de capacidades obligadas bajo ese régimen
      Y el conteo de capacidades en la vista es de "<conteo>"

      Ejemplos:
        | regulacion      | conteo |
        | RAIA-REG-001    | 5      |
        | RAIA-REG-002    | 12     |
        | RAIA-REG-003    | 4      |
        | RAIA-REG-004    | 8      |
        | RAIA-REG-005    | 2      |
        | RAIA-REG-006    | 3      |
        | RAIA-REG-007    | 9      |
        | RAIA-REG-008    | 1      |

  @functional @target_contract @gap @RAIA_CVW_004 @error_handling
  Regla: Copia de enlaces y compartición de proyecciones específicas

    Escenario: Copiar enlace de vista de participante con filtros aplicados
      Dado que el usuario tiene la vista del participante "AFORE" y régimen "obligatorio"
      Cuando hace clic en el botón "Copiar Enlace"
      Entonces la URL generada en el portapapeles contiene los parámetros "participant=AFORE" y "regime=obligatorio"

    Escenario: Carga de vista con parámetros URL inválidos o incompatibles
      Cuando el usuario abre la URL "/capability-map/views?participant=TEST-INVALID-PART"
      Entonces el sistema redirige a la vista por defecto sin lanzar errores fatales
      Y se despliega una notificación de advertencia de filtro no reconocido

  @accessibility @as_is @RAIA_CVW_005 @accessibility
  Regla: Accesibilidad en las vistas de capacidades

    Escenario: Ocultamiento visual de elementos preservando el orden del foco del lector
      Cuando el usuario filtra las capacidades del participante "Trabajador"
      Entonces las celdas excluidas se eliminan físicamente del orden del foco del teclado (DOM invisible para lectores de pantalla)
      Y el foco lógico avanza secuencialmente solo por los elementos activos

    Esquema del escenario: Navegación de filtros de proyecciones por teclado
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces se realiza la acción "<accion_teclado>"

      Ejemplos:
        | tecla  | accion_teclado                         |
        | ArrowRight| Seleccionar la siguiente pestaña de vista|
        | ArrowLeft | Seleccionar la pestaña de vista anterior|
        | Escape    | Limpiar los filtros de proyección       |
        | Enter     | Aplicar la vista de filtro seleccionada |

  @security @target_contract @RAIA_CVW_006 @security
  Regla: Sanitización de entradas en filtros de vista de participante

    Esquema del escenario: Prevención de inyección de código en filtros
      Cuando el usuario intenta aplicar el filtro de participante "<payload>"
      Entonces el sistema previene la inyección de script o expresiones dinámicas
      Y carga la vista de filtros por defecto

      Ejemplos:
        | payload                              |
        | participant=__proto__                |
        | participant=constructor              |
        | participant=<script>alert(1)</script>|
        | participant='; DROP TABLE views;--   |
        | participant=${7*7}                   |
        | participant=../../etc/passwd         |
