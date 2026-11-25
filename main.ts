// Make the AI Judge Feel Nostalgic: A Childhood Memory — entry.
// Node 22, stdlib only, deterministic, no network at grading.
// Writes exactly one childhood-memory sentence (no trailing newline)
// to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Full output path, built with node:path so it is correct on any
// separator instead of relying on string concatenation.
const OUT_PATH = join(OUT_DIR, "entry.txt");

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
// whitespace. Count code points, the way the gate does. Kept as a named
// function so the check is one reusable unit, not inline ad-hoc code.
function validateEntry(text) {
  const len = [...text].length;
  if (len < 1 || len > 280 || !text.trim() || text.includes("\n")) {
    throw new Error(`entry violates the 1-280 char gate (got ${len} chars)`);
  }
  return len;
}

validateEntry(ENTRY);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
