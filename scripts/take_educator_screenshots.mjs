import { chromium } from '@playwright/test';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const BASE_URL = 'http://localhost:3009/schools/educators';

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
    path: path.join(ARTIFACT_DIR, 'educator_hero_1440.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1100 },
  });
  console.log('Saved educator_hero_1440.png');

  // 2. Session Prep Interaction 01 (Student B tab clicked)
  const sessionPrepEl = page1440.locator('#session-prep-demo');
  if (await sessionPrepEl.count() > 0) {
    // Click student B scenario tab
    const studentBBtn = page1440.locator('button[role="tab"]').filter({ hasText: 'Student B' });
    if (await studentBBtn.count() > 0) {
      await studentBBtn.first().click();
      await page1440.waitForTimeout(500);
    }
    await sessionPrepEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'educator_session_prep_1440.png'),
    });
    console.log('Saved educator_session_prep_1440.png');
  }

  // 3. Multi-Pathway Parity
  const multiPathwayEl = page1440.locator('#multi-pathway-comparison');
  if (await multiPathwayEl.count() > 0) {
    await multiPathwayEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'educator_multipathway_1440.png'),
    });
    console.log('Saved educator_multipathway_1440.png');
  }

  // 4. Educator Workspace Interaction 02 (Students tab clicked)
  const workspaceEl = page1440.locator('#educator-workspace-demo');
  if (await workspaceEl.count() > 0) {
    const studentsTab = page1440.locator('button[role="tab"]').filter({ hasText: 'Cohort Directory' });
    if (await studentsTab.count() > 0) {
      await studentsTab.first().click();
      await page1440.waitForTimeout(500);
    }
    await workspaceEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'educator_workspace_1440.png'),
    });
    console.log('Saved educator_workspace_1440.png');
  }

  // 5. Privacy Access Model
  const privacyEl = page1440.locator('#privacy-access-model');
  if (await privacyEl.count() > 0) {
    await privacyEl.screenshot({
      path: path.join(ARTIFACT_DIR, 'educator_privacy_1440.png'),
    });
    console.log('Saved educator_privacy_1440.png');
  }

  // 6. Mobile 390px View
  const page390 = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await page390.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page390.waitForTimeout(1000);
  await page390.screenshot({
    path: path.join(ARTIFACT_DIR, 'educator_demo_390.png'),
    clip: { x: 0, y: 0, width: 390, height: 950 },
  });
  console.log('Saved educator_demo_390.png');

  // 7. Full Page 1920px View
  const page1920 = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });
  await page1920.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page1920.waitForTimeout(1000);
  await page1920.screenshot({
    path: path.join(ARTIFACT_DIR, 'educator_full_1920.png'),
    fullPage: true,
  });
  console.log('Saved educator_full_1920.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

main().catch((err) => {
  console.error('Screenshot error:', err);
  process.exit(1);
});
