const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");

// Create data directory if it doesn't exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 11 Business Areas
const businessAreasRaw = [
  {
    id: "RAIA-BA-001",
    nameEs: "Gobierno y Dirección del SAR",
    description: "Define las políticas, estrategias y regulaciones que rigen el Sistema de Ahorro para el Retiro en México, asegurando la alineación institucional y el desarrollo de capacidades sectoriales.",
    purpose: "Establecer el marco estratégico y normativo para el funcionamiento eficiente y equitativo del sistema previsional.",
    colorToken: "#123B5D", // Azul institucional
    layoutZone: "top-left",
    order: 1
  },
  {
    id: "RAIA-BA-002",
    nameEs: "Riesgo, Cumplimiento y Supervisión",
    description: "Monitorea el cumplimiento de las normativas vigentes, gestiona los riesgos operativos y financieros, y asegura la resiliencia operativa y ciberseguridad en el sector.",
    purpose: "Mitigar riesgos institucionales y regulatorios, salvaguardando los activos de los trabajadores y la estabilidad del SAR.",
    colorToken: "#0B2538", // Azul profundo
    layoutZone: "top-right",
    order: 2
  },
  {
    id: "RAIA-BA-003",
    nameEs: "Identidad, Partes y Expediente",
    description: "Administra la información de identidad de los trabajadores, patrones y dependencias, garantizando la validez jurídica mediante firmas y expedientes digitales.",
    purpose: "Asegurar la certeza jurídica de la identidad de los participantes del SAR y la integridad de su expediente digital.",
    colorToken: "#0E6B6F", // Turquesa
    layoutZone: "middle-right-top",
    order: 3
  },
  {
    id: "RAIA-BA-004",
    nameEs: "Afiliación y Cuenta Individual",
    description: "Orquesta la afiliación de los trabajadores, el traspaso y regularización de cuentas, así como la administración del libro mayor y la asignación de saldos y rendimientos.",
    purpose: "Administrar con precisión el registro de propiedad de los recursos de cada trabajador a lo largo de su vida laboral.",
    colorToken: "#3A7D5B", // Verde institucional
    layoutZone: "center-left",
    order: 4
  },
  {
    id: "RAIA-BA-005",
    nameEs: "Recaudación y Aportaciones",
    description: "Gestiona la determinación, cobro y conciliación de las aportaciones obligatorias, complementarias y ahorro voluntario en el sistema.",
    purpose: "Asegurar la correcta canalización e individualización de los recursos recaudados hacia las cuentas correspondientes.",
    colorToken: "#C69A3B", // Dorado previsional
    layoutZone: "center-middle",
    order: 5
  },
  {
    id: "RAIA-BA-006",
    nameEs: "Inversión y SIEFORE",
    description: "Define y ejecuta las estrategias de inversión para las Sociedades de Inversión Especializadas en Fondos para el Retiro (SIEFORE), gestionando portafolios y riesgos asociados.",
    purpose: "Maximizar el rendimiento de los recursos de los trabajadores bajo un esquema prudente de diversificación y control de riesgos.",
    colorToken: "#CAD3DA", // Plateado / Gris
    layoutZone: "center-right",
    order: 6
  },
  {
    id: "RAIA-BA-007",
    nameEs: "Retiros, Prestaciones y Pensiones",
    description: "Procesa las solicitudes de retiros parciales, totales, pensiones y traspasos al Fondo de Pensiones para el Bienestar.",
    purpose: "Garantizar la entrega oportuna y legal de los beneficios previsionales acumulados por los trabajadores o sus beneficiarios.",
    colorToken: "#1F78B4", // Selección / Azul
    layoutZone: "bottom-center",
    order: 7
  },
  {
    id: "RAIA-BA-008",
    nameEs: "Servicio, Canales y Experiencia",
    description: "Orquesta la atención omnicanal, la resolución de solicitudes y aclaraciones, y promueve la educación financiera previsional.",
    purpose: "Ofrecer una experiencia de servicio accesible, transparente y educativa para empoderar al trabajador en su planeación de retiro.",
    colorToken: "#52616D", // Texto secundario / Pizarra
    layoutZone: "middle-right-bottom",
    order: 8
  },
  {
    id: "RAIA-BA-009",
    nameEs: "Servicios Compartidos de Industria",
    description: "Provee la infraestructura transaccional común de la industria, incluyendo la Base de Datos Nacional SAR (BDNSAR), compensación e intercambios con IMSS, ISSSTE, etc.",
    purpose: "Facilitar la interoperabilidad y eficiencia transaccional entre todos los participantes del ecosistema previsional.",
    colorToken: "#B7791F", // Advertencia / Bronce
    layoutZone: "center-top",
    order: 9
  },
  {
    id: "RAIA-BA-010",
    nameEs: "Capacidades Empresariales y Tecnología",
    description: "Soporta la operación del ecosistema a través del gobierno de datos, ingeniería de plataformas, observabilidad y automatización de tecnología corporativa.",
    purpose: "Proveer la base tecnológica y operativa segura, escalable y eficiente para sustentar la arquitectura RAIA.",
    colorToken: "#B54747", // Rojo / Terracota
    layoutZone: "middle-left",
    order: 10
  },
  {
    id: "RAIA-BA-011",
    nameEs: "Evolución, Arquitectura, Innovación y Conocimiento",
    description: "Define los estándares, patrones de diseño, radar tecnológico y promueve la adopción de inteligencia artificial y mejores prácticas actuariales.",
    purpose: "Guiar el desarrollo y la evolución continua de la arquitectura de referencia industrial en beneficio de la comunidad.",
    colorToken: "#F3E9D2", // Arena clara
    layoutZone: "bottom-full",
    order: 11
  }
];

// 34 Business Domains
const businessDomainsRaw = [
  // BA-001
  { id: "RAIA-BD-001", businessAreaId: "RAIA-BA-001", nameEs: "Estrategia y Política del SAR", order: 1 },
  { id: "RAIA-BD-002", businessAreaId: "RAIA-BA-001", nameEs: "Regulación y Autorizaciones", order: 2 },
  { id: "RAIA-BD-003", businessAreaId: "RAIA-BA-001", nameEs: "Gobierno y Desempeño", order: 3 },
  // BA-002
  { id: "RAIA-BD-004", businessAreaId: "RAIA-BA-002", nameEs: "Supervisión y Control Regulatorio", order: 1 },
  { id: "RAIA-BD-005", businessAreaId: "RAIA-BA-002", nameEs: "Riesgo y Cumplimiento", order: 2 },
  { id: "RAIA-BD-006", businessAreaId: "RAIA-BA-002", nameEs: "Resiliencia y Aseguramiento", order: 3 },
  // BA-003
  { id: "RAIA-BD-007", businessAreaId: "RAIA-BA-003", nameEs: "Datos de Personas y Organizaciones", order: 1 },
  { id: "RAIA-BD-008", businessAreaId: "RAIA-BA-003", nameEs: "Identidad, Autenticación y Consentimiento", order: 2 },
  { id: "RAIA-BD-009", businessAreaId: "RAIA-BA-003", nameEs: "Expediente y Evidencia", order: 3 },
  // BA-004
  { id: "RAIA-BD-010", businessAreaId: "RAIA-BA-004", nameEs: "Incorporación y Afiliación", order: 1 },
  { id: "RAIA-BD-011", businessAreaId: "RAIA-BA-004", nameEs: "Traspaso y Regularización", order: 2 },
  { id: "RAIA-BD-012", businessAreaId: "RAIA-BA-004", nameEs: "Administración de Cuenta Individual", order: 3 },
  // BA-005
  { id: "RAIA-BD-013", businessAreaId: "RAIA-BA-005", nameEs: "Recaudación Obligatoria", order: 1 },
  { id: "RAIA-BD-014", businessAreaId: "RAIA-BA-005", nameEs: "Ahorro Voluntario", order: 2 },
  { id: "RAIA-BD-015", businessAreaId: "RAIA-BA-005", nameEs: "Individualización y Conciliación", order: 3 },
  // BA-006
  { id: "RAIA-BD-016", businessAreaId: "RAIA-BA-006", nameEs: "Diseño y Asignación de Fondos", order: 1 },
  { id: "RAIA-BD-017", businessAreaId: "RAIA-BA-006", nameEs: "Operación de Inversiones", order: 2 },
  { id: "RAIA-BD-018", businessAreaId: "RAIA-BA-006", nameEs: "Valuación, Riesgo y Desempeño", order: 3 },
  // BA-007
  { id: "RAIA-BD-019", businessAreaId: "RAIA-BA-007", nameEs: "Retiros, Parciales", order: 1 }, // Wait, in spec: "Retiros Parciales"
  { id: "RAIA-BD-020", businessAreaId: "RAIA-BA-007", nameEs: "Pensión y Disposición Total", order: 2 },
  { id: "RAIA-BD-021", businessAreaId: "RAIA-BA-007", nameEs: "Fallecimiento y Beneficiarios", order: 3 },
  { id: "RAIA-BD-022", businessAreaId: "RAIA-BA-007", nameEs: "Fondo de Pensiones para el Bienestar", order: 4 },
  // BA-008
  { id: "RAIA-BD-023", businessAreaId: "RAIA-BA-008", nameEs: "Omnicanalidad", order: 1 },
  { id: "RAIA-BD-024", businessAreaId: "RAIA-BA-008", nameEs: "Solicitudes, Casos y Reclamaciones", order: 2 },
  { id: "RAIA-BD-025", businessAreaId: "RAIA-BA-008", nameEs: "Educación y Comercialización", order: 3 },
  // BA-009
  { id: "RAIA-BD-026", businessAreaId: "RAIA-BA-009", nameEs: "BDNSAR y Registros Maestros", order: 1 },
  { id: "RAIA-BD-027", businessAreaId: "RAIA-BA-009", nameEs: "Orquestación e Intercambio", order: 2 },
  { id: "RAIA-BD-028", businessAreaId: "RAIA-BA-009", nameEs: "Integración con Ecosistema Externo", order: 3 },
  // BA-010
  { id: "RAIA-BD-029", businessAreaId: "RAIA-BA-010", nameEs: "Datos, Seguridad y Privacidad", order: 1 },
  { id: "RAIA-BD-030", businessAreaId: "RAIA-BA-010", nameEs: "Tecnología y Operación", order: 2 },
  { id: "RAIA-BD-031", businessAreaId: "RAIA-BA-010", nameEs: "Capacidades Corporativas", order: 3 },
  // BA-011
  { id: "RAIA-BD-032", businessAreaId: "RAIA-BA-011", nameEs: "Arquitectura y Estándares", order: 1 },
  { id: "RAIA-BD-033", businessAreaId: "RAIA-BA-011", nameEs: "Analítica, Modelos e Inteligencia Artificial", order: 2 },
  { id: "RAIA-BD-034", businessAreaId: "RAIA-BA-011", nameEs: "Innovación y Gestión del Cambio", order: 3 }
];

// Service Domains raw definitions by BD
const serviceDomainsRaw = {
  // BA-001
  "RAIA-BD-001": [
    "Política del Sistema de Ahorro para el Retiro",
    "Estrategia de Industria",
    "Planeación Sectorial",
    "Gestión de Capacidades de Industria",
    "Gestión del Modelo Operativo",
    "Gestión de Resultados del SAR"
  ],
  "RAIA-BD-002": [
    "Gestión del Marco Regulatorio",
    "Gestión del Cambio Regulatorio",
    "Autorización de Participantes",
    "Autorización de AFORE y SIEFORE",
    "Gestión Regulatoria de Comisiones",
    "Gestión de Criterios y Consultas Normativas"
  ],
  "RAIA-BD-003": [
    "Gobierno Corporativo",
    "Gestión de Portafolio de Industria",
    "Gestión de Beneficios",
    "Métricas del Sistema",
    "Transparencia Sectorial",
    "Gestión de Stakeholders del SAR"
  ],
  // BA-002
  "RAIA-BD-004": [
    "Supervisión Regulatoria",
    "Inspección Regulatoria",
    "Información Regulatoria",
    "Atención de Requerimientos Regulatorios",
    "Programas Correctivos",
    "Gestión de Sanciones",
    "Seguimiento de Hallazgos"
  ],
  "RAIA-BD-005": [
    "Gestión de Riesgo Empresarial",
    "Gestión de Riesgo Operacional",
    "Cumplimiento Normativo",
    "Prevención de Lavado de Dinero y Financiamiento al Terrorismo",
    "Prevención y Gestión de Fraude",
    "Gestión de Riesgo de Terceros",
    "Gestión de Conflictos de Interés"
  ],
  "RAIA-BD-006": [
    "Continuidad de Negocio",
    "Recuperación ante Desastres",
    "Ciberseguridad",
    "Seguridad de la Información",
    "Auditoría Interna",
    "Gestión de Incidentes Mayores",
    "Pruebas de Resiliencia Operacional"
  ],
  // BA-003
  "RAIA-BD-007": [
    "Datos del Trabajador", // RAIA-SD-020
    "Datos de Beneficiarios",
    "Datos del Patrón",
    "Datos de Dependencias Públicas",
    "Directorio de Participantes del SAR",
    "Gestión de Contacto y Domicilio",
    "Gestión de Relaciones entre Partes"
  ],
  "RAIA-BD-008": [
    "Resolución de Identidad", // RAIA-SD-021
    "Gestión de CURP, NSS y RFC",
    "Identidad Biométrica", // RAIA-SD-023
    "Autenticación del Trabajador",
    "Gestión de Derechos de Acceso",
    "Gestión de Consentimiento",
    "Prueba de Vida",
    "Gestión de Representación Legal"
  ],
  "RAIA-BD-009": [
    "Expediente Electrónico", // RAIA-SD-031
    "Gestión Documental",
    "Evidencia Digital",
    "Firma Electrónica y No Repudio",
    "Conservación de Registros",
    "Corrección de Datos",
    "Trazabilidad y Bitácora de Auditoría"
  ],
  // BA-004
  "RAIA-BD-010": [
    "Localización de Cuenta",
    "Registro en AFORE", // RAIA-SD-040
    "Asignación de Cuenta",
    "Reasignación de Cuenta",
    "Recertificación de Cuenta",
    "Activación de Cuenta",
    "Gestión de Afiliación"
  ],
  "RAIA-BD-011": [
    "Traspaso de Cuenta", // RAIA-SD-045 (overridden manually)
    "Cancelación de Traspaso",
    "Unificación de Cuentas",
    "Separación de Cuentas",
    "Inactivación de Cuenta",
    "Registro de Fallecimiento",
    "Recuperación de Cuenta",
    "Regularización de Cuenta"
  ],
  "RAIA-BD-012": [
    "Libro Mayor de Cuenta Individual", // RAIA-SD-046
    "Administración de Subcuentas",
    "Gestión de Saldos",
    "Registro de Movimientos",
    "Asignación de Acciones",
    "Asignación de Rendimientos",
    "Cálculo y Aplicación de Comisiones",
    "Ajustes de Cuenta",
    "Estado de Cuenta",
    "Historial Transaccional",
    "Recursos SAR Legacy",
    "Conciliación de Cuenta Individual"
  ],
  // BA-005
  "RAIA-BD-013": [
    "Determinación de Aportaciones",
    "Recaudación de Aportaciones Patronales",
    "Recaudación de Aportaciones Gubernamentales",
    "Registro de Aportaciones de Vivienda",
    "Cuota Social",
    "Gestión de Aportaciones Omitidas",
    "Gestión de Morosidad de Aportaciones"
  ],
  "RAIA-BD-014": [
    "Aportaciones Voluntarias",
    "Aportaciones Complementarias",
    "Ahorro de Largo Plazo",
    "Ahorro Solidario",
    "Aportaciones de Trabajadores Independientes",
    "Aportaciones Voluntarias vía Nómina",
    "Domiciliación de Ahorro Voluntario"
  ],
  "RAIA-BD-015": [
    "Individualización de Aportaciones",
    "Resolución de Pagos No Identificados",
    "Conciliación de Recaudación",
    "Corrección de Aportaciones",
    "Transferencia de Aportaciones",
    "Devolución de Aportaciones",
    "Aclaración de Diferencias de Recaudación"
  ],
  // BA-006
  "RAIA-BD-016": [
    "Asignación a SIEFORE Generacional",
    "Estrategia de Inversión",
    "Construcción de Portafolio",
    "Gestión de Mandatos de Inversión",
    "Gestión de Benchmark",
    "Gestión de Clases de Activos",
    "Diseño de Portafolio Objetivo"
  ],
  "RAIA-BD-017": [
    "Ejecución de Operaciones",
    "Custodia de Valores",
    "Liquidación de Operaciones",
    "Acciones Corporativas",
    "Administración de Derivados",
    "Gestión de Liquidez",
    "Préstamo de Valores",
    "Gestión de Contrapartes",
    "Gestión de Instrucciones de Inversión"
  ],
  "RAIA-BD-018": [
    "Valuación de Instrumentos",
    "Valuación de Portafolio",
    "Riesgo de Inversión",
    "Cumplimiento del Régimen de Inversión",
    "Medición de Desempeño",
    "Gestión de Límites y Exposición",
    "Riesgo de Mercado",
    "Riesgo de Crédito de Inversiones",
    "Atribución de Rendimientos"
  ],
  // BA-007
  "RAIA-BD-019": [
    "Retiro de Ahorro Voluntario",
    "Retiro Parcial por Desempleo",
    "Ayuda para Gastos de Matrimonio",
    "Retiros Parciales Especiales",
    "Validación de Elegibilidad de Retiro",
    "Reintegro de Semanas o Recursos"
  ],
  "RAIA-BD-020": [
    "Coordinación de Elegibilidad Pensionaria",
    "Elección de Régimen Pensionario",
    "Resolución de Pensión",
    "Retiro Programado",
    "Transferencia a Renta Vitalicia",
    "Pensión Garantizada",
    "Disposición Total de Recursos",
    "Recuperación de Recursos de Vivienda",
    "Seguimiento de Pago Pensionario"
  ],
  "RAIA-BD-021": [
    "Notificación de Fallecimiento",
    "Validación de Beneficiarios",
    "Prestaciones de Sobrevivencia",
    "Distribución de Recursos a Beneficiarios",
    "Gestión de Recursos No Reclamados",
    "Resolución de Derechos de Beneficiarios"
  ],
  "RAIA-BD-022": [
    "Identificación de Cuentas Elegibles",
    "Transferencia de Recursos al Fondo",
    "Coordinación de Complemento Pensionario",
    "Reintegro de Recursos",
    "Trazabilidad de Derechos",
    "Conciliación con el Fondo"
  ],
  // BA-008
  "RAIA-BD-023": [
    "Atención Omnicanal",
    "Autoservicio Digital",
    "Aplicación Móvil",
    "Portal Web",
    "Centro de Contacto",
    "Atención en Sucursal",
    "Correspondencia",
    "Notificaciones",
    "Gestión de Acceso a Canales",
    "Historial de Interacciones"
  ],
  "RAIA-BD-024": [
    "Gestión de Solicitudes de Servicio",
    "Gestión de Casos",
    "Gestión de Aclaraciones",
    "Gestión de Quejas",
    "Coordinación con UNE",
    "Interacción con CONDUSEF",
    "Gestión de Niveles de Servicio",
    "Análisis de Causa Raíz",
    "Seguimiento de Compromisos"
  ],
  "RAIA-BD-025": [
    "Educación Financiera y Previsional",
    "Gobierno de Publicidad",
    "Gestión de Asesores Previsionales",
    "Gestión de Campañas",
    "Gestión de Prospectos",
    "Conocimiento del Trabajador",
    "Medición de Satisfacción",
    "Gestión de Retroalimentación",
    "Comparación de Servicios y Rendimientos"
  ],
  // BA-009
  "RAIA-BD-026": [
    "Base de Datos Nacional SAR",
    "Registro Maestro de Cuentas",
    "Registro Maestro de Trabajadores",
    "Registro Maestro de Participantes",
    "Datos de Referencia de Industria",
    "Calidad de Datos de Industria",
    "Calendario Operativo",
    "Catálogos de Industria"
  ],
  "RAIA-BD-027": [
    "Orquestación Central de Procesos",
    "Intercambio de Información Regulatoria",
    "Coordinación de Transferencias de Recursos",
    "Compensación entre Participantes",
    "Hub de Eventos y Notificaciones",
    "Validación de Identidad de Industria",
    "Validación Biométrica de Industria",
    "Gestión de Folios y Acuses",
    "Monitoreo de Procesos de Industria"
  ],
  "RAIA-BD-028": [
    "Integración con IMSS",
    "Integración con ISSSTE",
    "Integración con INFONAVIT",
    "Integración con FOVISSSTE",
    "Integración con Instituciones Bancarias",
    "Integración con Aseguradoras",
    "Integración con Custodios y Mercados",
    "Integración con Autoridades Fiscales",
    "Integración con Entidades Recaudadoras"
  ],
  // BA-010
  "RAIA-BD-029": [
    "Gobierno de Datos",
    "Metadatos y Linaje",
    "Calidad de Datos Empresarial",
    "Privacidad y Protección de Datos",
    "Gestión de Identidades y Accesos",
    "Criptografía y Gestión de Secretos",
    "Inteligencia de Amenazas",
    "Desarrollo Seguro",
    "Gestión de Vulnerabilidades"
  ],
  "RAIA-BD-030": [
    "Operaciones de Tecnología",
    "Ingeniería de Plataformas",
    "Gestión de APIs",
    "Plataforma de Eventos",
    "Plataforma de Integración",
    "Observabilidad",
    "Gestión de Servicios de TI",
    "Gestión de Configuración",
    "Gestión de Capacidad",
    "Gestión de Ambientes",
    "Automatización y CI/CD",
    "Recuperación Tecnológica"
  ],
  "RAIA-BD-031": [
    "Contabilidad Financiera",
    "Gestión Financiera de Tecnología",
    "Compras",
    "Gestión de Proveedores",
    "Gestión de Capital Humano",
    "Servicios Jurídicos",
    "Gestión de Registros",
    "Arquitectura Empresarial",
    "Gestión de Portafolio Empresarial",
    "Gestión de Contratos",
    "Estrategia de Salida de Proveedores"
  ],
  // BA-011
  "RAIA-BD-032": [
    "Gobierno de Arquitectura Empresarial",
    "Estándares y Lineamientos",
    "Catálogo de Patrones",
    "Autoridad de Diseño de Soluciones",
    "Radar Tecnológico",
    "Gestión de Deuda Técnica",
    "Gestión de Excepciones Arquitectónicas",
    "Arquitecturas de Referencia"
  ],
  "RAIA-BD-033": [
    "Analítica Regulatoria",
    "Modelos Actuariales",
    "Modelos de Inversión",
    "Modelos de Comportamiento del Trabajador",
    "Modelos de Fraude",
    "Gobierno de Inteligencia Artificial",
    "Plataforma de Ciencia de Datos",
    "Gestión del Ciclo de Vida de Modelos",
    "Monitoreo de Modelos"
  ],
  "RAIA-BD-034": [
    "Diseño de Servicios",
    "Portafolio de Innovación",
    "Investigación de Industria",
    "Sandbox Regulatorio",
    "Gestión del Conocimiento",
    "Gestión del Cambio y Adopción",
    "Capacitación y Certificación",
    "Mejora Continua",
    "Gestión de Comunidad RAIA"
  ]
};

// Map of key Service Domains to their exact IDs
const keyServiceDomainIds = {
  "Datos del Trabajador": "RAIA-SD-020",
  "Resolución de Identidad": "RAIA-SD-021",
  "Identidad Biométrica": "RAIA-SD-023",
  "Expediente Electrónico": "RAIA-SD-031",
  "Registro en AFORE": "RAIA-SD-040",
  "Traspaso de Cuenta": "RAIA-SD-045",
  "Libro Mayor de Cuenta Individual": "RAIA-SD-046"
};

// Set to keep track of allocated IDs
const allocatedIds = new Set(Object.values(keyServiceDomainIds));

// Generate slug from text
function makeSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Generate the list of Service Domains
const serviceDomains = [];
let sdCounter = 1;

for (const [bdId, names] of Object.entries(serviceDomainsRaw)) {
  const bd = businessDomainsRaw.find(d => d.id === bdId);
  const baId = bd.businessAreaId;

  names.forEach((name) => {
    let sdId;
    if (keyServiceDomainIds[name]) {
      sdId = keyServiceDomainIds[name];
    } else {
      while (allocatedIds.has(`RAIA-SD-${String(sdCounter).padStart(3, "0")}`)) {
        sdCounter++;
      }
      sdId = `RAIA-SD-${String(sdCounter).padStart(3, "0")}`;
      allocatedIds.add(sdId);
      sdCounter++;
    }

    const slug = makeSlug(name);

    if (sdId === "RAIA-SD-045") {
      // Exactly the Traspaso de Cuenta JSON from Section 18
      serviceDomains.push({
        id: "RAIA-SD-045",
        slug: "traspaso-de-cuenta",
        businessAreaId: "RAIA-BA-004",
        businessDomainId: "RAIA-BD-011",
        nameEs: "Traspaso de Cuenta",
        nameEn: "Individual Account Transfer",
        aliases: ["Traspaso AFORE", "Transferencia de Cuenta Individual"],
        summary: "Gestiona el cambio de administración de una cuenta individual entre administradoras autorizadas.",
        definition: "Administra el ciclo de vida de una solicitud de traspaso, desde su iniciación y consentimiento hasta la validación, resolución, intercambio de información y transferencia de recursos.",
        purpose: "Permitir la movilidad regulada de la cuenta individual conservando identidad, integridad, consentimiento, trazabilidad y continuidad de los recursos.",
        focusObject: {
          name: "Solicitud de Traspaso",
          description: "Registro que representa la intención, consentimiento, validaciones, resolución y ejecución del cambio de administradora."
        },
        capabilities: [
          "Iniciar solicitud de traspaso",
          "Validar identidad y consentimiento",
          "Validar elegibilidad",
          "Coordinar administradora receptora y transferente",
          "Gestionar folios y acuses",
          "Transferir información y recursos",
          "Cancelar o rechazar solicitudes",
          "Conservar evidencia"
        ],
        serviceOperations: [
          {
            id: "RAIA-SO-045-01",
            name: "Iniciar traspaso",
            description: "Registra una nueva solicitud de traspaso.",
            operationType: "initiate"
          },
          {
            id: "RAIA-SO-045-02",
            name: "Validar identidad",
            description: "Valida la identidad y autenticidad del trabajador.",
            operationType: "validate"
          },
          {
            id: "RAIA-SO-045-03",
            name: "Validar elegibilidad",
            description: "Determina si la cuenta puede ser objeto de traspaso.",
            operationType: "validate"
          },
          {
            id: "RAIA-SO-045-04",
            name: "Ejecutar traspaso",
            description: "Coordina la transferencia de información y recursos.",
            operationType: "execute"
          },
          {
            id: "RAIA-SO-045-05",
            name: "Cancelar traspaso",
            description: "Cancela una solicitud bajo los supuestos permitidos.",
            operationType: "update"
          }
        ],
        businessEvents: [
          {
            id: "RAIA-BE-045-01",
            name: "Traspaso solicitado",
            description: "Se ha registrado una solicitud de traspaso.",
            direction: "produces"
          },
          {
            id: "RAIA-BE-045-02",
            name: "Identidad validada",
            description: "La identidad del trabajador fue validada.",
            direction: "consumes"
          },
          {
            id: "RAIA-BE-045-03",
            name: "Traspaso aprobado",
            description: "La solicitud cumplió las validaciones aplicables.",
            direction: "produces"
          },
          {
            id: "RAIA-BE-045-04",
            name: "Recursos transferidos",
            description: "Los recursos fueron transferidos a la administradora receptora.",
            direction: "produces"
          }
        ],
        businessObjects: [
          {
            id: "RAIA-BO-045-01",
            name: "Solicitud de Traspaso",
            role: "focus"
          },
          {
            id: "RAIA-BO-001",
            name: "Trabajador",
            role: "reference"
          },
          {
            id: "RAIA-BO-010",
            name: "Cuenta Individual",
            role: "input"
          },
          {
            id: "RAIA-BO-012",
            name: "Expediente Electrónico",
            role: "input"
          }
        ],
        accountableActors: ["AFORE receptora"],
        participatingActors: ["Trabajador", "AFORE transferente", "Empresa Operadora", "CONSAR"],
        regulations: [
          {
            id: "RAIA-REG-LSAR",
            name: "Ley de los Sistemas de Ahorro para el Retiro",
            authority: "Congreso de la Unión",
            mandatory: true,
            validationStatus: "official"
          },
          {
            id: "RAIA-REG-CUO",
            name: "Disposiciones de carácter general en materia de operaciones de los Sistemas de Ahorro para el Retiro",
            authority: "CONSAR",
            mandatory: true,
            validationStatus: "pending-validation"
          }
        ],
        controls: [
          {
            id: "RAIA-CTL-045-01",
            name: "Validación de identidad",
            description: "Debe comprobarse la identidad del trabajador mediante los mecanismos autorizados.",
            controlType: "preventive"
          },
          {
            id: "RAIA-CTL-045-02",
            name: "Conservación de consentimiento",
            description: "Debe conservarse evidencia íntegra del consentimiento.",
            controlType: "evidence"
          },
          {
            id: "RAIA-CTL-045-03",
            name: "Trazabilidad de transferencia",
            description: "Cada etapa debe conservar folio, fecha, actor y resultado.",
            controlType: "detective"
          }
        ],
        evidences: [
          "Consentimiento del trabajador",
          "Validación de identidad",
          "Firma o autenticación",
          "Folio de solicitud",
          "Acuses de participantes",
          "Resultado de transferencia",
          "Bitácora de auditoría"
        ],
        nfrs: [
          {
            category: "Trazabilidad",
            statement: "Toda modificación debe conservar actor, fecha, estado anterior y estado resultante."
          },
          {
            category: "No repudio",
            statement: "El consentimiento y las instrucciones deben conservar evidencia verificable."
          },
          {
            category: "Privacidad",
            statement: "Los datos personales deben protegerse durante almacenamiento, procesamiento e intercambio."
          },
          {
            category: "Integridad",
            statement: "La solicitud no debe modificarse sin autorización y evidencia."
          }
        ],
        kpis: [
          {
            name: "Tiempo de resolución de traspaso",
            description: "Tiempo entre la iniciación y la resolución final.",
            frequency: "mensual"
          },
          {
            name: "Tasa de rechazo",
            description: "Porcentaje de solicitudes rechazadas respecto del total recibido.",
            frequency: "mensual"
          },
          {
            name: "Tasa de cancelación",
            description: "Porcentaje de solicitudes canceladas.",
            frequency: "mensual"
          }
        ],
        relatedServiceDomainIds: [
          "RAIA-SD-020",
          "RAIA-SD-021",
          "RAIA-SD-023",
          "RAIA-SD-031",
          "RAIA-SD-040",
          "RAIA-SD-046"
        ],
        valueStreams: ["Administrar el ciclo de vida de la cuenta individual"],
        maturity: "defined",
        version: "14.0.0",
        status: "proposed",
        tags: ["cuenta individual", "traspaso", "identidad", "consentimiento", "movilidad"],
        createdAt: "2026-07-12",
        updatedAt: "2026-07-12"
      });
    } else {
      // General mock service domain
      serviceDomains.push({
        id: sdId,
        slug: slug,
        businessAreaId: baId,
        businessDomainId: bdId,
        nameEs: name,
        nameEn: name + " (English)",
        aliases: [name + " Alias"],
        summary: `Gestiona las operaciones y responsabilidades asociadas a: ${name}.`,
        definition: `Proporciona capacidades normalizadas de industria para la administración y control de: ${name}.`,
        purpose: `Asegurar el cumplimiento operativo e integridad funcional de las tareas vinculadas a: ${name}.`,
        focusObject: {
          name: `Objeto de ${name}`,
          description: `Registro o entidad que representa el estado y control de: ${name}.`
        },
        capabilities: [
          `Registrar y procesar ${name}`,
          `Validar condiciones de ${name}`,
          `Monitorear cumplimiento de ${name}`,
          `Auditar trazabilidad de ${name}`
        ],
        serviceOperations: [
          {
            id: `RAIA-SO-${sdId.split("-")[2]}-01`,
            name: `Registrar ${name.toLowerCase()}`,
            description: `Inicia o registra un nuevo caso de ${name.toLowerCase()}.`,
            operationType: "initiate"
          },
          {
            id: `RAIA-SO-${sdId.split("-")[2]}-02`,
            name: `Consultar ${name.toLowerCase()}`,
            description: `Recupera información detallada del estado de ${name.toLowerCase()}.`,
            operationType: "retrieve"
          },
          {
            id: `RAIA-SO-${sdId.split("-")[2]}-03`,
            name: `Actualizar ${name.toLowerCase()}`,
            description: `Modifica atributos o estado de ${name.toLowerCase()}.`,
            operationType: "update"
          }
        ],
        businessEvents: [
          {
            id: `RAIA-BE-${sdId.split("-")[2]}-01`,
            name: `${name} Solicitado`,
            description: `Se detectó o inició una solicitud de ${name.toLowerCase()}.`,
            direction: "produces"
          },
          {
            id: `RAIA-BE-${sdId.split("-")[2]}-02`,
            name: `${name} Procesado`,
            description: `Se concluyó el procesamiento de ${name.toLowerCase()}.`,
            direction: "produces"
          }
        ],
        businessObjects: [
          {
            id: `RAIA-BO-${sdId.split("-")[2]}-01`,
            name: `Registro de ${name}`,
            role: "focus"
          }
        ],
        accountableActors: ["AFORE", "Empresa Operadora"],
        participatingActors: ["Trabajador", "CONSAR"],
        regulations: [
          {
            id: "RAIA-REG-LSAR",
            name: "Ley de los Sistemas de Ahorro para el Retiro",
            authority: "Congreso de la Unión",
            mandatory: true,
            validationStatus: "official"
          }
        ],
        controls: [
          {
            id: `RAIA-CTL-${sdId.split("-")[2]}-01`,
            name: `Control de validación de ${name.toLowerCase()}`,
            description: `Garantiza que el registro cumple con las especificaciones de negocio.`,
            controlType: "preventive"
          }
        ],
        evidences: [
          `Acuse de ${name}`,
          `Bitácora transaccional`
        ],
        nfrs: [
          {
            category: "Disponibilidad",
            statement: "Disponibilidad operativa superior al 99.9% durante horario operativo del SAR."
          },
          {
            category: "Seguridad",
            statement: "Autenticación federada y cifrado de datos en reposo y tránsito."
          }
        ],
        kpis: [
          {
            name: `Tasa de éxito de ${name}`,
            description: `Porcentaje de operaciones completadas exitosamente.`,
            frequency: "mensual"
          }
        ],
        relatedServiceDomainIds: [],
        valueStreams: ["Administración del Retiro"],
        maturity: "defined",
        version: "14.0.0",
        status: "active",
        tags: [name.toLowerCase(), "referencia"],
        createdAt: "2026-07-12",
        updatedAt: "2026-07-12"
      });
    }
  });
}

// Complete Business Areas & Domains structures with children lists
const businessAreas = businessAreasRaw.map(ba => {
  const bds = businessDomainsRaw.filter(bd => bd.businessAreaId === ba.id).map(bd => bd.id);
  const sds = serviceDomains.filter(sd => sd.businessAreaId === ba.id);
  return {
    ...ba,
    slug: makeSlug(ba.nameEs),
    businessDomainIds: bds,
    tags: [ba.nameEs.toLowerCase(), "area"],
    version: "14.0.0",
    status: "active",
    createdAt: "2026-07-12",
    updatedAt: "2026-07-12"
  };
});

const businessDomains = businessDomainsRaw.map(bd => {
  const sds = serviceDomains.filter(sd => sd.businessDomainId === bd.id).map(sd => sd.id);
  return {
    ...bd,
    slug: makeSlug(bd.nameEs),
    serviceDomainIds: sds,
    actors: ["AFORE", "Empresa Operadora", "Trabajador"],
    valueStreams: ["Cadena de Valor Previsional"],
    tags: [bd.nameEs.toLowerCase(), "dominio"],
    version: "14.0.0",
    status: "active",
    createdAt: "2026-07-12",
    updatedAt: "2026-07-12",
    description: `Agrupación de servicios para la gestión de ${bd.nameEs}.`,
    purpose: `Garantizar la correcta operación y control de ${bd.nameEs} en el ecosistema SAR.`
  };
});

// Relationships
const relations = [
  // Datos del Trabajador Flow
  { id: "rel-001", sourceId: "RAIA-SD-020", targetId: "RAIA-SD-021", type: "triggers", label: "Desencadena", description: "Inicia la resolución de identidad" },
  { id: "rel-002", sourceId: "RAIA-SD-021", targetId: "RAIA-SD-023", type: "validates", label: "Valida con", description: "Requiere validación biométrica para resolución" },
  { id: "rel-003", sourceId: "RAIA-SD-023", targetId: "RAIA-SD-031", type: "provides-to", label: "Aporta a", description: "Provee evidencias biométricas para el expediente" },
  { id: "rel-004", sourceId: "RAIA-SD-031", targetId: "RAIA-SD-040", type: "depends-on", label: "Requerido por", description: "El expediente electrónico es obligatorio para el registro" },
  { id: "rel-005", sourceId: "RAIA-SD-040", targetId: "RAIA-SD-046", type: "triggers", label: "Inicializa", description: "Crea el libro mayor contable al registrar la cuenta" },

  // Determinación de Aportaciones Flow
  { id: "rel-006", sourceId: "RAIA-SD-047", targetId: "RAIA-SD-048", type: "triggers", label: "Siguiente paso" }, // Note: we'll resolve names below or just hardcode IDs
  { id: "rel-007", sourceId: "RAIA-SD-048", targetId: "RAIA-SD-063", type: "triggers", label: "Siguiente paso" },
  { id: "rel-008", sourceId: "RAIA-SD-063", targetId: "RAIA-SD-061", type: "triggers", label: "Siguiente paso" },
  { id: "rel-009", sourceId: "RAIA-SD-061", targetId: "RAIA-SD-076", type: "triggers", label: "Siguiente paso" },
  { id: "rel-010", sourceId: "RAIA-SD-076", targetId: "RAIA-SD-077", type: "triggers", label: "Siguiente paso" },
  { id: "rel-011", sourceId: "RAIA-SD-077", targetId: "RAIA-SD-090", type: "triggers", label: "Siguiente paso" },

  // Traspaso de Cuenta relations from Section 18
  { id: "rel-traspaso-020", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-020", type: "depends-on", label: "Consulta Datos del Trabajador" },
  { id: "rel-traspaso-021", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-021", type: "depends-on", label: "Consulta Resolución de Identidad" },
  { id: "rel-traspaso-023", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-023", type: "validates", label: "Valida Identidad Biométrica" },
  { id: "rel-traspaso-031", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-031", type: "shares-data-with", label: "Comparte Expediente Electrónico" },
  { id: "rel-traspaso-040", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-040", type: "triggers", label: "Actualiza Registro en AFORE" },
  { id: "rel-traspaso-046", sourceId: "RAIA-SD-045", targetId: "RAIA-SD-046", type: "triggers", label: "Afecta Libro Mayor de Cuenta Individual" }
];

// Helper: Dynamically find some IDs for specific flows
function findIdByName(name) {
  const found = serviceDomains.find(sd => sd.nameEs.toLowerCase() === name.toLowerCase());
  return found ? found.id : null;
}

// Let's resolve the flow: Determinación de Aportaciones
// Determinación de Aportaciones -> Recaudación de Aportaciones Patronales -> Conciliación de Recaudación -> Individualización de Aportaciones -> Registro de Movimientos -> Asignación de Acciones -> Asignación a SIEFORE Generacional
const detAportId = findIdByName("Determinación de Aportaciones");
const recPatronId = findIdByName("Recaudación de Aportaciones Patronales");
const concRecaudId = findIdByName("Conciliación de Recaudación");
const indAportId = findIdByName("Individualización de Aportaciones");
const regMovId = findIdByName("Registro de Movimientos");
const asigAccId = findIdByName("Asignación de Acciones");
const asigSieforeId = findIdByName("Asignación a SIEFORE Generacional");

if (detAportId && recPatronId) {
  relations.push({ id: "rel-flow2-1", sourceId: detAportId, targetId: recPatronId, type: "triggers", label: "Desencadena", description: "Inicia recaudación" });
}
if (recPatronId && concRecaudId) {
  relations.push({ id: "rel-flow2-2", sourceId: recPatronId, targetId: concRecaudId, type: "triggers", label: "Orquesta", description: "Inicia conciliación" });
}
if (concRecaudId && indAportId) {
  relations.push({ id: "rel-flow2-3", sourceId: concRecaudId, targetId: indAportId, type: "triggers", label: "Desencadena", description: "Inicia individualización" });
}
if (indAportId && regMovId) {
  relations.push({ id: "rel-flow2-4", sourceId: indAportId, targetId: regMovId, type: "triggers", label: "Registra", description: "Registra movimientos de cuenta" });
}
if (regMovId && asigAccId) {
  relations.push({ id: "rel-flow2-5", sourceId: regMovId, targetId: asigAccId, type: "triggers", label: "Asigna", description: "Compra acciones correspondientes" });
}
if (asigAccId && asigSieforeId) {
  relations.push({ id: "rel-flow2-6", sourceId: asigAccId, targetId: asigSieforeId, type: "provides-to", label: "Asigna en", description: "Canaliza a SIEFORE generacional" });
}

// Estrategia de Inversión Flow
const estInvId = findIdByName("Estrategia de Inversión");
const constPortId = findIdByName("Construcción de Portafolio");
const ejecOperId = findIdByName("Ejecución de Operaciones");
const liqOperId = findIdByName("Liquidación de Operaciones");
const valPortId = findIdByName("Valuación de Portafolio");
const asigRendId = findIdByName("Asignación de Rendimientos");

if (estInvId && constPortId) {
  relations.push({ id: "rel-flow3-1", sourceId: estInvId, targetId: constPortId, type: "orchestrates" });
}
if (constPortId && ejecOperId) {
  relations.push({ id: "rel-flow3-2", sourceId: constPortId, targetId: ejecOperId, type: "triggers" });
}
if (ejecOperId && liqOperId) {
  relations.push({ id: "rel-flow3-3", sourceId: ejecOperId, targetId: liqOperId, type: "triggers" });
}
if (liqOperId && valPortId) {
  relations.push({ id: "rel-flow3-4", sourceId: liqOperId, targetId: valPortId, type: "triggers" });
}
if (valPortId && asigRendId) {
  relations.push({ id: "rel-flow3-5", sourceId: valPortId, targetId: asigRendId, type: "triggers" });
}

// Validación de Elegibilidad de Retiro Flow
const valElegId = findIdByName("Validación de Elegibilidad de Retiro");
const retDesempId = findIdByName("Retiro Parcial por Desempleo");
const dispRecId = findIdByName("Disposición Total de Recursos");
const ajustCtaId = findIdByName("Ajustes de Cuenta");
const estCtaId = findIdByName("Estado de Cuenta");

if (valElegId && retDesempId) {
  relations.push({ id: "rel-flow4-1", sourceId: valElegId, targetId: retDesempId, type: "validates" });
}
if (retDesempId && dispRecId) {
  relations.push({ id: "rel-flow4-2", sourceId: retDesempId, targetId: dispRecId, type: "triggers" });
}
if (dispRecId && ajustCtaId) {
  relations.push({ id: "rel-flow4-3", sourceId: dispRecId, targetId: ajustCtaId, type: "triggers" });
}
if (ajustCtaId && estCtaId) {
  relations.push({ id: "rel-flow4-4", sourceId: ajustCtaId, targetId: estCtaId, type: "triggers" });
}

// Coordinación de Elegibilidad Pensionaria Flow
const coordElegPensId = findIdByName("Coordinación de Elegibilidad Pensionaria");
const resPensId = findIdByName("Resolución de Pensión");
const elecRegPensId = findIdByName("Elección de Régimen Pensionario");
const retProgId = findIdByName("Retiro Programado");
const rentaVitId = findIdByName("Transferencia a Renta Vitalicia");

if (coordElegPensId && resPensId) {
  relations.push({ id: "rel-flow5-1", sourceId: coordElegPensId, targetId: resPensId, type: "triggers" });
}
if (resPensId && elecRegPensId) {
  relations.push({ id: "rel-flow5-2", sourceId: resPensId, targetId: elecRegPensId, type: "triggers" });
}
if (elecRegPensId && retProgId) {
  relations.push({ id: "rel-flow5-3", sourceId: elecRegPensId, targetId: retProgId, type: "triggers" });
}
if (elecRegPensId && rentaVitId) {
  relations.push({ id: "rel-flow5-4", sourceId: elecRegPensId, targetId: rentaVitId, type: "triggers" });
}

// Notificación de Fallecimiento Flow
const notFallecId = findIdByName("Notificación de Fallecimiento");
const valBenefId = findIdByName("Validación de Beneficiarios");
const prestSobrevId = findIdByName("Prestaciones de Sobrevivencia");
const distRecBenefId = findIdByName("Distribución de Recursos a Beneficiarios");

if (notFallecId && valBenefId) {
  relations.push({ id: "rel-flow6-1", sourceId: notFallecId, targetId: valBenefId, type: "triggers" });
}
if (valBenefId && prestSobrevId) {
  relations.push({ id: "rel-flow6-2", sourceId: valBenefId, targetId: prestSobrevId, type: "validates" });
}
if (prestSobrevId && distRecBenefId) {
  relations.push({ id: "rel-flow6-3", sourceId: prestSobrevId, targetId: distRecBenefId, type: "triggers" });
}

// Regulatory relations
const infRegId = findIdByName("Información Regulatoria");
const supRegId = findIdByName("Supervisión Regulatoria");
const atReqRegId = findIdByName("Atención de Requerimientos Regulatorios");

if (infRegId && supRegId) {
  relations.push({ id: "rel-reg-1", sourceId: infRegId, targetId: supRegId, type: "reports-to", label: "Reporta a" });
}
if (supRegId && atReqRegId) {
  relations.push({ id: "rel-reg-2", sourceId: supRegId, targetId: atReqRegId, type: "depends-on", label: "Regulado por" });
}

// Update the list of relatedServiceDomainIds in the generated serviceDomains
serviceDomains.forEach(sd => {
  const rels = relations.filter(r => r.sourceId === sd.id).map(r => r.targetId);
  const backRels = relations.filter(r => r.targetId === sd.id).map(r => r.sourceId);
  sd.relatedServiceDomainIds = Array.from(new Set([...sd.relatedServiceDomainIds, ...rels, ...backRels]));
  sd.upstreamServiceDomainIds = backRels;
  sd.downstreamServiceDomainIds = rels;
});

// Business Scenarios
const scenarios = [
  {
    id: "scen-001",
    name: "Registro y Traspaso de Cuenta Individual",
    description: "Proceso completo mediante el cual un trabajador solicita el traspaso de su cuenta individual a otra Afore, incluyendo validación biométrica, de expediente y actualización del libro mayor.",
    steps: [
      { stepNumber: 1, sourceId: "RAIA-SD-020", targetId: "RAIA-SD-021", description: "Se leen los Datos del Trabajador para iniciar la resolución de identidad.", eventName: "Traspaso Solicitado" },
      { stepNumber: 2, sourceId: "RAIA-SD-021", targetId: "RAIA-SD-023", description: "Se valida la identidad del trabajador a través de biométricos de industria.", eventName: "Identidad Validada" },
      { stepNumber: 3, sourceId: "RAIA-SD-023", targetId: "RAIA-SD-031", description: "Se asocia la validación biométrica y consentimiento firmado al Expediente Electrónico.", eventName: "Expediente Consolidado" },
      { stepNumber: 4, sourceId: "RAIA-SD-031", targetId: "RAIA-SD-045", description: "Se inicia formalmente la solicitud de Traspaso de Cuenta usando el expediente integrado.", eventName: "Solicitud de Traspaso Iniciada" },
      { stepNumber: 5, sourceId: "RAIA-SD-045", targetId: "RAIA-SD-040", description: "Se autoriza el traspaso y se actualiza el Registro en AFORE de la cuenta.", eventName: "Traspaso Aprobado" },
      { stepNumber: 6, sourceId: "RAIA-SD-040", targetId: "RAIA-SD-046", description: "Se ejecuta la transferencia financiera y se registra en el Libro Mayor de la Cuenta Individual.", eventName: "Recursos Transferidos" }
    ]
  },
  {
    id: "scen-002",
    name: "Recaudación de Aportaciones e Inversión",
    description: "Flujo por el cual las aportaciones patronales bimestrales entran al sistema, se concilian, se individualizan y se invierten en la SIEFORE correspondiente.",
    steps: [
      { stepNumber: 1, sourceId: detAportId || "RAIA-SD-076", targetId: recPatronId || "RAIA-SD-077", description: "Se determinan las aportaciones patronales y se realiza la recaudación.", eventName: "Aportaciones Recaudadas" },
      { stepNumber: 2, sourceId: recPatronId || "RAIA-SD-077", targetId: concRecaudId || "RAIA-SD-090", description: "Se concilia la recaudación global contra los registros de la operadora central.", eventName: "Conciliación Exitosa" },
      { stepNumber: 3, sourceId: concRecaudId || "RAIA-SD-090", targetId: indAportId || "RAIA-SD-088", description: "Se individualizan los recursos en cada cuenta individual del trabajador.", eventName: "Recursos Individualizados" },
      { stepNumber: 4, sourceId: indAportId || "RAIA-SD-088", targetId: regMovId || "RAIA-SD-061", description: "Se registran los movimientos de aportaciones en la subcuenta correspondiente.", eventName: "Movimiento Registrado" },
      { stepNumber: 5, sourceId: regMovId || "RAIA-SD-061", targetId: asigSieforeId || "RAIA-SD-095", description: "Se asignan los recursos a la SIEFORE generacional correspondiente a la edad del trabajador.", eventName: "Asignación de Fondos" }
    ]
  }
];

// Regulations seed
const regulations = [
  {
    id: "RAIA-REG-LSAR",
    name: "Ley de los Sistemas de Ahorro para el Retiro",
    authority: "Congreso de la Unión",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSAR.pdf",
    mandatory: true,
    validationStatus: "official"
  },
  {
    id: "RAIA-REG-CUO",
    name: "Disposiciones de carácter general en materia de operaciones de los Sistemas de Ahorro para el Retiro",
    authority: "CONSAR",
    mandatory: true,
    validationStatus: "pending-validation"
  },
  {
    id: "RAIA-REG-CUS",
    name: "Circular Única de Sistemas Financieros en materia de Ciberseguridad",
    authority: "CONSAR / CNBV",
    mandatory: true,
    validationStatus: "official"
  }
];

// Write output files
fs.writeFileSync(
  path.join(DATA_DIR, "raia-v14.0.json"),
  JSON.stringify({ businessAreas, businessDomains, serviceDomains }, null, 2),
  "utf8"
);

fs.writeFileSync(
  path.join(DATA_DIR, "relations-v14.0.json"),
  JSON.stringify(relations, null, 2),
  "utf8"
);

fs.writeFileSync(
  path.join(DATA_DIR, "regulations-v14.0.json"),
  JSON.stringify(regulations, null, 2),
  "utf8"
);

fs.writeFileSync(
  path.join(DATA_DIR, "scenarios-v14.0.json"),
  JSON.stringify(scenarios, null, 2),
  "utf8"
);

console.log("RAIA seed data generated successfully!");
