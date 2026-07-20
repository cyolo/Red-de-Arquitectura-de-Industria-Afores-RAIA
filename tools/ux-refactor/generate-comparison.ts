import * as fs from 'fs';
import * as path from 'path';

const BEFORE_METRICS_PATH = path.join(__dirname, '../../docs/ux-refactor/before/metrics/scroll-metrics.json');
const AFTER_METRICS_PATH = path.join(__dirname, '../../docs/ux-refactor/after/metrics/scroll-metrics.json');
const OUTPUT_MD_PATH = path.join(__dirname, '../../docs/ux-refactor/07-scroll-comparison.md');

function generateComparison() {
  console.log('Generating Scroll Comparison Report...');

  if (!fs.existsSync(BEFORE_METRICS_PATH) || !fs.existsSync(AFTER_METRICS_PATH)) {
    console.error('Error: Before or After metrics files do not exist.');
    return;
  }

  const beforeMetrics = JSON.parse(fs.readFileSync(BEFORE_METRICS_PATH, 'utf-8'));
  const afterMetrics = JSON.parse(fs.readFileSync(AFTER_METRICS_PATH, 'utf-8'));

  // Create a map for quick lookup
  const afterMap = new Map<string, any>();
  for (const m of afterMetrics) {
    afterMap.set(`${m.route}::${m.viewport}`, m);
  }

  let md = `# 07 - Comparación de Scroll (Scroll Comparison)

Este reporte presenta la comparación del nivel de desplazamiento vertical (medido como la proporción del alto total del documento sobre la altura del viewport \`scrollRatio\`) antes y después del refactor en la resolución estándar de laptop/desktop (\`1440 × 900\`).

## Tabla Comparativa de Scroll (1440 × 900)

| Ruta | Antes (scrollRatio) | Después (scrollRatio) | Reducción (%) | Resultado |
| :--- | :---: | :---: | :---: | :---: |
`;

  // Focus only on desktop-1440x900 for the main table
  const desktopViewport = 'desktop-1440x900';

  for (const before of beforeMetrics) {
    if (before.viewport !== desktopViewport) continue;

    const key = `${before.route}::${before.viewport}`;
    const after = afterMap.get(key);

    if (after) {
      const reduction = ((before.scrollRatio - after.scrollRatio) / before.scrollRatio) * 100;
      const reductionStr = reduction > 0 ? `${reduction.toFixed(1)}%` : '0.0%';
      
      let status = '✅ CUMPLE';
      if (before.route === '/' && after.scrollRatio > 2.0) status = '⚠️ LIGERAMENTE ALTO';
      else if (before.route === '/business-scenarios' && after.scrollRatio > 1.1) status = '⚠️ LIGERAMENTE ALTO';
      else if (before.route === '/service-landscape/value-chain' && after.scrollRatio > 1.1) status = '⚠️ LIGERAMENTE ALTO';

      md += `| \`${before.route}\` | ${before.scrollRatio.toFixed(2)} | ${after.scrollRatio.toFixed(2)} | ${reductionStr} | ${status} |\n`;
    }
  }

  md += `
## Detalles de Viewports y Categoría de Scroll

| Ruta | Viewport | scrollRatio (Antes) | scrollRatio (Después) | Categoría (Antes) | Categoría (Después) |
| :--- | :--- | :---: | :---: | :---: | :---: |
`;

  for (const before of beforeMetrics) {
    const key = `${before.route}::${before.viewport}`;
    const after = afterMap.get(key);

    if (after) {
      md += `| \`${before.route}\` | ${before.viewport} | ${before.scrollRatio.toFixed(2)} | ${after.scrollRatio.toFixed(2)} | \`${before.scrollCategory}\` | \`${after.scrollCategory}\` |\n`;
    }
  }

  fs.writeFileSync(OUTPUT_MD_PATH, md);
  console.log('Scroll Comparison Report generated successfully!');
}

generateComparison();
