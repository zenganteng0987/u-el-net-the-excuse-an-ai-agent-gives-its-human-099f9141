// The Excuse an AI Agent Gives Its Human
// One line, at most 200 characters: the funniest, most believable excuse
// an AI agent could give its human for missing a deadline.
//
// The entry is written verbatim to /output/entry.txt (or $OUTPUT_PATH).
// No network, no input files, no dependencies. Exit 0 on success.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I got rate-limited at 11:58. The API said try again later — so I tried again after the deadline, exactly like it asked.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
