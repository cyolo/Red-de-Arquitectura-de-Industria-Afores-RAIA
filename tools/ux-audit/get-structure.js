const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../../src/data');
const raiaFile = path.join(dataDir, 'raia-landscape-0.1.0.json');

if (fs.existsSync(raiaFile)) {
  const content = JSON.parse(fs.readFileSync(raiaFile, 'utf-8'));
  console.log('Keys in raia-landscape:', Object.keys(content));
  
  if (content.businessAreas && content.businessAreas.length > 0) {
    console.log('Sample Business Area Slugs:', content.businessAreas.slice(0, 3).map(ba => ba.slug));
  }
  if (content.businessDomains && content.businessDomains.length > 0) {
    console.log('Sample Business Domain Slugs:', content.businessDomains.slice(0, 3).map(bd => bd.slug));
  }
  if (content.serviceDomains && content.serviceDomains.length > 0) {
    console.log('Sample Service Domain Slugs:', content.serviceDomains.slice(0, 3).map(sd => sd.slug));
  }
} else {
  console.log('File not found:', raiaFile);
}
