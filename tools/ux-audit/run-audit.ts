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
const OUTPUT_DIR = path.join(__dirname, '../../docs/ux-audit-current-state');
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');
const METRICS_DIR = path.join(OUTPUT_DIR, 'metrics');

// Helper to normalize route to a filename friendly string
function slugifyRoute(route: string): string {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\//g, '-');
}

async function runAudit() {
  console.log('Starting RAIA Visual and UX Audit...');

  // Ensure directories exist
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  fs.mkdirSync(METRICS_DIR, { recursive: true });
  for (const res of RESOLUTIONS) {
    fs.mkdirSync(path.join(SCREENSHOTS_DIR, res.type), { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  
  const scrollMetrics: any[] = [];
  const consoleErrors: any[] = [];
  const routeInventory: any[] = [];
  const performanceSummary: any[] = [];

  let screenshotCounter = 1;

  // Process all routes
  const allRoutes = [...CORE_ROUTES, ...SECONDARY_ROUTES];

  for (const route of allRoutes) {
    const isCore = CORE_ROUTES.includes(route);
    const resolutionsToTest = isCore ? RESOLUTIONS : [RESOLUTIONS[0], RESOLUTIONS[5]]; // For secondary, test desktop 1440x900 and mobile 390x844

    console.log(`\nAuditing route: ${route} (${isCore ? 'Core' : 'Secondary'})`);

    for (const res of resolutionsToTest) {
      console.log(`  - Viewport: ${res.width}x${res.height} (${res.name})`);
      
      const context = await browser.newContext({
        viewport: { width: res.width, height: res.height }
      });
      const page = await context.newPage();

      // Collect console errors
      page.on('console', msg => {
        if (msg.type() === 'error' || msg.type() === 'warning') {
          consoleErrors.push({
            route,
            viewport: res.name,
            type: msg.type(),
            text: msg.text(),
            location: msg.location()
          });
        }
      });

      // Measure load performance
      const startTime = Date.now();
      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'load', timeout: 30000 });
        const loadTime = Date.now() - startTime;
        
        // Wait extra for dynamic animations/graphs (like React Flow or charts)
        await page.waitForTimeout(2000);

        // Record performance
        if (res.name === 'desktop-1440x900') {
          performanceSummary.push({
            route,
            loadTimeMs: loadTime,
            status: 'success'
          });
        }

        // Measure DOM scroll metrics using string script to avoid bundler variables
        const metrics = (await page.evaluate(`(() => {
          const getScrollableContainers = () => {
            const elms = [];
            const all = document.querySelectorAll('*');
            for (const el of all) {
              const style = window.getComputedStyle(el);
              const isScrollableX = (style.overflowX === 'auto' || style.overflowX === 'scroll' || el.scrollWidth > el.clientWidth) && el.clientWidth > 0;
              const isScrollableY = (style.overflowY === 'auto' || style.overflowY === 'scroll' || el.scrollHeight > el.clientHeight) && el.clientHeight > 0;
              
              if ((isScrollableX || isScrollableY) && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
                let selector = el.tagName.toLowerCase();
                if (el.id) selector += '#' + el.id;
                if (el.className) {
                  selector += '.' + Array.from(el.classList).join('.');
                }

                elms.push({
                  selector: selector.substring(0, 100),
                  scrollWidth: el.scrollWidth,
                  clientWidth: el.clientWidth,
                  scrollHeight: el.scrollHeight,
                  clientHeight: el.clientHeight,
                  overflowX: style.overflowX,
                  overflowY: style.overflowY
                });
              }
            }
            return elms;
          };

          const header = document.querySelector('header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          
          const sidebar = document.querySelector('aside') || document.querySelector('[class*="sidebar"]');
          const sidebarWidth = sidebar ? sidebar.getBoundingClientRect().width : 0;

          const breadcrumb = document.querySelector('[class*="breadcrumb"]') || document.querySelector('[aria-label="Breadcrumb"]');
          const breadcrumbHeight = breadcrumb ? breadcrumb.getBoundingClientRect().height : 0;

          const pageTitle = document.querySelector('h1');
          const pageTitleHeight = pageTitle ? pageTitle.getBoundingClientRect().height : 0;

          const filters = document.querySelector('[class*="filter"]') || document.querySelector('[class*="control"]');
          const filtersHeight = filters ? filters.getBoundingClientRect().height : 0;

          const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
          const aboveFold = Array.from(interactiveElements).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth;
          }).length;

          const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;

          return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            scrollHeight: document.documentElement.scrollHeight,
            bodyScrollHeight: document.body.scrollHeight,
            headerHeight,
            sidebarWidth,
            breadcrumbHeight,
            pageTitleHeight,
            filtersHeight,
            aboveFoldCount: aboveFold,
            hasHorizontalScroll,
            scrollableContainers: getScrollableContainers()
          };
        })()`)) as any;

        // Add context metadata
        const routeSlug = slugifyRoute(route);
        const scrollRatio = metrics.scrollHeight / metrics.windowHeight;
        
        let scrollCategory = 'compact';
        if (scrollRatio > 3.0) scrollCategory = 'excessive';
        else if (scrollRatio > 2.01) scrollCategory = 'high';
        else if (scrollRatio > 1.26) scrollCategory = 'moderate';

        const pageMetrics = {
          route,
          viewport: res.name,
          type: res.type,
          ...metrics,
          scrollRatio,
          scrollCategory
        };

        scrollMetrics.push(pageMetrics);

        // Build route inventory info (only once per route)
        if (res.name === 'desktop-1440x900') {
          const title = await page.title();
          routeInventory.push({
            route,
            title,
            isCore,
            scrollCategory,
            scrollRatio,
            interactiveElementsCount: pageMetrics.aboveFoldCount,
            scrollableContainersCount: pageMetrics.scrollableContainers.length
          });
        }

        // Take Screenshots
        const prefix = String(screenshotCounter++).padStart(3, '0');
        
        // 1. Initial Viewport Screenshot
        const viewportPath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-default-viewport.png`);
        await page.screenshot({ path: viewportPath, fullPage: false });

        // 2. Full Page Screenshot
        const fullpagePath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-default-fullpage.png`);
        await page.screenshot({ path: fullpagePath, fullPage: true });

        // 3. Scroll Screenshots if scroll exists
        if (scrollRatio > 1.25) {
          // Scroll to 50%
          await page.evaluate('window.scrollTo(0, document.documentElement.scrollHeight / 2)');
          await page.waitForTimeout(500);
          const middlePath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-middle-viewport.png`);
          await page.screenshot({ path: middlePath, fullPage: false });

          // Scroll to bottom
          await page.evaluate('window.scrollTo(0, document.documentElement.scrollHeight)');
          await page.waitForTimeout(500);
          const bottomPath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-bottom-viewport.png`);
          await page.screenshot({ path: bottomPath, fullPage: false });

          // Scroll back to top
          await page.evaluate('window.scrollTo(0, 0)');
          await page.waitForTimeout(200);
        }

        // 4. Interaction Screenshots (Open filters/search if relevant)
        if (route === '/service-landscape/value-chain' && res.type === 'desktop') {
          try {
            // Click a Service Domain node or toggle sidebar
            const node = await page.locator('[data-testid*="node"], [class*="react-flow__node"]').first();
            if (await node.count() > 0) {
              await node.click();
              await page.waitForTimeout(500);
              const nodeSelectedPath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-node-selected.png`);
              await page.screenshot({ path: nodeSelectedPath, fullPage: false });
            }
          } catch (e) {
            console.log('    (Could not trigger node click interaction on Value Chain)');
          }
        }

        if (route === '/business-scenarios' && res.type === 'desktop') {
          try {
            const button = await page.locator('button:has-text("Paso")').first();
            if (await button.count() > 0) {
              await button.click();
              await page.waitForTimeout(500);
              const stepPath = path.join(SCREENSHOTS_DIR, res.type, `${prefix}-${routeSlug}-${res.name}-step-clicked.png`);
              await page.screenshot({ path: stepPath, fullPage: false });
            }
          } catch (e) {
            console.log('    (Could not trigger step click interaction on Business Scenarios)');
          }
        }

      } catch (err: any) {
        console.error(`  Error auditing route ${route} at viewport ${res.name}:`, err.message);
        performanceSummary.push({
          route,
          loadTimeMs: 0,
          status: `error: ${err.message}`
        });
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
  fs.writeFileSync(path.join(METRICS_DIR, 'console-errors.json'), JSON.stringify(consoleErrors, null, 2));
  fs.writeFileSync(path.join(METRICS_DIR, 'performance-summary.json'), JSON.stringify(performanceSummary, null, 2));

  console.log('\nAudit complete! Metrics and screenshots saved.');
}

runAudit().catch(err => {
  console.error('Audit crashed:', err);
});
