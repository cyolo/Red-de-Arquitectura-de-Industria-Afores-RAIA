import { ScenarioArchitectureNarrative } from "../types/scenarioNarrativeTypes";
import { ScenarioArchitectureNarrativeSchema } from "../schemas/scenarioNarrativeSchemas";

export class ScenarioNarrativeRepository {
  private narratives: Map<string, ScenarioArchitectureNarrative>;

  constructor() {
    this.narratives = new Map();
  }

  public async loadAll(): Promise<void> {
    try {
      if (typeof window !== "undefined") {
        // En cliente, cargamos desde el bundle estático si existe
        const bundle = await fetch('/data/scenario-narratives.json').then(r => r.json());
        Object.entries(bundle).forEach(([id, data]) => {
          this.narratives.set(id, data as ScenarioArchitectureNarrative);
        });
      }
    } catch (e) {
      console.warn("Could not load narratives bundle.");
    }
  }

  public getById(id: string): ScenarioArchitectureNarrative | undefined {
    return this.narratives.get(id);
  }

  public getAll(): ScenarioArchitectureNarrative[] {
    return Array.from(this.narratives.values());
  }

  public preloadData(bundle: Record<string, any>) {
    Object.entries(bundle).forEach(([id, data]) => {
      this.narratives.set(id, data as ScenarioArchitectureNarrative);
    });
  }
}

export const scenarioNarrativeRepository = new ScenarioNarrativeRepository();
