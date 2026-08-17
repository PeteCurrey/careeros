import { chromium } from '@playwright/test';

const OUT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/03676740-ad93-4eed-9d96-79bef5221d47';
const BASE_URL = 'http://localhost:3000/for/high-schools';

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  // 1. Desktop 1440px - Hero & Dual Perspective
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    console.log('Navigating to high-schools (1440px)...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${OUT_DIR}/high_schools_hero_1440.png` });
    console.log('Captured high_schools_hero_1440.png');

    // Counsellor Augmentation Workflow
    const workflowSection = page.locator('#counsellor-workflow');
    if (await workflowSection.count() > 0) {
      await workflowSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await workflowSection.screenshot({ path: `${OUT_DIR}/high_schools_counsellor_workflow_1440.png` });
      console.log('Captured high_schools_counsellor_workflow_1440.png');
    }

    // Pathway Comparison
    const pathwaySection = page.locator('#pathway-comparison');
    if (await pathwaySection.count() > 0) {
      await pathwaySection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await pathwaySection.screenshot({ path: `${OUT_DIR}/high_schools_pathway_explorer_1440.png` });
      console.log('Captured high_schools_pathway_explorer_1440.png');
    }

    // Educator Dashboard Demo
    const educatorSection = page.locator('#educator-dashboard-demo');
    if (await educatorSection.count() > 0) {
      await educatorSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await educatorSection.screenshot({ path: `${OUT_DIR}/high_schools_educator_view_1440.png` });
      console.log('Captured high_schools_educator_view_1440.png');
    }

    // Privacy Access Matrix
    const privacySection = page.locator('#privacy-access-matrix');
    if (await privacySection.count() > 0) {
      await privacySection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await privacySection.screenshot({ path: `${OUT_DIR}/high_schools_privacy_viewer_1440.png` });
      console.log('Captured high_schools_privacy_viewer_1440.png');
    }

    // Launch School Form
    const formSection = page.locator('#launch-school-section');
    if (await formSection.count() > 0) {
      await formSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await formSection.screenshot({ path: `${OUT_DIR}/high_schools_launch_form_1440.png` });
      console.log('Captured high_schools_launch_form_1440.png');
    }

    await context.close();
  }

  // 2. Mobile 390px Viewport
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const page = await context.newPage();
    console.log('Navigating to high-schools (390px)...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${OUT_DIR}/high_schools_mobile_390.png` });
    console.log('Captured high_schools_mobile_390.png');
    await context.close();
  }

  // 3. Wide 1920px Viewport
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();
    console.log('Navigating to high-schools (1920px)...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${OUT_DIR}/high_schools_full_1920.png` });
    console.log('Captured high_schools_full_1920.png');
    await context.close();
  }

  await browser.close();
  console.log('All High Schools screenshots captured successfully!');
}

run().catch(console.error);
