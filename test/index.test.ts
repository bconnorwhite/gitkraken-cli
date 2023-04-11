import { test } from "@jest/globals";
import open from "../source/index.js";

test("basic", async () => {
  await open(undefined);
});

test("path", async () => {
  await open(process.cwd());
});
