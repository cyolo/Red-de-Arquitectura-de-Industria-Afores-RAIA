import fs from 'fs';
import path from 'path';

const artifactDir = 'C:\\Users\\cesar\\.gemini\\antigravity-ide\\brain\\4726285a-77e9-4d42-86d3-128eea211ad7';
const targetDir = 'c:\\Users\\cesar\\.gemini\\antigravity\\scratch\\Red de Arquitectura de Industria Afores (RAIA)';

const filesToCopy = [
  { src: 'default_scenario_1784523698096.png', dest: 'docs/ux-refactor/business-scenarios-diagram/before/default_scenario.png' },
  { src: 'localizacion_scenario_1784523706342.png', dest: 'docs/ux-refactor/business-scenarios-diagram/after/localizacion_scenario.png' },
  { src: 'registro_traspaso_scenario_1784523713730.png', dest: 'docs/ux-refactor/business-scenarios-diagram/after/registro_traspaso_scenario.png' },
  { src: 'fit_mode_test_1784523734800.png', dest: 'docs/ux-refactor/business-scenarios-diagram/after/fit_mode_test.png' },
  { src: 'reset_mode_test_1784523741162.png', dest: 'docs/ux-refactor/business-scenarios-diagram/after/reset_mode_test.png' }
];

try {
  // Ensure directories exist
  fs.mkdirSync(path.join(targetDir, 'docs/ux-refactor/business-scenarios-diagram/before'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'docs/ux-refactor/business-scenarios-diagram/after'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'docs/ux-refactor/business-scenarios-diagram/comparison'), { recursive: true });

  filesToCopy.forEach(f => {
    const srcPath = path.join(artifactDir, f.src);
    const destPath = path.join(targetDir, f.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${f.src} -> ${f.dest}`);
    } else {
      console.warn(`Source file not found: ${srcPath}`);
    }
  });

  console.log('Screenshots copied successfully!');
} catch (err) {
  console.error('Error copying screenshots:', err.message);
}
