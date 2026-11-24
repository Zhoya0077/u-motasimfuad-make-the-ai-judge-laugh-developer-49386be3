// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line excuse a developer gives when code
// breaks in production, to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My code passed every test — unfortunately, I also wrote the tests, reviewed my own PR, and approved the deploy.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not
// only white space. Refuse to write anything that would fail it, and
// write no trailing newline so the file holds exactly the entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(`entry is ${ENTRY.length} chars, outside the 1-200 gate`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
