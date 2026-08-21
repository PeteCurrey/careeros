/**
 * Design token guard.
 *
 * Every `var(--token)` referenced from src/ must be defined somewhere:
 * in globals.css, in Tailwind's own generated theme, or inline on the
 * element that uses it. An undefined custom property resolves to nothing
 * — a transparent background, an invisible border, unstyled text — and
 * CSS reports no error, so these failures ship silently.
 *
 * Run: npm run check:tokens
 * Exits non-zero when an undefined token is referenced.
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const GLOBALS = path.join(SRC, 'app', 'globals.css');

/**
 * Tokens Tailwind itself owns at runtime (`--tw-duration`, `--tw-ease`, the
 * gradient and transform stacks). Deliberately narrow: this project defines
 * its own --color-*, --font-*, --radius-*, --shadow-* and --ease-* in the
 * @theme block, so those namespaces must NOT be excluded here — excluding
 * them is exactly how ~380 undefined --color-brand-* references went
 * unnoticed in the first place.
 */
const PROVIDED_BY_TAILWIND = /^--tw-/;

/** Properties a component legitimately sets inline before reading back. */
const RUNTIME_SET = new Set([
  '--beam-angle',
  '--beam-duration',
  '--beam-delay',
  '--enter-opacity',
  '--enter-scale',
  '--enter-translate-x',
  '--enter-translate-y',
  '--enter-duration',
]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (/\.(tsx?|css)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(SRC);

// --- 1. Collect every token DEFINED in globals.css -------------------------
const globalsCss = fs.readFileSync(GLOBALS, 'utf8');
const defined = new Set(
  [...globalsCss.matchAll(/^\s*(--[a-zA-Z0-9-]+)\s*:/gm)].map((m) => m[1]),
);

// --- 2. Collect every token DEFINED inline in a style={{ }} prop -----------
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const m of source.matchAll(/['"](--[a-zA-Z0-9-]+)['"]\s*:/g)) {
    defined.add(m[1]);
  }
}

// --- 3. Collect every token REFERENCED via var() --------------------------
/** @type {Map<string, string[]>} */
const referenced = new Map();
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const m of source.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)) {
    const token = m[1];
    if (!referenced.has(token)) referenced.set(token, []);
    const rel = path.relative(ROOT, file);
    if (!referenced.get(token).includes(rel)) referenced.get(token).push(rel);
  }
}

// --- 4. Report ------------------------------------------------------------
const missing = [...referenced.entries()]
  .filter(([token]) => !defined.has(token))
  .filter(([token]) => !RUNTIME_SET.has(token))
  .filter(([token]) => !PROVIDED_BY_TAILWIND.test(token))
  .sort((a, b) => b[1].length - a[1].length);

if (missing.length === 0) {
  console.log(
    `Design tokens OK — ${referenced.size} referenced, all defined.`,
  );
  process.exit(0);
}

console.error(
  `\nUndefined design tokens: ${missing.length}\n` +
    `These resolve to nothing at runtime, so the styles that use them\n` +
    `render transparent or unstyled with no build error.\n`,
);

for (const [token, usedIn] of missing) {
  console.error(`  ${token}`);
  for (const file of usedIn.slice(0, 4)) console.error(`      ${file}`);
  if (usedIn.length > 4) console.error(`      … and ${usedIn.length - 4} more`);
}

console.error(
  `\nDefine them in src/app/globals.css, or replace them with an existing token.\n`,
);
process.exit(1);
