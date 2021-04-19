import program from "commander-version";
import openCommand from "../";

program(__dirname)
  .name("kraken")
  .addCommand(openCommand)
  .parse();
