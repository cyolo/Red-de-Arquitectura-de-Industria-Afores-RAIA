import { IndustryParticipant } from "../types";
import { z } from "zod";
import { IndustryParticipantSchema } from "../schemas";

import actorsData from "../../data/actors-0.2.0.json";

// Validate actors static data upon loading
const validatedActors = z.array(IndustryParticipantSchema).parse(actorsData);

export const getIndustryParticipants = (): IndustryParticipant[] => {
  return validatedActors as unknown as IndustryParticipant[];
};

export const getIndustryParticipantById = (id: string): IndustryParticipant | undefined => {
  return getIndustryParticipants().find((a) => a.id === id);
};
