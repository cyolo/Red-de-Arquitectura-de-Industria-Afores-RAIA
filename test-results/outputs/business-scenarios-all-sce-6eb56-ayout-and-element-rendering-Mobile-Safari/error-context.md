# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0018: Verify complete scenario layout and element rendering
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
    - button "Construcción y rebalanceo de portafolio 15 pasos estructurados"
    - button "Ejecución y liquidación de operaciones 16 pasos estructurados"
    - button "Valuación de instrumentos financieros 12 pasos estructurados"
    - button "Retiro por desempleo IMSS/ISSSTE 17 pasos estructurados"
    - button "Ayuda para gastos de matrimonio 14 pasos estructurados"
    - button "Elección de modalidad de pensión 15 pasos estructurados"
    - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados"
    - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados"
    - button "Transferencia de recursos al Fondo 15 pasos estructurados"
    - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados" [pressed]
  - link "Volver al Portal Principal":
    - /url: /
  - text: "ID: RAIA-BS-0018 Proposed Pending Validation"
  - heading "Cálculo y gestión del complemento de pensión" [level=1]
  - figure "Cálculo y gestión del complemento de pensión":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Cálculo y gestión del complemento de pensión": Diagrama de secuencia vectorial con 16 participantes y 17 interacciones. sd RAIA-BS-0018 alt [Condiciones de Negocio] [else Complemento procedente] [else No existe diferencia] [else Información inconsistente] [else Revisión manual requerida] [else Pago rechazado] Pensionado Resolución de Pensión IMSS ISSSTE Validación de Elegibilidad Fondo de Pensiones para el Bienestar Cálculo de Complemento Autorización de Complemento Gestión de Pagos Institución Financiera Conciliación Información Regulatoria Notificaciones validaci n Cálculo Autorización [1] Solicitar evaluación. [2] Consultar información pensionaria. [3] Consultar información cuando aplique. [4] Entregar información. [5] Consultar parámetros vigentes. [6] Entregar parámetros. [7] Solicitar cálculo. [8] Aplicar parámetros y validaciones. [9] Presentar resultado. [10] Aprobar o rechazar. [11] Configurar pago. [12] Ejecutar complemento. [13] Confirmar pago. [14] Conciliar operación. [15] Registrar resultado. [16] Comunicar pago. [17] Informar complemento.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Cálculo y gestión del complemento de pensión
  - region "Flujo y Pasos Estructurados (17)":
    - heading "Flujo y Pasos Estructurados (17)" [level=2]
    - button "1 Solicitar evaluación. Resolución de Pensión→validaci n SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Solicitar evaluación." [level=3]
      - paragraph: Resolución de Pensión→validaci n
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```