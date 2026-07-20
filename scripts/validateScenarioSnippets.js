const fs = require('fs');
const path = require('path');

function validate() {
  console.log('=== VALIDATING SCENARIO SNIPPETS DATA ===');
  
  const snippetsPath = path.join(__dirname, '../src/data/business-scenarios/snippets/snippets.json');
  const rolesPath = path.join(__dirname, '../src/data/business-scenarios/snippets/participant-roles.json');
  const stepsPath = path.join(__dirname, '../src/data/business-scenarios/snippets/steps.json');

  if (!fs.existsSync(snippetsPath) || !fs.existsSync(rolesPath) || !fs.existsSync(stepsPath)) {
    console.error('✗ Missing validation files.');
    process.exit(1);
  }

  const snippets = JSON.parse(fs.readFileSync(snippetsPath, 'utf8'));
  const roles = JSON.parse(fs.readFileSync(rolesPath, 'utf8'));
  const steps = JSON.parse(fs.readFileSync(stepsPath, 'utf8'));

  // 1. Unique IDs
  const snippetIds = new Set();
  const snippetSlugs = new Set();

  for (const sn of snippets) {
    if (!sn.id || sn.id.trim() === '') {
      console.error('✗ Snippet is missing an ID!');
      process.exit(1);
    }
    if (!sn.purpose || sn.purpose.trim() === '') {
      console.error(`✗ Snippet ${sn.id} is missing a purpose definition!`);
      process.exit(1);
    }
    if (snippetIds.has(sn.id)) {
      console.error(`✗ Duplicate Snippet ID: ${sn.id}`);
      process.exit(1);
    }
    if (snippetSlugs.has(sn.slug)) {
      console.error(`✗ Duplicate Snippet slug: ${sn.slug}`);
      process.exit(1);
    }
    snippetIds.add(sn.id);
    snippetSlugs.add(sn.slug);
  }

  // 2. Steps order continuity
  const snippetStepsMap = new Map();
  steps.forEach((step) => {
    if (!snippetStepsMap.has(step.snippetId)) {
      snippetStepsMap.set(step.snippetId, []);
    }
    snippetStepsMap.get(step.snippetId).push(step);
  });

  snippetStepsMap.forEach((sSteps, snId) => {
    // Sort by order
    const sorted = [...sSteps].sort((a, b) => a.order - b.order);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].order !== i + 1) {
        console.error(`✗ Out of order or non-continuous steps for snippet ${snId}: expected step order ${i + 1}, found ${sorted[i].order}`);
        process.exit(1);
      }
    }
  });

  console.log(`✓ Scenario Snippets Validation: OK (${snippets.length} snippets verified)`);
}

validate();
