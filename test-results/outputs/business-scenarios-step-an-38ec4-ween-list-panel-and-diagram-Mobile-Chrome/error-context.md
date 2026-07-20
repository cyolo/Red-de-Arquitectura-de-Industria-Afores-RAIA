# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: business-scenarios\step-analysis.spec.ts >> RAIA Business Scenarios - Step Analysis Context >> desktop layout synchronization between list, panel, and diagram
- Location: tests\e2e\business-scenarios\step-analysis.spec.ts:5:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('scenario-step-analysis-panel')
Expected substring: "2 de"
Received string:    "Paso 1 de 21Solicitar registro o traspaso.Trabajador→Gestión de SolicitudesSYNCHRONOUS-COMMANDPropósito de NegocioPermite cambiar el estado de la operación hacia la siguiente fase de consolidación.Contexto EstructuralInteracción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.Comportamiento Sistémicop-trabajador emite Solicitar registro o traspaso. a p-gesti-n-de-soli. ControlValidación de formato e integridad de origen antes del envío. ExcepciónSi la conexión falla, se genera bitácora de excepción.Anterior1 / 21Siguiente"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByTestId('scenario-step-analysis-panel')
    14 × locator resolved to <aside aria-live="polite" id="scenario-step-analysis" aria-labelledby="step-analysis-title" data-testid="scenario-step-analysis-panel" class="flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">…</aside>
       - unexpected value "Paso 1 de 21Solicitar registro o traspaso.Trabajador→Gestión de SolicitudesSYNCHRONOUS-COMMANDPropósito de NegocioPermite cambiar el estado de la operación hacia la siguiente fase de consolidación.Contexto EstructuralInteracción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.Comportamiento Sistémicop-trabajador emite Solicitar registro o traspaso. a p-gesti-n-de-soli. ControlValidación de formato e integridad de origen antes del envío. ExcepciónSi la conexión falla, se genera bitácora de excepción.Anterior1 / 21Siguiente"

```

```yaml
- complementary "Solicitar registro o traspaso.":
  - text: Paso 1 de 21
  - heading "Solicitar registro o traspaso." [level=3]
  - paragraph: Trabajador→Gestión de Solicitudes
  - text: SYNCHRONOUS-COMMAND
  - heading "Propósito de Negocio" [level=4]
  - paragraph: Permite cambiar el estado de la operación hacia la siguiente fase de consolidación.
  - heading "Contexto Estructural" [level=4]
  - paragraph: Interacción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.
  - heading "Comportamiento Sistémico" [level=4]
  - paragraph: p-trabajador emite Solicitar registro o traspaso. a p-gesti-n-de-soli.
  - heading "Control" [level=5]
  - paragraph: Validación de formato e integridad de origen antes del envío.
  - heading "Excepción" [level=5]
  - paragraph: Si la conexión falla, se genera bitácora de excepción.
  - button "Anterior" [disabled]
  - text: 1 / 21
  - button "Siguiente"
```