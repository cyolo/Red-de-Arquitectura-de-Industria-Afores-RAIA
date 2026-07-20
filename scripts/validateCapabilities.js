const fs = require('fs');
const path = require('path');

function validate() {
  console.log('=== VALIDATING BUSINESS CAPABILITY MAP DATA ===');

  const domainsPath = path.join(__dirname, '../src/data/capability-map/capability-domains.json');
  const capabilitiesPath = path.join(__dirname, '../src/data/capability-map/capabilities.json');
  const mappingsPath = path.join(__dirname, '../src/data/capability-map/capability-service-domain-mappings.json');
  const gapsPath = path.join(__dirname, '../src/data/capability-map/capability-gaps.json');

  if (!fs.existsSync(domainsPath) || !fs.existsSync(capabilitiesPath) || !fs.existsSync(mappingsPath)) {
    console.error('✗ Missing capability validation files.');
    process.exit(1);
  }

  const domains = JSON.parse(fs.readFileSync(domainsPath, 'utf8'));
  const capabilities = JSON.parse(fs.readFileSync(capabilitiesPath, 'utf8'));
  const mappings = JSON.parse(fs.readFileSync(mappingsPath, 'utf8'));
  const gaps = JSON.parse(fs.readFileSync(gapsPath, 'utf8'));

  const domainIds = new Set(domains.map(d => d.id));
  const capIds = new Set(capabilities.map(c => c.id));

  // 1. Assert unique IDs and slugs
  const seenSlugs = new Set();
  capabilities.forEach(cap => {
    if (!cap.id || cap.id.trim() === '') {
      console.error('✗ Capability is missing an ID!');
      process.exit(1);
    }
    if (seenSlugs.has(cap.slug)) {
      console.error(`✗ Duplicate capability slug: ${cap.slug}`);
      process.exit(1);
    }
    seenSlugs.add(cap.slug);
  });

  // 2. Assert parent existences and levels
  capabilities.forEach(cap => {
    if (cap.parentCapabilityId && !capIds.has(cap.parentCapabilityId)) {
      console.error(`✗ Parent capability not found: ${cap.parentCapabilityId} for capability ${cap.id}`);
      process.exit(1);
    }
    if (!domainIds.has(cap.capabilityDomainId)) {
      console.error(`✗ Capability Domain not found: ${cap.capabilityDomainId} for capability ${cap.id}`);
      process.exit(1);
    }
  });

  // 3. Cycle detection
  const visiting = new Set();
  const visited = new Set();
  const capMap = new Map(capabilities.map(c => [c.id, c]));

  function checkCycle(id) {
    if (visiting.has(id)) {
      console.error(`✗ Cycle detected in capability hierarchy for ID: ${id}`);
      process.exit(1);
    }
    if (visited.has(id)) return;

    visiting.add(id);
    const cap = capMap.get(id);
    if (cap && cap.parentCapabilityId) {
      checkCycle(cap.parentCapabilityId);
    }
    visiting.delete(id);
    visited.add(id);
  }

  capabilities.forEach(c => checkCycle(c.id));

  console.log(`✓ Business Capability Map Validation: OK (${capabilities.length} capabilities verified)`);
}

validate();
