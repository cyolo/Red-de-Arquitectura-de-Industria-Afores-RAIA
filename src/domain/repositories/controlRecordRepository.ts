import recordsData from "../../data/control-record-model/control-records.json";
import statesData from "../../data/control-record-model/states.json";
import transitionsData from "../../data/control-record-model/transitions.json";
import triggersData from "../../data/control-record-model/triggers.json";
import guardsData from "../../data/control-record-model/guards.json";
import actionsData from "../../data/control-record-model/actions.json";
import invariantsData from "../../data/control-record-model/invariants.json";
import tracesData from "../../data/control-record-model/scenario-traces.json";
import gapsData from "../../data/control-record-model/control-record-gaps.json";
import landscapeData from "../../data/raia-landscape-0.1.0.json";

import {
  ControlRecordModel,
  ControlRecordState,
  ControlRecordTransition,
  ControlRecordTrigger,
  ControlRecordGuard,
  ControlRecordAction,
  ControlRecordInvariant,
  ControlRecordScenarioTrace,
  ControlRecordGap
} from "../types/controlRecordTypes";

export function getControlRecords(): ControlRecordModel[] {
  return recordsData as ControlRecordModel[];
}

export function getControlRecordById(id: string): ControlRecordModel | undefined {
  return getControlRecords().find((r) => r.id === id);
}

export function getControlRecordForServiceDomain(sdId: string): ControlRecordModel | undefined {
  return getControlRecords().find((r) => r.serviceDomainId === sdId);
}

export function getControlRecordsForBusinessObject(boId: string): ControlRecordModel[] {
  return getControlRecords().filter(
    (r) => r.focalBusinessObjectId === boId || r.supportingBusinessObjectIds.includes(boId)
  );
}

export function getControlRecordsForScenario(scenId: string): ControlRecordModel[] {
  return getControlRecords().filter((r) => r.businessScenarioIds.includes(scenId));
}

export function getControlRecordStates(): ControlRecordState[] {
  return statesData as ControlRecordState[];
}

export function getControlRecordTransitions(): ControlRecordTransition[] {
  return transitionsData as ControlRecordTransition[];
}

export function getControlRecordTriggers(): ControlRecordTrigger[] {
  return triggersData as ControlRecordTrigger[];
}

export function getControlRecordGuards(): ControlRecordGuard[] {
  return guardsData as ControlRecordGuard[];
}

export function getControlRecordActions(): ControlRecordAction[] {
  return actionsData as ControlRecordAction[];
}

export function getControlRecordInvariants(): ControlRecordInvariant[] {
  return invariantsData as ControlRecordInvariant[];
}

export function getControlRecordScenarioTraces(): ControlRecordScenarioTrace[] {
  return tracesData as ControlRecordScenarioTrace[];
}

export function getControlRecordApplicabilityAssessment(): any[] {
  const serviceDomains = (landscapeData.serviceDomains || []) as any[];
  return serviceDomains.map((sd) => {
    const name = sd.nameEs || "";
    const nameLower = name.toLowerCase();
    const hasBo = sd.businessObjects && sd.businessObjects.length > 0;
    const hasOps = sd.serviceOperations && sd.serviceOperations.length > 0;
    const hasEvents = sd.businessEvents && sd.businessEvents.length > 0;
    const hasScenarios = sd.valueStreams && sd.valueStreams.length > 0;

    let applicability = "stateless-capability";
    let rationale = "El Service Domain ejecuta validaciones o consultas operativas sin persistir un ciclo de vida propio.";
    let action = "MARK_STATELESS";
    let stateful = false;

    if (
      nameLower.includes("cuenta") ||
      nameLower.includes("traspaso") ||
      nameLower.includes("registro") ||
      nameLower.includes("afiliacion") ||
      nameLower.includes("unificacion") ||
      nameLower.includes("aportacion") ||
      nameLower.includes("retiro") ||
      nameLower.includes("pension") ||
      nameLower.includes("orden") ||
      nameLower.includes("operacion") ||
      nameLower.includes("liquidacion") ||
      nameLower.includes("valuacion") ||
      nameLower.includes("identidad")
    ) {
      applicability = "primary-control-record";
      rationale = "Administra una transacción u objeto lógico de negocio crítico con estados definidos por ley.";
      action = "CREATE";
      stateful = true;
    } else if (
      nameLower.includes("control") ||
      nameLower.includes("auditoria") ||
      nameLower.includes("evidencia") ||
      nameLower.includes("cumplimiento")
    ) {
      applicability = "supporting-control-record";
      rationale = "Monitorea o resguarda información auxiliar de control para trazabilidad de auditoría.";
      action = "LINK_EXISTING";
      stateful = true;
    } else if (nameLower.includes("catalogo") || nameLower.includes("parametro") || nameLower.includes("directorio")) {
      applicability = "reference-information";
      rationale = "Mantiene datos de referencia estáticos o parámetros regulados sectoriales.";
      action = "MARK_REFERENCE";
      stateful = false;
    } else if (nameLower.includes("analisis") || nameLower.includes("reporte") || nameLower.includes("estadistica") || nameLower.includes("inteligencia")) {
      applicability = "analytical-capability";
      rationale = "Genera resúmenes ejecutivos e inteligencia de negocio a partir de datos transaccionales.";
      action = "MARK_ANALYTICAL";
      stateful = false;
    }

    return {
      serviceDomainId: sd.id,
      serviceDomainName: name,
      focusObject: sd.focusObject ? sd.focusObject.name : (hasBo ? sd.businessObjects[0].name : "N/A"),
      applicability,
      rationale,
      stateful,
      businessObjectAvailable: hasBo,
      serviceOperationsAvailable: hasOps,
      businessEventsAvailable: hasEvents,
      scenariosAvailable: hasScenarios,
      recommendedAction: action,
      reviewStatus: "validated"
    };
  });
}

export function getControlRecordGaps(): ControlRecordGap[] {
  return gapsData as ControlRecordGap[];
}

// Analytical graph traversal functions
export function getIncomingTransitions(stateId: string): ControlRecordTransition[] {
  return getControlRecordTransitions().filter((t) => t.targetStateId === stateId);
}

export function getOutgoingTransitions(stateId: string): ControlRecordTransition[] {
  return getControlRecordTransitions().filter((t) => t.sourceStateId === stateId);
}

export function getReachableStates(controlRecordId: string): string[] {
  const cr = getControlRecordById(controlRecordId);
  if (!cr || !cr.initialStateId) return [];

  const reachable = new Set<string>();
  const queue: string[] = [cr.initialStateId];
  reachable.add(cr.initialStateId);

  const transitions = getControlRecordTransitions().filter((t) => t.controlRecordId === controlRecordId);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const outgoing = transitions.filter((t) => t.sourceStateId === current);
    
    outgoing.forEach((t) => {
      if (!reachable.has(t.targetStateId)) {
        reachable.add(t.targetStateId);
        queue.push(t.targetStateId);
      }
    });
  }

  return Array.from(reachable);
}

export function getUnreachableStates(controlRecordId: string): string[] {
  const cr = getControlRecordById(controlRecordId);
  if (!cr) return [];

  const reachable = new Set(getReachableStates(controlRecordId));
  const allStates = getControlRecordStates().filter((s) => s.controlRecordId === controlRecordId);
  
  return allStates.filter((s) => !reachable.has(s.id)).map((s) => s.id);
}

export function getDeadEndStates(controlRecordId: string): string[] {
  const cr = getControlRecordById(controlRecordId);
  if (!cr) return [];

  const allStates = getControlRecordStates().filter((s) => s.controlRecordId === controlRecordId);
  const transitions = getControlRecordTransitions().filter((t) => t.controlRecordId === controlRecordId);

  return allStates
    .filter((s) => {
      // Must not be a terminal state
      if (s.isTerminal) return false;
      // Must have zero outgoing transitions
      const outgoing = transitions.filter((t) => t.sourceStateId === s.id);
      return outgoing.length === 0;
    })
    .map((s) => s.id);
}

export function getMissingTransitionCoverage(controlRecordId: string): string[] {
  // Return any gaps or warnings about transition completeness
  const gaps: string[] = [];
  const deadEnds = getDeadEndStates(controlRecordId);
  if (deadEnds.length > 0) {
    gaps.push(`Estados sin salida detectados: ${deadEnds.join(", ")}`);
  }
  const unreachable = getUnreachableStates(controlRecordId);
  if (unreachable.length > 0) {
    gaps.push(`Estados no alcanzables detectados: ${unreachable.join(", ")}`);
  }
  return gaps;
}

export function getScenarioConformance(businessScenarioId: string): {
  conforms: boolean;
  issues: string[];
} {
  // Validate scenario conformance
  const issues: string[] = [];
  const traces = getControlRecordScenarioTraces().filter((t) => t.businessScenarioId === businessScenarioId);

  traces.forEach((trace) => {
    let currentStateId = getControlRecordById(trace.controlRecordId)?.initialStateId;
    if (!currentStateId) {
      issues.push(`Trace ${trace.id} references Control Record ${trace.controlRecordId} with no initial state`);
      return;
    }

    trace.steps.forEach((step) => {
      const transition = getControlRecordTransitions().find((t) => t.id === step.transitionId);
      if (!transition) {
        issues.push(`Paso ${step.sequence} de trace ${trace.id} hace referencia a transición inexistente: ${step.transitionId}`);
        return;
      }
      if (transition.sourceStateId !== step.expectedSourceStateId) {
        issues.push(`Inconsistencia en paso ${step.sequence} del trace ${trace.id}: se esperaba estado origen ${step.expectedSourceStateId} pero la transición define ${transition.sourceStateId}`);
      }
      currentStateId = transition.targetStateId;
    });

    if (currentStateId !== trace.expectedFinalStateId) {
      issues.push(`Trace ${trace.id} finalizó en el estado ${currentStateId} pero se esperaba ${trace.expectedFinalStateId}`);
    }
  });

  return {
    conforms: issues.length === 0,
    issues
  };
}

if (typeof window === "undefined") {
  try {
    const fs = require("fs");
    const path = require("path");

    const outDir = path.join(process.cwd(), "src", "data", "control-record-model");
    const auditDir = path.join(process.cwd(), "docs", "audits");

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    if (!fs.existsSync(auditDir)) {
      fs.mkdirSync(auditDir, { recursive: true });
    }

    const assessmentPath = path.join(outDir, "applicability-assessment.json");
    const matrixPath = path.join(auditDir, "control-record-applicability-matrix.csv");

    if (!fs.existsSync(assessmentPath) || !fs.existsSync(matrixPath)) {
      const assessment = getControlRecordApplicabilityAssessment();
      fs.writeFileSync(assessmentPath, JSON.stringify(assessment, null, 2));

      const csvRows = [
        "Service Domain ID,Service Domain Name,Focus Object,Applicability,Primary Control Record Candidate,Rationale,Stateful,Business Object Available,Service Operations Available,Business Events Available,Scenarios Available,Recommended Action,Review Status"
      ];
      assessment.forEach((record) => {
        csvRows.push([
          record.serviceDomainId,
          `"${record.serviceDomainName.replace(/"/g, '""')}"`,
          `"${record.focusObject.replace(/"/g, '""')}"`,
          record.applicability,
          record.applicability === "primary-control-record" ? "Yes" : "No",
          `"${record.rationale.replace(/"/g, '""')}"`,
          record.stateful ? "Yes" : "No",
          record.businessObjectAvailable ? "Yes" : "No",
          record.serviceOperationsAvailable ? "Yes" : "No",
          record.businessEventsAvailable ? "Yes" : "No",
          record.scenariosAvailable ? "Yes" : "No",
          record.recommendedAction,
          record.reviewStatus
        ].join(","));
      });
      fs.writeFileSync(matrixPath, csvRows.join("\n"));
    }
  } catch (e) {
    // Ignore dynamic fs errors during static analysis or browser bundle compilation
  }
}
