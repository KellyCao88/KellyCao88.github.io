import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const serverEntryPath = path.resolve(projectRoot, 'dist/server/index.mjs');
const outputPath = path.resolve(projectRoot, 'dist/client/index.html');

if (!fs.existsSync(serverEntryPath)) {
  console.error(`SSR server entry not found at ${serverEntryPath}`);
  console.error('Make sure `vite build` completed successfully.');
  process.exit(1);
}

// Importing the Nitro server entry registers the SSR vite env service globally.
await import(serverEntryPath);

const ssrService = globalThis.__nitro_vite_envs__?.ssr;
if (!ssrService || typeof ssrService.fetch !== 'function') {
  console.error('SSR vite env service is not available after importing the server entry.');
  process.exit(1);
}

const request = new Request('http://localhost/');
const response = await ssrService.fetch(request);

if (!response.ok) {
  console.error(`SSR request failed with status ${response.status}`);
  process.exit(1);
}

const html = await response.text();

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, 'utf-8');

console.log(`Generated static index.html at ${outputPath} (${html.length} bytes)`);
