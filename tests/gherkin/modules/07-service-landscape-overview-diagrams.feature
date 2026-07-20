# language: es

@raia @modulo @service_landscape @overview_diagrams
Característica: Service Landscape — Overview Diagrams (RAIA-MOD-007)
  Como arquitecto de soluciones o diseñador de flujos del SAR
  Quiero consultar los diagramas interactivos y swimlanes de dependencias del paisaje de servicios
  Para diagnosticar la modularidad, flujos y acoplamiento estructural en la industria

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/service-landscape/overview-diagrams"

  @smoke @as_is @RAIA_SLOD_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Overview Diagrams"
      Y se muestra su código de módulo "RAIA-MOD-007"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_SLOD_002 @filter
  Regla: Navegación de diagramas y swimlanes por fase y grupo

    Esquema del escenario: Visualización de swimlanes y nodos de dominio
      Cuando el usuario selecciona el diagrama "<id_diagrama>"
      Entonces se despliegan las fases "<fases>" en el eje horizontal
      Y los swimlanes "<swimlanes>" en el eje vertical
      Y se verifica la presencia del nodo "<id_nodo>"

      Ejemplos:
        | id_diagrama | fases        | swimlanes          | id_nodo     |
        | RAIA-OD-001 | registro     | trabajador, afore  | RAIA-SD-001 |
        | RAIA-OD-001 | registro     | afore, imss        | RAIA-SD-002 |
        | RAIA-OD-002 | traspaso     | afore, operadora   | RAIA-SD-030 |
        | RAIA-OD-002 | traspaso     | afore, consar      | RAIA-SD-045 |
        | RAIA-OD-003 | recaudacion  | afore, infonavit   | RAIA-SD-090 |
        | RAIA-OD-004 | inversion    | siefore, afore     | RAIA-SD-110 |
        | RAIA-OD-005 | retiro       | afore, trabajador  | RAIA-SD-150 |
        | RAIA-OD-006 | pension      | afore, issste      | RAIA-SD-200 |
        | RAIA-OD-007 | servicio     | afore, operadora   | RAIA-SD-250 |
        | RAIA-OD-008 | gobernanza   | consar, afore      | RAIA-SD-270 |

  @functional @as_is @RAIA_SLOD_003 @data_integrity
  Regla: Selección de nodos y relaciones con atenuación visual

    Esquema del escenario: Resaltado de caminos de dependencias en el grafo
      Cuando el usuario selecciona el nodo "<id_nodo>"
      Entonces los nodos y conectores no relacionados se atenúan visualmente
      Y el panel de detalle lateral muestra "<conteo_dependencias>" relaciones directas

      Ejemplos:
        | id_nodo     | conteo_dependencias |
        | RAIA-SD-001 | 5                   |
        | RAIA-SD-030 | 12                  |
        | RAIA-SD-045 | 8                   |
        | RAIA-SD-090 | 10                  |
        | RAIA-SD-110 | 4                   |
        | RAIA-SD-150 | 7                   |
        | RAIA-SD-200 | 6                   |
        | RAIA-SD-250 | 3                   |
        | RAIA-SD-260 | 9                   |
        | RAIA-SD-270 | 2                   |

  @functional @target_contract @gap @RAIA_SLOD_004 @error_handling
  Regla: Control de consistencia de referencias en diagramas

    Escenario: Alerta al detectar referencias rotas en los nodos del diagrama
      Dado que el diagrama "RAIA-OD-001" contiene el nodo "TEST-INVALID-SD" no registrado en el paisaje
      Cuando el validador estático compila el archivo JSON del diagrama
      Entonces se muestra una advertencia de inconsistencia "RAIA-SLOD-ERR-005"
      Y el nodo se renderiza con un estilo de advertencia rojo

    Escenario: Restablecer zoom y centrar vista del lienzo interactivo
      Dado que el usuario desplazó y amplió el diagrama al 300%
      Cuando hace clic en el botón "Reset View"
      Entonces el zoom se restablece al 100%
      Y el diagrama se centra en el contenedor del lienzo

  @accessibility @as_is @RAIA_SLOD_005 @accessibility
  Regla: Alternativa accesible estructurada para diagramas vectoriales

    Escenario: Consultar la narrativa estructurada equivalente del diagrama
      Cuando el usuario activa la pestaña "Narrativa y Secuencias"
      Entonces se oculta el lienzo SVG del diagrama
      Y se muestra un resumen estructurado paso a paso en formato accesible por lector de pantalla

    Esquema del escenario: Atajos de teclado en el lienzo interactivo
      Cuando el usuario presiona la tecla "<tecla>" en el visor de diagramas
      Entonces el visor realiza la acción de "<accion>"

      Ejemplos:
        | tecla  | accion                         |
        | +      | Acercar zoom                   |
        | -      | Alejar zoom                    |
        | Escape | Restablecer vista y centrar    |
        | Enter  | Seleccionar el nodo enfocado   |
        | Tab    | Enfocar siguiente nodo de flujo|

  @security @target_contract @RAIA_SLOD_006 @security
  Regla: Seguridad en exportaciones de diagramas SVG

    Esquema del escenario: Sanitización de scripts al exportar diagrama en formato SVG
      Cuando el usuario exporta el diagrama "<id_diagrama>" a SVG
      Entonces el archivo exportado no contiene etiquetas script o eventos inline
      Y el XML generado es seguro y bien formado

      Ejemplos:
        | id_diagrama |
        | RAIA-OD-001 |
        | RAIA-OD-002 |
        | RAIA-OD-003 |
        | RAIA-OD-004 |
        | RAIA-OD-005 |
        | RAIA-OD-006 |
        | RAIA-OD-007 |

  @performance @target_contract @RAIA_SLOD_007 @performance
  Regla: Rendimiento del motor de layout ELK en tiempo real

    Escenario: Tiempo de cálculo del layout automático en diagramas densos
      Dado que el diagrama seleccionado contiene 150 nodos y 250 enlaces direccionados
      Cuando se realiza el recálculo automático con el motor ELK
      Entonces el cálculo del layout finaliza en menos de 350ms
      Y el lienzo se actualiza sin bloqueos en el hilo principal

  @functional @target_contract @gap @RAIA_SLOD_008 @traceability
  Regla: Trazabilidad de conectores y flechas direccionadas

    Esquema del escenario: Simbolización e interpretación del tipo de relación en el diagrama
      Cuando el usuario selecciona una flecha con el tipo de relación "<tipo_relacion>"
      Entonces la leyenda explicativa muestra el significado "<significado>"
      Y se resalta la relación de dependencia correspondiente

      Ejemplos:
        | tipo_relacion | significado                    |
        | invoca        | El Service Domain emite llamada|
        | notifica      | El Service Domain emite evento |
        | consulta      | Lectura de datos lógicos       |
        | escribe       | Escritura de datos lógicos     |
        | valida        | Validación de invariantes      |
