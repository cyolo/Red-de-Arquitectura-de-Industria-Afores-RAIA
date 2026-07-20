# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\all-scenarios.spec.ts >> All Business Scenarios Parameterized E2E Verification >> RAIA-BS-0015: Verify complete scenario layout and element rendering
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
    - button "Transferencia de fondos para renta vitalicia 16 pasos estructurados" [pressed]
    - button "Identificación de cuentas potencialmente elegibles para el Fondo 16 pasos estructurados"
    - button "Transferencia de recursos al Fondo 15 pasos estructurados"
    - button "Cálculo y gestión del complemento de pensión 17 pasos estructurados"
  - link "Volver al Portal Principal":
    - /url: /
  - text: "ID: RAIA-BS-0015 Proposed Pending Validation"
  - heading "Transferencia de fondos para renta vitalicia" [level=1]
  - figure "Transferencia de fondos para renta vitalicia":
    - toolbar "Controles del diagrama de secuencia":
      - button "Acercar (+)"
      - button "Alejar (-)"
      - button "Ajustar al contenido (0)"
      - button "Restablecer vista (1)"
      - button "Visualizar a pantalla completa (F)"
    - img "Transferencia de fondos para renta vitalicia": Diagrama de secuencia vectorial con 17 participantes y 16 interacciones. sd RAIA-BS-0015 alt [Excepciones] [else Fallo de conexión] Trabajador Resolución de Pensión Gestión de Renta Vitalicia Determinación de Recursos Desinversión de Recursos Transferencia de Recursos Institución Financiera Custodia Aseguradora Seguro de Sobrevivencia Libro Mayor Conciliación Notificaciones Resolución Determinación Desinversión transferencia [1] Confirmar modalidad. [2] Calcular monto. [3] Entregar monto. [4] Confirmar contratación. [5] Aceptar operación. [6] Liberar recursos. [7] Entregar efectivo disponible. [8] Instruir liquidación. [9] Transferir recursos. [10] Confirmar recepción. [11] Configurar cobertura. [12] Registrar disposición. [13] Conciliar saldo. [14] Confirmar cierre. [15] Comunicar resultado. [16] Confirmar contratación.
  - tablist "Secciones del escenario":
    - tab "Pasos y Flujo" [selected]
    - tab "Narrativa Arquitectónica"
  - paragraph: Transferencia de fondos para renta vitalicia
  - region "Flujo y Pasos Estructurados (16)":
    - heading "Flujo y Pasos Estructurados (16)" [level=2]
    - button "1 Confirmar modalidad. Resolución→Gestión de Renta Vitalicia Respuesta":
      - text: "1"
      - heading "Confirmar modalidad." [level=3]
      - paragraph: Resolución→Gestión de Renta Vitalicia
      - text: Respuesta
- contentinfo:
  - paragraph: DisclaimerRAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
  - paragraph: "RAIA 0.1.0 © 2026. Licencia: Código MIT, Modelos CC BY 4.0."
- alert
```