# Matriz de Evidencia Visual

Este documento relaciona cada hallazgo de la auditoría con su captura de pantalla, ruta, archivo de código y métricas físicas correspondientes.

## 📐 Matriz de Asociación de Evidencias

| ID Hallazgo | Captura de Evidencia Directa (Ruta Relativa) | Ruta URL | Componente / Archivo | Selector DOM / Línea | Métrica Asociada | Confianza |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AUD-001** | [Ver Captura](./screenshots/desktop/019-business-scenarios-desktop-1440x900-default-fullpage.png) | `/business-scenarios` | `BusinessScenariosClient.tsx` | `#structured-steps` | `scrollHeight: 6478px`, `scrollRatio: 7.2` | Evidencia Directa |
| **AUD-002** | [Ver Captura](./screenshots/desktop/025-service-landscape-value-chain-desktop-1440x900-default-viewport.png) | `/service-landscape/value-chain` | `ValueChainViewClient.tsx` | `.react-flow__node` | `aboveFoldCount: 97` (elementos sin foco de teclado) | Evidencia Directa |
| **AUD-003** | [Ver Captura](./screenshots/desktop/025-service-landscape-value-chain-desktop-1440x900-default-viewport.png) | `/service-landscape/value-chain` | `ValueChainViewClient.tsx` | `.react-flow__viewport` | `scrollableContainersCount: 151` | Evidencia Directa |
| **AUD-004** | [Ver Captura](./screenshots/desktop/031-service-domains-politica-del-sistema-de-ahorro-para-el-retiro-desktop-1440x900-default-fullpage.png) | `/service-domains/[slug]` | `DetailSidebar.tsx` | `DetailSidebar` | `scrollRatio: 2.99` | Inferencia |
| **AUD-005** | [Ver Captura](./screenshots/desktop/001-home-desktop-1440x900-default-viewport.png) | `/` | `HomePage` | `span.border-emerald-200` | Relación contraste < 4.5:1 | Evidencia Directa |
| **AUD-006** | [Ver Captura](./screenshots/desktop/001-home-desktop-1440x900-default-viewport.png) | `/` | `Header.tsx` | `nav.hidden.md:flex` | Ocultación en breakpoints | Evidencia Directa |
| **AUD-007** | [Ver Captura](./screenshots/desktop/001-home-desktop-1440x900-default-fullpage.png) | `/` | `HomePage` | `div.grid-cols-1.md:grid-cols-3` | `scrollHeight: 4356px`, `scrollRatio: 4.84` | Evidencia Directa |

---

## 📌 Niveles de Confianza de la Auditoría

* **Evidencia Directa (100% Confianza)**: Observada en la interfaz y en el código del componente. Los archivos se localizan exactamente en la ruta mapeada y las métricas fueron medidas mediante scripts de automatización con Playwright.
* **Inferencia (80% Confianza)**: Conclusión derivada del comportamiento observado (e.g. la pérdida de estado de filtros ocurre al desmontar el componente en Next.js, lo cual se confirma al recargar la ruta).
