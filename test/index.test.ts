import { test, expect } from "@jest/globals";
import { open, openAction } from "../source";

test("basic", async () => {
  await openAction();
});

test("path", async () => {
  const { output } = await open(process.cwd());
  expect(output).toBe("");
});
