const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'raia-landscape-0.1.0.json'), 'utf8'));

const targets = ['RAIA-SD-020', 'RAIA-SD-021', 'RAIA-SD-023', 'RAIA-SD-031', 'RAIA-SD-045', 'RAIA-SD-182', 'RAIA-SD-204'];
data.serviceDomains.forEach(sd => {
  if (targets.includes(sd.id)) {
    console.log(`${sd.id}: ${sd.nameEs} (Layer: ${sd.landscapeLayer || 'N/A'}, BA: ${sd.businessAreaId})`);
  }
});
