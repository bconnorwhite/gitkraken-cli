import { join } from "path";
import { createCommand } from "commander-version";
import isAbsolute from "is-absolute";
import { exec } from "@bconnorwhite/exec";

export async function open(path = "") {
  await exec("open", [{ // Open the repo
    a: true
  }, "GitKraken", {
    new: true,
    args: '""',
    path: isAbsolute(path) ? path : join(process.cwd(), path)
  }]);
  return exec("open", [{ // Focus GitKraken
    a: true
  }, "GitKraken"]);
}

export async function openAction(path?: string) {
  open(path);
}

export default createCommand("open")
  .description("Open repository with GitKraken")
  .arguments("[path]")
  .action(openAction);
