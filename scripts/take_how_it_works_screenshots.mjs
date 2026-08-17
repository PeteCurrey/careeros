import { chromium } from '@playwright/test';

const OUT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const BASE_URL = 'http://localhost:3009/product/how-it-works';

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  // 1. Desktop 1440px - Hero & Interactive System Map
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    console.log('Navigating to hero (1440px)...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${OUT_DIR}/how_it_works_hero_1440.png` });
    console.log('Captured how_it_works_hero_1440.png');

    // Select Graph node in system map
    const graphBtn = page.locator('button', { hasText: 'Career Graph' }).first();
    if (await graphBtn.count() > 0) {
      await graphBtn.click();
      await page.waitForTimeout(500);
      const systemMap = page.locator('#system-map');
      await systemMap.screenshot({ path: `${OUT_DIR}/how_it_works_system_map_1440.png` });
      console.log('Captured how_it_works_system_map_1440.png');
    }

    await context.close();
  }

  // 2. Desktop 1440px - Career OS in Action (Step 1, Step 4, Step 6)
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const demoSection = page.locator('#career-os-in-action');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    // Step 1: Baseline
    await demoSection.screenshot({ path: `${OUT_DIR}/how_it_works_in_action_step1_1440.png` });
    console.log('Captured how_it_works_in_action_step1_1440.png');

    // Step 4: Passport Project Action
    const step4Btn = demoSection.getByRole('tab', { name: /Project Action/i });
    if (await step4Btn.count() > 0) {
      await step4Btn.click();
      await page.waitForTimeout(600);
      await demoSection.screenshot({ path: `${OUT_DIR}/how_it_works_in_action_step4_1440.png` });
      console.log('Captured how_it_works_in_action_step4_1440.png');
    }

    // Step 6: Opportunity Surfaced
    const step6Btn = demoSection.getByRole('tab', { name: /Relevant Opportunity/i });
    if (await step6Btn.count() > 0) {
      await step6Btn.click();
      await page.waitForTimeout(600);
      await demoSection.screenshot({ path: `${OUT_DIR}/how_it_works_in_action_step6_1440.png` });
      console.log('Captured how_it_works_in_action_step6_1440.png');
    }

    // Step 8: Lifetime Compounding Continuity
    const step8Btn = demoSection.getByRole('tab', { name: /System Continues/i });
    if (await step8Btn.count() > 0) {
      await step8Btn.click();
      await page.waitForTimeout(600);
      await demoSection.screenshot({ path: `${OUT_DIR}/how_it_works_in_action_step8_1440.png` });
      console.log('Captured how_it_works_in_action_step8_1440.png');
    }

    // Privacy Section
    const privacySection = page.locator('#employer-side');
    await privacySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await privacySection.screenshot({ path: `${OUT_DIR}/how_it_works_privacy_1440.png` });
    console.log('Captured how_it_works_privacy_1440.png');

    await context.close();
  }

  // 3. Mobile 390px - Demo & Responsive Flow
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const demoSection = page.locator('#career-os-in-action');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await demoSection.screenshot({ path: `${OUT_DIR}/how_it_works_demo_390.png` });
    console.log('Captured how_it_works_demo_390.png');
    await context.close();
  }

  // 4. Wide Viewport 1920px - Full Hero & Landscape
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);

    await page.screenshot({ path: `${OUT_DIR}/how_it_works_full_1920.png` });
    console.log('Captured how_it_works_full_1920.png');
    await context.close();
  }

  await browser.close();
  console.log('All How-It-Works screenshots captured successfully!');
}

run().catch(console.error);
