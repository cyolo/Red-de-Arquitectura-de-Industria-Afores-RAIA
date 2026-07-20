# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0006: Verify complete scenario layout and element rendering
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
    - button "Registro y Traspaso de Cuenta Individual 21 pasos estructurados"
    - button "Recaudación de Aportaciones e Inversión 15 pasos estructurados"
    - button "Localización de cuenta individual 13 pasos estructurados"
    - button "Asignación automática de cuentas 15 pasos estructurados"
    - button "Reasignación por desempeño 16 pasos estructurados"
    - button "Unificación de cuentas duplicadas 17 pasos estructurados" [pressed]
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
  - text: "ID: RAIA-BS-0006 Proposed Pending Validation"
  - heading "Unificación de cuentas duplicadas" [level=1]
  - figure "Unificación de cuentas duplicadas":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Unificación de cuentas duplicadas": Diagrama de secuencia vectorial con 15 participantes y 17 interacciones. sd RAIA-BS-0006 alt [Condiciones de Negocio] [else Identidad coincidente] [else Evidencia insuficiente] [else Cuentas de personas distintas] [else Diferencia de saldos] Trabajador Gestión de Solicitudes Resolución de Identidad Gestión de Identidadtificadores BDNSAR Unificación de Cuentas IMSS ISSSTE AFORE involucradas Conciliación de Cuenta Libro Mayor Notificaciones Resolución unificaci n Conciliación [1] Solicitar unificación. [2] Validar persona. [3] Comparar CURP, NSS y RFC. [4] Consultar cuentas asociadas. [5] Entregar cuentas candidatas. [6] Validar información. [7] Validar información. [8] Entregar antecedentes. [9] Entregar antecedentes. [10] Solicitar movimientos y saldos. [11] Entregar información. [12] Conciliar recursos. [13] Confirmar saldo integrado. [14] Consolidar movimientos. [15] Actualizar cuenta concentradora. [16] Emitir resultado. [17] Confirmar unificación.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Unificación de cuentas duplicadas
  - region "Flujo y Pasos Estructurados (17)":
    - heading "Flujo y Pasos Estructurados (17)" [level=2]
    - button "1 Solicitar unificación. Trabajador→Gestión de Solicitudes SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Solicitar unificación." [level=3]
      - paragraph: Trabajador→Gestión de Solicitudes
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```