// One-Line Roast: The Gadget You Use Every Day
// Deterministic: writes one fixed roast line to /output/entry.txt.
// No network, no randomness, no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My AirPods wait until someone starts talking to disconnect, like tiny bouncers deciding the conversation isn't on the list.";

// Defensive gate: the roast must be a single non-blank line of 1-200 chars.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n") ||
  ROAST.includes("\r")
) {
  console.error("Invalid roast line: must be a single non-blank line of 1-200 characters.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
