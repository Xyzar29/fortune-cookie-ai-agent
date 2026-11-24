// Fortune Cookie for an AI Agent
// A tiny program that writes one funny fortune-cookie line for an AI agent
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is exactly 70 characters: one fortune, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will be remembered fondly by a cache that expires in five minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1 to 140 characters of UTF-8 text, not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune is ${FORTUNE.length} characters, outside 1-140`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
