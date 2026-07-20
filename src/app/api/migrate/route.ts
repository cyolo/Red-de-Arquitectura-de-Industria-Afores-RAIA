import { NextResponse } from 'next/server';
import { runMigration } from '../../../../scripts/migrations/004-regulatory-service-landscape';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dryRunParam = searchParams.get('dryRun');
  const dryRun = dryRunParam === 'true';
  const workspacePath = 'C:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';

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
      { name: 'baseline', script: 'scripts/validateRegulatoryBaseline.js' },
      { name: 'auditMatrix', script: 'scripts/validateServiceDomainAuditMatrix.js' }
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

    // Run report generator
    console.log('API Migrate: Running report generator...');
    try {
      execSync('node scripts/generateAuditReports.js', { cwd: workspacePath, encoding: 'utf8' });
    } catch (err: any) {
      return NextResponse.json({
        success: false,
        phase: 'report-generation',
        error: err.message,
        stdout: err.stdout,
        stderr: err.stderr
      }, { status: 500 });
    }

    // Generate SBOM
    console.log('API Migrate: Generating CycloneDX SBOM...');
    try {
      const sbomDir = path.join(workspacePath, 'artifacts', 'sbom');
      if (!fs.existsSync(sbomDir)) {
        fs.mkdirSync(sbomDir, { recursive: true });
      }
      
      const sbomOut = execSync('npx @cyclonedx/cyclonedx-npm --output-file artifacts/sbom/raia-sbom.cdx.json', { 
        cwd: workspacePath, 
        encoding: 'utf8',
        env: {
          PATH: process.env.PATH,
          SystemRoot: process.env.SystemRoot,
          TEMP: process.env.TEMP,
          TMP: process.env.TMP,
          USERPROFILE: process.env.USERPROFILE,
          HOMEPATH: process.env.HOMEPATH,
          HOMEDRIVE: process.env.HOMEDRIVE
        } as any
      });
      outputs['sbom'] = 'Successfully generated CycloneDX SBOM at artifacts/sbom/raia-sbom.cdx.json';
    } catch (err: any) {
      outputs['sbom-error'] = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + err.message;
    }

    // Run Vitest check
    console.log('API Migrate: Running Vitest...');
    try {
      const testOut = execSync('npx vitest run', { 
        cwd: workspacePath, 
        encoding: 'utf8',
        env: {
          PATH: process.env.PATH,
          SystemRoot: process.env.SystemRoot,
          TEMP: process.env.TEMP,
          TMP: process.env.TMP,
          USERPROFILE: process.env.USERPROFILE,
          HOMEPATH: process.env.HOMEPATH,
          HOMEDRIVE: process.env.HOMEDRIVE
        } as any
      });
      outputs['tests'] = testOut;
    } catch (err: any) {
      outputs['tests-error'] = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + err.message;
    }

    return NextResponse.json({
      success: true,
      migration: migrationResult,
      validationOutputs: outputs,
      nodeVersion: process.version
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      phase: 'api-wrapper',
      error: error.message
    }, { status: 500 });
  }
}
