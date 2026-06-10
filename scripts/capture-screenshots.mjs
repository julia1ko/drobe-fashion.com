import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'tests', 'screenshots');
const baseURL = 'http://127.0.0.1:1313';
const hugoBin = path.join(root, '.bin', 'hugo');

const pages = [
  { name: 'home', path: '/' },
  { name: 'product', path: '/product/' },
  { name: 'features', path: '/features/' },
  { name: 'compare', path: '/compare/' },
  { name: 'business', path: '/business/' },
  { name: 'roadmap', path: '/roadmap/' },
];

const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn(hugoBin, ['server', '-D', '--baseURL', `${baseURL}/`, '--port', '1313', '--bind', '127.0.0.1'], {
      cwd: root,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let ready = false;
    const onData = (chunk) => {
      const text = chunk.toString();
      if (!ready && text.includes('Web Server is available')) {
        ready = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', reject);
    setTimeout(() => {
      if (!ready) reject(new Error('Hugo server did not start in time'));
    }, 15000);
  });
}

const server = await startServer();
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    for (const p of pages) {
      await page.goto(`${baseURL}${p.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const file = path.join(outDir, `${p.name}-${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log('saved', path.relative(root, file));
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.kill('SIGTERM');
}

console.log('Done. Screenshots in tests/screenshots/');
