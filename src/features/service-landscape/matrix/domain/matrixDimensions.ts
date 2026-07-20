import { 
  getBusinessAreas, 
  getBusinessDomains, 
  getServiceDomains, 
  getRelations 
} from "../../../../domain/repositories/landscapeRepository";
import { 
  getRegulatorySources, 
  getRegulatoryMappings 
} from "../../../../domain/repositories/regulatoryRepository";
import { 
  getIndustryParticipants 
} from "../../../../domain/repositories/participantRepository";
import { ServiceDomain } from "../../../../domain/types";
import { MatrixDimensionDefinition, MatrixDimensionId, MatrixDimensionValue } from "./matrixTypes";

// Map of static enum metadata to human-readable Spanish descriptions and labels
const STATIC_LABELS: Record<string, string> = {
  // Capas
  "sector-governance": "Gobierno y Dirección del Sector",
  "industry-value-stream": "Cadena de Valor de la Industria",
  "industry-shared-service": "Servicios Compartidos de Industria",
  "enterprise-enabler": "Capacidades Habilitadoras de Empresa",
  "raia-governance-overlay": "Superposición de Gobierno RAIA",

  // Tipo capacidad
  "regulated-core": "Núcleo Regulado",
  "industry-shared": "Servicio Compartido",
  "raia-governance": "Gobierno de Arquitectura",

  // Estatus ciclo de vida
  "draft": "Borrador (Draft)",
  "proposed": "Propuesto (Proposed)",
  "validated": "Validado (Validated)",
  "active": "Activo (Active)",
  "deprecated": "Deprecado (Deprecated)",

  // Madurez
  "conceptual": "Conceptual",
  "defined": "Definido",
  "adopted": "Adoptado",

  // Regímenes
  "LSS73": "Régimen LSS 1973",
  "LSS97": "Régimen LSS 1997",
  "ISSSTE2007": "Régimen ISSSTE 2007",
  "ISSSTE10T": "ISSSTE Décimo Transitorio",
  "SAR92": "Régimen SAR 92",
  "BIENESTAR": "Fondo de Pensiones para el Bienestar",

  // Cobertura regulatoria
  "unmapped": "Sin Mapeo (Rojo)",
  "partial": "Cobertura Parcial (Ámbar)",
  "mapped": "Mapeado (Azul)",
  "reviewed": "Validado Legalmente (Verde)",
  "not-applicable": "No Aplicable (Gris)",

  // Criticidad
  "none": "Ninguna",
  "low": "Baja",
  "medium": "Media",
  "high": "Alta",
  "systemic": "Sistémica / Crítica",

  // Validación regulatoria
  "pending": "Pendiente de Revisión",
  "partially-reviewed": "Revisado Parcialmente",
  "legally-reviewed": "Revisado Legalmente",
  "architecture-reviewed": "Revisado por Arquitectura",
};

export const matrixDimensionDefinitions: Record<MatrixDimensionId, MatrixDimensionDefinition> = {
  "business-area": {
    id: "business-area",
    label: "Área de Negocio",
    shortLabel: "Área",
    description: "Contenedores macro de la cadena de valor en el Service Landscape.",
    category: "architecture",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => getBusinessAreas().map(ba => ({
      id: ba.id,
      label: ba.nameEs,
      color: ba.colorToken,
      description: ba.description
    }))
  },

  "business-domain": {
    id: "business-domain",
    label: "Dominio de Negocio",
    shortLabel: "Dominio",
    description: "Agrupaciones funcionales de capacidades lógicas dentro de cada área.",
    category: "architecture",
    supportsRows: true,
    supportsColumns: false,
    getValues: () => getBusinessDomains().map(bd => ({
      id: bd.id,
      label: `${bd.id} - ${bd.nameEs}`,
      description: bd.description
    }))
  },

  "service-domain": {
    id: "service-domain",
    label: "Dominio de Servicio (SD)",
    shortLabel: "Servicio",
    description: "La unidad fundamental de responsabilidad funcional en la arquitectura.",
    category: "architecture",
    supportsRows: true,
    supportsColumns: false,
    getValues: () => getServiceDomains().map(sd => ({
      id: sd.id,
      label: `${sd.id} - ${sd.nameEs}`,
      description: sd.summary
    }))
  },

  "landscape-layer": {
    id: "landscape-layer",
    label: "Capa del Landscape",
    shortLabel: "Capa",
    description: "Nivel de gobierno y operación del servicio en la cadena del SAR.",
    category: "architecture",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "sector-governance", label: STATIC_LABELS["sector-governance"] },
      { id: "industry-value-stream", label: STATIC_LABELS["industry-value-stream"] },
      { id: "industry-shared-service", label: STATIC_LABELS["industry-shared-service"] },
      { id: "enterprise-enabler", label: STATIC_LABELS["enterprise-enabler"] },
      { id: "raia-governance-overlay", label: STATIC_LABELS["raia-governance-overlay"] }
    ]
  },

  "capability-type": {
    id: "capability-type",
    label: "Tipo de Capacidad",
    shortLabel: "Tipo Cap.",
    description: "Clasificación por naturaleza jurídica y de compartición del servicio.",
    category: "architecture",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "regulated-core", label: STATIC_LABELS["regulated-core"] },
      { id: "industry-shared", label: STATIC_LABELS["industry-shared"] },
      { id: "enterprise-enabler", label: STATIC_LABELS["enterprise-enabler"] },
      { id: "raia-governance", label: STATIC_LABELS["raia-governance"] }
    ]
  },

  "lifecycle-status": {
    id: "lifecycle-status",
    label: "Estatus de Ciclo de Vida",
    shortLabel: "Estado",
    description: "Estatus actual de definición e implantación del estándar del dominio.",
    category: "governance",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "draft", label: STATIC_LABELS["draft"] },
      { id: "proposed", label: STATIC_LABELS["proposed"] },
      { id: "validated", label: STATIC_LABELS["validated"] },
      { id: "active", label: STATIC_LABELS["active"] },
      { id: "deprecated", label: STATIC_LABELS["deprecated"] }
    ]
  },

  "maturity": {
    id: "maturity",
    label: "Madurez Operativa",
    shortLabel: "Madurez",
    description: "Nivel de adopción práctica de la especificación técnica en el ecosistema.",
    category: "governance",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "conceptual", label: STATIC_LABELS["conceptual"] },
      { id: "defined", label: STATIC_LABELS["defined"] },
      { id: "validated", label: STATIC_LABELS["validated"] },
      { id: "adopted", label: STATIC_LABELS["adopted"] }
    ]
  },

  "accountable-participant": {
    id: "accountable-participant",
    label: "Participante Responsable (Accountable)",
    shortLabel: "Responsable",
    description: "Actor que asume la responsabilidad (accountability) del resultado final del servicio.",
    category: "participants",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => getIndustryParticipants().map(ip => ({
      id: ip.id,
      label: ip.nameEs,
      description: ip.description
    }))
  },

  "participating-participant": {
    id: "participating-participant",
    label: "Participante Involucrado (Participating)",
    shortLabel: "Involucrado",
    description: "Actores que contribuyen en la operación del servicio sin ser responsables directos.",
    category: "participants",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => getIndustryParticipants().map(ip => ({
      id: ip.id,
      label: ip.nameEs,
      description: ip.description
    }))
  },

  "applicable-regime": {
    id: "applicable-regime",
    label: "Régimen Previsional",
    shortLabel: "Régimen",
    description: "Disposiciones legales bajo las cuales opera el dominio de servicio.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "LSS73", label: STATIC_LABELS["LSS73"] },
      { id: "LSS97", label: STATIC_LABELS["LSS97"] },
      { id: "ISSSTE2007", label: STATIC_LABELS["ISSSTE2007"] },
      { id: "ISSSTE10T", label: STATIC_LABELS["ISSSTE10T"] },
      { id: "SAR92", label: STATIC_LABELS["SAR92"] },
      { id: "BIENESTAR", label: STATIC_LABELS["BIENESTAR"] }
    ]
  },

  "regulatory-coverage": {
    id: "regulatory-coverage",
    label: "Cobertura Regulatoria",
    shortLabel: "Cobertura",
    description: "Nivel de mapeo y auditoría normativa del dominio frente a disposiciones oficiales.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "unmapped", label: STATIC_LABELS["unmapped"] },
      { id: "partial", label: STATIC_LABELS["partial"] },
      { id: "mapped", label: STATIC_LABELS["mapped"] },
      { id: "reviewed", label: STATIC_LABELS["reviewed"] },
      { id: "not-applicable", label: STATIC_LABELS["not-applicable"] }
    ]
  },

  "regulatory-criticality": {
    id: "regulatory-criticality",
    label: "Criticidad Regulatoria",
    shortLabel: "Criticidad",
    description: "Impacto del incumplimiento del dominio ante el ecosistema previsional del SAR.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "none", label: STATIC_LABELS["none"] },
      { id: "low", label: STATIC_LABELS["low"] },
      { id: "medium", label: STATIC_LABELS["medium"] },
      { id: "high", label: STATIC_LABELS["high"] },
      { id: "systemic", label: STATIC_LABELS["systemic"] }
    ]
  },

  "regulatory-validation-status": {
    id: "regulatory-validation-status",
    label: "Estado de Validación Regulatoria",
    shortLabel: "Val. Reg.",
    description: "Estatus de la revisión legal e institucional de las correspondencias normativas.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "pending", label: STATIC_LABELS["pending"] },
      { id: "partially-reviewed", label: STATIC_LABELS["partially-reviewed"] },
      { id: "legally-reviewed", label: STATIC_LABELS["legally-reviewed"] },
      { id: "architecture-reviewed", label: STATIC_LABELS["architecture-reviewed"] }
    ]
  },

  "regulatory-authority": {
    id: "regulatory-authority",
    label: "Autoridad Emisora",
    shortLabel: "Autoridad",
    description: "Organismo gubernamental o de control emisor de las regulaciones aplicables.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => {
      const authorities = new Set<string>();
      getRegulatorySources().forEach(s => {
        if (s.issuingAuthorityId) authorities.add(s.issuingAuthorityId);
      });
      getServiceDomains().forEach(sd => {
        sd.regulations?.forEach(r => {
          if (r.authority) authorities.add(r.authority);
        });
      });
      return Array.from(authorities).sort().map(auth => ({
        id: auth,
        label: auth
      }));
    }
  },

  "regulatory-source": {
    id: "regulatory-source",
    label: "Fuente Regulatoria",
    shortLabel: "Norma",
    description: "Leyes, circulares y reglas específicas de las que emanan las obligaciones.",
    category: "regulation",
    supportsRows: true,
    supportsColumns: false,
    getValues: () => getRegulatorySources().map(s => ({
      id: s.id,
      label: s.shortName,
      description: s.officialTitle
    }))
  },

  "business-object": {
    id: "business-object",
    label: "Objeto de Negocio",
    shortLabel: "Objeto",
    description: "Entidades de datos principales involucradas como entrada, referencia o salida.",
    category: "operations",
    supportsRows: true,
    supportsColumns: false,
    getValues: () => {
      const boMap = new Map<string, string>();
      getServiceDomains().forEach(sd => {
        sd.businessObjects?.forEach(bo => {
          boMap.set(bo.id, bo.name);
        });
      });
      return Array.from(boMap.entries()).sort((a,b) => a[0].localeCompare(b[0])).map(([id, name]) => ({
        id,
        label: name
      }));
    }
  },

  "focus-object": {
    id: "focus-object",
    label: "Objeto Focal de Negocio",
    shortLabel: "Obj. Focal",
    description: "El objeto primario sobre el cual el dominio de servicio tiene propiedad del estado.",
    category: "operations",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => {
      const focusSet = new Set<string>();
      getServiceDomains().forEach(sd => {
        if (sd.focusObject?.name) {
          focusSet.add(sd.focusObject.name);
        }
      });
      return Array.from(focusSet).sort().map(name => ({
        id: name,
        label: name
      }));
    }
  },

  "control": {
    id: "control",
    label: "Control de Arquitectura",
    shortLabel: "Control",
    description: "Controles preventivos, detectivos y evidencias registradas en el servicio.",
    category: "governance",
    supportsRows: true,
    supportsColumns: false,
    getValues: () => {
      const ctrlMap = new Map<string, string>();
      getServiceDomains().forEach(sd => {
        sd.controls?.forEach(c => {
          ctrlMap.set(c.id, c.name);
        });
      });
      return Array.from(ctrlMap.entries()).sort((a,b) => a[0].localeCompare(b[0])).map(([id, name]) => ({
        id,
        label: name
      }));
    }
  },

  "relation-type": {
    id: "relation-type",
    label: "Tipo de Relación",
    shortLabel: "Relación",
    description: "Naturaleza de la interdependencia con otros dominios de servicio.",
    category: "relationships",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => [
      { id: "depends-on", label: "Depende de (depends-on)" },
      { id: "provides-to", label: "Provee a (provides-to)" },
      { id: "validates", label: "Valida (validates)" },
      { id: "orchestrates", label: "Orquesta (orchestrates)" },
      { id: "reports-to", label: "Reporta a (reports-to)" },
      { id: "transfers-to", label: "Transfiere a (transfers-to)" },
      { id: "shares-data-with", label: "Comparte datos con (shares-data-with)" },
      { id: "triggers", label: "Dispara (triggers)" }
    ]
  },

  "value-stream": {
    id: "value-stream",
    label: "Flujo de Valor (Value Stream)",
    shortLabel: "Flujo",
    description: "Macrogrupos de procesos transversales de negocio en la cadena de retiro.",
    category: "relationships",
    supportsRows: true,
    supportsColumns: true,
    getValues: () => {
      const vsSet = new Set<string>();
      getServiceDomains().forEach(sd => {
        sd.valueStreams?.forEach(vs => vsSet.add(vs));
      });
      return Array.from(vsSet).sort().map(vs => ({
        id: vs,
        label: vs
      }));
    }
  }
};

/**
 * Extracts the values of a given dimension for a specific ServiceDomain.
 * Returns an array of string IDs.
 */
export function getDomainValuesForDimension(sd: ServiceDomain, dimensionId: MatrixDimensionId): string[] {
  switch (dimensionId) {
    case "business-area":
      return [sd.businessAreaId];
    case "business-domain":
      return [sd.businessDomainId];
    case "service-domain":
      return [sd.id];
    case "landscape-layer":
      return sd.landscapeLayer ? [sd.landscapeLayer] : ["raia-governance-overlay"];
    case "capability-type":
      return sd.capabilityType ? [sd.capabilityType] : [];
    case "lifecycle-status":
      return [sd.status];
    case "maturity":
      return sd.maturity ? [sd.maturity] : [];
    case "accountable-participant":
      return sd.accountableParticipantIds && sd.accountableParticipantIds.length > 0
        ? sd.accountableParticipantIds
        : sd.accountableActors;
    case "participating-participant":
      return sd.participatingActors;
    case "applicable-regime":
      return sd.applicableRegimeIds || [];
    case "regulatory-coverage":
      return sd.regulatoryCoverage ? [sd.regulatoryCoverage] : ["unmapped"];
    case "regulatory-criticality":
      return sd.regulatoryCriticality ? [sd.regulatoryCriticality] : ["none"];
    case "regulatory-validation-status":
      return sd.regulatoryValidationStatus ? [sd.regulatoryValidationStatus] : ["pending"];
    
    case "regulatory-authority": {
      const auths = new Set<string>();
      sd.regulations?.forEach(r => {
        if (r.authority) auths.add(r.authority);
      });
      const sdMappings = getRegulatoryMappings().filter(m => m.serviceDomainId === sd.id);
      sdMappings.forEach(m => {
        const source = getRegulatorySources().find(s => s.id === m.regulatorySourceId);
        if (source?.issuingAuthorityId) auths.add(source.issuingAuthorityId);
      });
      return Array.from(auths);
    }

    case "regulatory-source": {
      const srcIds = new Set<string>();
      sd.regulations?.forEach(r => {
        if (r.id) srcIds.add(r.id);
      });
      const sdMappings = getRegulatoryMappings().filter(m => m.serviceDomainId === sd.id);
      sdMappings.forEach(m => {
        if (m.regulatorySourceId) srcIds.add(m.regulatorySourceId);
      });
      return Array.from(srcIds);
    }

    case "business-object":
      return sd.businessObjects ? sd.businessObjects.map(bo => bo.id) : [];
    
    case "focus-object":
      return sd.focusObject?.name ? [sd.focusObject.name] : [];

    case "control":
      return sd.controls ? sd.controls.map(c => c.id) : [];

    case "relation-type": {
      const relTypes = new Set<string>();
      const domainRelations = getRelations().filter(r => r.sourceId === sd.id || r.targetId === sd.id);
      domainRelations.forEach(r => relTypes.add(r.type));
      return Array.from(relTypes);
    }

    case "value-stream":
      return sd.valueStreams || [];

    default:
      return [];
  }
}
