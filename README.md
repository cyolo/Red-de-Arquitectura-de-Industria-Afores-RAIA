# Red de Arquitectura de Industria Afores (RAIA) — Service Landscape

RAIA es una arquitectura de referencia propuesta para modelar las capacidades, dominios e interacciones de la industria mexicana de ahorro para el retiro. Este repositorio proporciona una plataforma interactiva para explorar, mapear y gobernar la cadena de valor de los servicios previsionales de forma neutral, reusable y extensible.

## 📌 Visión General

El propósito de RAIA es establecer un lenguaje común y estandarizado para todo el ecosistema del Sistema de Ahorro para el Retiro (SAR), facilitando:
* **Estandarización:** Definición uniforme de responsabilidades y fronteras de servicio.
* **Trazabilidad Regulatoria:** Vinculación directa de las capacidades operativas con las normativas aplicables del SAR.
* **Neutralidad:** Mapeo abstracto independiente de las implementaciones particulares de cada Administradora de Fondos para el Retiro (Afore).

---

## 🏗️ Metamodelo Conceptual

El Service Landscape de RAIA se estructura en una jerarquía de tres niveles:

1. **Área de Negocio (Business Area):** El contenedor de más alto nivel que agrupa dominios bajo una zona macro de la cadena de valor.
2. **Dominio de Negocio (Business Domain):** Una agrupación lógica de capacidades funcionales relacionadas dentro de un área.
3. **Dominio de Servicio (Service Domain):** La unidad estable y versionada de responsabilidad funcional, que gestiona un único objeto de negocio enfocado (Focus Object).

---

## 📁 Estructura del Repositorio

La arquitectura del proyecto está organizada de la siguiente manera:

```text
RAIA/
├── .github/workflows/   # Pipeline de Integración Continua (CI)
├── scripts/             # Scripts de validación y pruebas de datos
│   ├── validateData.js  # Validador de consistencia referencial de JSONs
│   └── runTests.js      # Suite de pruebas automatizadas de regresión
├── src/
│   ├── app/             # Rutas y páginas de la aplicación Next.js
│   │   ├── page.tsx                          # Inicio y Estadísticas
│   │   ├── service-landscape/value-chain/    # Canvas interactivo del Landscape
│   │   ├── service-domains/[slug]/           # Fichas Técnicas de Service Domains
│   │   └── methodology/                      # Documentación del Metamodelo
│   ├── components/      # Componentes UI compartidos (Header, Footer, Sidebar, Búsqueda)
│   │   └── diagram/     # LocalRelationGraph implementado con React Flow
│   ├── data/            # Semillas de datos estáticos en formato JSON
│   ├── domain/          # Lógica de dominio y acceso a datos
│   │   ├── schemas/     # Esquemas de validación Zod
│   │   ├── types/       # Definiciones de tipo TypeScript
│   │   └── repositories/# Acceso tipado y validado a datos
│   └── features/        # Módulos específicos del landscape y store de Zustand
└── package.json         # Dependencias y scripts de desarrollo
```

---

## 🛠️ Guía de Inicio Rápido

### Requisitos Previos
* Node.js v20 o superior
* npm v10 o superior

### Instalación de Dependencias
```bash
npm install
```

### Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) en su navegador para ver la aplicación web interactiva.

### Ejecutar Suite de Pruebas y Calidad
```bash
# Validar integridad estructural de los datos JSON
npm run validate:data

# Validar tipado TypeScript
npm run typecheck

# Ejecutar pruebas unitarias y de simulación
npm run test
```

### Compilar para Producción
```bash
npm run build
```
*Nota: El proceso de compilación ejecutará automáticamente las validaciones de datos (`prebuild`) para evitar el despliegue de inconsistencias.*

---

## ⚖️ Relación de Versiones y Referencia a BIAN

* **Lanzamiento RAIA (Release):** `0.1.0`
* **Línea Base de Referencia BIAN:** `14.0` (Inspiración funcional para la distribución de la cadena de valor)
* **Esquema de Contenido de Datos:** `1.0`
* **Fecha de Línea Base Regulatoria:** `2026-07-12`

> [!NOTE]
> RAIA se inspira en el marco de arquitectura de BIAN (Banking Industry Architecture Network) para su estructura jerárquica y abstracción de servicios, pero se enfoca exclusivamente en la cadena de valor, regulaciones y operaciones del Sistema de Ahorro para el Retiro (SAR) de México.

---

## ⚠️ Descargo de Responsabilidad (Disclaimer)

RAIA es una arquitectura de referencia propuesta y de carácter colaborativo. No sustituye de ninguna forma las leyes, reglamentos, circulares, disposiciones de carácter general (Disposiciones Únicas/Sistemas de Ahorro para el Retiro) ni las publicaciones oficiales emanadas de la Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), la Empresa Operadora de la Base de Datos Nacional SAR (Procesar), o cualquier otra autoridad del sector.
