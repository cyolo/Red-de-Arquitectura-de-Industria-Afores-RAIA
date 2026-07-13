PROMPT MAESTRO PARA ANTIGRAVITY IA
Construcción de “RAIA Service Landscape V14.0 — Value Chain View”
1. Rol que debes asumir
Actúa simultáneamente como:
•	arquitecto empresarial senior;
•	arquitecto de solución;
•	diseñador de productos digitales;
•	especialista UX/UI en visualización de arquitecturas;
•	desarrollador full-stack senior;
•	especialista en React, TypeScript y visualización de grafos;
•	arquitecto de información;
•	especialista en accesibilidad web;
•	ingeniero de calidad y automatización de pruebas.
Tu responsabilidad no es limitarte a proponer una solución o generar un mockup.
Debes analizar el repositorio existente, diseñar, programar, probar y documentar una versión funcional y ejecutable del:
RAIA Service Landscape V14.0 — Value Chain View
RAIA significa:
Red de Arquitectura de Industria Afores
________________________________________
2. Contexto del producto
RAIA será una arquitectura de referencia para representar las capacidades, dominios, responsabilidades, datos, interacciones, controles y servicios que conforman la industria mexicana de Administradoras de Fondos para el Retiro.
RAIA debe representar el ecosistema completo del Sistema de Ahorro para el Retiro, incluyendo, según corresponda:
•	trabajadores;
•	beneficiarios;
•	patrones;
•	dependencias públicas;
•	AFORE;
•	PENSIONISSSTE;
•	SIEFORE;
•	CONSAR;
•	Empresa Operadora de la Base de Datos Nacional SAR;
•	IMSS;
•	ISSSTE;
•	INFONAVIT;
•	FOVISSSTE;
•	aseguradoras;
•	instituciones financieras;
•	custodios;
•	proveedores;
•	CONDUSEF;
•	Fondo de Pensiones para el Bienestar;
•	autoridades y participantes relacionados.
RAIA no debe representar la arquitectura particular de una AFORE.
Debe ser una arquitectura neutral, reusable y extensible de toda la industria.
________________________________________
3. Referencia de inspiración
Utiliza como referencia conceptual y de experiencia de usuario la vista:
https://bian.org/servicelandscape-14-0-0/views/view_54486.html
Y como referencia histórica proporcionada por el usuario:
https://bian.org/servicelandscape-12-0-0/object_6.html?object=260272
La vista oficial de BIAN organiza visualmente el Service Landscape mediante una jerarquía de áreas de negocio, dominios de negocio y Service Domains. El portal de arquitectura V14.0 también distingue vistas de cadena de valor, matriz y diagramas generales. (BIAN)
Restricción de propiedad intelectual
Usa BIAN únicamente como inspiración para:
•	organización jerárquica;
•	densidad informativa;
•	navegación;
•	abstracción;
•	interacción;
•	disposición general de una cadena de valor.
No debes:
•	copiar el código fuente de BIAN;
•	descargar o reutilizar sus recursos visuales;
•	copiar su logotipo;
•	copiar su identidad gráfica;
•	reutilizar textos propietarios;
•	reproducir exactamente su layout;
•	presentar RAIA como una extensión oficial de BIAN;
•	utilizar nombres de dominios bancarios que no correspondan a la industria AFORE.
El diseño debe ser original y propio de RAIA.
________________________________________
4. Resultado esperado
Construye una aplicación web funcional que permita explorar visualmente el paisaje de servicios de la industria AFORE mediante tres niveles:
Área de Negocio
    └── Dominio de Negocio
            └── Service Domain RAIA
La página principal de esta entrega deberá llamarse:
RAIA Service Landscape V14.0 — Value Chain View
Debe presentar una vista visual, navegable, interactiva, accesible, responsive y completamente impulsada por datos.
La arquitectura del código debe permitir posteriormente incorporar:
•	Matrix View;
•	Business Capability Map;
•	Business Scenarios;
•	modelo de objetos de negocio;
•	catálogo regulatorio;
•	catálogo de APIs;
•	catálogo de eventos;
•	diagramas de interacción;
•	historial de versiones;
•	comparación entre releases;
•	vistas AS-IS y TO-BE;
•	vistas particulares por AFORE o participante.
En esta entrega no construyas esas vistas completas. Deja preparada la arquitectura para integrarlas posteriormente.
________________________________________
5. Instrucción de ejecución
Antes de programar:
1.	inspecciona el repositorio;
2.	identifica el framework, convenciones y dependencias existentes;
3.	conserva la arquitectura actual cuando sea razonable;
4.	evita reemplazar componentes funcionales sin justificación;
5.	documenta las decisiones relevantes;
6.	implementa el producto, no solamente una propuesta.
No hagas preguntas que puedan resolverse mediante supuestos razonables.
Cuando debas asumir algo:
•	documenta el supuesto;
•	elige la opción de menor complejidad;
•	evita decisiones irreversibles;
•	conserva extensibilidad;
•	continúa con la implementación.
Solo detente si existe un bloqueo técnico real que impida ejecutar o modificar el proyecto.
________________________________________
6. Stack tecnológico
6.1 Regla principal
Si el repositorio ya tiene un stack funcional, úsalo y adáptate a él.
No migres todo el proyecto únicamente para utilizar las tecnologías listadas a continuación.
6.2 Stack recomendado para un proyecto nuevo
Cuando el repositorio esté vacío o no exista una arquitectura definida, utiliza:
Next.js 15 o superior
App Router
React
TypeScript con strict mode
Tailwind CSS
shadcn/ui
@xyflow/react
ELK.js o elkjs para layout
Zustand para estado de interfaz
Zod para validación de datos
Fuse.js para búsqueda difusa
Lucide React para iconografía
Vitest para pruebas unitarias
Testing Library para componentes
Playwright para pruebas end-to-end
ESLint
Prettier
No agregues una base de datos en el MVP.
Los datos deberán cargarse inicialmente desde archivos JSON o TypeScript versionados en el repositorio.
La arquitectura de acceso a datos debe permitir sustituir posteriormente los archivos estáticos por:
•	API;
•	base de datos;
•	CMS headless;
•	repositorio Git;
•	servicio de gobierno de arquitectura.
________________________________________
7. Arquitectura técnica objetivo
Implementa una separación clara entre:
Presentación
Estado de interfaz
Motor de visualización
Motor de layout
Modelo de dominio
Carga y validación de datos
Búsqueda
Filtros
Relaciones
Rutas
Documentación
Pruebas
Estructura sugerida:
src/
├── app/
│   ├── page.tsx
│   ├── service-landscape/
│   │   └── value-chain/
│   │       └── page.tsx
│   ├── service-domains/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── business-domains/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── business-areas/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── methodology/
│       └── page.tsx
├── components/
│   ├── layout/
│   ├── landscape/
│   ├── service-domain/
│   ├── filters/
│   ├── search/
│   └── ui/
├── features/
│   └── service-landscape/
│       ├── components/
│       ├── hooks/
│       ├── store/
│       ├── layout/
│       ├── search/
│       └── utils/
├── domain/
│   ├── schemas/
│   ├── types/
│   └── repositories/
├── data/
│   ├── raia-v14.0.json
│   ├── relations-v14.0.json
│   ├── regulations-v14.0.json
│   └── scenarios-v14.0.json
├── lib/
└── styles/

docs/
├── architecture.md
├── data-model.md
├── content-governance.md
├── visual-language.md
└── adr/
    ├── 001-visualization-engine.md
    └── 002-content-storage.md
Adapta esta estructura cuando el repositorio ya tenga convenciones propias.
________________________________________
8. Rutas mínimas
Implementa:
/
Debe redirigir o presentar la entrada principal de RAIA.
/service-landscape/value-chain
Debe mostrar la vista completa del Service Landscape.
/service-domains/[slug]
Debe mostrar la ficha completa de un Service Domain.
/business-domains/[slug]
Debe mostrar un Dominio de Negocio y sus Service Domains.
/business-areas/[slug]
Debe mostrar un Área de Negocio y sus dominios.
/methodology
Debe explicar brevemente el metamodelo RAIA y su jerarquía.
Todas las entidades deben contar con URLs estables y compartibles.
________________________________________
9. Diseño general de la pantalla
9.1 Header global
El encabezado debe incluir:
•	logotipo tipográfico original de RAIA;
•	nombre “Red de Arquitectura de Industria Afores”;
•	versión V14.0;
•	navegación principal;
•	buscador global;
•	acceso a metodología;
•	botón para restablecer vista;
•	menú responsive.
Texto principal:
RAIA Service Landscape V14.0
Subtítulo:
Value Chain View
Descripción breve:
Mapa de capacidades y dominios de servicio de la industria mexicana de ahorro para el retiro.
Incluye una etiqueta visible:
Arquitectura de referencia de industria
9.2 Barra de herramientas
La barra de herramientas de la vista deberá incluir:
•	búsqueda;
•	filtros;
•	mostrar todos;
•	mostrar selección;
•	mostrar relacionados;
•	acercar;
•	alejar;
•	ajustar al contenido;
•	centrar;
•	pantalla completa;
•	restablecer;
•	abrir leyenda;
•	exportar;
•	alternar minimapa;
•	alternar panel de detalles.
9.3 Área visual principal
La visualización ocupará la mayor parte de la pantalla.
Debe soportar:
•	pan;
•	zoom;
•	selección;
•	navegación mediante teclado;
•	minimapa;
•	ajuste automático;
•	layout determinista;
•	resaltado de relaciones;
•	tooltips;
•	panel de detalles;
•	búsqueda con enfoque automático;
•	zoom semántico.
9.4 Disclaimer
Incluye en la interfaz:
RAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
________________________________________
10. Lenguaje visual
10.1 Principios
El diseño debe ser:
•	ejecutivo;
•	institucional;
•	limpio;
•	denso, pero legible;
•	contemporáneo;
•	sobrio;
•	profesional;
•	original;
•	orientado a arquitectura empresarial;
•	usable en pantallas grandes;
•	adecuado para presentaciones y comités.
Evita:
•	apariencia de dashboard comercial;
•	exceso de sombras;
•	gradientes decorativos;
•	animaciones innecesarias;
•	tarjetas gigantes;
•	ilustraciones genéricas;
•	colores demasiado saturados;
•	exceso de espacio vacío;
•	imitar literalmente la estética de BIAN.
10.2 Paleta recomendada
Usa una paleta original de RAIA:
Azul institucional:       #123B5D
Azul profundo:            #0B2538
Turquesa:                 #0E6B6F
Verde institucional:      #3A7D5B
Dorado previsional:       #C69A3B
Arena clara:              #F3E9D2
Fondo principal:          #F6F8FA
Superficie:               #FFFFFF
Texto principal:          #18242E
Texto secundario:         #52616D
Borde:                    #CAD3DA
Selección:                #1F78B4
Advertencia:              #B7791F
Error:                    #B54747
Asegura contraste WCAG AA.
10.3 Jerarquía visual
Área de Negocio
•	contenedor de mayor nivel;
•	fondo ligeramente coloreado;
•	borde fuerte;
•	encabezado prominente;
•	identificador visible;
•	contador de dominios y Service Domains.
Dominio de Negocio
•	contenedor anidado;
•	encabezado diferenciado;
•	color relacionado con su Área de Negocio;
•	agrupación clara de Service Domains.
Service Domain
•	tarjeta compacta;
•	texto corto;
•	identificador RAIA;
•	icono discreto;
•	estado;
•	interacción hover;
•	interacción focus;
•	interacción selected.
10.4 Tipografía
Usa preferentemente:
Inter
O una tipografía sans-serif equivalente ya disponible en el proyecto.
No cargues fuentes innecesarias.
________________________________________
11. Distribución de la Value Chain View
La vista debe reflejar una cadena de valor y no una cuadrícula arbitraria.
Utiliza esta macrodistribución:
┌────────────────────────────────────────────────────────────────────────────┐
│ Gobierno y Dirección del SAR       │ Riesgo, Cumplimiento y Supervisión    │
├───────────────────┬──────────────────────────────────────┬─────────────────┤
│ Capacidades       │ Servicios Compartidos de Industria  │ Identidad,      │
│ Empresariales     ├──────────────────────────────────────┤ Partes y        │
│ y Tecnología      │ Recaudación y Aportaciones          │ Expediente      │
│                   ├──────────────────┬───────────────────┤                 │
│                   │ Cuenta Individual│ Inversión        │ Servicio,       │
│                   ├──────────────────┴───────────────────┤ Canales y       │
│                   │ Retiros, Prestaciones y Pensiones   │ Experiencia     │
├───────────────────┴──────────────────────────────────────┴─────────────────┤
│ Evolución, Arquitectura, Innovación y Conocimiento                         │
└────────────────────────────────────────────────────────────────────────────┘
La distribución debe ser responsive y configurable desde datos.
No codifiques manualmente cada tarjeta mediante JSX.
Los elementos deben generarse desde el modelo de contenido.
Las posiciones macro de las Áreas de Negocio pueden declararse en configuración, pero los Dominios de Negocio y Service Domains deben ordenarse automáticamente.
________________________________________
12. Zoom semántico
Implementa diferentes niveles de detalle.
Nivel lejano
Mostrar:
•	Áreas de Negocio;
•	nombres;
•	contadores;
•	colores;
•	estructura general.
Ocultar textos internos demasiado pequeños.
Nivel medio
Mostrar:
•	Áreas de Negocio;
•	Dominios de Negocio;
•	contadores;
•	encabezados.
Nivel cercano
Mostrar:
•	Service Domains;
•	identificadores;
•	nombres completos;
•	estados;
•	tooltips;
•	relaciones seleccionadas.
El usuario debe poder navegar sin perder orientación.
________________________________________
13. Modelo de información
Define tipos estrictos y esquemas Zod.
13.1 Tipo BusinessArea
export interface BusinessArea {
  id: string;
  slug: string;
  nameEs: string;
  nameEn?: string;
  shortName?: string;
  description: string;
  purpose: string;
  colorToken: string;
  order: number;
  layoutZone: string;
  version: string;
  status: LifecycleStatus;
  ownerRole?: string;
  businessDomainIds: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}
13.2 Tipo BusinessDomain
export interface BusinessDomain {
  id: string;
  slug: string;
  businessAreaId: string;
  nameEs: string;
  nameEn?: string;
  description: string;
  purpose: string;
  order: number;
  serviceDomainIds: string[];
  actors: string[];
  valueStreams: string[];
  tags: string[];
  version: string;
  status: LifecycleStatus;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}
13.3 Tipo ServiceDomain
export interface ServiceDomain {
  id: string;
  slug: string;
  businessAreaId: string;
  businessDomainId: string;

  nameEs: string;
  nameEn?: string;
  aliases?: string[];

  summary: string;
  definition: string;
  purpose: string;

  focusObject: {
    name: string;
    description: string;
  };

  capabilities: string[];
  serviceOperations: ServiceOperation[];
  businessEvents: BusinessEvent[];
  businessObjects: BusinessObjectReference[];

  accountableActors: string[];
  participatingActors: string[];

  regulations: RegulationReference[];
  controls: ArchitectureControl[];
  evidences: string[];

  nfrs: NonFunctionalRequirement[];
  kpis: KPI[];

  relatedServiceDomainIds: string[];
  upstreamServiceDomainIds?: string[];
  downstreamServiceDomainIds?: string[];

  valueStreams: string[];
  lifecycleStage?: string;

  sourceAuthority?: string;
  ownerRole?: string;
  stewardRole?: string;

  maturity?: "conceptual" | "defined" | "validated" | "adopted";
  version: string;
  status: LifecycleStatus;

  tags: string[];
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
}
13.4 Tipos auxiliares
export type LifecycleStatus =
  | "draft"
  | "proposed"
  | "validated"
  | "active"
  | "deprecated";

export interface ServiceOperation {
  id: string;
  name: string;
  description: string;
  operationType:
    | "initiate"
    | "register"
    | "update"
    | "retrieve"
    | "validate"
    | "execute"
    | "control"
    | "notify"
    | "reconcile"
    | "report";
}

export interface BusinessEvent {
  id: string;
  name: string;
  description: string;
  direction: "produces" | "consumes" | "both";
}

export interface BusinessObjectReference {
  id: string;
  name: string;
  role: "focus" | "input" | "output" | "reference";
}

export interface RegulationReference {
  id: string;
  name: string;
  authority: string;
  articleOrSection?: string;
  url?: string;
  mandatory: boolean;
  validationStatus:
    | "official"
    | "pending-validation"
    | "internal-reference";
}

export interface ArchitectureControl {
  id: string;
  name: string;
  description: string;
  controlType:
    | "preventive"
    | "detective"
    | "corrective"
    | "evidence";
}

export interface NonFunctionalRequirement {
  category: string;
  statement: string;
  target?: string;
}

export interface KPI {
  name: string;
  description: string;
  formula?: string;
  frequency?: string;
}
13.5 Tipo LandscapeRelation
export interface LandscapeRelation {
  id: string;
  sourceId: string;
  targetId: string;
  type:
    | "depends-on"
    | "provides-to"
    | "validates"
    | "orchestrates"
    | "reports-to"
    | "transfers-to"
    | "shares-data-with"
    | "triggers";
  label?: string;
  description?: string;
  bidirectional?: boolean;
}
________________________________________
14. Convenciones de identificación
Usa identificadores permanentes:
RAIA-BA-001   Área de Negocio
RAIA-BD-001   Dominio de Negocio
RAIA-SD-001   Service Domain
RAIA-BO-001   Business Object
RAIA-BE-001   Business Event
RAIA-REG-001  Referencia regulatoria
RAIA-CTL-001  Control
RAIA-VS-001   Value Stream
Reglas:
•	IDs inmutables;
•	slugs en kebab-case;
•	nombres visibles en español;
•	alias en inglés opcionales;
•	no utilizar el nombre como llave técnica;
•	toda relación debe usar IDs;
•	toda entidad debe incluir versión y estado.
Versión inicial:
14.0.0
________________________________________
15. Contenido inicial del Service Landscape
Debes cargar como semilla las siguientes Áreas, Dominios de Negocio y Service Domains.
No reemplaces esta taxonomía por nombres bancarios genéricos.
Puedes ajustar ortografía, identificadores y orden, pero no eliminar elementos sin documentar la razón.
________________________________________
RAIA-BA-001 — Gobierno y Dirección del SAR
Estrategia y Política del SAR
•	Política del Sistema de Ahorro para el Retiro
•	Estrategia de Industria
•	Planeación Sectorial
•	Gestión de Capacidades de Industria
•	Gestión del Modelo Operativo
•	Gestión de Resultados del SAR
Regulación y Autorizaciones
•	Gestión del Marco Regulatorio
•	Gestión del Cambio Regulatorio
•	Autorización de Participantes
•	Autorización de AFORE y SIEFORE
•	Gestión Regulatoria de Comisiones
•	Gestión de Criterios y Consultas Normativas
Gobierno y Desempeño
•	Gobierno Corporativo
•	Gestión de Portafolio de Industria
•	Gestión de Beneficios
•	Métricas del Sistema
•	Transparencia Sectorial
•	Gestión de Stakeholders del SAR
________________________________________
RAIA-BA-002 — Riesgo, Cumplimiento y Supervisión
Supervisión y Control Regulatorio
•	Supervisión Regulatoria
•	Inspección Regulatoria
•	Información Regulatoria
•	Atención de Requerimientos Regulatorios
•	Programas Correctivos
•	Gestión de Sanciones
•	Seguimiento de Hallazgos
Riesgo y Cumplimiento
•	Gestión de Riesgo Empresarial
•	Gestión de Riesgo Operacional
•	Cumplimiento Normativo
•	Prevención de Lavado de Dinero y Financiamiento al Terrorismo
•	Prevención y Gestión de Fraude
•	Gestión de Riesgo de Terceros
•	Gestión de Conflictos de Interés
Resiliencia y Aseguramiento
•	Continuidad de Negocio
•	Recuperación ante Desastres
•	Ciberseguridad
•	Seguridad de la Información
•	Auditoría Interna
•	Gestión de Incidentes Mayores
•	Pruebas de Resiliencia Operacional
________________________________________
RAIA-BA-003 — Identidad, Partes y Expediente
Datos de Personas y Organizaciones
•	Datos del Trabajador
•	Datos de Beneficiarios
•	Datos del Patrón
•	Datos de Dependencias Públicas
•	Directorio de Participantes del SAR
•	Gestión de Contacto y Domicilio
•	Gestión de Relaciones entre Partes
Identidad, Autenticación y Consentimiento
•	Resolución de Identidad
•	Gestión de CURP, NSS y RFC
•	Identidad Biométrica
•	Autenticación del Trabajador
•	Gestión de Derechos de Acceso
•	Gestión de Consentimiento
•	Prueba de Vida
•	Gestión de Representación Legal
Expediente y Evidencia
•	Expediente Electrónico
•	Gestión Documental
•	Evidencia Digital
•	Firma Electrónica y No Repudio
•	Conservación de Registros
•	Corrección de Datos
•	Trazabilidad y Bitácora de Auditoría
________________________________________
RAIA-BA-004 — Afiliación y Cuenta Individual
Incorporación y Afiliación
•	Localización de Cuenta
•	Registro en AFORE
•	Asignación de Cuenta
•	Reasignación de Cuenta
•	Recertificación de Cuenta
•	Activación de Cuenta
•	Gestión de Afiliación
Traspaso y Regularización
•	Traspaso de Cuenta
•	Cancelación de Traspaso
•	Unificación de Cuentas
•	Separación de Cuentas
•	Inactivación de Cuenta
•	Registro de Fallecimiento
•	Recuperación de Cuenta
•	Regularización de Cuenta
Administración de Cuenta Individual
•	Libro Mayor de Cuenta Individual
•	Administración de Subcuentas
•	Gestión de Saldos
•	Registro de Movimientos
•	Asignación de Acciones
•	Asignación de Rendimientos
•	Cálculo y Aplicación de Comisiones
•	Ajustes de Cuenta
•	Estado de Cuenta
•	Historial Transaccional
•	Recursos SAR Legacy
•	Conciliación de Cuenta Individual
________________________________________
RAIA-BA-005 — Recaudación y Aportaciones
Recaudación Obligatoria
•	Determinación de Aportaciones
•	Recaudación de Aportaciones Patronales
•	Recaudación de Aportaciones Gubernamentales
•	Registro de Aportaciones de Vivienda
•	Cuota Social
•	Gestión de Aportaciones Omitidas
•	Gestión de Morosidad de Aportaciones
Ahorro Voluntario
•	Aportaciones Voluntarias
•	Aportaciones Complementarias
•	Ahorro de Largo Plazo
•	Ahorro Solidario
•	Aportaciones de Trabajadores Independientes
•	Aportaciones Voluntarias vía Nómina
•	Domiciliación de Ahorro Voluntario
Individualización y Conciliación
•	Individualización de Aportaciones
•	Resolución de Pagos No Identificados
•	Conciliación de Recaudación
•	Corrección de Aportaciones
•	Transferencia de Aportaciones
•	Devolución de Aportaciones
•	Aclaración de Diferencias de Recaudación
________________________________________
RAIA-BA-006 — Inversión y SIEFORE
Diseño y Asignación de Fondos
•	Asignación a SIEFORE Generacional
•	Estrategia de Inversión
•	Construcción de Portafolio
•	Gestión de Mandatos de Inversión
•	Gestión de Benchmark
•	Gestión de Clases de Activos
•	Diseño de Portafolio Objetivo
Operación de Inversiones
•	Ejecución de Operaciones
•	Custodia de Valores
•	Liquidación de Operaciones
•	Acciones Corporativas
•	Administración de Derivados
•	Gestión de Liquidez
•	Préstamo de Valores
•	Gestión de Contrapartes
•	Gestión de Instrucciones de Inversión
Valuación, Riesgo y Desempeño
•	Valuación de Instrumentos
•	Valuación de Portafolio
•	Riesgo de Inversión
•	Cumplimiento del Régimen de Inversión
•	Medición de Desempeño
•	Gestión de Límites y Exposición
•	Riesgo de Mercado
•	Riesgo de Crédito de Inversiones
•	Atribución de Rendimientos
________________________________________
RAIA-BA-007 — Retiros, Prestaciones y Pensiones
Retiros Parciales
•	Retiro de Ahorro Voluntario
•	Retiro Parcial por Desempleo
•	Ayuda para Gastos de Matrimonio
•	Retiros Parciales Especiales
•	Validación de Elegibilidad de Retiro
•	Reintegro de Semanas o Recursos
Pensión y Disposición Total
•	Coordinación de Elegibilidad Pensionaria
•	Elección de Régimen Pensionario
•	Resolución de Pensión
•	Retiro Programado
•	Transferencia a Renta Vitalicia
•	Pensión Garantizada
•	Disposición Total de Recursos
•	Recuperación de Recursos de Vivienda
•	Seguimiento de Pago Pensionario
Fallecimiento y Beneficiarios
•	Notificación de Fallecimiento
•	Validación de Beneficiarios
•	Prestaciones de Sobrevivencia
•	Distribución de Recursos a Beneficiarios
•	Gestión de Recursos No Reclamados
•	Resolución de Derechos de Beneficiarios
Fondo de Pensiones para el Bienestar
•	Identificación de Cuentas Elegibles
•	Transferencia de Recursos al Fondo
•	Coordinación de Complemento Pensionario
•	Reintegro de Recursos
•	Trazabilidad de Derechos
•	Conciliación con el Fondo
________________________________________
RAIA-BA-008 — Servicio, Canales y Experiencia
Omnicanalidad
•	Atención Omnicanal
•	Autoservicio Digital
•	Aplicación Móvil
•	Portal Web
•	Centro de Contacto
•	Atención en Sucursal
•	Correspondencia
•	Notificaciones
•	Gestión de Acceso a Canales
•	Historial de Interacciones
Solicitudes, Casos y Reclamaciones
•	Gestión de Solicitudes de Servicio
•	Gestión de Casos
•	Gestión de Aclaraciones
•	Gestión de Quejas
•	Coordinación con UNE
•	Interacción con CONDUSEF
•	Gestión de Niveles de Servicio
•	Análisis de Causa Raíz
•	Seguimiento de Compromisos
Educación y Comercialización
•	Educación Financiera y Previsional
•	Gobierno de Publicidad
•	Gestión de Asesores Previsionales
•	Gestión de Campañas
•	Gestión de Prospectos
•	Conocimiento del Trabajador
•	Medición de Satisfacción
•	Gestión de Retroalimentación
•	Comparación de Servicios y Rendimientos
________________________________________
RAIA-BA-009 — Servicios Compartidos de Industria
BDNSAR y Registros Maestros
•	Base de Datos Nacional SAR
•	Registro Maestro de Cuentas
•	Registro Maestro de Trabajadores
•	Registro Maestro de Participantes
•	Datos de Referencia de Industria
•	Calidad de Datos de Industria
•	Calendario Operativo
•	Catálogos de Industria
Orquestación e Intercambio
•	Orquestación Central de Procesos
•	Intercambio de Información Regulatoria
•	Coordinación de Transferencias de Recursos
•	Compensación entre Participantes
•	Hub de Eventos y Notificaciones
•	Validación de Identidad de Industria
•	Validación Biométrica de Industria
•	Gestión de Folios y Acuses
•	Monitoreo de Procesos de Industria
Integración con Ecosistema Externo
•	Integración con IMSS
•	Integración con ISSSTE
•	Integración con INFONAVIT
•	Integración con FOVISSSTE
•	Integración con Instituciones Bancarias
•	Integración con Aseguradoras
•	Integración con Custodios y Mercados
•	Integración con Autoridades Fiscales
•	Integración con Entidades Recaudadoras
________________________________________
RAIA-BA-010 — Capacidades Empresariales y Tecnología
Datos, Seguridad y Privacidad
•	Gobierno de Datos
•	Metadatos y Linaje
•	Calidad de Datos Empresarial
•	Privacidad y Protección de Datos
•	Gestión de Identidades y Accesos
•	Criptografía y Gestión de Secretos
•	Inteligencia de Amenazas
•	Desarrollo Seguro
•	Gestión de Vulnerabilidades
Tecnología y Operación
•	Operaciones de Tecnología
•	Ingeniería de Plataformas
•	Gestión de APIs
•	Plataforma de Eventos
•	Plataforma de Integración
•	Observabilidad
•	Gestión de Servicios de TI
•	Gestión de Configuración
•	Gestión de Capacidad
•	Gestión de Ambientes
•	Automatización y CI/CD
•	Recuperación Tecnológica
Capacidades Corporativas
•	Contabilidad Financiera
•	Gestión Financiera de Tecnología
•	Compras
•	Gestión de Proveedores
•	Gestión de Capital Humano
•	Servicios Jurídicos
•	Gestión de Registros
•	Arquitectura Empresarial
•	Gestión de Portafolio Empresarial
•	Gestión de Contratos
•	Estrategia de Salida de Proveedores
________________________________________
RAIA-BA-011 — Evolución, Arquitectura, Innovación y Conocimiento
Arquitectura y Estándares
•	Gobierno de Arquitectura Empresarial
•	Estándares y Lineamientos
•	Catálogo de Patrones
•	Autoridad de Diseño de Soluciones
•	Radar Tecnológico
•	Gestión de Deuda Técnica
•	Gestión de Excepciones Arquitectónicas
•	Arquitecturas de Referencia
Analítica, Modelos e Inteligencia Artificial
•	Analítica Regulatoria
•	Modelos Actuariales
•	Modelos de Inversión
•	Modelos de Comportamiento del Trabajador
•	Modelos de Fraude
•	Gobierno de Inteligencia Artificial
•	Plataforma de Ciencia de Datos
•	Gestión del Ciclo de Vida de Modelos
•	Monitoreo de Modelos
Innovación y Gestión del Cambio
•	Diseño de Servicios
•	Portafolio de Innovación
•	Investigación de Industria
•	Sandbox Regulatorio
•	Gestión del Conocimiento
•	Gestión del Cambio y Adopción
•	Capacitación y Certificación
•	Mejora Continua
•	Gestión de Comunidad RAIA
________________________________________
16. Relaciones iniciales
Carga un conjunto inicial de relaciones que permita demostrar el comportamiento.
Incluye como mínimo estos flujos:
Datos del Trabajador
→ Resolución de Identidad
→ Identidad Biométrica
→ Expediente Electrónico
→ Registro en AFORE
→ Libro Mayor de Cuenta Individual
Determinación de Aportaciones
→ Recaudación de Aportaciones Patronales
→ Conciliación de Recaudación
→ Individualización de Aportaciones
→ Registro de Movimientos
→ Asignación de Acciones
→ Asignación a SIEFORE Generacional
Estrategia de Inversión
→ Construcción de Portafolio
→ Ejecución de Operaciones
→ Liquidación de Operaciones
→ Valuación de Portafolio
→ Asignación de Rendimientos
Validación de Elegibilidad de Retiro
→ Retiro Parcial por Desempleo
→ Disposición de Recursos
→ Ajustes de Cuenta
→ Estado de Cuenta
Coordinación de Elegibilidad Pensionaria
→ Resolución de Pensión
→ Elección de Régimen Pensionario
→ Retiro Programado o Transferencia a Renta Vitalicia
Notificación de Fallecimiento
→ Validación de Beneficiarios
→ Prestaciones de Sobrevivencia
→ Distribución de Recursos a Beneficiarios
Todos los procesos regulatorios relevantes
→ Información Regulatoria
→ Supervisión Regulatoria
→ Atención de Requerimientos Regulatorios
No muestres todas las relaciones simultáneamente.
Eso generaría un diagrama ilegible.
Las relaciones deben aparecer cuando:
•	se selecciona un Service Domain;
•	se activa “mostrar relacionados”;
•	se selecciona un escenario;
•	se utiliza un filtro específico.
________________________________________
17. Ficha de Service Domain
Al seleccionar un Service Domain, abre un panel lateral derecho.
El panel deberá contener:
Encabezado
•	nombre;
•	ID;
•	versión;
•	estado;
•	Área de Negocio;
•	Dominio de Negocio;
•	madurez;
•	última revisión.
Resumen
•	definición;
•	propósito;
•	Focus Object;
•	accountability;
•	participantes.
Capacidades
Lista de capacidades principales.
Service Operations
Tabla o acordeón con:
•	nombre;
•	tipo;
•	descripción.
Business Events
Mostrar:
•	eventos producidos;
•	eventos consumidos;
•	eventos bidireccionales.
Objetos de negocio
Mostrar:
•	objeto principal;
•	entradas;
•	salidas;
•	referencias.
Regulación
Mostrar:
•	norma;
•	autoridad;
•	artículo o disposición;
•	obligatoriedad;
•	estado de validación;
•	enlace oficial.
Diferencia visualmente:
Oficial
Pendiente de validación
Referencia interna
Controles y evidencias
Mostrar:
•	control;
•	tipo;
•	evidencia;
•	responsable.
NFRs
Mostrar atributos como:
•	disponibilidad;
•	integridad;
•	confidencialidad;
•	trazabilidad;
•	no repudio;
•	privacidad;
•	recuperación;
•	rendimiento;
•	retención.
KPIs
Mostrar:
•	nombre;
•	definición;
•	fórmula;
•	frecuencia.
Relaciones
Mostrar:
•	upstream;
•	downstream;
•	dependencias;
•	dominios relacionados.
Acciones
•	abrir página completa;
•	copiar enlace;
•	centrar en diagrama;
•	mostrar relacionados;
•	cerrar panel.
________________________________________
18. Ejemplo de contenido completo
Crea una ficha completa para:
Traspaso de Cuenta
Usa como base:
{
  "id": "RAIA-SD-045",
  "slug": "traspaso-de-cuenta",
  "businessAreaId": "RAIA-BA-004",
  "businessDomainId": "RAIA-BD-011",
  "nameEs": "Traspaso de Cuenta",
  "nameEn": "Individual Account Transfer",
  "aliases": ["Traspaso AFORE", "Transferencia de Cuenta Individual"],
  "summary": "Gestiona el cambio de administración de una cuenta individual entre administradoras autorizadas.",
  "definition": "Administra el ciclo de vida de una solicitud de traspaso, desde su iniciación y consentimiento hasta la validación, resolución, intercambio de información y transferencia de recursos.",
  "purpose": "Permitir la movilidad regulada de la cuenta individual conservando identidad, integridad, consentimiento, trazabilidad y continuidad de los recursos.",
  "focusObject": {
    "name": "Solicitud de Traspaso",
    "description": "Registro que representa la intención, consentimiento, validaciones, resolución y ejecución del cambio de administradora."
  },
  "capabilities": [
    "Iniciar solicitud de traspaso",
    "Validar identidad y consentimiento",
    "Validar elegibilidad",
    "Coordinar administradora receptora y transferente",
    "Gestionar folios y acuses",
    "Transferir información y recursos",
    "Cancelar o rechazar solicitudes",
    "Conservar evidencia"
  ],
  "serviceOperations": [
    {
      "id": "RAIA-SO-045-01",
      "name": "Iniciar traspaso",
      "description": "Registra una nueva solicitud de traspaso.",
      "operationType": "initiate"
    },
    {
      "id": "RAIA-SO-045-02",
      "name": "Validar identidad",
      "description": "Valida la identidad y autenticidad del trabajador.",
      "operationType": "validate"
    },
    {
      "id": "RAIA-SO-045-03",
      "name": "Validar elegibilidad",
      "description": "Determina si la cuenta puede ser objeto de traspaso.",
      "operationType": "validate"
    },
    {
      "id": "RAIA-SO-045-04",
      "name": "Ejecutar traspaso",
      "description": "Coordina la transferencia de información y recursos.",
      "operationType": "execute"
    },
    {
      "id": "RAIA-SO-045-05",
      "name": "Cancelar traspaso",
      "description": "Cancela una solicitud bajo los supuestos permitidos.",
      "operationType": "update"
    }
  ],
  "businessEvents": [
    {
      "id": "RAIA-BE-045-01",
      "name": "Traspaso solicitado",
      "description": "Se ha registrado una solicitud de traspaso.",
      "direction": "produces"
    },
    {
      "id": "RAIA-BE-045-02",
      "name": "Identidad validada",
      "description": "La identidad del trabajador fue validada.",
      "direction": "consumes"
    },
    {
      "id": "RAIA-BE-045-03",
      "name": "Traspaso aprobado",
      "description": "La solicitud cumplió las validaciones aplicables.",
      "direction": "produces"
    },
    {
      "id": "RAIA-BE-045-04",
      "name": "Recursos transferidos",
      "description": "Los recursos fueron transferidos a la administradora receptora.",
      "direction": "produces"
    }
  ],
  "businessObjects": [
    {
      "id": "RAIA-BO-045-01",
      "name": "Solicitud de Traspaso",
      "role": "focus"
    },
    {
      "id": "RAIA-BO-001",
      "name": "Trabajador",
      "role": "reference"
    },
    {
      "id": "RAIA-BO-010",
      "name": "Cuenta Individual",
      "role": "input"
    },
    {
      "id": "RAIA-BO-012",
      "name": "Expediente Electrónico",
      "role": "input"
    }
  ],
  "accountableActors": [
    "AFORE receptora"
  ],
  "participatingActors": [
    "Trabajador",
    "AFORE transferente",
    "Empresa Operadora",
    "CONSAR"
  ],
  "regulations": [
    {
      "id": "RAIA-REG-LSAR",
      "name": "Ley de los Sistemas de Ahorro para el Retiro",
      "authority": "Congreso de la Unión",
      "mandatory": true,
      "validationStatus": "official"
    },
    {
      "id": "RAIA-REG-CUO",
      "name": "Disposiciones de carácter general en materia de operaciones de los Sistemas de Ahorro para el Retiro",
      "authority": "CONSAR",
      "mandatory": true,
      "validationStatus": "pending-validation"
    }
  ],
  "controls": [
    {
      "id": "RAIA-CTL-045-01",
      "name": "Validación de identidad",
      "description": "Debe comprobarse la identidad del trabajador mediante los mecanismos autorizados.",
      "controlType": "preventive"
    },
    {
      "id": "RAIA-CTL-045-02",
      "name": "Conservación de consentimiento",
      "description": "Debe conservarse evidencia íntegra del consentimiento.",
      "controlType": "evidence"
    },
    {
      "id": "RAIA-CTL-045-03",
      "name": "Trazabilidad de transferencia",
      "description": "Cada etapa debe conservar folio, fecha, actor y resultado.",
      "controlType": "detective"
    }
  ],
  "evidences": [
    "Consentimiento del trabajador",
    "Validación de identidad",
    "Firma o autenticación",
    "Folio de solicitud",
    "Acuses de participantes",
    "Resultado de transferencia",
    "Bitácora de auditoría"
  ],
  "nfrs": [
    {
      "category": "Trazabilidad",
      "statement": "Toda modificación debe conservar actor, fecha, estado anterior y estado resultante."
    },
    {
      "category": "No repudio",
      "statement": "El consentimiento y las instrucciones deben conservar evidencia verificable."
    },
    {
      "category": "Privacidad",
      "statement": "Los datos personales deben protegerse durante almacenamiento, procesamiento e intercambio."
    },
    {
      "category": "Integridad",
      "statement": "La solicitud no debe modificarse sin autorización y evidencia."
    }
  ],
  "kpis": [
    {
      "name": "Tiempo de resolución de traspaso",
      "description": "Tiempo entre la iniciación y la resolución final.",
      "frequency": "mensual"
    },
    {
      "name": "Tasa de rechazo",
      "description": "Porcentaje de solicitudes rechazadas respecto del total recibido.",
      "frequency": "mensual"
    },
    {
      "name": "Tasa de cancelación",
      "description": "Porcentaje de solicitudes canceladas.",
      "frequency": "mensual"
    }
  ],
  "relatedServiceDomainIds": [
    "RAIA-SD-020",
    "RAIA-SD-021",
    "RAIA-SD-023",
    "RAIA-SD-031",
    "RAIA-SD-040",
    "RAIA-SD-046"
  ],
  "valueStreams": [
    "Administrar el ciclo de vida de la cuenta individual"
  ],
  "maturity": "defined",
  "version": "14.0.0",
  "status": "proposed",
  "tags": [
    "cuenta individual",
    "traspaso",
    "identidad",
    "consentimiento",
    "movilidad"
  ],
  "createdAt": "2026-07-12",
  "updatedAt": "2026-07-12"
}
No presentes los artículos regulatorios como definitivos cuando no hayan sido validados.
________________________________________
19. Búsqueda
Implementa búsqueda difusa sobre:
•	ID;
•	nombre;
•	alias;
•	descripción;
•	Focus Object;
•	capacidad;
•	Service Operation;
•	evento;
•	actor;
•	regulación;
•	etiqueta.
Comportamiento:
1.	mostrar resultados agrupados;
2.	indicar tipo de resultado;
3.	seleccionar el resultado;
4.	centrarlo en el landscape;
5.	abrir su panel;
6.	resaltar su Área y Dominio;
7.	actualizar la URL;
8.	permitir limpiar la búsqueda.
Atajo:
Ctrl + K
En macOS:
Cmd + K
________________________________________
20. Filtros
Implementa filtros combinables por:
•	Área de Negocio;
•	Dominio de Negocio;
•	actor;
•	etapa del ciclo de vida;
•	value stream;
•	estado;
•	madurez;
•	regulación;
•	autoridad;
•	tipo de control;
•	etiqueta.
Muestra:
•	filtros activos;
•	número de resultados;
•	botón para limpiar;
•	estado vacío;
•	posibilidad de compartir la vista filtrada mediante URL.
Los filtros deben persistirse en query parameters.
Ejemplo:
/service-landscape/value-chain?area=cuenta-individual&actor=afore&status=active
________________________________________
21. Interacciones
Hover
Mostrar tooltip con:
•	nombre;
•	ID;
•	resumen;
•	Dominio de Negocio;
•	estado.
Click
•	seleccionar;
•	abrir panel;
•	resaltar ancestros;
•	mostrar relaciones directas;
•	actualizar URL.
Doble click
Abrir la página completa del Service Domain.
Escape
Cerrar panel o limpiar selección.
Enter
Abrir elemento enfocado.
Restablecer
Regresar a:
•	zoom inicial;
•	sin filtros;
•	sin selección;
•	layout completo.
________________________________________
22. Estados visuales
Implementa:
Normal
Hover
Focused
Selected
Related
Dimmed
Filtered
Draft
Validated
Deprecated
Cuando exista selección:
•	mantener el seleccionado con alto contraste;
•	resaltar sus relaciones directas;
•	reducir opacidad del resto;
•	conservar visible la jerarquía.
No ocultes automáticamente todo el contexto.
________________________________________
23. Responsive design
Escritorio
Vista completa interactiva.
Optimiza inicialmente para:
1440 × 900
1920 × 1080
2560 × 1440
Tablet
•	canvas navegable;
•	panel deslizable;
•	controles compactos;
•	zoom táctil.
Móvil
No intentes mostrar todo el landscape reducido hasta ser ilegible.
En móvil muestra:
•	lista jerárquica;
•	búsqueda;
•	filtros;
•	acordeones;
•	fichas;
•	acceso opcional a “Abrir mapa interactivo”.
La experiencia móvil debe seguir siendo funcional.
________________________________________
24. Accesibilidad
Cumple WCAG 2.2 AA.
Incluye:
•	navegación por teclado;
•	foco visible;
•	roles ARIA;
•	labels accesibles;
•	contraste suficiente;
•	estados no dependientes únicamente del color;
•	texto alternativo;
•	soporte para lectores de pantalla;
•	reducción de movimiento;
•	orden lógico del DOM;
•	lista accesible alternativa al canvas;
•	mensajes para resultados de búsqueda y filtros.
No uses únicamente un canvas raster sin representación semántica.
________________________________________
25. Exportación
Incluye:
Exportar PNG
•	alta resolución;
•	área completa;
•	título;
•	versión;
•	fecha;
•	leyenda;
•	disclaimer.
Imprimir o guardar como PDF
Crea estilos para:
A3 horizontal
A4 horizontal
En impresión:
•	oculta controles;
•	muestra título;
•	muestra versión;
•	muestra fecha;
•	expande el landscape;
•	conserva colores de impresión;
•	incluye disclaimer.
Exportar JSON
Permite descargar:
•	landscape completo;
•	selección actual;
•	resultados filtrados.
No es necesario construir exportación a ArchiMate o XMI en esta fase.
________________________________________
26. Navegación y deep linking
La selección debe poder compartirse:
/service-landscape/value-chain?selected=RAIA-SD-045
La página individual:
/service-domains/traspaso-de-cuenta
Al usar el botón Atrás del navegador:
•	restaura selección;
•	restaura filtros;
•	restaura panel;
•	no recarga innecesariamente toda la aplicación.
________________________________________
27. Rendimiento
Objetivos:
•	interacción fluida con más de 150 Service Domains;
•	pan y zoom cercanos a 60 FPS en equipos modernos;
•	evitar rerenders globales;
•	memoizar nodos;
•	cargar detalles bajo demanda cuando sea conveniente;
•	no recalcular layout en cada interacción;
•	persistir o cachear posiciones calculadas;
•	evitar dependencias visuales excesivamente pesadas.
El layout debe ser determinista.
La misma versión de datos debe producir la misma posición visual.
________________________________________
28. Calidad de datos
Al iniciar la aplicación:
1.	valida todos los archivos con Zod;
2.	detecta IDs duplicados;
3.	detecta slugs duplicados;
4.	detecta relaciones huérfanas;
5.	detecta dominios sin Área;
6.	detecta Service Domains sin Dominio de Negocio;
7.	detecta referencias regulatorias inexistentes;
8.	detecta ciclos inválidos cuando apliquen;
9.	registra errores legibles;
10.	impide el build cuando existan inconsistencias críticas.
Crea un script:
npm run validate:data
________________________________________
29. Estado vacío y errores
Crea interfaces para:
•	sin resultados;
•	datos inválidos;
•	Service Domain inexistente;
•	relación inválida;
•	error de carga;
•	versión no disponible;
•	filtro sin coincidencias.
Los mensajes deben ser claros y no mostrar stack traces al usuario final.
________________________________________
30. Metodología RAIA
La ruta /methodology debe explicar:
Área de Negocio
Agrupación principal de capacidades que contribuye a una parte significativa de la cadena de valor de la industria.
Dominio de Negocio
Agrupación coherente de responsabilidades y capacidades relacionadas.
Service Domain
Unidad elemental de responsabilidad funcional, independiente de una organización, aplicación o implementación específica.
Regla esencial
Un Service Domain RAIA no equivale automáticamente a una aplicación, módulo, equipo o microservicio.
Trazabilidad
Estrategia
→ Área de Negocio
→ Dominio de Negocio
→ Service Domain
→ Service Operation
→ Business Object
→ Evento
→ Regulación
→ Control
→ Evidencia
→ Métrica
________________________________________
31. Seguridad
Incluye:
•	Content Security Policy cuando el framework lo permita;
•	protección contra inyección de HTML;
•	sanitización de contenido;
•	ausencia de secretos en cliente;
•	validación de URLs externas;
•	apertura segura de vínculos;
•	rel="noopener noreferrer";
•	dependencias auditadas;
•	no ejecutar contenido proveniente de archivos de datos;
•	no utilizar dangerouslySetInnerHTML salvo justificación y sanitización.
No agregues autenticación en este MVP.
________________________________________
32. SEO y metadatos
Configura:
Title:
RAIA Service Landscape V14.0 — Value Chain View

Description:
Mapa de capacidades, dominios de negocio y Service Domains de la industria mexicana de ahorro para el retiro.

Language:
es-MX
Incluye Open Graph básico sin depender de servicios externos.
________________________________________
33. Pruebas obligatorias
Pruebas unitarias
Incluye pruebas para:
•	validación de esquemas;
•	IDs duplicados;
•	relaciones;
•	búsqueda;
•	filtros;
•	construcción del árbol;
•	selección;
•	serialización de query parameters;
•	transformación a nodos visuales;
•	layout determinista.
Pruebas de componentes
Incluye:
•	tarjeta Service Domain;
•	panel de detalles;
•	buscador;
•	filtros;
•	leyenda;
•	estado vacío;
•	navegación accesible.
Pruebas end-to-end
Automatiza:
1.	abrir Value Chain View;
2.	buscar “Traspaso de Cuenta”;
3.	seleccionar el resultado;
4.	comprobar que el nodo se centra;
5.	comprobar que abre el panel;
6.	comprobar que la URL cambia;
7.	activar “mostrar relacionados”;
8.	abrir la ficha completa;
9.	regresar al landscape;
10.	aplicar filtro por Área;
11.	limpiar filtros;
12.	probar navegación con teclado;
13.	validar vista móvil;
14.	validar que no existan errores de consola.
________________________________________
34. Criterios de aceptación funcional
La implementación estará completa cuando:
•	la aplicación compila;
•	las rutas funcionan;
•	existe la vista Value Chain;
•	existen las 11 Áreas de Negocio;
•	existen todos los Dominios de Negocio definidos;
•	existen al menos 150 Service Domains cargados desde datos;
•	el layout no depende de JSX manual;
•	se puede buscar;
•	se puede filtrar;
•	se puede hacer pan y zoom;
•	se puede seleccionar un Service Domain;
•	se puede abrir el panel de detalles;
•	se puede abrir una ficha completa;
•	las relaciones se resaltan bajo demanda;
•	los filtros se reflejan en la URL;
•	la selección se refleja en la URL;
•	existe una experiencia móvil;
•	existe una alternativa accesible al mapa;
•	existe exportación PNG;
•	existe impresión PDF;
•	existe exportación JSON;
•	el build no presenta errores;
•	no existen errores críticos en consola;
•	las pruebas pasan;
•	los datos se validan;
•	existe documentación.
________________________________________
35. Criterios de aceptación visual
Valida al menos en 1440 × 900:
•	no existen títulos superpuestos;
•	los encabezados permanecen legibles;
•	las áreas se distinguen claramente;
•	los dominios están correctamente anidados;
•	las tarjetas tienen tamaño consistente;
•	el panel lateral no cubre completamente el contexto;
•	el canvas aprovecha la pantalla;
•	la jerarquía se comprende sin explicación adicional;
•	el color no es el único mecanismo de diferenciación;
•	la vista parece una arquitectura de industria y no un dashboard genérico.
________________________________________
36. Documentación obligatoria
Genera un README.md con:
•	objetivo;
•	stack;
•	requisitos;
•	instalación;
•	ejecución;
•	pruebas;
•	validación de datos;
•	build;
•	estructura;
•	rutas;
•	cómo agregar un Área;
•	cómo agregar un Dominio de Negocio;
•	cómo agregar un Service Domain;
•	cómo agregar una relación;
•	cómo agregar una regulación;
•	cómo cambiar la versión;
•	limitaciones conocidas.
Genera docs/architecture.md con:
•	contexto;
•	componentes;
•	decisiones;
•	flujo de datos;
•	motor de visualización;
•	estrategia de layout;
•	estrategia de búsqueda;
•	estrategia de navegación;
•	extensibilidad futura.
Genera docs/data-model.md con:
•	entidades;
•	campos;
•	relaciones;
•	cardinalidades;
•	IDs;
•	versionamiento;
•	validaciones.
Genera docs/content-governance.md con:
•	roles de contenido;
•	estados;
•	validación regulatoria;
•	versionamiento;
•	publicación;
•	deprecación;
•	revisión periódica.
________________________________________
37. Gobierno de contenido
Implementa estos estados:
draft
proposed
validated
active
deprecated
Reglas:
•	draft: contenido en elaboración;
•	proposed: contenido sujeto a revisión;
•	validated: revisado por especialistas;
•	active: publicado como parte del baseline;
•	deprecated: conservado por trazabilidad, pero no recomendado.
Muestra visualmente el estado, pero no uses colores alarmistas para contenido simplemente preliminar.
________________________________________
38. Futuras extensiones que debes dejar preparadas
Diseña interfaces o puntos de extensión para:
•	Matrix View;
•	Capability Map;
•	Business Scenario Explorer;
•	Regulation Explorer;
•	Business Object Model;
•	Control Architecture;
•	API Catalog;
•	Event Catalog;
•	comparación entre versiones;
•	vista por participante;
•	vista por value stream;
•	vista por regulación;
•	vista por estado de madurez;
•	importación CSV;
•	importación JSON;
•	integración con GitHub;
•	integración con CMS;
•	historial de cambios;
•	aprobación editorial.
No programes todas estas capacidades ahora.
Evita crear código muerto o pantallas falsas.
Deja contratos, rutas o documentación para su incorporación futura.
________________________________________
39. Restricciones de implementación
No debes:
•	hardcodear los Service Domains dentro de componentes;
•	usar posiciones absolutas individuales para cada tarjeta;
•	copiar la interfaz de BIAN;
•	usar datos bancarios que no correspondan a AFORE;
•	presentar regulación no validada como definitiva;
•	construir un backend innecesario;
•	agregar autenticación;
•	agregar pagos;
•	agregar telemetría externa;
•	depender de imágenes remotas;
•	introducir animaciones que afecten rendimiento;
•	ocultar errores de validación;
•	entregar solamente pseudocódigo;
•	dejar componentes sin terminar;
•	presentar botones sin funcionalidad;
•	afirmar que las pruebas pasan sin ejecutarlas.
________________________________________
40. Secuencia de trabajo esperada
Ejecuta en este orden:
Fase 1 — Diagnóstico
•	inspeccionar repositorio;
•	identificar stack;
•	identificar riesgos;
•	documentar plan breve.
Fase 2 — Modelo
•	crear tipos;
•	crear esquemas;
•	crear datos;
•	crear validaciones;
•	crear relaciones.
Fase 3 — Estructura visual
•	implementar shell;
•	header;
•	toolbar;
•	canvas;
•	Áreas;
•	Dominios;
•	Service Domains.
Fase 4 — Interacción
•	zoom;
•	pan;
•	búsqueda;
•	filtros;
•	selección;
•	panel;
•	relaciones;
•	deep links.
Fase 5 — Fichas
•	página de Área;
•	página de Dominio;
•	página de Service Domain;
•	metodología.
Fase 6 — Responsive y accesibilidad
•	tablet;
•	móvil;
•	teclado;
•	lectores de pantalla;
•	contraste.
Fase 7 — Exportación
•	PNG;
•	impresión;
•	JSON.
Fase 8 — Calidad
•	lint;
•	typecheck;
•	validación de datos;
•	unit tests;
•	component tests;
•	e2e;
•	build.
Fase 9 — Documentación
•	README;
•	arquitectura;
•	modelo de datos;
•	decisiones;
•	limitaciones.
________________________________________
41. Comandos que deben quedar disponibles
Cuando el stack lo permita:
npm install
npm run dev
npm run lint
npm run typecheck
npm run validate:data
npm run test
npm run test:e2e
npm run build
npm run start
Todos deben quedar documentados.
________________________________________
42. Formato de entrega de Antigravity
Al finalizar, entrega:
Resumen
Qué se construyó.
Decisiones técnicas
Qué motor visual se utilizó y por qué.
Archivos creados o modificados
Lista precisa.
Cómo ejecutar
Comandos exactos.
Pruebas ejecutadas
Indica:
•	comando;
•	resultado;
•	número de pruebas;
•	fallos pendientes.
Criterios de aceptación
Checklist con estado real.
Supuestos
Lista explícita.
Limitaciones
Lista honesta.
Próxima evolución recomendada
Solo la siguiente evolución lógica, sin sustituir el entregable actual.
________________________________________
43. Instrucción final
Construye una implementación profesional, funcional y mantenible del:
RAIA Service Landscape V14.0 — Value Chain View
El resultado debe permitir que un arquitecto empresarial, especialista operativo, regulador, ingeniero, auditor o ejecutivo comprenda:
•	cómo se organiza la industria;
•	qué responsabilidades existen;
•	qué Service Domains participan;
•	cómo se relacionan;
•	qué objetos administran;
•	qué actores intervienen;
•	qué regulación los afecta;
•	qué controles requieren;
•	cómo navegar desde una visión de industria hasta un dominio específico.
La prioridad es:
Coherencia
→ Claridad
→ Navegabilidad
→ Trazabilidad
→ Extensibilidad
→ Calidad técnica
No midas el éxito por la cantidad de componentes creados.
Mídelo por la capacidad del producto para convertir la complejidad del Sistema de Ahorro para el Retiro en una arquitectura comprensible, navegable, verificable y evolutiva.

