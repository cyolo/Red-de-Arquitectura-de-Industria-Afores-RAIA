# language: es

@raia @modulo @business_object_model
Característica: Business Object Model (RAIA-MOD-003)
  Como arquitecto de datos o desarrollador del SAR
  Quiero consultar el catálogo canónico de objetos de negocio de la industria y sus atributos
  Para asegurar consistencia en las estructuras de datos operativas

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/business-object-model"

  @smoke @as_is @RAIA_BOM_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Business Object Model"
      Y se muestra su código de módulo "RAIA-MOD-003"
      Y se muestra su versión "0.1.0"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_BOM_002 @data_integrity
  Regla: Atributos y tipos de datos del Objeto de Negocio

    Esquema del escenario: Atributos obligatorios en objetos núcleo
      Cuando el usuario selecciona el objeto de negocio "<id_objeto>"
      Entonces se muestra su definición "<definicion>"
      Y se visualiza el atributo obligatorio "<atributo>" de tipo "<tipo>"

      Ejemplos:
        | id_objeto    | definicion                         | atributo       | tipo    |
        | RAIA-BO-0001 | Representación del trabajador      | curp           | string  |
        | RAIA-BO-0001 | Representación del trabajador      | nss            | string  |
        | RAIA-BO-0002 | Cuenta individual previsional      | saldoTotal     | decimal |
        | RAIA-BO-0002 | Cuenta individual previsional      | status         | string  |
        | RAIA-BO-0003 | Aportación de recursos patronal    | monto          | decimal |
        | RAIA-BO-0003 | Aportación de recursos patronal    | fechaPago      | date    |
        | RAIA-BO-0004 | Solicitud formal de retiro         | fechaSolicitud | date    |
        | RAIA-BO-0004 | Solicitud formal de retiro         | folioSAR       | string  |
        | RAIA-BO-0005 | Expediente electrónico del cliente | firmaDigital   | binary  |
        | RAIA-BO-0005 | Expediente electrónico del cliente | biometriaRostro| binary  |

  @functional @as_is @RAIA_BOM_003 @data_integrity
  Regla: Relaciones y cardinalidad de composición

    Esquema del escenario: Cardinalidad de relaciones lógicas
      Cuando el usuario inspecciona el diagrama de composición del objeto "<id_origen>"
      Entonces se muestra una relación de tipo "<tipo_relacion>" con el objeto "<id_destino>"
      Y la cardinalidad mínima esperada es de "<card_minima>"

      Ejemplos:
        | id_origen    | tipo_relacion | id_destino   | card_minima |
        | RAIA-BO-0002 | composicion   | RAIA-BO-0003 | 0           |
        | RAIA-BO-0002 | asociacion    | RAIA-BO-0001 | 1           |
        | RAIA-BO-0004 | agregacion    | RAIA-BO-0002 | 1           |
        | RAIA-BO-0005 | composicion   | RAIA-BO-0001 | 1           |
        | RAIA-BO-0006 | asociacion    | RAIA-BO-0007 | 0           |
        | RAIA-BO-0007 | agregacion    | RAIA-BO-0008 | 1           |
        | RAIA-BO-0008 | composicion   | RAIA-BO-0009 | 0           |
        | RAIA-BO-0009 | asociacion    | RAIA-BO-0010 | 1           |
        | RAIA-BO-0010 | agregacion    | RAIA-BO-0011 | 0           |
        | RAIA-BO-0011 | asociacion    | RAIA-BO-0012 | 1           |

  @functional @target_contract @gap @RAIA_BOM_004 @error_handling
  Regla: Detección de duplicidades y aliases ambiguos

    Escenario: Alerta de conflicto de aliases duplicados en el diccionario de datos
      Dado que existen los objetos "RAIA-BO-0001" y "RAIA-BO-0099" con el mismo alias "Asegurado"
      Cuando el validador de consistencia del metamodelo analiza los diccionarios
      Entonces se muestra una advertencia indicando alias ambiguo "RAIA-BOM-WARN-002"
      Y la interfaz resalta los campos correspondientes

    Escenario: Validación contra composición circular en objetos complejos
      Dado que "RAIA-BO-0001" contiene por composición a "RAIA-BO-0002"
      Y que "RAIA-BO-0002" se configura para contener circularmente a "RAIA-BO-0001"
      Cuando se compila el catálogo de dependencias físicas
      Entonces el validador estático detecta una referencia circular "RAIA-BOM-ERR-003"
      Y el guardado de la composición es bloqueado

  @accessibility @as_is @RAIA_BOM_005 @keyboard
  Regla: Accesibilidad en glosario de términos del BOM

    Escenario: Búsqueda y foco lógico con teclado
      Dado que el usuario navega en la lista del glosario
      Cuando presiona la combinación de teclas "Ctrl + F"
      Entonces el foco del teclado se desplaza al cuadro de búsqueda de términos
      Y se lee el role ARIA "searchbox" correctamente

    Esquema del escenario: Navegación de la tabla del diccionario por teclado
      Cuando el usuario presiona la tecla "<tecla>"
      Entonces la interfaz desplaza el foco a "<foco>"

      Ejemplos:
        | tecla     | foco                            |
        | DownArrow | Fila del siguiente atributo     |
        | UpArrow   | Fila del atributo anterior      |
        | Escape    | Botón de cierre del diccionario |
        | Enter     | Desplegar la ficha del objeto   |
        | Tab       | Enlace al repositorio externo   |

  @security @target_contract @RAIA_BOM_006 @security
  Regla: Sanitización de atributos físicos dinámicos

    Esquema del escenario: Prevención de inyección de código en adición de alias personalizado
      Cuando el usuario edita el alias de un objeto con el payload "<payload>"
      Entonces el sistema bloquea caracteres prohibidos o los escapa de manera segura
      Y el alias se almacena como texto plano seguro

      Ejemplos:
        | payload                           |
        | <script>alert(1)</script>         |
        | " onclick="alert(1)               |
        | '; DROP TABLE business_objects;-- |
        | javascript:evil()                 |
        | ${7*7}                            |
        | %22%20onmouseover%3Dalert%281%29  |

  @performance @target_contract @RAIA_BOM_007 @performance
  Regla: Paginación y renderizado incremental del catálogo

    Escenario: Rendimiento en búsquedas con filtros de cardinalidad alta
      Dado que la base de datos local contiene 1000 objetos lógicos
      Cuando el usuario realiza una búsqueda filtrada por tipo "entidad"
      Entonces la interfaz muestra los primeros 50 elementos de forma instantánea
      Y el tiempo de renderizado se mantiene por debajo de 150ms

  @functional @target_contract @gap @RAIA_BOM_008 @traceability
  Regla: Análisis de impacto por cambios estructurales en objetos de negocio

    Esquema del escenario: Simulación de impacto por deprecación de atributos
      Dado que el atributo "<atributo>" del objeto "<id_objeto>" está marcado como "deprecado"
      Cuando el usuario consulta el panel de análisis de impacto
      Entonces el sistema enumera "<conteo_sd>" Service Domains afectados
      Y se resalta la relación con la circular regulatoria "<id_reg>"

      Ejemplos:
        | id_objeto    | atributo   | conteo_sd | id_reg       |
        | RAIA-BO-0001 | curp       | 25        | RAIA-REG-001 |
        | RAIA-BO-0002 | saldoTotal | 15        | RAIA-REG-002 |
        | RAIA-BO-0003 | monto      | 8         | RAIA-REG-003 |
        | RAIA-BO-0004 | folioSAR   | 12        | RAIA-REG-004 |
        | RAIA-BO-0005 | firma      | 6         | RAIA-REG-005 |
