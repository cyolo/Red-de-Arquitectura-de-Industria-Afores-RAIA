# language: es

@raia @modulo @regulatory_architecture
Característica: Regulatory Architecture (RAIA-MOD-015)
  Como oficial de cumplimiento o arquitecto regulatorio del SAR
  Quiero consultar las fuentes normativas y sus mapeos de obligaciones sobre Service Domains
  Para asegurar el cumplimiento legal y la trazabilidad de las reglas de negocio sectoriales

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/regulatory-architecture"

  @smoke @as_is @RAIA_REG_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Regulatory Architecture"
      Y se muestra su código de módulo "RAIA-MOD-015"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_REG_002 @data_integrity
  Regla: Fuentes regulatorias oficiales del SAR

    Esquema del escenario: Consulta de fuentes regulatorias y vigencias
      Cuando el usuario selecciona la fuente regulatoria "<id_fuente>"
      Entonces se visualiza su nombre oficial "<nombre_oficial>"
      Y la autoridad emisora es "<autoridad>"
      Y su fecha de última reforma registrada es "<ultima_reforma>"

      Ejemplos:
        | id_fuente   | nombre_oficial                      | autoridad | ultima_reforma |
        | RAIA-REG-001| Circular Única Operativa            | CONSAR    | 2026-05-12     |
        | RAIA-REG-002| Ley del SAR                         | CONGRESO  | 2024-12-18     |
        | RAIA-REG-003| Reglamento de la Ley del SAR        | PRESIDENTE| 2022-08-10     |
        | RAIA-REG-004| Circular Única de Servicios Financ. | CONSAR    | 2026-01-15     |
        | RAIA-REG-005| Disposiciones de Ciberseguridad     | CONSAR    | 2025-11-20     |
        | RAIA-REG-006| Disposiciones de Identidad Biométrica| CONSAR    | 2026-03-10     |
        | RAIA-REG-007| Circular de Inversiones y SIEFORES  | CONSAR    | 2026-06-01     |
        | RAIA-REG-008| Ley de Sistemas de Pagos            | BANXICO   | 2023-04-12     |
        | RAIA-REG-009| Disposiciones de Traspasos          | CONSAR    | 2026-02-14     |
        | RAIA-REG-010| Circular de Retiros y Pensiones     | CONSAR    | 2025-09-18     |

  @functional @as_is @RAIA_REG_003 @data_integrity
  Regla: Mappings de obligaciones y Service Domains obligados

    Esquema del escenario: Trazabilidad de obligaciones sobre la arquitectura
      Dado que el usuario inspecciona la fuente regulatoria "<id_fuente>"
      Cuando selecciona la sección o artículo "<articulo>"
      Entonces se muestra el mapeo de la obligación hacia el Service Domain "<id_sd>"
      Y la confianza del mapeo se registra como "<confianza>"

      Ejemplos:
        | id_fuente   | articulo | id_sd       | confianza |
        | RAIA-REG-001| Art. 12  | RAIA-SD-001 | alta      |
        | RAIA-REG-001| Art. 15  | RAIA-SD-030 | alta      |
        | RAIA-REG-002| Art. 45  | RAIA-SD-045 | alta      |
        | RAIA-REG-002| Art. 48  | RAIA-SD-090 | media     |
        | RAIA-REG-003| Art. 5   | RAIA-SD-110 | alta      |
        | RAIA-REG-004| Art. 22  | RAIA-SD-150 | alta      |
        | RAIA-REG-005| Art. 9   | RAIA-SD-200 | alta      |
        | RAIA-REG-006| Art. 14  | RAIA-SD-250 | alta      |
        | RAIA-REG-007| Art. 3   | RAIA-SD-260 | media     |
        | RAIA-REG-008| Art. 31  | RAIA-SD-270 | alta      |

  @functional @target_contract @gap @RAIA_REG_004 @error_handling
  Regla: Gaps regulatorios y estado de revisión legal

    Escenario: Alerta al detectar una obligación regulatoria sin Service Domain asignado
      Dado que la disposición "Art. 99 de Disposiciones de Ciberseguridad" no cuenta con un Service Domain realizador mapeado
      Cuando se compila el baseline regulatorio del SAR
      Entonces se emite una advertencia de gap regulatorio de tipo "RAIA-REG-GAP-001"
      Y el estado del mapping se registra como "abierto"

    Escenario: Alerta por fuente obsoleta o derogada
      Dado que la fuente regulatoria "RAIA-REG-099" está marcada como "abrogada"
      Cuando el usuario intenta consultar sus mappings en la interfaz
      Entonces se muestra una advertencia de fuente obsoleta "RAIA-REG-OBS-001"

  @accessibility @as_is @RAIA_REG_005 @accessibility
  Regla: Accesibilidad en el listado de fuentes normativas

    Escenario: Acceder a la alternativa estructurada de la matriz de cumplimiento
      Cuando el usuario activa el botón de vista "Lista Estructurada"
      Entonces la matriz visual de cumplimiento se oculta
      Y se visualiza una lista ordenada de artículos y obligaciones jerárquicos
      Y el lector de pantalla lee la estructura de títulos y tablas correspondientes

    Esquema del escenario: Navegación de fuentes mediante comandos de teclado
      Cuando el usuario navega por las fuentes regulatorias y presiona la tecla "<tecla>"
      Entonces el sistema ejecuta la acción "<accion_esperada>"

      Ejemplos:
        | tecla  | accion_esperada                             |
        | Tab    | Avanzar a la siguiente fuente normativa     |
        | Escape | Ocultar panel lateral de detalles de artículo|
        | Enter  | Seleccionar la fuente y abrir artículos     |
        | Space  | Activar o desactivar filtro de obligados    |
        | ArrowRight| Navegar por los artículos del listado    |

  @security @target_contract @RAIA_REG_006 @security
  Regla: Seguridad en parámetros URL del módulo regulatorio

    Esquema del escenario: Sanitizar filtros regulatorios en la URL de consulta
      Cuando el usuario carga la URL "/regulatory-architecture" con el parámetro "<payload>"
      Entonces el sistema previene la inyección de script o comandos SQL
      Y carga el catálogo básico sin fallos de seguridad

      Ejemplos:
        | payload                              |
        | source=__proto__                     |
        | source=constructor                   |
        | source=<script>alert(1)</script>     |
        | source='; DROP TABLE regulation;--   |
        | source=${7*7}                        |
        | source=../../etc/passwd              |

  @performance @target_contract @RAIA_REG_007 @performance
  Regla: Rendimiento en el renderizado del glosario de artículos

    Escenario: Tiempo de carga al paginar un glosario con más de 2000 artículos normativos
      Dado que el baseline consolidado contiene 2500 artículos y obligaciones cargados
      Cuando el usuario filtra por autoridad "CONSAR"
      Entonces la interfaz despliega los primeros 100 resultados de manera inmediata (menos de 200ms)
      Y la navegación paginada no produce latencias ni bloqueos del hilo principal

  @functional @target_contract @gap @RAIA_REG_008 @traceability
  Regla: Controles de mitigación y evidencias de cumplimiento

    Esquema del escenario: Verificación de controles asociados a obligaciones
      Cuando el usuario consulta el artículo "<articulo>" de la fuente "<id_fuente>"
      Entonces se muestra que se mitiga mediante el control "<id_control>"
      Y la evidencia requerida se registra como "<id_evidencia>"

      Ejemplos:
        | id_fuente   | articulo | id_control  | id_evidencia |
        | RAIA-REG-001| Art. 12  | RAIA-CON-001| RAIA-EVI-001 |
        | RAIA-REG-001| Art. 15  | RAIA-CON-002| RAIA-EVI-002 |
        | RAIA-REG-002| Art. 45  | RAIA-CON-003| RAIA-EVI-003 |
        | RAIA-REG-002| Art. 48  | RAIA-CON-004| RAIA-EVI-004 |
        | RAIA-REG-003| Art. 5   | RAIA-CON-005| RAIA-EVI-005 |
