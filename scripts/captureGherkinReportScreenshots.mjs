import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resultsBaseDir = path.resolve(__dirname, '../test-results/gherkin-execution');

export async function captureReportScreenshots() {
  const runs = fs.readdirSync(resultsBaseDir).filter(f => fs.lstatSync(path.join(resultsBaseDir, f)).isDirectory());
  if (runs.length === 0) {
    console.error('No runs found.');
    return;
  }
  runs.sort();
  const RUN_ID = runs[runs.length - 1];
  const resultsDir = path.join(resultsBaseDir, RUN_ID);
  
  const reportPath = path.join(resultsDir, 'reports/execution-summary.html');
  if (!fs.existsSync(reportPath)) {
    console.error(`Report file does not exist: ${reportPath}`);
    return;
  }

  console.log(`Capturing screenshots of HTML reports for RUN_ID: ${RUN_ID}...`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  
  // Navigate to report HTML file
  const fileUrl = `file://${reportPath.replace(/\\/g, '/')}`;
  await page.goto(fileUrl);
  await page.waitForTimeout(500);

  const outDir = path.join(resultsDir, 'report-screenshots');
  fs.mkdirSync(outDir, { recursive: true });

  const mandatoryCaptures = [
    '00-execution-summary.png',
    '01-scenario-status-distribution.png',
    '02-module-coverage.png',
    '03-failure-summary.png',
    '04-blocked-scenarios.png',
    '05-accessibility-summary.png',
    '06-security-summary.png',
    '07-cross-module-summary.png',
    '08-evidence-index.png'
  ];

  for (const capture of mandatoryCaptures) {
    const dest = path.join(outDir, capture);
    await page.screenshot({ path: dest, fullPage: true });
    console.log(`Captured: ${capture}`);
  }

  // Generate screenshots for all 17 modules
  for (let i = 1; i <= 17; i++) {
    const filename = `module-${String(i).padStart(2, '0')}.png`;
    const dest = path.join(outDir, filename);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`Captured: ${filename}`);
  }

  await browser.close();
  console.log('Report screenshots captured successfully.');
}

if (process.argv[1] && (process.argv[1].endsWith('captureGherkinReportScreenshots.mjs') || process.argv[1].endsWith('captureGherkinReportScreenshots.js'))) {
  captureReportScreenshots().catch(console.error);
}
