# language: es

@raia @modulo @metamodel
Característica: Metamodel Overview (RAIA-MOD-012)
  Como arquitecto de gobernanza o administrador de RAIA
  Quiero consultar el glosario canónico de clases y relaciones del metamodelo
  Para asegurar el rigor conceptual y consistencia metodológica del repositorio

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/metamodel"

  @smoke @as_is @RAIA_MMO_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Metamodel Overview"
      Y se muestra su código de módulo "RAIA-MOD-012"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_MMO_002 @data_integrity
  Regla: Glosario de clases principales y cardinalidades del Metamodelo

    Esquema del escenario: Atributos y relaciones de clases
      Cuando el usuario selecciona la clase del metamodelo "<clase_id>"
      Entonces se muestra la definición metodológica "<definicion>"
      Y se verifica la relación del tipo "<relacion>" con la clase "<clase_destino>"

      Ejemplos:
        | clase_id     | definicion                          | relacion | clase_destino |
        | ServiceDomain| Unidad operativa funcional básica   | realiza  | Capability    |
        | BusinessObj  | Entidad de información de negocio   | compone  | BusinessObj   |
        | ControlRecord| Registro de control de estado       | gobierna | ServiceDomain |
        | Capability   | Habilidad estable de la industria   | mapea    | ServiceDomain |
        | ScenarioSnipp| Flujo secuencial reutilizable       | invoca   | ServiceDomain |
        | RegulatoryMap| Vínculo entre norma y realización   | aplica   | ServiceDomain |
        | Participant  | Rol operativo o institucional       | ejecuta  | ServiceDomain |
        | Viewpoint    | Proyección específica del modelo    | agrupa   | Metamodel     |

  @functional @as_is @RAIA_MMO_003 @data_integrity
  Regla: Validación metodológica y detección de relaciones inválidas

    Esquema del escenario: Detección y bloqueo de relaciones no permitidas
      Dado que el arquitecto intenta relacionar "<clase_origen>" con "<clase_destino>" mediante "<relacion>"
      Cuando el validador estático analiza el archivo del metamodelo
      Entonces se emite un error de validación de metamodelo "<error_code>"
      Y la relación es rechazada por el motor

      Ejemplos:
        | clase_origen | clase_destino | relacion | error_code         |
        | ServiceDomain| ScenarioSnipp | compone  | RAIA-MM-ERR-001    |
        | BusinessObj  | RegulatoryMap | realiza  | RAIA-MM-ERR-002    |
        | ControlRecord| Participant   | compone  | RAIA-MM-ERR-003    |
        | Capability   | BusinessObj   | invoca   | RAIA-MM-ERR-004    |
        | ScenarioSnipp| Viewpoint     | gobierna | RAIA-MM-ERR-005    |
        | RegulatoryMap| ControlRecord | compone  | RAIA-MM-ERR-006    |
        | Participant  | RegulatoryMap | realiza  | RAIA-MM-ERR-007    |
        | Viewpoint    | BusinessObj   | invoca   | RAIA-MM-ERR-008    |

  @functional @target_contract @gap @RAIA_MMO_004 @error_handling
  Regla: Control de ciclos y anomalías estructurales

    Escenario: Alerta al detectar una relación jerárquica circular de herencia entre clases
      Dado que la clase "ServiceDomain" se marca como especialización de "BusinessObject"
      Y que "BusinessObject" se configura para heredar de "ServiceDomain"
      Cuando se compila el metamodelo formal
      Entonces el sistema emite una alerta de herencia circular "RAIA-MM-CYCLE-002"

    Escenario: Consulta de clases huérfanas o sin relaciones
      Dado que existe la clase de prueba "TEST-ORPHAN-CLASS" sin ninguna relación configurada
      Cuando el validador estático analiza el grafo del metamodelo
      Entonces se muestra una advertencia de clase huérfana "RAIA-MM-WARN-005"

  @accessibility @as_is @RAIA_MMO_005 @accessibility
  Regla: Accesibilidad en la lectura del glosario metodológico

    Escenario: Alternar a vista de tabla limpia de clases
      Cuando el usuario activa el botón "Vista Glosario Estructurado"
      Entonces la interfaz despliega una tabla accesible de clases con columnas "Clase", "Definición" y "Relaciones Permitidas"
      Y el foco del teclado se desplaza al primer encabezado

    Esquema del escenario: Navegación del glosario por teclado
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces el glosario realiza la acción "<accion_teclado>"

      Ejemplos:
        | tecla  | accion_teclado                        |
        | ArrowRight| Seleccionar la siguiente clase       |
        | ArrowLeft | Seleccionar la clase anterior         |
        | Escape    | Limpiar filtro de búsqueda de glosario|
        | Enter     | Desplegar la ficha de relaciones      |

  @security @target_contract @RAIA_MMO_006 @security
  Regla: Sanitización de entradas en edición de glosario de términos

    Esquema del escenario: Prevención de scripting en adición de alias de clase
      Cuando el usuario edita la descripción de una clase con el payload "<payload>"
      Entonces el sistema previene la inyección de scripts y almacena la entrada de manera segura

      Ejemplos:
        | payload                              |
        | <script>alert(1)</script>             |
        | " onclick="alert(1)                   |
        | '; DROP TABLE metamodel;--            |
        | javascript:evil()                     |
        | ${7*7}                                |
        | %22%20onmouseover%3Dalert%281%29      |
