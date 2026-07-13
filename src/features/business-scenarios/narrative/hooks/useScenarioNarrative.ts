import { useState, useEffect } from 'react';
import { ScenarioArchitectureNarrative } from '../../../../domain/types/scenarioNarrativeTypes';

export function useScenarioNarrative(scenarioId?: string) {
  const [narrative, setNarrative] = useState<ScenarioArchitectureNarrative | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!scenarioId) {
      setNarrative(null);
      return;
    }

    setLoading(true);
    fetch('/data/scenario-narratives.json')
      .then(res => res.json())
      .then(data => {
        setNarrative(data[scenarioId] || null);
      })
      .catch(() => setNarrative(null))
      .finally(() => setLoading(false));
  }, [scenarioId]);

  return { narrative, loading };
}
