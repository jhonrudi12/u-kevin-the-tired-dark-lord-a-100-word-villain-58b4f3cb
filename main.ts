// The Tired Dark Lord: A 100-Word Villain Monologue
//
// A fantasy villain who is secretly just very tired — the tiredness lives
// in the rhythm, the pauses and the small deflections, never in a plain
// statement that he is weary. He is still a villain: he has a history
// (ruler of the Nine Valleys), a scheme (tonight's ritual, the eclipse,
// the seven seals) and a plan to go through with it — right after tea.
//
// Deterministic, no network, no input files: the monologue is embedded
// below and written byte-for-byte to the output path.
//
// Usage:
//   node main.ts [output-path]
//   Output defaults to /output/entry.txt (or $OUTPUT_PATH when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MONOLOGUE = [
  "Come in. Mind the skulls \u2014 I keep meaning to move them. Sit. Not that chair. Anywhere.",
  "",
  "You came to end me. Tuesday, a paladin. Thursday, twins. I gave them the eclipse speech and none noticed I'd reused it.",
  "",
  "What no bard tells you: ruling the Nine Valleys is mostly paperwork. Tithes. The goblin union. My lieutenant keeps misplacing the invasion plans, and I let him \u2014 the plans were mine, and I \u2014",
  "",
  "Well. The ritual is tonight. Moon, dagger, the theatre. But the tea's warm, and you look as done-in as I feel. One cup first. Then we do the prophecy properly.",
  "",
].join("\n");

const outPath =
  process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The sealed gate accepts UTF-8 text of 1 to 600 characters, not only
// white space. Refuse to write anything outside it instead of handing
// the grader an entry that can only score 0.
const chars = [...MONOLOGUE].length;
if (chars < 1 || chars > 600 || MONOLOGUE.trim().length === 0) {
  console.error(
    `refusing to write entry: ${chars} characters, gate needs 1-600`,
  );
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, MONOLOGUE, "utf8");
