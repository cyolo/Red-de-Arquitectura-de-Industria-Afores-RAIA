# 08 - Pruebas de Regresión Funcional (Functional Regression)

## Suite de Pruebas Unitarias
- **Comando:** `npm run test` e `npx vitest run`
- **Resultados:**
  - `npm run test` -> 7 passed, 0 failed.
  - `npx vitest run` -> 10 passed, 0 failed.
  - **Estatus:** **APROBADAS CON ÉXITO**

## Suite de Pruebas de Calidad E2E (Playwright)
- **Comando:** `npm run test:e2e`
- **Resultados:**
  - La suite de pruebas de Playwright confirma la correcta carga de todas las páginas, la reactividad de los filtros, la visualización del diagrama de secuencias y el buscador global.
  - Todos los IDs de negocio y relaciones se mantuvieron intactos.
  - **Estatus:** **APROBADAS CON ÉXITO**
