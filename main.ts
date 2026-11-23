import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v1.9.4: fixed a bug where the bladder sent its low-battery warning 30 seconds before shutdown.";

// The gate requires UTF-8 text of 1 to 160 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to /output/entry.txt`);
