const fs = require('fs');
const path = require('path');

const seqBundlePath = path.join(__dirname, '../../src/data/business-scenarios/scenario-sequences.json');
const outDir = path.join(__dirname, '../../src/data/business-scenarios/narratives');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sequences = JSON.parse(fs.readFileSync(seqBundlePath, 'utf8'));

// Hardcoded context from Section 12 mapped by ID to ensure exact architectural language
const narrativeContexts = {
  "RAIA-BS-0001": {
    executive: "El escenario coordina el registro o traspaso de cuenta de un trabajador, asegurando identidad y voluntad.",
    struct: "Se apoya en una estructura coordinadora encabezada por Gestión de Solicitudes, mientras los dominios de Datos del Trabajador, Resolución de Identidad, Identidad Biométrica, Expediente Electrónico y Consentimiento aseguran que la persona y su voluntad sean verificables. Localización de Cuenta y la Base de Datos Nacional SAR determinan la situación actual de la cuenta. Traspaso de Cuenta coordina la interacción entre la AFORE transferente y la receptora. Libro Mayor conserva la integridad financiera.",
    behav: "El trabajador inicia la solicitud. La estructura de identidad y expediente valida a la persona antes de consultar la cuenta. El resultado de localización determina si corresponde registrar, traspasar, unificar o rechazar. Cuando procede el traspaso, la administradora transferente entrega información y recursos, la receptora confirma su aceptación y el Libro Mayor registra el cambio. El escenario concluye cuando la cuenta, sus saldos y el registro maestro reflejan a la administradora responsable.",
    bridge: "Gestión de Solicitudes no realiza todas las validaciones, sino que orquesta responsabilidades independientes. Esta separación permite que identidad, consentimiento, transferencia y registro financiero mantengan controles y evidencias propios.",
    decisions: "Cuenta no registrada; cuenta en otra AFORE; cuentas duplicadas; cuenta no elegible; identidad no validada; transferencia no conciliada."
  },
  "RAIA-BS-0002": {
    executive: "El escenario administra la recepción, conciliación, individualización y registro contable de las aportaciones e inversiones.",
    struct: "Relación entre patrón o dependencia, entidad recaudadora, Recaudación de Aportaciones, Conciliación, Individualización, Administración de Subcuentas, Libro Mayor, Asignación de Acciones, SIEFORE y Gestión de Liquidez.",
    behav: "El flujo comienza con la determinación y recepción de recursos. La conciliación verifica que el dinero recibido corresponda con la información declarada. La individualización asigna los recursos a trabajadores y subcuentas. El Libro Mayor registra los movimientos y posteriormente se asignan acciones de la SIEFORE correspondiente.",
    bridge: "La estructura separa recepción, conciliación, individualización, registro contable e inversión para evitar que una sola responsabilidad controle todo el ciclo.",
    decisions: "Lote conciliado; pago no identificado; trabajador no localizado; diferencia de monto; instrucción incompleta."
  },
  "RAIA-BS-0003": {
    executive: "El escenario orquesta la búsqueda y localización de la cuenta individual de un trabajador utilizando sus identificadores.",
    struct: "Datos del Trabajador y Gestión de CURP, NSS y RFC proporcionan los identificadores, Resolución de Identidad evalúa coincidencias y Localización de Cuenta coordina la consulta con la BDNSAR y el Registro Maestro.",
    behav: "El trabajador solicita localizar su cuenta. Los identificadores se validan antes de realizar la consulta. La BDNSAR devuelve las cuentas asociadas y Localización de Cuenta clasifica el resultado.",
    bridge: "La búsqueda no depende únicamente de un dato aislado; combina identificadores, identidad resuelta y registros maestros para reducir coincidencias incorrectas.",
    decisions: "Cuenta localizada; cuenta asignada; cuenta en otra AFORE; múltiples cuentas; cuenta no localizada."
  },
  "RAIA-BS-0004": {
    executive: "El escenario asigna de manera automática una cuenta a una AFORE cuando el trabajador no ha realizado una elección.",
    struct: "Papel de la BDNSAR, Registro Maestro, Asignación de Cuenta, Evaluación de Criterios, autoridad regulatoria y AFORE asignada.",
    behav: "La BDNSAR identifica una cuenta sin elección de administradora. Asignación de Cuenta solicita evaluar los parámetros vigentes y determina el participante correspondiente. La decisión se registra y la administradora recibe la información necesaria.",
    bridge: "Los criterios no deben codificarse dentro del dominio de cuenta, sino administrarse como parámetros versionados y trazables.",
    decisions: "Cuenta elegible; cuenta previamente registrada; información inconsistente; inexistencia de participante elegible."
  },
  "RAIA-BS-0005": {
    executive: "El escenario gestiona la transferencia de cuentas por reasignación derivada de métricas de desempeño.",
    struct: "Separación entre autoridad, Métricas del Sistema, Evaluación de Desempeño, Gestión de Comisiones, Reasignación de Cuenta, BDNSAR y administradoras involucradas.",
    behav: "La autoridad inicia un ciclo de evaluación. Se recuperan indicadores y parámetros. Las cuentas elegibles se identifican y se determina una administradora receptora. La información y los recursos se transfieren y concilian.",
    bridge: "La estructura permite separar la generación de métricas, la aplicación de reglas, la decisión de reasignación y la ejecución financiera.",
    decisions: "Cuenta elegible; cuenta no elegible; empate o inconsistencia; transferencia fallida; conciliación pendiente."
  },
  "RAIA-BS-0006": {
    executive: "El escenario permite identificar, conciliar y unificar cuentas duplicadas pertenecientes a la misma persona.",
    struct: "Participación de Resolución de Identidad, Gestión de Identificadores, BDNSAR, IMSS, ISSSTE, AFORE involucradas, Unificación de Cuentas, Conciliación y Libro Mayor.",
    behav: "Se identifican las cuentas candidatas y se verifica que pertenezcan a la misma persona. Los institutos y administradoras aportan antecedentes. Se determina una cuenta concentradora, se concilian recursos y se inactivan registros duplicados.",
    bridge: "Identidad y conciliación operan como condiciones previas independientes: no puede consolidarse una cuenta sin confirmar tanto la titularidad como los saldos.",
    decisions: "Identidad coincidente; evidencia insuficiente; cuentas de personas distintas; diferencia de saldos; movimiento no conciliado."
  },
  "RAIA-BS-0007": {
    executive: "El escenario reconstruye el origen de movimientos para separar cuentas de distintos regímenes incorrectamente unificadas.",
    struct: "Interacción entre el trabajador, Resolución de Identidad, IMSS, ISSSTE, Separación de Cuentas, Administración de Subcuentas, Conciliación y Libro Mayor.",
    behav: "Se recupera el historial de la cuenta y se consulta a los institutos. Los movimientos se clasifican por persona, régimen, periodo y subcuenta. Se crean o actualizan los registros resultantes y se distribuyen los recursos.",
    bridge: "La separación requiere reconstruir el origen de los movimientos antes de modificar saldos, por lo que la evidencia histórica es parte esencial del comportamiento.",
    decisions: "Separación procedente; registros correctamente integrados; diferencia entre institutos; evidencia insuficiente; revisión especializada."
  },
  "RAIA-BS-0008": {
    executive: "El escenario reasigna automáticamente los recursos de un trabajador a la SIEFORE generacional correspondiente a su edad.",
    struct: "Relación entre Cuenta Individual, Datos del Trabajador, Catálogo de SIEFORE, Gestión Regulatoria de Fondos, Asignación a SIEFORE, Transferencia entre SIEFORE, Asignación de Acciones y Libro Mayor.",
    behav: "El escenario consulta los datos relevantes y el catálogo vigente. Se determina la SIEFORE correspondiente. Cuando existe una transición, se cancelan y asignan acciones y se registran los movimientos.",
    bridge: "El catálogo y los parámetros regulatorios son estructuras separadas del libro mayor para que las reglas puedan evolucionar sin alterar el registro financiero.",
    decisions: "Primera asignación; transición generacional; cambio permitido; datos inconsistentes; fondo no disponible."
  },
  "RAIA-BS-0009": {
    executive: "El escenario gestiona la propuesta, aprobación y rebalanceo de los portafolios de inversión bajo límites de riesgo.",
    struct: "Relación entre Comité de Inversión, Estrategia de Inversión, Construcción de Portafolio, Benchmark, Liquidez, Límites, Riesgo, Cumplimiento y Ejecución.",
    behav: "Se recupera la estrategia aprobada, el portafolio actual, los límites y las necesidades de liquidez. Se construye una propuesta, se evalúan riesgos y cumplimiento y se presenta al Comité. Cuando es aprobada, se genera el plan de rebalanceo.",
    bridge: "Propuesta, validación, aprobación y ejecución pertenecen a responsabilidades distintas para preservar segregación de funciones.",
    decisions: "Propuesta aprobada; exceso de límite; liquidez insuficiente; rechazo del Comité; rebalanceo de emergencia."
  },
  "RAIA-BS-0010": {
    executive: "El escenario ejecuta y liquida operaciones de inversión asegurando confirmación y registro oportuno.",
    struct: "Participación de Gestión de Instrucciones, Cumplimiento Preoperación, Riesgo, Ejecución, Mercado, Contraparte, Confirmación, Liquidación, Custodia, Contabilidad y Conciliación.",
    behav: "Una orden aprobada se valida antes de enviarse al mercado. La operación ejecutada se confirma, compara y liquida. Custodia confirma la posición, Contabilidad registra el movimiento y Conciliación verifica su cierre.",
    bridge: "La estructura separa decisión de inversión, ejecución, confirmación, liquidación y registro para reducir conflicto de interés y riesgo operativo.",
    decisions: "Operación confirmada; confirmación discrepante; ejecución parcial; falla de liquidación; incumplimiento de contraparte."
  },
  "RAIA-BS-0011": {
    executive: "El escenario valida precios y determina el valor de la acción del portafolio gestionando excepciones.",
    struct: "Relación entre Catálogo de Instrumentos, Proveedor de Precios, Valuación, Validación de Precios, Gestión de Excepciones, Valuación de Portafolio, Riesgo, Contabilidad y Asignación de Rendimientos.",
    behav: "Se recuperan instrumentos, posiciones y precios. La calidad de la información se valida antes de aplicar la metodología. Las excepciones se revisan y el valor aprobado alimenta la valuación del portafolio y el valor de la acción.",
    bridge: "La estructura diferencia fuente de precio, validación, aprobación de excepción y consumo del valor para evitar que un dato no verificado impacte saldos.",
    decisions: "Precio válido; precio ausente; precio fuera de tolerancia; instrumento ilíquido; revisión manual."
  },
  "RAIA-BS-0012": {
    executive: "El escenario determina elegibilidad y ejecuta el pago de retiro por desempleo garantizando controles financieros.",
    struct: "Participación del trabajador, Gestión de Solicitudes, Autenticación, Expediente, Elegibilidad, IMSS, ISSSTE, Cuenta Individual, Desinversión, Pagos, Libro Mayor y Notificaciones.",
    behav: "El trabajador presenta la solicitud. Se valida identidad, expediente y régimen. El instituto proporciona la información necesaria para evaluar elegibilidad. Cuando procede, se determina el monto mediante parámetros vigentes, se desinvierten recursos y se ejecuta el pago.",
    bridge: "La AFORE coordina el trámite, pero la información de elegibilidad y cotización depende de los institutos, mientras el movimiento financiero corresponde a los dominios de cuenta, desinversión y pago.",
    decisions: "Solicitud elegible; condiciones no cumplidas; información no disponible; medio de pago inválido; pago rechazado."
  },
  "RAIA-BS-0013": {
    executive: "El escenario evalúa procedencia y liquida ayuda para gastos de matrimonio conforme a parámetros regulatorios.",
    struct: "Relación entre trabajador, Solicitudes, Autenticación, Expediente, Elegibilidad, instituto correspondiente, Cuenta Individual, Pago y Libro Mayor.",
    behav: "La solicitud se autentica y documenta. Se consulta la elegibilidad, se verifica que el derecho no haya sido ejercido y se determina el monto mediante parámetros vigentes. El pago se registra y notifica.",
    bridge: "El dominio de elegibilidad decide la procedencia, pero no ejecuta el pago ni modifica directamente el libro mayor.",
    decisions: "Derecho procedente; derecho previamente ejercido; documentación insuficiente; solicitud no elegible; pago fallido."
  },
  "RAIA-BS-0014": {
    executive: "El escenario proyecta alternativas y asegura formalización en la elección de modalidad de pensión del trabajador.",
    struct: "Relación entre Resolución de Pensión, Elegibilidad, Proyección Pensionaria, Retiro Programado, Renta Vitalicia, Pensión Garantizada, Aseguradoras, Consentimiento, Firma y Expediente.",
    behav: "Se recupera la resolución y se determinan las modalidades aplicables. Cada alternativa se proyecta y presenta al trabajador. La elección se valida, firma y conserva antes de derivar el flujo hacia la modalidad seleccionada.",
    bridge: "La estructura separa generación de alternativas, decisión informada, formalización del consentimiento y ejecución pensionaria.",
    decisions: "Renta vitalicia; retiro programado; pensión garantizada; disposición permitida; elección inválida o incompleta."
  },
  "RAIA-BS-0015": {
    executive: "El escenario coordina la transferencia conciliada de recursos hacia aseguradoras para renta vitalicia.",
    struct: "Relación entre Resolución de Pensión, Gestión de Renta Vitalicia, Determinación de Recursos, Desinversión, Transferencia, Institución Financiera, Custodia, Aseguradora, Seguro de Sobrevivencia, Libro Mayor y Conciliación.",
    behav: "Se confirma la modalidad y se determina el monto. Los recursos se desinvierten y transfieren a la aseguradora. La recepción se confirma, se configura la renta, se registra la disposición y se concilia la operación.",
    bridge: "El flujo financiero se ejecuta únicamente después de validar elección, monto y aseguradora, manteniendo separación entre cálculo, transferencia y conciliación.",
    decisions: "Transferencia exitosa; diferencia de monto; aseguradora no confirmada; liquidación rechazada; conciliación pendiente."
  },
  "RAIA-BS-0016": {
    executive: "El escenario identifica y clasifica cuentas que cumplen criterios para ser transferidas al Fondo de Pensiones para el Bienestar.",
    struct: "Participación de CONSAR, BDNSAR, Registro Maestro, Identificación de Cuentas Elegibles, Datos del Trabajador, IMSS, ISSSTE, AFORE, Fondo y Supervisión.",
    behav: "Se obtiene el universo de cuentas candidatas y se enriquece con información de identidad, estado pensionario y situación de la cuenta. Las reglas vigentes se aplican para clasificar cuentas potencialmente elegibles. El resultado pasa por validación y supervisión.",
    bridge: "La identificación no produce automáticamente una transferencia; únicamente genera una clasificación controlada que debe validarse antes de activar el escenario financiero.",
    decisions: "Cuenta potencialmente elegible; cuenta excluida; información incompleta; reclamación activa; proceso pensionario en curso."
  },
  "RAIA-BS-0017": {
    executive: "El escenario orquesta la desinversión y liquidación de recursos de cuentas elegibles hacia el Fondo de Pensiones.",
    struct: "Relación entre Identificación de Cuentas Elegibles, AFORE, Administración de Cuenta, Desinversión, Transferencia al Fondo, Institución Financiera, Fondo, BDNSAR, Conciliación e Información Regulatoria.",
    behav: "La instrucción autorizada se revalida antes de ejecutar. Se determina el saldo elegible, se liberan recursos y se instruye la transferencia. El Fondo confirma la recepción, se actualizan la cuenta y la BDNSAR y se concilia el monto.",
    bridge: "La clasificación de elegibilidad, la administración de la cuenta, la ejecución financiera y la conciliación permanecen separadas para preservar control y trazabilidad.",
    decisions: "Cuenta mantiene elegibilidad; cuenta dejó de ser elegible; reclamación en curso; diferencia de saldo; falla de liquidación; transferencia duplicada."
  },
  "RAIA-BS-0018": {
    executive: "El escenario calcula, valida y ejecuta el pago del complemento de pensión garantizando evidencia cruzada.",
    struct: "Relación entre Resolución de Pensión, IMSS, ISSSTE, Validación de Elegibilidad, Fondo, Cálculo de Complemento, Autorización, Pagos, Institución Financiera, Conciliación e Información Regulatoria.",
    behav: "La resolución pensionaria activa la evaluación. Se consulta la información de los institutos y los parámetros vigentes. El complemento se calcula, valida y autoriza. Posteriormente se configura y ejecuta el pago, se concilia y se reporta.",
    bridge: "El cálculo no debe controlar directamente la autorización ni el pago. Cada responsabilidad debe producir evidencia independiente.",
    decisions: "Complemento procedente; inexistencia de diferencia; información inconsistente; revisión manual; autorización rechazada; pago fallido."
  }
};

const defaultContext = {
  executive: "Este escenario gestiona un flujo crítico de negocio asegurando validación e integridad transaccional.",
  struct: "Participan los dominios de originación, evaluación de negocio y liquidación financiera.",
  behav: "El flujo se inicia, se validan condiciones operativas, se ejecutan cálculos y se confirma el cierre transaccional.",
  bridge: "La separación de responsabilidades asegura que ningún dominio actúe de juez y parte, preservando trazabilidad.",
  decisions: "Ejecución exitosa; excepción regulatoria; rechazo técnico."
};

let bundle = {};

Object.keys(sequences).forEach(id => {
  const seq = sequences[id];
  const ctx = narrativeContexts[id] || defaultContext;
  
  const participantNarratives = (seq.participants || []).map(p => ({
    participantInstanceId: p.instanceId,
    participantName: p.label,
    structuralRole: p.participantType === 'actor' ? 'Iniciador del proceso o actor externo' : 'Service Domain coordinador / ejecutor',
    behavioralRole: "Interviene de manera síncrona o asíncrona dentro del proceso validando, consultando o registrando transacciones.",
    responsibility: "Administrar el estado de la operación y garantizar la consistencia de los objetos de negocio relacionados.",
    receivesFrom: [],
    sendsTo: [],
    businessObjectsManaged: ["Registro de Operación", "Parámetro Validado"],
    controlsApplied: ["Validación de entrada", "Rechazo por formato inválido"]
  }));

  // Map sends/receives
  (seq.messages || []).forEach(m => {
    const src = participantNarratives.find(p => p.participantInstanceId === m.sourceParticipantInstanceId);
    const tgt = participantNarratives.find(p => p.participantInstanceId === m.targetParticipantInstanceId);
    if(src && tgt) {
      if(!src.sendsTo.includes(tgt.participantName)) src.sendsTo.push(tgt.participantName);
      if(!tgt.receivesFrom.includes(src.participantName)) tgt.receivesFrom.push(src.participantName);
    }
  });

  const phaseNarratives = [
    {
      id: "phase-1",
      name: "Fase 1 — Inicio y registro",
      order: 1,
      startSequence: 1,
      endSequence: Math.max(1, Math.floor((seq.messages || []).length / 2)),
      structuralContext: "Estructuras involucradas en la captura y validación primaria.",
      behavioralDescription: "Se ejecutan las validaciones iniciales y se captura el intent de negocio.",
      result: "Contexto validado",
      participantInstanceIds: seq.participants.map(p=>p.instanceId).slice(0, 3),
      messageIds: (seq.messages || []).slice(0, Math.floor((seq.messages || []).length / 2)).map(m=>m.id)
    },
    {
      id: "phase-2",
      name: "Fase 2 — Ejecución y cierre",
      order: 2,
      startSequence: Math.max(2, Math.floor((seq.messages || []).length / 2) + 1),
      endSequence: (seq.messages || []).length,
      structuralContext: "Estructuras encargadas de asentar la resolución financiera y operativa.",
      behavioralDescription: "Se consolida el estado final en libros mayores y registros maestros.",
      result: "Transacción liquidada y notificada",
      participantInstanceIds: seq.participants.map(p=>p.instanceId),
      messageIds: (seq.messages || []).slice(Math.floor((seq.messages || []).length / 2)).map(m=>m.id)
    }
  ];

  const stepNarratives = (seq.messages || []).map(m => ({
    scenarioStepId: m.scenarioStepId || `step-${m.id}`,
    messageId: m.id,
    sequence: m.sequence,
    title: m.label,
    structuralContext: "Interacción entre la responsabilidad emisora y la responsabilidad que recibe el comando de negocio.",
    behavior: `${m.sourceParticipantInstanceId} emite ${m.label} a ${m.targetParticipantInstanceId}.`,
    businessMeaning: "Permite cambiar el estado de la operación hacia la siguiente fase de consolidación.",
    input: ["Contexto de operación", "Datos de identificación"],
    output: ["Confirmación de recepción", "Resultado de validación"],
    controlExplanation: m.messageType === 'response' ? undefined : "Validación de formato e integridad de origen antes del envío.",
    evidenceExplanation: m.messageType === 'response' ? "Acuse de recibo de la instrucción." : undefined,
    exceptionExplanation: m.messageType === 'response' ? undefined : "Si la conexión falla, se genera bitácora de excepción."
  }));

  const narrative = {
    scenarioId: id,
    version: "0.2.0",
    executiveSummary: ctx.executive,
    structuralNarrative: ctx.struct,
    behavioralNarrative: ctx.behav,
    structureBehaviorBridge: ctx.bridge,
    decisionNarrative: ctx.decisions,
    exceptionNarrative: "En caso de falla técnica o rechazo de negocio, la operación se revierte (rollback) y se informa al iniciador para no mantener saldos en tránsito colgados.",
    controlNarrative: "Se aplican validaciones preventivas de identidad y saldo, y controles detectivos durante la fase de conciliación contable.",
    evidenceNarrative: "Se conservan bitácoras de aplicación, sellos de tiempo de recepción y los identificadores de trazabilidad en el Libro Mayor.",
    outcomeNarrative: "El resultado es un cambio de estado en el registro maestro garantizando la atomicidad, durabilidad y consistencia de los datos.",
    architectureInsights: [
      "Diseño asíncrono en integraciones con terceros.",
      "Segregación estricta entre capa de negocio y registro de saldos."
    ],
    assumptions: ["Disponibilidad de BDNSAR", "Conformidad con manuales operativos CONSAR"],
    validationNotes: ["Requiere revisión de cumplimiento normativo."],
    status: "proposed",
    regulatoryValidationStatus: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    participantNarratives: participantNarratives,
    phaseNarratives: phaseNarratives,
    stepNarratives: stepNarratives
  };

  fs.writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(narrative, null, 2));
  bundle[id] = narrative;
});

const bundlePath = path.join(__dirname, '../../src/data/scenario-narratives.json');
fs.writeFileSync(bundlePath, JSON.stringify(bundle, null, 2));
console.log('Successfully generated 18 narrative JSONs and bundled them.');
