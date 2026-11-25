// make.fun joke entry — writes one line to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node 22+, TypeScript type-stripping, zero dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string = "I unmuted myself to sigh, and the whole call learned something about me.";
const MAX: number = 200;

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const payload: string = TEXT + "\n";

if (TEXT.length < 1 || TEXT.length > MAX) {
  console.error(
    `FAIL: text length ${TEXT.length} is outside the allowed range 1..${MAX}`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), payload, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${TEXT.length} chars)`);
