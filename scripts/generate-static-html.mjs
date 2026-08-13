import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const candidates = [
  { entry: '.output/server/index.mjs', out: '.output/public/index.html' },
  { entry: 'dist/server/index.mjs', out: 'dist/client/index.html' },
];

const target = candidates.find((c) => fs.existsSync(path.resolve(projectRoot, c.entry)));

if (!target) {
  console.error('SSR server entry not found. Looked in:');
  for (const c of candidates) console.error(`  - ${path.resolve(projectRoot, c.entry)}`);
  console.error('Make sure `vite build` completed successfully.');
  process.exit(1);
}

const serverEntryPath = path.resolve(projectRoot, target.entry);
const outputPath = path.resolve(projectRoot, target.out);

const mod = await import(serverEntryPath);

const request = new Request('http://localhost/');

let response;
const ssrService = globalThis.__nitro_vite_envs__?.ssr;
if (ssrService && typeof ssrService.fetch === 'function') {
  response = await ssrService.fetch(request);
} else if (typeof mod.default?.fetch === 'function') {
  response = await mod.default.fetch(request, {}, {});
} else if (typeof mod.fetch === 'function') {
  response = await mod.fetch(request);
} else {
  console.error('No SSR fetch handler available from the server entry.');
  process.exit(1);
}

if (!response.ok) {
  console.error(`SSR request failed with status ${response.status}`);
  console.error((await response.text()).slice(0, 2000));
  process.exit(1);
}

const html = await response.text();

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, 'utf-8');
// GitHub Pages: avoid Jekyll processing of _-prefixed asset folders.
fs.writeFileSync(path.join(path.dirname(outputPath), '.nojekyll'), '', 'utf-8');
// Fallback for deep links on static hosting.
fs.writeFileSync(path.join(path.dirname(outputPath), '404.html'), html, 'utf-8');

console.log(`Generated static index.html at ${outputPath} (${html.length} bytes)`);
