# 07 - Comparación de Scroll (Scroll Comparison)

Este reporte presenta la comparación del nivel de desplazamiento vertical (medido como la proporción del alto total del documento sobre la altura del viewport `scrollRatio`) antes y después del refactor en la resolución estándar de laptop/desktop (`1440 × 900`).

## Tabla Comparativa de Scroll (1440 × 900)

| Ruta | Antes (scrollRatio) | Después (scrollRatio) | Reducción (%) | Resultado |
| :--- | :---: | :---: | :---: | :---: |
| `/` | 4.84 | 2.97 | 38.6% | ⚠️ LIGERAMENTE ALTO |
| `/dashboard` | 1.11 | 1.11 | 0.0% | ✅ CUMPLE |
| `/metamodel` | 2.69 | 2.69 | 0.0% | ✅ CUMPLE |
| `/business-scenarios` | 7.20 | 1.67 | 76.8% | ⚠️ LIGERAMENTE ALTO |
| `/service-landscape/value-chain` | 3.21 | 3.21 | 0.0% | ⚠️ LIGERAMENTE ALTO |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | 2.99 | 2.99 | 0.0% | ✅ CUMPLE |
| `/releases` | 1.06 | 1.06 | 0.0% | ✅ CUMPLE |
| `/methodology` | 1.97 | 1.97 | 0.0% | ✅ CUMPLE |
| `/contribute` | 1.58 | 1.58 | 0.0% | ✅ CUMPLE |
| `/regulatory-architecture` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/reference-model` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/control-record-model` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/business-object-model` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/architecture-overview` | 4.84 | 2.97 | 38.6% | ✅ CUMPLE |
| `/information-architecture` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/wireframes` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/capability-map` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/capability-map/views` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/business-scenarios/snippets` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/service-landscape/matrix` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/service-landscape/overview-diagrams` | 1.00 | 1.00 | 0.0% | ✅ CUMPLE |
| `/business-areas/gobierno-y-direccion-del-sar` | 1.09 | 1.09 | 0.0% | ✅ CUMPLE |
| `/business-areas/riesgo-cumplimiento-y-supervision` | 1.11 | 1.11 | 0.0% | ✅ CUMPLE |
| `/business-areas/identidad-partes-y-expediente` | 1.09 | 1.09 | 0.0% | ✅ CUMPLE |
| `/business-domains/estrategia-y-politica-del-sar` | 1.51 | 1.51 | 0.0% | ✅ CUMPLE |
| `/business-domains/regulacion-y-autorizaciones` | 1.51 | 1.51 | 0.0% | ✅ CUMPLE |
| `/business-domains/gobierno-y-desempeno` | 1.51 | 1.51 | 0.0% | ✅ CUMPLE |
| `/service-domains/estrategia-de-industria` | 2.91 | 2.91 | 0.0% | ✅ CUMPLE |
| `/service-domains/planeacion-sectorial` | 2.91 | 2.91 | 0.0% | ✅ CUMPLE |

## Detalles de Viewports y Categoría de Scroll

| Ruta | Viewport | scrollRatio (Antes) | scrollRatio (Después) | Categoría (Antes) | Categoría (Después) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `/` | desktop-1440x900 | 4.84 | 2.97 | `excessive` | `high` |
| `/` | desktop-1366x768 | 5.67 | 3.48 | `excessive` | `excessive` |
| `/` | desktop-1280x800 | 5.45 | 3.34 | `excessive` | `excessive` |
| `/` | tablet-1024x768 | 5.69 | 3.53 | `excessive` | `excessive` |
| `/` | tablet-768x1024 | 4.42 | 2.80 | `excessive` | `high` |
| `/` | mobile-390x844 | 10.41 | 7.90 | `excessive` | `excessive` |
| `/dashboard` | desktop-1440x900 | 1.11 | 1.11 | `compact` | `compact` |
| `/dashboard` | desktop-1366x768 | 1.30 | 1.30 | `moderate` | `moderate` |
| `/dashboard` | desktop-1280x800 | 1.25 | 1.25 | `compact` | `compact` |
| `/dashboard` | tablet-1024x768 | 1.32 | 1.32 | `moderate` | `moderate` |
| `/dashboard` | tablet-768x1024 | 1.19 | 1.19 | `compact` | `compact` |
| `/dashboard` | mobile-390x844 | 2.36 | 2.36 | `high` | `high` |
| `/metamodel` | desktop-1440x900 | 2.69 | 2.69 | `high` | `high` |
| `/metamodel` | desktop-1366x768 | 3.16 | 3.16 | `excessive` | `excessive` |
| `/metamodel` | desktop-1280x800 | 3.03 | 3.03 | `excessive` | `excessive` |
| `/metamodel` | tablet-1024x768 | 3.18 | 3.18 | `excessive` | `excessive` |
| `/metamodel` | tablet-768x1024 | 2.71 | 2.71 | `high` | `high` |
| `/metamodel` | mobile-390x844 | 4.75 | 4.75 | `excessive` | `excessive` |
| `/business-scenarios` | desktop-1440x900 | 7.20 | 1.67 | `excessive` | `moderate` |
| `/business-scenarios` | desktop-1366x768 | 8.26 | 1.95 | `excessive` | `moderate` |
| `/business-scenarios` | desktop-1280x800 | 7.97 | 1.88 | `excessive` | `moderate` |
| `/business-scenarios` | tablet-1024x768 | 8.17 | 2.13 | `excessive` | `high` |
| `/business-scenarios` | tablet-768x1024 | 7.35 | 1.61 | `excessive` | `moderate` |
| `/business-scenarios` | mobile-390x844 | 12.91 | 1.98 | `excessive` | `moderate` |
| `/service-landscape/value-chain` | desktop-1440x900 | 3.21 | 3.21 | `excessive` | `excessive` |
| `/service-landscape/value-chain` | desktop-1366x768 | 3.76 | 3.76 | `excessive` | `excessive` |
| `/service-landscape/value-chain` | desktop-1280x800 | 3.88 | 3.88 | `excessive` | `excessive` |
| `/service-landscape/value-chain` | tablet-1024x768 | 5.10 | 5.10 | `excessive` | `excessive` |
| `/service-landscape/value-chain` | tablet-768x1024 | 4.61 | 4.61 | `excessive` | `excessive` |
| `/service-landscape/value-chain` | mobile-390x844 | 10.57 | 10.57 | `excessive` | `excessive` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | desktop-1440x900 | 2.99 | 2.99 | `high` | `high` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | desktop-1366x768 | 3.50 | 3.50 | `excessive` | `excessive` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | desktop-1280x800 | 3.36 | 3.36 | `excessive` | `excessive` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | tablet-1024x768 | 3.53 | 3.53 | `excessive` | `excessive` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | tablet-768x1024 | 2.98 | 2.98 | `high` | `high` |
| `/service-domains/politica-del-sistema-de-ahorro-para-el-retiro` | mobile-390x844 | 5.50 | 5.50 | `excessive` | `excessive` |
| `/releases` | desktop-1440x900 | 1.06 | 1.06 | `compact` | `compact` |
| `/releases` | mobile-390x844 | 1.74 | 1.74 | `moderate` | `moderate` |
| `/methodology` | desktop-1440x900 | 1.97 | 1.97 | `moderate` | `moderate` |
| `/methodology` | mobile-390x844 | 3.01 | 3.01 | `excessive` | `excessive` |
| `/contribute` | desktop-1440x900 | 1.58 | 1.58 | `moderate` | `moderate` |
| `/contribute` | mobile-390x844 | 2.87 | 2.87 | `high` | `high` |
| `/regulatory-architecture` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/regulatory-architecture` | mobile-390x844 | 1.31 | 1.31 | `moderate` | `moderate` |
| `/reference-model` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/reference-model` | mobile-390x844 | 1.33 | 1.33 | `moderate` | `moderate` |
| `/control-record-model` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/control-record-model` | mobile-390x844 | 1.34 | 1.34 | `moderate` | `moderate` |
| `/business-object-model` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/business-object-model` | mobile-390x844 | 1.38 | 1.38 | `moderate` | `moderate` |
| `/architecture-overview` | desktop-1440x900 | 4.84 | 2.97 | `excessive` | `high` |
| `/architecture-overview` | mobile-390x844 | 10.41 | 7.90 | `excessive` | `excessive` |
| `/information-architecture` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/information-architecture` | mobile-390x844 | 1.38 | 1.38 | `moderate` | `moderate` |
| `/wireframes` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/wireframes` | mobile-390x844 | 1.24 | 1.24 | `compact` | `compact` |
| `/capability-map` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/capability-map` | mobile-390x844 | 1.31 | 1.31 | `moderate` | `moderate` |
| `/capability-map/views` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/capability-map/views` | mobile-390x844 | 1.27 | 1.27 | `moderate` | `moderate` |
| `/business-scenarios/snippets` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/business-scenarios/snippets` | mobile-390x844 | 1.27 | 1.27 | `moderate` | `moderate` |
| `/service-landscape/matrix` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/service-landscape/matrix` | mobile-390x844 | 1.28 | 1.28 | `moderate` | `moderate` |
| `/service-landscape/overview-diagrams` | desktop-1440x900 | 1.00 | 1.00 | `compact` | `compact` |
| `/service-landscape/overview-diagrams` | mobile-390x844 | 1.28 | 1.28 | `moderate` | `moderate` |
| `/business-areas/gobierno-y-direccion-del-sar` | desktop-1440x900 | 1.09 | 1.09 | `compact` | `compact` |
| `/business-areas/gobierno-y-direccion-del-sar` | mobile-390x844 | 1.63 | 1.63 | `moderate` | `moderate` |
| `/business-areas/riesgo-cumplimiento-y-supervision` | desktop-1440x900 | 1.11 | 1.11 | `compact` | `compact` |
| `/business-areas/riesgo-cumplimiento-y-supervision` | mobile-390x844 | 1.66 | 1.66 | `moderate` | `moderate` |
| `/business-areas/identidad-partes-y-expediente` | desktop-1440x900 | 1.09 | 1.09 | `compact` | `compact` |
| `/business-areas/identidad-partes-y-expediente` | mobile-390x844 | 1.62 | 1.62 | `moderate` | `moderate` |
| `/business-domains/estrategia-y-politica-del-sar` | desktop-1440x900 | 1.51 | 1.51 | `moderate` | `moderate` |
| `/business-domains/estrategia-y-politica-del-sar` | mobile-390x844 | 1.93 | 1.93 | `moderate` | `moderate` |
| `/business-domains/regulacion-y-autorizaciones` | desktop-1440x900 | 1.51 | 1.51 | `moderate` | `moderate` |
| `/business-domains/regulacion-y-autorizaciones` | mobile-390x844 | 1.93 | 1.93 | `moderate` | `moderate` |
| `/business-domains/gobierno-y-desempeno` | desktop-1440x900 | 1.51 | 1.51 | `moderate` | `moderate` |
| `/business-domains/gobierno-y-desempeno` | mobile-390x844 | 1.91 | 1.91 | `moderate` | `moderate` |
| `/service-domains/estrategia-de-industria` | desktop-1440x900 | 2.91 | 2.91 | `high` | `high` |
| `/service-domains/estrategia-de-industria` | mobile-390x844 | 5.14 | 5.14 | `excessive` | `excessive` |
| `/service-domains/planeacion-sectorial` | desktop-1440x900 | 2.91 | 2.91 | `high` | `high` |
| `/service-domains/planeacion-sectorial` | mobile-390x844 | 5.01 | 5.01 | `excessive` | `excessive` |
