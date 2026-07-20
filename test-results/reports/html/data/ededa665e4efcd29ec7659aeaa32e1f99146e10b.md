# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0002: Verify complete scenario layout and element rendering
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
    - button "Recaudación de Aportaciones e Inversión 15 pasos estructurados" [pressed]
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
  - text: "ID: RAIA-BS-0002 Proposed Pending Validation"
  - heading "Recaudación de Aportaciones e Inversión" [level=1]
  - figure "Recaudación de Aportaciones e Inversión":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Recaudación de Aportaciones e Inversión": Diagrama de secuencia vectorial con 17 participantes y 15 interacciones. sd RAIA-BS-0002 alt [Condiciones de Negocio] [else Lote conciliado] [else Pago no identificado] [else Diferencia de monto] [else Trabajador no localizado] Patrón o dependencia Entidad Recaudadora Determinación de Aportaciones Recaudación de Aportaciones Conciliación de Recaudación Individualización de Aportaciones Administración de Subcuentas Libro Mayor Asignación de Acciones Asignación a SIEFORE Gestión de Liquidez Portafolio de Inversión patr n Determinación recaudaci n Conciliación portafolio [1] Presentar información de cotización. [2] Generar instrucción de aportación. [3] Enterar recursos. [4] Entregar recursos e información. [5] Registrar lote recibido. [6] Confirmar o solicitar corrección. [7] Liberar lote conciliado. [8] Distribuir aportaciones. [9] Registrar movimientos. [10] Solicitar asignación. [11] Determinar fondo. [12] Informar recursos disponibles. [13] Integrar recursos al proceso de inversión. [14] Confirmar posición y acciones. [15] Confirmar acreditación.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Flujo por el cual las aportaciones patronales bimestrales entran al sistema, se concilian, se individualizan y se invierten en la SIEFORE correspondiente.
  - region "Flujo y Pasos Estructurados (15)":
    - heading "Flujo y Pasos Estructurados (15)" [level=2]
    - button "1 Presentar información de cotización. patr n→Determinación de Aportaciones SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Presentar información de cotización." [level=3]
      - paragraph: patr n→Determinación de Aportaciones
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```