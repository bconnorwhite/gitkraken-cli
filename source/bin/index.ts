#!/usr/bin/env node
import { version } from "../../package.json";
import openCommand from "../";
import { program } from "commander";

openCommand
  .name("kraken")
  .version(version, "-v --version")
  .parse();

program
  .addCommand(openCommand)
