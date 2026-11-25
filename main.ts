// Make the AI Judge Feel Nostalgic: A Childhood Memory — entry.
// Node 22, stdlib only, deterministic, no network at grading.
// Writes exactly one childhood-memory sentence (no trailing newline)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The ice-cream truck played the same broken tune every July, and we
// ran barefoot with coins warm from our pockets, and the summer it
// stopped coming, nobody told us why.
// Concrete nouns the reader can picture (truck, tune, coins, pockets);
// the twist lands in the last words — the truck simply stops coming,
// and no adult ever explains why. Nothing is explained or sentimentalised;
// the warm ache is the unexplained absence itself.
const ENTRY =
  "The ice-cream truck played the same broken tune every July, and we ran barefoot with coins warm from our pockets, and the summer it stopped coming, nobody told us why.";

// Gate guard: the sealed scorer accepts 1-280 UTF-8 characters, not only
// whitespace. Count code points, the way the gate does.
const len = [...ENTRY].length;
if (len < 1 || len > 280 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`entry violates the 1-280 char gate (got ${len} chars)`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", ENTRY, "utf8");
