import { chromium } from '@playwright/test';
import path from 'path';

const ARTIFACTS_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const BASE_URL = 'http://localhost:3009';

const ROUTES_TO_CAPTURE = [
  { url: `${BASE_URL}/trust`, namePrefix: 'trust_hub' },
  { url: `${BASE_URL}/trust/responsible-ai`, namePrefix: 'trust_responsible_ai' },
  { url: `${BASE_URL}/trust/ai-transparency`, namePrefix: 'trust_ai_transparency' },
  { url: `${BASE_URL}/trust/human-oversight`, namePrefix: 'trust_human_oversight' },
  { url: `${BASE_URL}/trust/fairness-and-bias`, namePrefix: 'trust_fairness_bias' },
];

async function capture() {
  console.log('Launching Google Chrome...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const item of ROUTES_TO_CAPTURE) {
    console.log(`\nCapturing ${item.namePrefix}...`);
    
    // 1440px desktop viewport
    const pageDesktop = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    await pageDesktop.goto(item.url, { waitUntil: 'networkidle' });
    await pageDesktop.waitForTimeout(600);

    const heroPath = path.join(ARTIFACTS_DIR, `${item.namePrefix}_hero_1440.png`);
    await pageDesktop.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 1440, height: 850 } });
    console.log(`Saved: ${heroPath}`);

    const fullPath = path.join(ARTIFACTS_DIR, `${item.namePrefix}_full_1920.png`);
    const pageWide = await browser.newPage({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1.5,
    });
    await pageWide.goto(item.url, { waitUntil: 'networkidle' });
    await pageWide.waitForTimeout(600);
    await pageWide.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved full page: ${fullPath}`);
    await pageWide.close();

    // 390px mobile viewport
    const pageMobile = await browser.newPage({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
    });
    await pageMobile.goto(item.url, { waitUntil: 'networkidle' });
    await pageMobile.waitForTimeout(600);

    const mobilePath = path.join(ARTIFACTS_DIR, `${item.namePrefix}_demo_390.png`);
    await pageMobile.screenshot({ path: mobilePath, fullPage: false });
    console.log(`Saved mobile: ${mobilePath}`);

    await pageDesktop.close();
    await pageMobile.close();
  }

  await browser.close();
  console.log('\nAll Trust Center screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Capture error:', err);
  process.exit(1);
});
