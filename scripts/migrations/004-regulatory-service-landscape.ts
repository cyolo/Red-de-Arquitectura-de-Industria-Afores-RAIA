import fs from 'fs';
import path from 'path';

const workspacePath = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';
const landscapePath = path.join(workspacePath, 'src/data/raia-landscape-0.1.0.json');
const backupPath = path.join(workspacePath, 'src/data/raia-landscape-0.1.0.json.bak');
const relationsPath = path.join(workspacePath, 'src/data/relations-0.1.0.json');
const relationsBackupPath = path.join(workspacePath, 'src/data/relations-0.1.0.json.bak');

export function runMigration(dryRun = false) {
  try {
    console.log(`Starting migration... Dry run: ${dryRun}`);
    if (!fs.existsSync(landscapePath)) {
      throw new Error(`Landscape data file not found: ${landscapePath}`);
    }

    const data = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));
    
    // Backup first
    if (!dryRun) {
      fs.copyFileSync(landscapePath, backupPath);
      console.log('Backup created successfully.');
    }

    const areaLayerMap: Record<string, string> = {
      'RAIA-BA-001': 'sector-governance',
      'RAIA-BA-002': 'sector-governance',
      'RAIA-BA-003': 'industry-value-stream',
      'RAIA-BA-004': 'industry-value-stream',
      'RAIA-BA-005': 'industry-value-stream',
      'RAIA-BA-006': 'industry-value-stream',
      'RAIA-BA-007': 'industry-value-stream',
      'RAIA-BA-008': 'industry-value-stream',
      'RAIA-BA-009': 'industry-shared-service',
      'RAIA-BA-010': 'enterprise-enabler',
      'RAIA-BA-011': 'raia-governance-overlay'
    };

    const areaCapTypeMap: Record<string, string> = {
      'RAIA-BA-001': 'regulated-core',
      'RAIA-BA-002': 'regulated-core',
      'RAIA-BA-003': 'regulated-core',
      'RAIA-BA-004': 'regulated-core',
      'RAIA-BA-005': 'regulated-core',
      'RAIA-BA-006': 'regulated-core',
      'RAIA-BA-007': 'regulated-core',
      'RAIA-BA-008': 'regulated-core',
      'RAIA-BA-009': 'industry-shared',
      'RAIA-BA-010': 'enterprise-enabler',
      'RAIA-BA-011': 'raia-governance'
    };

    const actorMapping: Record<string, string> = {
      'Empresa Operadora': 'ACT-OPERATOR',
      'Trabajador': 'ACT-WORKER',
      'Patrón': 'ACT-EMPLOYER',
      'Afore': 'ACT-AFORE',
      'AFORE': 'ACT-AFORE',
      'AFORE receptora': 'ACT-AFORE',
      'AFORE transferente': 'ACT-AFORE',
      'CONSAR': 'ACT-CONSAR',
      'IMSS': 'ACT-IMSS',
      'ISSSTE': 'ACT-ISSSTE',
      'INFONAVIT': 'ACT-INFONAVIT',
      'FOVISSSTE': 'ACT-FOVISSSTE',
      'Fondo de Pensiones para el Bienestar': 'ACT-FPB-TRUSTEE',
      'PENSIONISSSTE': 'ACT-PENSIONISSSTE',
      'Siefore': 'ACT-SIEFORE',
      'SIEFORE': 'ACT-SIEFORE',
      'Custodio': 'ACT-CUSTODIAN',
      'Proveedor de Precios': 'ACT-PRICEPROVIDER',
      'Banco de México': 'ACT-BANXICO'
    };

    // Specific mapped domains
    const mappedDomains = new Set([
      'RAIA-SD-041', 'RAIA-SD-072', 'RAIA-SD-076', 'RAIA-SD-112', 'RAIA-SD-154', 'RAIA-SD-182', 'RAIA-SD-204'
    ]);

    let modifiedCount = 0;

    // Migrate Business Domains actors
    data.businessDomains = data.businessDomains.map((bd: any) => {
      return {
        ...bd,
        actors: (bd.actors || []).map((a: string) => actorMapping[a] || (a.startsWith('ACT-') ? a : `ACT-${a.toUpperCase()}`))
      };
    });

    // Migrate Service Domains
    data.serviceDomains = data.serviceDomains.map((sd: any) => {
      const layer = areaLayerMap[sd.businessAreaId] || 'industry-value-stream';
      const capType = areaCapTypeMap[sd.businessAreaId] || 'regulated-core';
      
      const isMapped = mappedDomains.has(sd.id);

      // Clean up semantics from legacy strings in descriptions
      let cleanSummary = sd.summary || '';
      let cleanDefinition = sd.definition || '';
      let cleanPurpose = sd.purpose || '';

      const semanticCleanups = [
        { regex: /garantizar la correcta operación y control de/gi, replacement: 'administrar las operaciones y controles de' },
        { regex: /garantizar absolutamente/gi, replacement: 'validar y salvaguardar' },
        { regex: /maximizar rendimientos/gi, replacement: 'gestionar portafolios eficientemente' },
        { regex: /controlar todo el proceso/gi, replacement: 'establecer controles y validaciones' },
        { regex: /realizar cualquier operación/gi, replacement: 'procesar transacciones autorizadas' },
        { regex: /gestionar de forma integral/gi, replacement: 'administrar' }
      ];

      semanticCleanups.forEach(cleanup => {
        cleanSummary = cleanSummary.replace(cleanup.regex, cleanup.replacement);
        cleanDefinition = cleanDefinition.replace(cleanup.regex, cleanup.replacement);
        cleanPurpose = cleanPurpose.replace(cleanup.regex, cleanup.replacement);
      });

      const cleanAccountable = (sd.accountableActors || []).map((a: string) => actorMapping[a] || (a.startsWith('ACT-') ? a : `ACT-${a.toUpperCase()}`));
      const cleanParticipating = (sd.participatingActors || []).map((a: string) => actorMapping[a] || (a.startsWith('ACT-') ? a : `ACT-${a.toUpperCase()}`));

      modifiedCount++;

      return {
        ...sd,
        summary: cleanSummary,
        definition: cleanDefinition,
        purpose: cleanPurpose,
        
        landscapeLayer: layer,
        responsibilityStatement: `Responsabilidad lógica de administrar y validar la operación de ${sd.nameEs}.`,
        responsibilityBoundary: `Frontera de servicio exclusiva delimitada por las operaciones expuestas del dominio de servicio.`,
        
        accountableActors: cleanAccountable,
        participatingActors: cleanParticipating,

        participantIds: cleanAccountable.concat(cleanParticipating),
        accountableParticipantIds: cleanAccountable,
        regulatoryMappingIds: isMapped ? [`RAIA-MAP-000${sd.id.slice(-1)}`] : [],
        regulatoryCoverage: isMapped ? 'reviewed' : 'unmapped',
        applicableRegimeIds: ['LSS97', 'ISSSTE2007'],
        regulatoryCriticality: isMapped ? 'high' : 'medium',
        capabilityType: capType,
        assumptions: [],
        unresolvedQuestions: [],
        operationalValidationStatus: 'pending',
        regulatoryValidationStatus: isMapped ? 'legally-reviewed' : 'pending',
        lastRegulatoryReviewAt: isMapped ? '2026-07-20' : undefined
      };
    });

    if (!dryRun) {
      fs.writeFileSync(landscapePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Saved migrated landscape data. ${modifiedCount} service domains updated.`);
    }

    // Migrate relations
    if (fs.existsSync(relationsPath)) {
      if (!dryRun) {
        fs.copyFileSync(relationsPath, relationsBackupPath);
      }
      
      const relations = JSON.parse(fs.readFileSync(relationsPath, 'utf8'));
      const migratedRelations = relations.map((rel: any, index: number) => {
        let cleanLabel = rel.label || '';
        let cleanDescription = rel.description || '';
        
        if (cleanLabel.toLowerCase() === 'siguiente paso') {
          cleanLabel = 'Desencadena flujo';
          cleanDescription = 'Flujo de control secuencial entre dominios de servicio.';
        }
        
        const serialStr = String(index + 1).padStart(4, '0');
        const newId = `RAIA-REL-${serialStr}`;
        
        return {
          ...rel,
          id: newId,
          label: cleanLabel,
          description: cleanDescription
        };
      });
      
      if (!dryRun) {
        fs.writeFileSync(relationsPath, JSON.stringify(migratedRelations, null, 2), 'utf8');
        console.log(`Saved migrated relations. ${migratedRelations.length} relations updated.`);
      }
    }

    return {
      success: true,
      modifiedCount,
      dryRun
    };

  } catch (error: any) {
    console.error('Migration failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Self execute if run directly
if (require.main === module) {
  runMigration(false);
}
