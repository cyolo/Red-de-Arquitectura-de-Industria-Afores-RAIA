import { ServiceDomain } from "../../../../domain/types";
import { LandscapeFilters } from "../../store/useLandscapeStore";
import { getDomainValuesForDimension } from "./matrixDimensions";

/**
 * Checks if a ServiceDomain matches the combined filter configuration and search query
 */
export function matchesMatrixFilters(
  sd: ServiceDomain,
  filters: LandscapeFilters & {
    serviceDomain?: string;
    capabilityType?: string;
    authority?: string;
    regulation?: string; // standard matches regulatory-source
    regulatoryValidationStatus?: string;
    control?: string;
  },
  searchQuery: string
): boolean {
  // 1. Business Area
  if (filters.area && sd.businessAreaId !== filters.area) return false;

  // 2. Business Domain
  if (filters.domain && sd.businessDomainId !== filters.domain) return false;

  // 3. Service Domain ID
  if (filters.serviceDomain && sd.id !== filters.serviceDomain) return false;

  // 4. Landscape Layer
  if (filters.layer && sd.landscapeLayer !== filters.layer) return false;

  // 5. Capability Type
  if (filters.capabilityType && sd.capabilityType !== filters.capabilityType) return false;

  // 6. Status
  if (filters.status && sd.status !== filters.status) return false;

  // 7. Maturity
  if (filters.maturity && sd.maturity !== filters.maturity) return false;

  // 8. Actor (either accountable or participating)
  if (filters.actor) {
    const accountable = sd.accountableParticipantIds && sd.accountableParticipantIds.length > 0
      ? sd.accountableParticipantIds
      : sd.accountableActors;
    const participating = sd.participatingActors || [];
    const hasActor = accountable.includes(filters.actor) || participating.includes(filters.actor);
    if (!hasActor) return false;
  }

  // 9. Regime
  if (filters.regime && !sd.applicableRegimeIds?.includes(filters.regime)) return false;

  // 10. Coverage
  if (filters.coverage && sd.regulatoryCoverage !== filters.coverage) return false;

  // 11. Criticality
  if (filters.criticality && sd.regulatoryCriticality !== filters.criticality) return false;

  // 12. Authority
  if (filters.authority) {
    const authorities = getDomainValuesForDimension(sd, "regulatory-authority");
    if (!authorities.includes(filters.authority)) return false;
  }

  // 13. Regulatory Source
  const regSource = filters.regulation || filters.regulatory; // fallback / alias
  if (regSource) {
    const sources = getDomainValuesForDimension(sd, "regulatory-source");
    if (!sources.includes(regSource)) return false;
  }

  // 14. Regulatory Validation Status
  if (filters.regulatoryValidationStatus && sd.regulatoryValidationStatus !== filters.regulatoryValidationStatus) return false;

  // 15. Control
  const controlFilter = filters.controlFilter || filters.control; // alias
  if (controlFilter) {
    const controls = getDomainValuesForDimension(sd, "control");
    if (!controls.includes(controlFilter)) return false;
  }

  // 16. Value Stream
  if (filters.valueStream && !sd.valueStreams?.includes(filters.valueStream)) return false;

  // 17. Search Query
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    const matchesText =
      sd.id.toLowerCase().includes(q) ||
      sd.nameEs.toLowerCase().includes(q) ||
      (sd.nameEn && sd.nameEn.toLowerCase().includes(q)) ||
      sd.summary.toLowerCase().includes(q) ||
      sd.definition.toLowerCase().includes(q) ||
      sd.capabilities.some((c) => c.toLowerCase().includes(q)) ||
      sd.tags.some((t) => t.toLowerCase().includes(q));
    
    if (!matchesText) return false;
  }

  return true;
}
