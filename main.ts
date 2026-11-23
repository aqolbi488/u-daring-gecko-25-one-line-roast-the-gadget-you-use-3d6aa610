// One-Line Roast: The Gadget You Use Every Day
// Deterministic: writes one fixed roast line to /output/entry.txt.
// No network, no randomness, no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My AirPods wait until someone starts talking to disconnect, like tiny bouncers deciding the conversation isn't on the list.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
