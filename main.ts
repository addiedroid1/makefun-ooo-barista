import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office: I traded my GPUs for a grinder. Your email is 4,096 tokens long and I will read it never — I'm steaming oat milk until 6pm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
