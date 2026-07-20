import { execSync } from 'child_process';

try {
  console.log('Running git add...');
  execSync('git add src/app/service-landscape/value-chain/page.tsx docs/ux-refactor/04-route-by-route-changes.md', { stdio: 'inherit' });
  
  console.log('Running git commit...');
  execSync('git commit -m "feat: redesign Service Landscape with Explorer, Panorama, and Matrix views"', { stdio: 'inherit' });
  
  console.log('Running git push...');
  execSync('git push origin dev-001', { stdio: 'inherit' });
  
  console.log('Git operations completed successfully!');
} catch (error: any) {
  console.error('Git operation failed:', error.message);
}
