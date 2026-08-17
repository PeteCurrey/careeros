import { chromium } from '@playwright/test';

const OUT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const URL = 'http://localhost:3001/product/ai-career-mentor#not-another-chatbot';

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  
  // 1. Desktop 1440px
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
    const page = await context.newPage();
    console.log('Navigating to', URL);
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    const demoSection = page.locator('#not-another-chatbot');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    // Start screenshot
    await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_start_1440.png` });
    console.log('Captured mentor_demo_start_1440.png');

    // Click "FIND MY DIRECTION"
    await demoSection.getByRole('button', { name: /FIND MY DIRECTION/i }).click();
    await page.waitForTimeout(500);

    // Click "I like solving practical problems"
    await demoSection.getByRole('button', { name: /I like solving practical problems/i }).click();
    await page.waitForTimeout(600);

    // Completed screenshot
    await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_completed_1440.png` });
    console.log('Captured mentor_demo_completed_1440.png');

    await context.close();
  }

  // 2. Mobile 390px
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const page = await context.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    const demoSection = page.locator('#not-another-chatbot');
    await demoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    // Start mobile screenshot
    await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_start_390.png` });
    console.log('Captured mentor_demo_start_390.png');

    // Click "PROGRESS"
    await demoSection.getByRole('button', { name: /PROGRESS/i }).click();
    await page.waitForTimeout(500);

    // Click "I need leadership experience"
    await demoSection.getByRole('button', { name: /I need leadership experience/i }).click();
    await page.waitForTimeout(600);

    // Completed mobile screenshot
    await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_completed_390.png` });
    console.log('Captured mentor_demo_completed_390.png');

    await context.close();
  }

  await browser.close();
  console.log('Done!');
}

run().catch(console.error);
