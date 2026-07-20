# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0014: Verify complete scenario layout and element rendering
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
    - button "Elección de modalidad de pensión 15 pasos estructurados" [pressed]
    - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados"
    - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados"
    - button "Transferencia de recursos al Fondo 15 pasos estructurados"
    - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados"
  - link "Volver al Portal Principal":
    - /url: /
  - text: "ID: RAIA-BS-0014 Proposed Pending Validation"
  - heading "Elección de modalidad de pensión" [level=1]
  - figure "Elección de modalidad de pensión":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Elección de modalidad de pensión": Diagrama de secuencia vectorial con 18 participantes y 15 interacciones. sd RAIA-BS-0014 alt [Condiciones de Negocio] [else Renta vitalicia] [else Retiro programado] [else Pensión garantizada] [else Elección no válida] Trabajador Gestión de Solicitudes Pensionarias Resolución de Pensión Elegibilidad Pensionaria Proyección Pensionaria Retiro Programado Renta Vitalicia Pensión Garantizada Aseguradoras Gestión de Consentimiento Firma Electrónica Expediente Electrónico Notificaciones Resolución elegibilidad Proyección expediente Modalidad de Pensión [1] Recuperar resolución. [2] Confirmar condiciones. [3] Solicitar alternativas. [4] Calcular alternativa. [5] Solicitar alternativa. [6] Obtener ofertas o condiciones. [7] Evaluar procedencia. [8] Entregar alternativas. [9] Presentar modalidades. [10] Seleccionar modalidad. [11] Formalizar elección. [12] Conservar evidencia. [13] Iniciar ejecución. [14] Confirmar elección. [15] Entregar acuse.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Elección de modalidad de pensión
  - region "Flujo y Pasos Estructurados (15)":
    - heading "Flujo y Pasos Estructurados (15)" [level=2]
    - button "1 Recuperar resolución. Gestión de Solicitudes Pensionarias→Resolución de Pensión SYNCHRONOUS-COMMAND":
      - text: "1"
      - heading "Recuperar resolución." [level=3]
      - paragraph: Gestión de Solicitudes Pensionarias→Resolución de Pensión
      - text: SYNCHRONOUS-COMMAND
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```