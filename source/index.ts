import { join } from "path";
import { createCommand } from "commander";
import isAbsolute from "is-absolute";
import exec, { flagsToArgs } from "@bconnorwhite/exec";

export async function open(path: string = "") {
  return exec({
    command: "open",
    args: flagsToArgs({
      a: true
    }).concat(["GitKraken"]),
    flags: {
      new: true,
      args: '""',
      path: isAbsolute(path) ? path : join(process.cwd(), path)
    }
  });
}

export async function openAction(path?: string) {
  open(path);
}

export default createCommand("open")
  .description("open repository with GitKraken")
  .arguments("[path]")
  .action(openAction);
