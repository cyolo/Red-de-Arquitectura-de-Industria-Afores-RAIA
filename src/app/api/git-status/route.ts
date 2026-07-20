import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const cwd = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';
  try {
    const statusOutput = execSync('git status', { cwd, encoding: 'utf8' });
    const logOutput = execSync('git log -n 5 --oneline', { cwd, encoding: 'utf8' });
    const diffOutput = execSync('git diff', { cwd, encoding: 'utf8' });
    return NextResponse.json({
      status: "success",
      statusOutput,
      logOutput,
      diffOutput
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
