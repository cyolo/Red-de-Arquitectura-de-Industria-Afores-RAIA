import { useState, useEffect } from 'react';
import { ScenarioArchitectureNarrative } from '../../../../domain/types/scenarioNarrativeTypes';
import narrativesBundle from '../../../../data/scenario-narratives.json';

export function useScenarioNarrative(scenarioId?: string) {
  const [narrative, setNarrative] = useState<ScenarioArchitectureNarrative | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!scenarioId) {
      setNarrative(null);
      return;
    }

    setLoading(true);
    
    // Simular un micro-retraso para que la UI muestre el skeleton state limpiamente
    const timer = setTimeout(() => {
      setNarrative((narrativesBundle as any)[scenarioId] || null);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [scenarioId]);

  return { narrative, loading };
}
