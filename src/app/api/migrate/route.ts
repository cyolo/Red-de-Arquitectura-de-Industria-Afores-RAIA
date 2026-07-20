import { NextResponse } from 'next/server';
import { runMigration } from '../../../../scripts/migrations/004-regulatory-service-landscape';
import { execSync } from 'child_process';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dryRunParam = searchParams.get('dryRun');
  const dryRun = dryRunParam === 'true';
  const workspacePath = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';

  try {
    console.log('API Migrate: Running runMigration...');
    const migrationResult = runMigration(dryRun);

    if (!migrationResult.success) {
      return NextResponse.json({
        success: false,
        phase: 'migration',
        error: migrationResult.error
      }, { status: 500 });
    }

    // Run validators in sequence
    console.log('API Migrate: Running validators...');
    const outputs: Record<string, string> = {};
    const validatorScripts = [
      { name: 'sources', script: 'scripts/validateRegulatorySources.js' },
      { name: 'mappings', script: 'scripts/validateRegulatoryMappings.js' },
      { name: 'semantics', script: 'scripts/validateLandscapeSemantics.js' },
      { name: 'actors', script: 'scripts/validateActorTaxonomy.js' },
      { name: 'coverage', script: 'scripts/validateServiceDomainCoverage.js' },
      { name: 'relations', script: 'scripts/validateLandscapeRelations.js' },
      { name: 'baseline', script: 'scripts/validateRegulatoryBaseline.js' }
    ];

    for (const val of validatorScripts) {
      try {
        const out = execSync(`node ${val.script}`, { cwd: workspacePath, encoding: 'utf8' });
        outputs[val.name] = out;
      } catch (err: any) {
        return NextResponse.json({
          success: false,
          phase: 'validation',
          failedValidator: val.name,
          error: err.message,
          stdout: err.stdout,
          stderr: err.stderr
        }, { status: 500 });
      }
    }

    return NextResponse.json({
      success: true,
      migration: migrationResult,
      validationOutputs: outputs
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      phase: 'api-wrapper',
      error: error.message
    }, { status: 500 });
  }
}
