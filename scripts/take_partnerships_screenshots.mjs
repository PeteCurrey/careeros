import { chromium } from '@playwright/test';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const BASE_URL = 'http://localhost:3009/schools/partnerships';

async function main() {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  console.log('Browser launched. Navigating to:', BASE_URL);

  // 1. Desktop 1440px Hero View
  const page1440 = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page1440.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page1440.waitForTimeout(1000);

  await page1440.screenshot({
    path: path.join(ARTIFACT_DIR, 'partnerships_hero_1440.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1100 },
  });
  console.log('Saved partnerships_hero_1440.png');

  // 2. Interaction 01: Partner Ecosystem Explorer
  const explorerEl = page1440.locator('#ecosystem-explorer');
  if (await explorerEl.count() > 0) {
    // Click Apprenticeships partner tab
    const appTab = page1440.locator('button[role="tab"]').filter({ hasText: 'Apprenticeships' });
    if (await appTab.count() > 0) {
      await appTab.first().click();
      await page1440.waitForTimeout(500);
    }
    await explorerEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'partnerships_explorer_1440.png'),
    });
    console.log('Saved partnerships_explorer_1440.png');
  }

  // 3. Interaction 02: Opportunity Governance Flow
  const govEl = page1440.locator('#opportunity-governance');
  if (await govEl.count() > 0) {
    // Click Step 04 Anti-Pay-to-Influence
    const step4Tab = page1440.locator('button[role="tab"]').filter({ hasText: 'Anti-Pay-to-Influence' });
    if (await step4Tab.count() > 0) {
      await step4Tab.first().click();
      await page1440.waitForTimeout(500);
    }
    await govEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'partnerships_governance_1440.png'),
    });
    console.log('Saved partnerships_governance_1440.png');
  }

  // 4. Partner Access Matrix
  const matrixEl = page1440.locator('#partner-privacy-matrix');
  if (await matrixEl.count() > 0) {
    await matrixEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'partnerships_matrix_1440.png'),
    });
    console.log('Saved partnerships_matrix_1440.png');
  }

  // 5. Mobile 390px View
  const page390 = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  await page390.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page390.waitForTimeout(1000);

  await page390.screenshot({
    path: path.join(ARTIFACT_DIR, 'partnerships_demo_390.png'),
    clip: { x: 0, y: 0, width: 390, height: 1200 },
  });
  console.log('Saved partnerships_demo_390.png');

  // 6. Full Desktop Page 1920px
  const page1920 = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });
  await page1920.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page1920.waitForTimeout(1000);

  await page1920.screenshot({
    path: path.join(ARTIFACT_DIR, 'partnerships_full_1920.png'),
    fullPage: true,
  });
  console.log('Saved partnerships_full_1920.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

main().catch((err) => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
