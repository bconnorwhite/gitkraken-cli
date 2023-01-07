import { test, expect } from "@jest/globals";
import open from "../source/index.js";

test("basic", async () => {
  await open(undefined);
});

test("path", async () => {
  const { output } = await open(process.cwd());
  expect(output).toBe("");
});
