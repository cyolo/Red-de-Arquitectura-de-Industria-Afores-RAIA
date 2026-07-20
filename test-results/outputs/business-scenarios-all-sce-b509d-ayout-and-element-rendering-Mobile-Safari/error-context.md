# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0001: Verify complete scenario layout and element rendering
- Location: tests\e2e\business-scenarios\all-scenarios.spec.ts:6:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByTestId('scenario-detail').getByTestId('scenario-architecture-narrative')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('scenario-detail').getByTestId('scenario-architecture-narrative')
    13 × locator resolved to <div class="p-4 space-y-4" data-testid="scenario-architecture-narrative">…</div>
       - unexpected value "hidden"

```

```yaml
- link "Saltar al contenido principal":
  - /url: "#main-content"
- banner:
  - link "RAIA 0.1.0":
    - /url: /
  - button "Buscar en el portal (Presione Control + K)": Buscar en RAIA...
  - button "Abrir menú"
- main:
  - complementary:
    - heading "Escenarios (0.1.0)" [level=2]
    - button "Colapsar panel"
    - button "Registro y Traspaso de Cuenta Individual 21 pasos estructurados" [pressed]
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
  - link "Volver al Portal Principal":
    - /url: /
  - text: "ID: RAIA-BS-0001 Proposed Pending Validation"
  - heading "Registro y Traspaso de Cuenta Individual" [level=1]
  - figure "Registro y Traspaso de Cuenta Individual":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Registro y Traspaso de Cuenta Individual": Diagrama de secuencia vectorial con 14 participantes y 21 interacciones. sd RAIA-BS-0001 alt [Condiciones de Negocio] [else Cuenta no registrada] [else Cuenta registrada en otra AFORE] [else Múltiples cuentas] [else Cuenta no elegible] Trabajador Gestión de Solicitudes Resolución de Identidad Identidad Biométrica Expediente Electrónico Gestión de Consentimiento Localización de Cuenta Base de Datos Nacional SAR Traspaso de Cuenta AFORE transferente Libro Mayor de Cuenta Individual Notificaciones BDNSAR libro mayor [1] Solicitar registro o traspaso. [2] Recuperar datos. [3] Entregar datos disponibles. [4] Validar identidad. [5] Validar biometría y prueba de vida. [6] Confirmar resultado biométrico. [7] Integrar expediente. [8] Capturar consentimiento. [9] Consultar existencia de cuenta. [10] Buscar cuenta individual. [11] Entregar estado de cuenta. [12] Informar resultado. [13] Registrar solicitud. [14] Solicitar información y saldos. [15] Entregar información. [16] Solicitar aceptación. [17] Confirmar aceptación. [18] Registrar transferencia. [19] Confirmar registro. [20] Emitir resultado. [21] Notificar registro o traspaso.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Proceso completo mediante el cual un trabajador solicita el traspaso de su cuenta individual a otra Afore, incluyendo validación biométrica, de expediente y actualización del libro mayor.
  - region "Flujo y Pasos Estructurados (21)":
    - heading "Flujo y Pasos Estructurados (21)" [level=2]
    - button "1 Solicitar registro o traspaso. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Solicitar registro o traspaso." [level=3]
      - paragraph: Trabajador→Gestión de Solicitudes
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```