import { NextResponse } from 'next/server';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const browser = searchParams.get('browser') || 'chromium';
  const module = searchParams.get('module') || undefined;

  console.log('--- IN-PROCESS GHERKIN EXECUTION STARTED ---');

  // Run in background to prevent HTTP timeout
  (async () => {
    try {
      // 1. Run tests
      console.log('Step 1: Running Gherkin test suite...');
      const suitePath = path.resolve(process.cwd(), './scripts/runGherkinSuite.mjs');
      const { runSuite } = await import(`file://${suitePath.replace(/\\/g, '/')}`);
      await runSuite({ browser, module });

      // 2. Generate reports
      console.log('Step 2: Compiling Markdown and HTML reports...');
      const reportPath = path.resolve(process.cwd(), './scripts/generateGherkinExecutionReport.mjs');
      const { default: runReport } = await import(`file://${reportPath.replace(/\\/g, '/')}`);
      await runReport();

      // 3. Capture report screenshots
      console.log('Step 3: Capturing screenshots of the HTML report dashboard...');
      const capturePath = path.resolve(process.cwd(), './scripts/captureGherkinReportScreenshots.mjs');
      const { captureReportScreenshots } = await import(`file://${capturePath.replace(/\\/g, '/')}`);
      await captureReportScreenshots();

      // 4. Validate evidence
      console.log('Step 4: Validating integrity of test evidence...');
      const validatePath = path.resolve(process.cwd(), './scripts/validateGherkinEvidence.mjs');
      const { validateEvidence } = await import(`file://${validatePath.replace(/\\/g, '/')}`);
      const validationPassed = await validateEvidence();

      console.log(`Gherkin background run completed. Validation passed: ${validationPassed}`);
    } catch (err: any) {
      console.error('Error during Gherkin background execution flow:', err);
    }
  })();

  return NextResponse.json({
    status: "success",
    message: "Gherkin execution workflow triggered in background in-process."
  });
}
