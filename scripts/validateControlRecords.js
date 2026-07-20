const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data", "control-record-model");

function validate() {
  console.log("=== Running Control Record Model Verification ===");

  const recordsPath = path.join(DATA_DIR, "control-records.json");
  const statesPath = path.join(DATA_DIR, "states.json");
  const transitionsPath = path.join(DATA_DIR, "transitions.json");
  const tracesPath = path.join(DATA_DIR, "scenario-traces.json");

  if (!fs.existsSync(recordsPath) || !fs.existsSync(statesPath) || !fs.existsSync(transitionsPath)) {
    console.error("❌ Essential Control Record JSON datasets are missing.");
    process.exit(1);
  }

  const records = JSON.parse(fs.readFileSync(recordsPath, "utf8"));
  const states = JSON.parse(fs.readFileSync(statesPath, "utf8"));
  const transitions = JSON.parse(fs.readFileSync(transitionsPath, "utf8"));
  const traces = fs.existsSync(tracesPath) ? JSON.parse(fs.readFileSync(tracesPath, "utf8")) : [];

  let errors = 0;
  let warnings = 0;

  // Helper sets
  const stateIds = new Set(states.map((s) => s.id));
  const recordIds = new Set(records.map((r) => r.id));

  // 1. Validate State References
  transitions.forEach((t) => {
    if (!stateIds.has(t.sourceStateId)) {
      console.error(`❌ Transición [${t.id}] hace referencia a estado origen inexistente: ${t.sourceStateId}`);
      errors++;
    }
    if (!stateIds.has(t.targetStateId)) {
      console.error(`❌ Transición [${t.id}] hace referencia a estado destino inexistente: ${t.targetStateId}`);
      errors++;
    }
  });

  // 2. Reachability & Dead End calculations
  records.forEach((cr) => {
    const crStates = states.filter((s) => s.controlRecordId === cr.id);
    const crTransitions = transitions.filter((t) => t.controlRecordId === cr.id);

    if (!cr.initialStateId) {
      console.error(`❌ Control Record [${cr.id}] no define un initialStateId.`);
      errors++;
      return;
    }

    if (!stateIds.has(cr.initialStateId)) {
      console.error(`❌ Control Record [${cr.id}] define un initialStateId inexistente: ${cr.initialStateId}`);
      errors++;
      return;
    }

    // BFS reachability solver
    const reachable = new Set();
    const queue = [cr.initialStateId];
    reachable.add(cr.initialStateId);

    while (queue.length > 0) {
      const curr = queue.shift();
      const outgoing = crTransitions.filter((t) => t.sourceStateId === curr);
      outgoing.forEach((t) => {
        if (!reachable.has(t.targetStateId)) {
          reachable.add(t.targetStateId);
          queue.push(t.targetStateId);
        }
      });
    }

    // Check unreachable
    crStates.forEach((s) => {
      if (!reachable.has(s.id)) {
        console.error(`❌ Estado [${s.id}] (${s.name}) en Control Record [${cr.id}] no es alcanzable desde el estado inicial.`);
        errors++;
      }

      // Check dead ends (non-terminal states with no outgoing transitions)
      if (!s.isTerminal) {
        const outgoing = crTransitions.filter((t) => t.sourceStateId === s.id);
        if (outgoing.length === 0) {
          console.warn(`⚠️ Advertencia: Estado no terminal [${s.id}] (${s.name}) es un callejón sin salida (no tiene transiciones salientes).`);
          warnings++;
        }
      }
    });
  });

  // 3. Trace Conformance
  traces.forEach((trace) => {
    let current = records.find((r) => r.id === trace.controlRecordId)?.initialStateId;
    if (!current) return;

    trace.steps.forEach((step) => {
      const trans = transitions.find((t) => t.id === step.transitionId);
      if (!trans) {
        console.error(`❌ Paso de trace hace referencia a transición inexistente: ${step.transitionId}`);
        errors++;
        return;
      }
      if (trans.sourceStateId !== step.expectedSourceStateId) {
        console.error(`❌ Inconsistencia en trace [${trace.id}] paso ${step.sequence}: se esperaba origen ${step.expectedSourceStateId} pero la transición define ${trans.sourceStateId}`);
        errors++;
      }
      current = trans.targetStateId;
    });

    if (current !== trace.expectedFinalStateId) {
      console.error(`❌ Trace [${trace.id}] finalizó en estado ${current} pero se esperaba ${trace.expectedFinalStateId}`);
      errors++;
    }
  });

  console.log(`\nVerificación concluida con: ${errors} errores y ${warnings} advertencias.`);
  if (errors > 0) {
    process.exit(1);
  }
}

validate();
