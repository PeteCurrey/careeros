import { test, expect } from '@playwright/test';

const OUT_DIR = '/Users/petercurrey/.gemini/antigravity/brain/4e75bf25-01a7-4e56-9949-8fafa11a325a';
const URL = 'http://localhost:3002/product/ai-career-mentor#not-another-chatbot';

test('capture interactive mentor demo desktop 1440px', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const demoSection = page.locator('#not-another-chatbot');
  await expect(demoSection).toBeVisible();

  // Scroll section into view
  await demoSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // 1. Screenshot at interaction start (Desktop 1440px)
  await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_start_1440.png` });
  console.log('Saved mentor_demo_start_1440.png');

  // Step 1: Click "FIND MY DIRECTION"
  const findDirectionBtn = demoSection.getByRole('button', { name: /FIND MY DIRECTION/i });
  await findDirectionBtn.click();
  await page.waitForTimeout(600);

  // Step 2: Click "I like solving practical problems"
  const practicalOptionBtn = demoSection.getByRole('button', { name: /I like solving practical problems/i });
  await practicalOptionBtn.click();
  await page.waitForTimeout(800);

  // 2. Screenshot after completed career path (Desktop 1440px)
  await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_completed_1440.png` });
  console.log('Saved mentor_demo_completed_1440.png');
});

test('capture interactive mentor demo mobile 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const demoSection = page.locator('#not-another-chatbot');
  await expect(demoSection).toBeVisible();
  await demoSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // 3. Screenshot at interaction start (Mobile 390px)
  await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_start_390.png` });
  console.log('Saved mentor_demo_start_390.png');

  // Step 1: Click "PROGRESS"
  const progressBtn = demoSection.getByRole('button', { name: /PROGRESS/i });
  await progressBtn.click();
  await page.waitForTimeout(600);

  // Step 2: Click "I need leadership experience"
  const leadershipBtn = demoSection.getByRole('button', { name: /I need leadership experience/i });
  await leadershipBtn.click();
  await page.waitForTimeout(800);

  // 4. Screenshot after completed career path (Mobile 390px)
  await demoSection.screenshot({ path: `${OUT_DIR}/mentor_demo_completed_390.png` });
  console.log('Saved mentor_demo_completed_390.png');
});
