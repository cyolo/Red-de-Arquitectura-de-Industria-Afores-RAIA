# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0009: Verify complete scenario layout and element rendering
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
    - button "Unificación de cuentas duplicadas 17 pasos estructurados"
    - button "Separación de cuentas IMSS/ISSSTE 15 pasos estructurados"
    - button "Asignación automática a SIEFORE Generacional 12 pasos estructurados"
    - button "Construcción y rebalanceo de portafolio 15 pasos estructurados" [pressed]
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
  - text: "ID: RAIA-BS-0009 Proposed Pending Validation"
  - heading "Construcción y rebalanceo de portafolio" [level=1]
  - figure "Construcción y rebalanceo de portafolio":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Construcción y rebalanceo de portafolio": Diagrama de secuencia vectorial con 17 participantes y 15 interacciones. sd RAIA-BS-0009 alt [Condiciones de Negocio] [else Propuesta aprobada] [else Exceso de límite] [else Liquidez insuficiente] [else Rebalanceo de emergencia] Comité de Inversión Estrategia de Inversión Construcción de Portafolio Gestión de Benchmark Gestión de Liquidez Gestión de Límites Riesgo de Inversión Cumplimiento del Régimen Ejecución de Operaciones estrategia Construcción benchmark liquidez l mites riesgo cumplimiento Ejecución [1] Solicitar propuesta. [2] Entregar lineamientos. [3] Recuperar referencia. [4] Consultar necesidades. [5] Consultar restricciones. [6] Entregar referencia. [7] Entregar proyección. [8] Entregar restricciones. [9] Evaluar portafolio objetivo. [10] Validar régimen. [11] Confirmar resultado. [12] Entregar evaluación. [13] Presentar propuesta. [14] Aprobar o rechazar. [15] Generar plan de rebalanceo.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Construcción y rebalanceo de portafolio
  - region "Flujo y Pasos Estructurados (15)":
    - heading "Flujo y Pasos Estructurados (15)" [level=2]
    - button "1 Solicitar propuesta. Comité de Inversión→Estrategia de Inversión SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Solicitar propuesta." [level=3]
      - paragraph: Comité de Inversión→Estrategia de Inversión
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```