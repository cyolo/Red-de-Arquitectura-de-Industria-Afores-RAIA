import { describe, test, expect } from 'vitest';
import { getPortalReleases } from '../../src/domain/repositories/portalRepository';

describe('RAIA Releases Parsing & Validation Unit Tests', () => {
  test('Release list has SemVer compatible version tags and is sorted chronologically (latest first)', () => {
    const releases = getPortalReleases();
    expect(releases.length).toBeGreaterThan(0);

    let prevDate = new Date().getTime() * 2;
    releases.forEach(rel => {
      expect(rel.version).toMatch(/^\d+\.\d+\.\d+$/);
      const currentDate = new Date(rel.releaseDate).getTime();
      expect(currentDate).toBeLessThanOrEqual(prevDate);
      prevDate = currentDate;
    });
  });

  test('Draft releases are tagged correctly and have correct regulatory baselines', () => {
    const releases = getPortalReleases();
    releases.forEach(rel => {
      expect(['published', 'draft', 'deprecated']).toContain(rel.status);
      expect(rel.regulatoryBaselineDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});
