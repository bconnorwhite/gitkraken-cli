import program from "commander-version";
import openCommand from "../";

program(__dirname);

openCommand
  .name("kraken")
  .parse();
