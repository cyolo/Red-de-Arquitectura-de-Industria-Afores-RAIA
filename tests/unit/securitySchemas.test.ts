import { describe, test, expect } from 'vitest';
import { SlugSchema, InternalRouteSchema, assertInternalRoute } from '../../src/domain/schemas';
import { OfficialRegulatoryUrlSchema } from '../../src/domain/schemas/regulatorySchemas';

describe('Security Schemas Unit Tests (SEC-05, SEC-06, SEC-08)', () => {
  describe('SlugSchema constraints', () => {
    test('accepts valid slugs', () => {
      expect(SlugSchema.safeParse('my-slug').success).toBe(true);
      expect(SlugSchema.safeParse('slug-123').success).toBe(true);
      expect(SlugSchema.safeParse('a-b-c-d').success).toBe(true);
    });

    test('rejects uppercase, spaces, trailing hyphens, double hyphens, and paths', () => {
      expect(SlugSchema.safeParse('My-Slug').success).toBe(false);
      expect(SlugSchema.safeParse('my slug').success).toBe(false);
      expect(SlugSchema.safeParse('slug-').success).toBe(false);
      expect(SlugSchema.safeParse('-slug').success).toBe(false);
      expect(SlugSchema.safeParse('slug--1').success).toBe(false);
      expect(SlugSchema.safeParse('slug/1').success).toBe(false);
      expect(SlugSchema.safeParse('slug.1').success).toBe(false);
    });
  });

  describe('InternalRouteSchema & assertInternalRoute constraints', () => {
    test('accepts valid internal routes', () => {
      expect(InternalRouteSchema.safeParse('/').success).toBe(true);
      expect(InternalRouteSchema.safeParse('/service-landscape').success).toBe(true);
      expect(InternalRouteSchema.safeParse('/service-domains/my-slug').success).toBe(true);
    });

    test('rejects external URLs, protocols, traversals, backslashes, double slashes, and credentials', () => {
      expect(InternalRouteSchema.safeParse('https://external.com').success).toBe(false);
      expect(InternalRouteSchema.safeParse('http://external.com').success).toBe(false);
      expect(InternalRouteSchema.safeParse('//external.com').success).toBe(false);
      expect(InternalRouteSchema.safeParse('javascript:alert(1)').success).toBe(false);
      expect(InternalRouteSchema.safeParse('data:text/html').success).toBe(false);
      expect(InternalRouteSchema.safeParse('/../etc/passwd').success).toBe(false);
      expect(InternalRouteSchema.safeParse('/path\\with\\backslashes').success).toBe(false);
    });

    test('assertInternalRoute returns path if valid, otherwise falls back to /', () => {
      expect(assertInternalRoute('/service-domains/test')).toBe('/service-domains/test');
      expect(assertInternalRoute('https://phishing.com')).toBe('/');
    });
  });

  describe('OfficialRegulatoryUrlSchema constraints', () => {
    test('accepts HTTPS URLs from allowlisted official domains', () => {
      expect(OfficialRegulatoryUrlSchema.safeParse('https://www.consar.gob.mx/pdf/1.pdf').success).toBe(true);
      expect(OfficialRegulatoryUrlSchema.safeParse('https://dof.gob.mx/index.php').success).toBe(true);
      expect(OfficialRegulatoryUrlSchema.safeParse('https://infonavit.org.mx/').success).toBe(true);
      expect(OfficialRegulatoryUrlSchema.safeParse('https://diputados.gob.mx/').success).toBe(true);
    });

    test('rejects non-HTTPS URLs', () => {
      expect(OfficialRegulatoryUrlSchema.safeParse('http://consar.gob.mx/').success).toBe(false);
    });

    test('rejects URLs with embedded credentials', () => {
      expect(OfficialRegulatoryUrlSchema.safeParse('https://user:pass@consar.gob.mx/').success).toBe(false);
    });

    test('rejects URLs with unexpected ports', () => {
      expect(OfficialRegulatoryUrlSchema.safeParse('https://consar.gob.mx:8443/').success).toBe(false);
    });

    test('rejects non-allowlisted domains', () => {
      expect(OfficialRegulatoryUrlSchema.safeParse('https://google.com').success).toBe(false);
      expect(OfficialRegulatoryUrlSchema.safeParse('https://yahoo.com/consar.gob.mx').success).toBe(false);
    });
  });
});
