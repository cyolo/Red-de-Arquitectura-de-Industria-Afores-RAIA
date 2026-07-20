# language: es

@raia @modulo @business_scenarios
Característica: Business Scenarios (RAIA-MOD-008)
  Como analista de integración o diseñador de procesos del SAR
  Quiero navegar el catálogo de escenarios de negocio y sus diagramas de secuencia estructurados
  Para auditar el flujo de mensajes transaccionales entre Service Domains de la industria

  Antecedentes:
    Dado que la aplicación RAIA está disponible
    Y que el repositorio canónico fue cargado sin errores críticos
    Y que el usuario se encuentra en la ruta "/business-scenarios"

  @smoke @as_is @RAIA_BS_001 @navigation
  Regla: Carga básica y visualización de la identidad del módulo

    Escenario: Mostrar la identidad y propósito del módulo
      Cuando el usuario abre la ruta del módulo
      Entonces se muestra el nombre oficial del módulo "Business Scenarios"
      Y se muestra su código de módulo "RAIA-MOD-008"
      Y no se presentan errores en la consola

  @functional @as_is @RAIA_BS_002 @data_integrity
  Regla: Navegación de escenarios y pasos transaccionales

    Esquema del escenario: Visualización de pasos y mensajes de secuencia
      Cuando el usuario selecciona el escenario de negocio "<id_escenario>"
      Entonces se muestra el título oficial del escenario "<titulo>"
      Y se verifica la presencia del paso número "<paso_num>" con el mensaje "<mensaje>"

      Ejemplos:
        | id_escenario | titulo                         | paso_num | mensaje                           |
        | RAIA-BS-0001 | Traspaso de Cuenta Individual  | 1        | Solicitar traspaso de afore       |
        | RAIA-BS-0001 | Traspaso de Cuenta Individual  | 2        | Autenticar identidad trabajador   |
        | RAIA-BS-0001 | Traspaso de Cuenta Individual  | 3        | Validar expediente de traspaso    |
        | RAIA-BS-0001 | Traspaso de Cuenta Individual  | 4        | Confirmar liquidación recursos    |
        | RAIA-BS-0002 | Registro de Cuenta Individual  | 1        | Iniciar preregistro trabajador    |
        | RAIA-BS-0002 | Registro de Cuenta Individual  | 2        | Validar CURP con RENAPO           |
        | RAIA-BS-0002 | Registro de Cuenta Individual  | 3        | Crear expediente electronico      |
        | RAIA-BS-0002 | Registro de Cuenta Individual  | 4        | Asignar AFORE administradora      |
        | RAIA-BS-0003 | Retiro Parcial por Desempleo   | 1        | Solicitar certificado desempleo   |
        | RAIA-BS-0003 | Retiro Parcial por Desempleo   | 2        | Validar semanas cotizadas IMSS    |

  @functional @as_is @RAIA_BS_003 @navigation
  Regla: Selección de paso e inspección de detalle de mensaje

    Esquema del escenario: Consultar detalles de paso seleccionado
      Dado que el usuario consulta el escenario "RAIA-BS-0001"
      Cuando hace clic en el paso número "<paso_num>" del diagrama de secuencia
      Entonces se resalta el paso en la pantalla
      Y el panel de detalle lateral muestra el Service Domain origen "<sd_origen>" y el destino "<sd_destino>"

      Ejemplos:
        | paso_num | sd_origen   | sd_destino  |
        | 1        | RAIA-SD-001 | RAIA-SD-030 |
        | 2        | RAIA-SD-030 | RAIA-SD-045 |
        | 3        | RAIA-SD-045 | RAIA-SD-090 |
        | 4        | RAIA-SD-090 | RAIA-SD-110 |
        | 5        | RAIA-SD-110 | RAIA-SD-150 |
        | 6        | RAIA-SD-150 | RAIA-SD-200 |
        | 7        | RAIA-SD-200 | RAIA-SD-250 |
        | 8        | RAIA-SD-250 | RAIA-SD-270 |
        | 9        | RAIA-SD-270 | RAIA-SD-001 |
        | 10       | RAIA-SD-001 | RAIA-SD-030 |

  @functional @target_contract @gap @RAIA_BS_004 @error_handling
  Regla: Coherencia y consistencia en secuencias estructuradas

    Escenario: Alerta al detectar un paso sin Service Domain origen registrado
      Dado que el paso 5 del escenario "RAIA-BS-0001" hace referencia al origen inexistente "TEST-INVALID-SD"
      Cuando el validador estático compila el archivo JSON del escenario
      Entonces se muestra una alerta de consistencia estructural "RAIA-BS-ERR-006"
      Y el guardado de la secuencia queda bloqueado

    Escenario: Alternar modo fullscreen para visualización de secuencia extensa
      Dado que el usuario tiene seleccionado el escenario "RAIA-BS-0001"
      Cuando hace clic en el botón de pantalla completa
      Entonces el lienzo del diagrama de secuencia se expande para abarcar todo el viewport del navegador
      Y no se presentan errores visuales de solapamiento de mensajes

  @accessibility @as_is @RAIA_BS_005 @accessibility
  Regla: Alternativa accesible estructurada para diagramas de secuencia

    Escenario: Cambiar a vista tabular de la secuencia de mensajes
      Cuando el usuario activa el botón "Vista Accesible"
      Entonces el diagrama de secuencia interactivo se oculta
      Y se visualiza una tabla ordenada con columnas "Paso", "Origen", "Destino", "Mensaje" y "Tipo de Evento"
      Y el foco del teclado se posiciona en el encabezado de la tabla

    Esquema del escenario: Navegación de pasos por teclado
      Cuando el usuario presiona la tecla "<tecla>" en el visor de secuencia
      Entonces se realiza la acción "<accion_teclado>"

      Ejemplos:
        | tecla  | accion_teclado                        |
        | ArrowRight| Seleccionar el siguiente paso del flujo|
        | ArrowLeft | Seleccionar el paso previo del flujo   |
        | Escape    | Cerrar panel de detalle lateral        |
        | Enter     | Desplegar la ficha técnica del mensaje |
        | Space     | Activar animación del flujo de paso    |

  @security @target_contract @RAIA_BS_006 @security
  Regla: Seguridad en parámetros URL de escenarios de negocio

    Esquema del escenario: Sanitización de entradas en query params del escenario
      Cuando el usuario carga la ruta "/business-scenarios" con el parámetro "<payload>"
      Entonces la aplicación ignora el parámetro malicioso
      Y carga el escenario por defecto sin ejecutar código en el navegador

      Ejemplos:
        | payload                              |
        | scenario=__proto__                   |
        | scenario=constructor                 |
        | scenario=<script>alert(1)</script>   |
        | scenario='; DROP TABLE scenarios;--   |
        | scenario=../../etc/passwd            |
        | scenario=constructor.prototype       |

  @performance @target_contract @RAIA_BS_007 @performance
  Regla: Rendimiento y virtualización del flujo de secuencia

    Escenario: Renderizado fluido de secuencias de negocio con más de 100 pasos transaccionales
      Dado que el escenario seleccionado contiene 120 pasos secuenciales
      Cuando el usuario abre la secuencia interactiva
      Entonces el tiempo de renderizado inicial es menor a 250ms
      Y el consumo de memoria del hilo principal se mantiene estable en menos de 80MB

  @functional @target_contract @gap @RAIA_BS_008 @traceability
  Regla: Mapeo de transiciones del Control Record en pasos del escenario

    Esquema del escenario: Transiciones de Control Records asociadas a pasos
      Cuando el usuario inspecciona el paso "<paso_num>" del escenario "<id_escenario>"
      Entonces se muestra que el paso gatilla la transición de Control Record "<transicion>"

      Ejemplos:
        | id_escenario | paso_num | transicion                    |
        | RAIA-BS-0001 | 1        | registrar-solicitud-traspaso  |
        | RAIA-BS-0001 | 2        | autenticar-trabajador-biom    |
        | RAIA-BS-0001 | 3        | verificar-expediente-traspaso |
        | RAIA-BS-0002 | 1        | iniciar-preregistro-cuenta    |
        | RAIA-BS-0002 | 2        | validar-curp-renapo-operadora |
