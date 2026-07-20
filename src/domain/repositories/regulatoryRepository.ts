import { RegulatorySource, RegulatoryMapping, RegulatoryCapabilityGap } from "../types";
import { z } from "zod";
import { RegulatorySourceSchema, RegulatoryMappingSchema, RegulatoryCapabilityGapSchema } from "../schemas";

import sourcesData from "../../data/regulatory/regulatory-sources.json";
import mappingsData from "../../data/regulatory/regulatory-mappings.json";
import gapsData from "../../data/regulatory/regulatory-gaps.json";

// Validate all regulatory static data upon loading
const validatedSources = z.array(RegulatorySourceSchema).parse(sourcesData);
const validatedMappings = z.array(RegulatoryMappingSchema).parse(mappingsData);
const validatedGaps = z.array(RegulatoryCapabilityGapSchema).parse(gapsData);

export const getRegulatorySources = (): RegulatorySource[] => {
  return validatedSources as unknown as RegulatorySource[];
};

export const getRegulatoryMappings = (): RegulatoryMapping[] => {
  return validatedMappings as unknown as RegulatoryMapping[];
};

export const getRegulatoryGaps = (): RegulatoryCapabilityGap[] => {
  return validatedGaps as unknown as RegulatoryCapabilityGap[];
};

export const getRegulatorySourceById = (id: string): RegulatorySource | undefined => {
  return getRegulatorySources().find((s) => s.id === id);
};

export const getRegulatoryMappingById = (id: string): RegulatoryMapping | undefined => {
  return getRegulatoryMappings().find((m) => m.id === id);
};

export const getRegulatoryMappingsForServiceDomain = (sdId: string): RegulatoryMapping[] => {
  return getRegulatoryMappings().filter((m) => m.serviceDomainId === sdId);
};
