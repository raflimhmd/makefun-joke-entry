// make.fun joke entry — writes one line to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node 22+, TypeScript type-stripping, zero dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string = "I unmuted myself to sigh, and the whole call learned something about me.";
const MAX: number = 200;

// Returns an error string when the text is unusable, otherwise null.
function checkLength(text: string): string | null {
  if (text.length < 1 || text.length > MAX) {
    return `text length ${text.length} is outside the allowed range 1..${MAX}`;
  }
  return null;
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile: string = join(outDir, "entry.txt");
const payload: string = TEXT + "\n";

const problem: string | null = checkLength(TEXT);
if (problem !== null) {
  console.error(`FAIL: ${problem}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, payload, { encoding: "utf8" });
console.log(`wrote ${outFile} (${TEXT.length} chars)`);
