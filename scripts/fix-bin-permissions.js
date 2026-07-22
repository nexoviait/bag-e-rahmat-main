// Vercel's build cache can restore node_modules/.bin scripts without their
// Unix executable bit (e.g. after they were once committed to git from a
// Windows checkout), which makes `npm run build` fail with
// "sh: .../node_modules/.bin/vite: Permission denied". Force +x on every
// install so this can't come back regardless of cache state.
import { chmodSync, readdirSync } from "node:fs";
import { join } from "node:path";

if (process.platform !== "win32") {
  const binDir = join(import.meta.dirname, "..", "node_modules", ".bin");
  let entries = [];
  try {
    entries = readdirSync(binDir);
  } catch {
    entries = [];
  }
  for (const entry of entries) {
    try {
      chmodSync(join(binDir, entry), 0o755);
    } catch {}
  }
}
