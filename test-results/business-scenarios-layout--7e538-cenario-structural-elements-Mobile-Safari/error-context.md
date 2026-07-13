# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios-layout.spec.ts >> Business Scenarios Layout >> ensures correct DOM placement of scenario structural elements
- Location: tests\e2e\business-scenarios-layout.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('scenario-detail').getByTestId('scenario-structured-steps')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('scenario-detail').getByTestId('scenario-structured-steps')

```

```yaml
- banner:
  - link "RAIA 0.1.0":
    - /url: /
  - button "Buscar en el portal (Presione Control + K)": Buscar en RAIA...
  - button "Abrir menú"
- main:
  - link "Volver al Portal Principal":
    - /url: /
  - heading "RAIA Business Scenarios" [level=1]
  - paragraph: Catálogo e Interacción de Secuencias del SAR
  - paragraph: Catálogo dinámico de escenarios lógicos de industria propuestos. A continuación puede visualizar y simular de extremo a extremo las interacciones ordenadas entre Service Domains necesarios para ejecutar trámites clave del Sistema de Ahorro para el Retiro.
  - heading "Escenarios Propuestos (0.1.0)" [level=2]
  - button "Registro y Traspaso de Cuenta Individual 21 pasos estructurados"
  - button "Recaudación de Aportaciones e Inversión 15 pasos estructurados"
  - button "Localización de cuenta individual 13 pasos estructurados"
  - button "Asignación automática de cuentas 15 pasos estructurados"
  - button "Reasignación por desempeño 16 pasos estructurados"
  - button "Unificación de cuentas duplicadas 17 pasos estructurados"
  - button "Separación de cuentas IMSS/ISSSTE 15 pasos estructurados"
  - button "Asignación automática a SIEFORE Generacional 12 pasos estructurados"
  - button "Construcción y rebalanceo de portafolio 15 pasos estructurados"
  - button "Ejecución y liquidación de operaciones 16 pasos estructurados"
  - button "Valuación de instrumentos financieros 12 pasos estructurados"
  - button "Retiro por desempleo IMSS/ISSSTE 17 pasos estructurados"
  - button "Ayuda para gastos de matrimonio 14 pasos estructurados"
  - button "Elección de modalidad de pensión 15 pasos estructurados"
  - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados"
  - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados"
  - button "Transferencia de recursos al Fondo 15 pasos estructurados"
  - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados"
  - text: "ID: RAIA-BS-0001 Estado: Proposed Validación: Pending"
  - heading "Registro y Traspaso de Cuenta Individual" [level=2]
  - paragraph: Proceso completo mediante el cual un trabajador solicita el traspaso de su cuenta individual a otra Afore, incluyendo validación biométrica, de expediente y actualización del libro mayor.
  - figure "Registro y Traspaso de Cuenta Individual":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Registro y Traspaso de Cuenta Individual": Diagrama de secuencia vectorial con 14 participantes y 21 interacciones. sd RAIA-BS-0001 alt [Condiciones de Negocio] [else Cuenta no registrada] [else Cuenta registrada en otra AFORE] [else Múltiples cuentas] [else Cuenta no elegible] Trabajador Gestión de Solicitudes Resolución de Identidad Identidad Biométrica Expediente Electrónico Gestión de Consentimiento Localización de Cuenta Base de Datos Nacional SAR Traspaso de Cuenta AFORE transferente Libro Mayor de Cuenta Individual Notificaciones BDNSAR libro mayor [1] Solicitar registro o traspaso. [2] Recuperar datos. [3] Entregar datos disponibles. [4] Validar identidad. [5] Validar biometría y prueba de vida. [6] Confirmar resultado biométrico. [7] Integrar expediente. [8] Capturar consentimiento. [9] Consultar existencia de cuenta. [10] Buscar cuenta individual. [11] Entregar estado de cuenta. [12] Informar resultado. [13] Registrar solicitud. [14] Solicitar información y saldos. [15] Entregar información. [16] Solicitar aceptación. [17] Confirmar aceptación. [18] Registrar transferencia. [19] Confirmar registro. [20] Emitir resultado. [21] Notificar registro o traspaso.
  - region "Pasos estructurados del escenario":
    - heading "Pasos estructurados del escenario" [level=2]
    - paragraph: Secuencia cronológica de interacciones arquitectónicas, flujos de control y transferencias de información.
    - button "1 Solicitar registro o traspaso. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Solicitar registro o traspaso." [level=3]
      - paragraph: Trabajador→Gestión de Solicitudes
      - text: SYNCHRONOUS-COMMAND
  - heading "Narrativa arquitectónica del escenario" [level=2]
  - paragraph: Conectando la vista estructural con el comportamiento transaccional
  - heading "Resumen ejecutivo" [level=3]
  - paragraph: El escenario coordina el registro o traspaso de cuenta de un trabajador, asegurando identidad y voluntad.
  - heading "Cómo colaboran las estructuras" [level=3]
  - paragraph: Gestión de Solicitudes no realiza todas las validaciones, sino que orquesta responsabilidades independientes. Esta separación permite que identidad, consentimiento, transferencia y registro financiero mantengan controles y evidencias propios.
  - heading "Contexto estructural" [level=3]
  - paragraph: Se apoya en una estructura coordinadora encabezada por Gestión de Solicitudes, mientras los dominios de Datos del Trabajador, Resolución de Identidad, Identidad Biométrica, Expediente Electrónico y Consentimiento aseguran que la persona y su voluntad sean verificables. Localización de Cuenta y la Base de Datos Nacional SAR determinan la situación actual de la cuenta. Traspaso de Cuenta coordina la interacción entre la AFORE transferente y la receptora. Libro Mayor conserva la integridad financiera.
  - heading "Trabajador" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Gestión de Solicitudes" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Datos del Trabajador" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Resolución de Identidad" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Identidad Biométrica" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Expediente Electrónico" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Gestión de Consentimiento" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Localización de Cuenta" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Base de Datos Nacional SAR" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Traspaso de Cuenta" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "AFORE transferente" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "AFORE receptora" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Libro Mayor de Cuenta Individual" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Notificaciones" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "bdnsar" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "libro mayor" [level=4]
  - text: "Rol Estructural: Service Domain coordinador / ejecutor Responsabilidad: Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados."
  - heading "Comportamiento del escenario" [level=3]
  - paragraph: El trabajador inicia la solicitud. La estructura de identidad y expediente valida a la persona antes de consultar la cuenta. El resultado de localización determina si corresponde registrar, traspasar, unificar o rechazar. Cuando procede el traspaso, la administradora transferente entrega información y recursos, la receptora confirma su aceptación y el Libro Mayor registra el cambio. El escenario concluye cuando la cuenta, sus saldos y el registro maestro reflejan a la administradora responsable.
  - heading "Fases del flujo de extremo a extremo" [level=3]
  - text: "1"
  - heading "Fase 1 — Inicio y registro" [level=4]
  - paragraph: Estructuras involucradas en la captura y validación primaria.
  - paragraph: Se ejecutan las validaciones iniciales y se captura el intent de negocio.
  - text: "Resultado: Contexto validado 2"
  - heading "Fase 2 — Ejecución y cierre" [level=4]
  - paragraph: Estructuras encargadas de asentar la resolución financiera y operativa.
  - paragraph: Se consolida el estado final en libros mayores y registros maestros.
  - text: "Resultado: Transacción liquidada y notificada"
  - heading "Decisiones y excepciones" [level=3]
  - paragraph: "Las siguientes condiciones de negocio modifican o bifurcan el flujo principal:"
  - list:
    - listitem: Cuenta no registrada
    - listitem: cuenta en otra AFORE
    - listitem: cuentas duplicadas
    - listitem: cuenta no elegible
    - listitem: identidad no validada
    - listitem: transferencia no conciliada.
  - paragraph: En caso de falla técnica o rechazo de negocio, la operación se revierte (rollback) y se informa al iniciador para no mantener saldos en tránsito colgados.
  - heading "Controles" [level=3]
  - paragraph: Se aplican validaciones preventivas de identidad y saldo, y controles detectivos durante la fase de conciliación contable.
  - heading "Evidencias" [level=3]
  - paragraph: Se conservan bitácoras de aplicación, sellos de tiempo de recepción y los identificadores de trazabilidad en el Libro Mayor.
  - heading "Resultado Arquitectónico" [level=3]
  - paragraph: El resultado es un cambio de estado en el registro maestro garantizando la atomicidad, durabilidad y consistencia de los datos.
  - heading "Supuestos Trazables" [level=4]
  - list:
    - listitem: Disponibilidad de BDNSAR
    - listitem: Conformidad con manuales operativos CONSAR
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```