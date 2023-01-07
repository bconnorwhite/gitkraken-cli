import { join } from "path";
import clee from "clee";
import isAbsolute from "is-absolute";
import { exec } from "@bconnorwhite/exec";

export default clee("kraken")
  .description("Open repository with GitKraken")
  .argument("[path]")
  .action(async (path = process.cwd()) => {
    await exec("open", [{ // Open the repo
      a: true
    }, "GitKraken", {
      new: true,
      args: '""',
      path: isAbsolute(path) ? path : join(process.cwd(), path)
    }]);
    await exec("open", [{ // Focus GitKraken
      a: true
    }, "GitKraken"]);
  });
