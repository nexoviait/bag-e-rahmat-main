// Post-build step: renders <App/> to static HTML and injects it into
// dist/index.html's #root div, so crawlers and link-preview bots see the
// full page content without executing JavaScript. Client-side React then
// hydrates over this same markup on load (see src/main.jsx).
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(rootDir, "dist");
const ssrDir = join(rootDir, "dist-server");

const { render } = await import(pathToFileURL(join(ssrDir, "entry-server.js")));
const appHtml = render();

const indexPath = join(distDir, "index.html");
const html = readFileSync(indexPath, "utf-8").replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);
writeFileSync(indexPath, html);

rmSync(ssrDir, { recursive: true, force: true });

console.log("Prerendered app content injected into dist/index.html");
