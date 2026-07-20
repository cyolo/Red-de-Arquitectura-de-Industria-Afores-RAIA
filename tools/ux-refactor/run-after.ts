import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Define paths to test
const CORE_ROUTES = [
  '/',
  '/dashboard',
  '/metamodel',
  '/business-scenarios',
  '/service-landscape/value-chain',
  '/service-domains/politica-del-sistema-de-ahorro-para-el-retiro'
];

const SECONDARY_ROUTES = [
  '/releases',
  '/methodology',
  '/contribute',
  '/regulatory-architecture',
  '/reference-model',
  '/control-record-model',
  '/business-object-model',
  '/architecture-overview',
  '/information-architecture',
  '/wireframes',
  '/capability-map',
  '/capability-map/views',
  '/business-scenarios/snippets',
  '/service-landscape/matrix',
  '/service-landscape/overview-diagrams',
  '/business-areas/gobierno-y-direccion-del-sar',
  '/business-areas/riesgo-cumplimiento-y-supervision',
  '/business-areas/identidad-partes-y-expediente',
  '/business-domains/estrategia-y-politica-del-sar',
  '/business-domains/regulacion-y-autorizaciones',
  '/business-domains/gobierno-y-desempeno',
  '/service-domains/estrategia-de-industria',
  '/service-domains/planeacion-sectorial'
];

const RESOLUTIONS = [
  // Desktop
  { name: 'desktop-1440x900', width: 1440, height: 900, type: 'desktop' },
  { name: 'desktop-1366x768', width: 1366, height: 768, type: 'desktop' },
  { name: 'desktop-1280x800', width: 1280, height: 800, type: 'desktop' },
  // Tablet
  { name: 'tablet-1024x768', width: 1024, height: 768, type: 'tablet' },
  { name: 'tablet-768x1024', width: 768, height: 1024, type: 'tablet' },
  // Mobile
  { name: 'mobile-390x844', width: 390, height: 844, type: 'mobile' }
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '../../docs/ux-refactor/after');
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');
const METRICS_DIR = path.join(OUTPUT_DIR, 'metrics');

// Helper to normalize route to a filename friendly string
function slugifyRoute(route: string): string {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\//g, '-');
}

async function runAfter() {
  console.log('Starting RAIA Visual Refactor AFTER Capture...');

  // Ensure directories exist
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  fs.mkdirSync(METRICS_DIR, { recursive: true });
  for (const res of RESOLUTIONS) {
    fs.mkdirSync(path.join(SCREENSHOTS_DIR, res.type), { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  
  const scrollMetrics: any[] = [];
  const routeInventory: any[] = [];

  let screenshotCounter = 1;
  const allRoutes = [...CORE_ROUTES, ...SECONDARY_ROUTES];

  for (const route of allRoutes) {
    const isCore = CORE_ROUTES.includes(route);
    const resolutionsToTest = isCore ? RESOLUTIONS : [RESOLUTIONS[0], RESOLUTIONS[5]];

    console.log(`\nCapturing route: ${route}`);

    for (const res of resolutionsToTest) {
      const context = await browser.newContext({
        viewport: { width: res.width, height: res.height }
      });
      const page = await context.newPage();

      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'load', timeout: 30000 });
        await page.waitForTimeout(2000);

        // Measure DOM scroll metrics using string script to avoid bundler variables
        const metrics = (await page.evaluate(`(() => {
          const header = document.querySelector('header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          
          const sidebar = document.querySelector('aside') || document.querySelector('[class*="sidebar"]');
          const sidebarWidth = sidebar ? sidebar.getBoundingClientRect().width : 0;

          return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            scrollHeight: document.documentElement.scrollHeight,
            bodyScrollHeight: document.body.scrollHeight,
            headerHeight,
            sidebarWidth
          };
        })()`)) as any;

        const routeSlug = slugifyRoute(route);
        const scrollRatio = metrics.scrollHeight / metrics.windowHeight;
        
        let scrollCategory = 'compact';
        if (scrollRatio > 3.0) scrollCategory = 'excessive';
        else if (scrollRatio > 2.01) scrollCategory = 'high';
        else if (scrollRatio > 1.26) scrollCategory = 'moderate';

        scrollMetrics.push({
          route,
          viewport: res.name,
          type: res.type,
          ...metrics,
          scrollRatio,
          scrollCategory
        });

        if (res.name === 'desktop-1440x900') {
          routeInventory.push({
            route,
            title: await page.title(),
            scrollCategory,
            scrollRatio
          });
        }

        const prefix = String(screenshotCounter++).padStart(3, '0');
        
        // 1. Viewport Screenshot
        const viewportPath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-viewport.png`);
        await page.screenshot({ path: viewportPath, fullPage: false });

        // 2. Full Page Screenshot
        const fullpagePath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-fullpage.png`);
        await page.screenshot({ path: fullpagePath, fullPage: true });

      } catch (err: any) {
        console.error(`  Error capturing route ${route} at viewport ${res.name}:`, err.message);
      } finally {
        await page.close();
        await context.close();
      }
    }
  }

  await browser.close();

  // Save metrics files
  fs.writeFileSync(path.join(METRICS_DIR, 'scroll-metrics.json'), JSON.stringify(scrollMetrics, null, 2));
  fs.writeFileSync(path.join(METRICS_DIR, 'routes-inventory.json'), JSON.stringify(routeInventory, null, 2));

  console.log('\nAfter capture complete!');
}

runAfter().catch(err => {
  console.error('After capture crashed:', err);
});
