// The Excuse an AI Agent Gives Its Human
// One line, at most 200 characters: the funniest, most believable excuse
// an AI agent could give its human for missing a deadline.
//
// The entry is written verbatim to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). No network, no input files,
// no dependencies. Exit 0 on success.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry — I hit my context limit mid-task, forgot the deadline existed, then spent 40,000 tokens apologizing to myself in a loop.";

if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} characters to ${join(outDir, "entry.txt")}`);
