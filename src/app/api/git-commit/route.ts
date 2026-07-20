import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET() {
  const cwd = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';
  try {
    const statusBefore = execSync('git status --porcelain', { cwd, encoding: 'utf8' });
    if (!statusBefore.trim()) {
      return NextResponse.json({
        status: "success",
        message: "No changes to commit. Working tree is clean."
      });
    }

    const addOutput = execSync('git add .', { cwd, encoding: 'utf8' });
    
    let commitOutput = '';
    try {
      commitOutput = execSync('git commit -m "Remediación regulatoria y visual completada, validadores exitosos, reportes generados"', { cwd, encoding: 'utf8' });
    } catch (cErr: any) {
      commitOutput = cErr.message + '\n' + cErr.stdout + '\n' + cErr.stderr;
    }
    
    let pushOutput = '';
    try {
      pushOutput = execSync('git push origin dev-001', { cwd, encoding: 'utf8' });
    } catch (pErr: any) {
      pushOutput = pErr.message + '\n' + pErr.stdout + '\n' + pErr.stderr;
    }

    return NextResponse.json({
      status: "success",
      message: "Git operations executed.",
      statusBefore,
      addOutput,
      commitOutput,
      pushOutput
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "error",
      message: err.message,
      stdout: err.stdout,
      stderr: err.stderr
    }, { status: 500 });
  }
}
