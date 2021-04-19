import program from "commander-version";
import { openAction } from "../";

program(__dirname)
  .name("kraken")
  .description("Open repository with GitKraken")
  .arguments("[path]")
  .action(openAction)
  .parse();
