# language: es

@raia @modulo @releases
Característica: RAIA Releases (RAIA-MOD-016)
  Como desarrollador o implementador del estándar RAIA
  Quiero consultar el historial de versiones del metamodelo, changelogs y guías de migración
  Para asegurar la compatibilidad hacia atrás y coordinar la adopción evolutiva

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/releases"

  @smoke @as_is @RAIA_REL_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "RAIA Releases"
      Y se muestra su código de módulo "RAIA-MOD-016"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_REL_002 @data_integrity
  Regla: Atributos y estados de las Versiones (Releases)

    Esquema del escenario: Visualización de releases y sus fechas de baseline
      Cuando el usuario abre el listado de versiones
      Entonces se muestra la release "<id_release>" con el estado "<estado>"
      Y su versión semántica es "<version_sem>"
      Y la fecha del baseline es "<fecha_baseline>"

      Ejemplos:
        | id_release  | estado    | version_sem | fecha_baseline |
        | RAIA-REL-010| active    | 0.1.0       | 2026-07-20     |
        | RAIA-REL-009| active    | 0.0.9       | 2026-06-15     |
        | RAIA-REL-008| active    | 0.0.8       | 2026-05-10     |
        | RAIA-REL-007| active    | 0.0.7       | 2026-04-05     |
        | RAIA-REL-006| active    | 0.0.6       | 2026-03-01     |
        | RAIA-REL-005| active    | 0.0.5       | 2026-02-15     |
        | RAIA-REL-004| active    | 0.0.4       | 2026-01-10     |
        | RAIA-REL-011| draft     | 0.1.1       | 2026-08-01     |

  @functional @as_is @RAIA_REL_003 @traceability
  Regla: Changelog consolidado y clasificación de cambios

    Esquema del escenario: Auditoría de cambios en la release
      Cuando el usuario consulta el changelog de la versión "<version_sem>"
      Entonces se listan los artefactos agregados "<agregados>" y los deprecados "<deprecados>"

      Ejemplos:
        | version_sem | agregados   | deprecados  |
        | 0.1.0       | RAIA-MOD-010| ninguno     |
        | 0.0.9       | RAIA-MOD-009| ninguno     |
        | 0.0.8       | RAIA-MOD-008| ninguno     |
        | 0.0.7       | RAIA-MOD-007| ninguno     |
        | 0.0.6       | RAIA-MOD-006| ninguno     |
        | 0.0.5       | RAIA-MOD-005| ninguno     |
        | 0.0.4       | RAIA-MOD-004| ninguno     |
        | 0.1.1       | RAIA-MOD-011| ninguno     |

  @functional @target_contract @gap @RAIA_REL_004 @error_handling
  Regla: Validación de consistencia de versionamiento y dependencias

    Escenario: Alerta al registrar una versión futura inválida o sin changelog
      Dado que se intenta declarar la release "RAIA-REL-999" con fecha "2030-01-01" en el borrador
      Cuando el validador estático compila el manifiesto de releases
      Entonces se muestra una advertencia de fecha de release futura "RAIA-REL-ERR-007"
      Y la compilación del changelog se marca con error

    Escenario: Alerta por inconsistencia de versionamiento semántico (no conforme a SemVer)
      Dado que existe una versión declarada con el tag "v0.1" en el historial
      Cuando el validador estático verifica las convenciones de SemVer
      Entonces se reporta un error de formato semántico "RAIA-REL-ERR-008"

  @accessibility @as_is @RAIA_REL_005 @accessibility
  Regla: Accesibilidad en la lectura del historial de versiones

    Escenario: Navegación del historial de versiones mediante lector de pantalla
      Cuando el usuario abre la pestaña "Historial de Versiones"
      Entonces las tarjetas de versiones se estructuran en una lista ordenada con roles "list" y "listitem"
      Y el lector lee correctamente la versión activa y la fecha del baseline

    Esquema del escenario: Atajos de teclado en el visor de releases
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces se ejecuta la acción de "<accion_teclado>"

      Ejemplos:
        | tecla  | accion_teclado                          |
        | Tab    | Avanzar al siguiente changelog          |
        | Escape | Ocultar panel lateral de detalles de release|
        | Enter  | Seleccionar la release y abrir detalles  |
        | Space  | Activar o desactivar filtro de drafts   |

  @security @target_contract @RAIA_REL_006 @security
  Regla: Seguridad en parámetros URL del módulo de versiones

    Esquema del escenario: Sanitizar filtros de versiones en la URL de consulta
      Cuando el usuario carga la URL "/releases" con el parámetro "<payload>"
      Entonces el sistema previene la inyección de script o comandos SQL
      Y carga el catálogo básico sin fallos de seguridad

      Ejemplos:
        | payload                              |
        | release=__proto__                    |
        | release=constructor                  |
        | release=<script>alert(1)</script>    |
        | release='; DROP TABLE releases;--    |
        | release=${7*7}                       |
        | release=../../etc/passwd             |
