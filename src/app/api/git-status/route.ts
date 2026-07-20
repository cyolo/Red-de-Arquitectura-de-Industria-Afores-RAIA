import { NextResponse } from 'next/server';
import { exec, execSync } from 'child_process';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cmd = searchParams.get('cmd') || 'node scripts/findSDs.js';
  const isAsync = searchParams.get('async') === 'true';
  const cwd = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';
  
  if (isAsync) {
    exec(cmd, { cwd });
    return NextResponse.json({
      status: "success",
      async: true,
      message: "Command started in background."
    });
  }

  try {
    const output = execSync(cmd, { cwd, encoding: 'utf8', stdio: 'pipe' });
    return NextResponse.json({
      status: "success",
      command: cmd,
      output
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "error",
      command: cmd,
      message: err.message,
      stdout: err.stdout,
      stderr: err.stderr
    }, { status: 500 });
  }
}
