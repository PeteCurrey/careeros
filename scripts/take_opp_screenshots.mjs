import { chromium } from '@playwright/test';
import path from 'path';

const OUT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const BASE_URL = 'http://localhost:3008/product/opportunity-agent';

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  // 1. Desktop 1440px - Hero & Overview
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    console.log('Navigating to hero (1440px)...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3500); // let hero SVG animations settle
    await page.screenshot({ path: `${OUT_DIR}/opp_hero_1440.png` });
    console.log('Captured opp_hero_1440.png');
    await context.close();
  }

  // 2. Desktop 1440px - Interactive Demo: Automotive Technician
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const demoSection = page.locator('#opportunity-demo');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await demoSection.screenshot({ path: `${OUT_DIR}/opp_demo_auto_1440.png` });
    console.log('Captured opp_demo_auto_1440.png');

    // Switch profile to Reg. Nurse (Scenario 2)
    const nurseTab = demoSection.getByRole('tab', { name: /Reg\. Nurse/i });
    if (await nurseTab.count() > 0) {
      await nurseTab.click();
      await page.waitForTimeout(600);
      await demoSection.screenshot({ path: `${OUT_DIR}/opp_demo_nurse_1440.png` });
      console.log('Captured opp_demo_nurse_1440.png');
    }

    await context.close();
  }

  // 3. Desktop 1440px - Privacy Reveal Flow
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const privacySection = page.locator('#privacy');
    await privacySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await privacySection.screenshot({ path: `${OUT_DIR}/opp_privacy_1440.png` });
    console.log('Captured opp_privacy_1440.png');
    await context.close();
  }

  // 4. Mobile 390px - Demo & Responsive Flow
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const demoSection = page.locator('#opportunity-demo');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    await demoSection.screenshot({ path: `${OUT_DIR}/opp_demo_390.png` });
    console.log('Captured opp_demo_390.png');
    await context.close();
  }

  // 5. Wide Viewport 1920px - Full Hero & Landscape
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    await page.screenshot({ path: `${OUT_DIR}/opp_full_1920.png` });
    console.log('Captured opp_full_1920.png');
    await context.close();
  }

  await browser.close();
  console.log('All Opportunity Agent screenshots captured successfully!');
}

run().catch(console.error);
