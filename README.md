<div align="center">
  <h1>gitkraken-cli</h1>
  <a href="https://npmjs.com/package/gitkraken-cli">
    <img alt="NPM" src="https://img.shields.io/npm/v/gitkraken-cli.svg">
  </a>
  <a href="https://github.com/bconnorwhite/gitkraken-cli">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/gitkraken-cli.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/gitkraken-cli?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/gitkraken-cli/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/gitkraken-cli">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/gitkraken-cli?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> CLI to launch GitKraken from a given path.

Currently has only been tested on MacOS, feel free to [submit a pull request to add Windows support.](https://github.com/bconnorwhite/gitkraken-cli)

## Installation

```bash
yarn global add gitkraken-cli
```

```bash
npm install --global gitkraken-cli
```

<br />

## CLI

### kraken

```
Usage: kraken [options] [path]

Open repository with GitKraken

Options:
  -v --version  output the version number
  -h, --help    display help for command
```

### Examples

Open current directory in GitKraken:

```bash
kraken 
```

Open target directory in GitKraken:
```bash
kraken path/to/repo
```

## API

### Usage

```ts
import { createCommand } from "commander";
import openCommand, { openAction, open } from "gitkraken-cli";

// Add kraken to your own commander program:
program
  .addCommand(openCommand)
  // ...

// Add the open action to your own commander command:
program
  .name("my-command")
  .action(openAction);

// Call open programmatically:
open("path/to/repo").then(() => {
  // GitKraken is now open...
});
```

### Types

```ts
function open(path?: string): Promise<ExecResult>;

function openAction(path?: string | undefined): Promise<void>

const openCommand: commander.Command;
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/gitkraken-cli.svg"></h2>

- [@bconnorwhite/exec](https://www.npmjs.com/package/@bconnorwhite/exec): Execute commands while keeping flags easily configurable as an object
- [commander-version](https://www.npmjs.com/package/commander-version): A wrapper for Commander that automatically sets the version based on your package.json
- [is-absolute](https://www.npmjs.com/package/is-absolute): Returns true if a file path is absolute. Does not rely on the path module and can be used as a polyfill for node.js native `path.isAbolute`.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/gitkraken-cli.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/is-absolute](https://www.npmjs.com/package/@types/is-absolute): TypeScript definitions for is-absolute

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/gitkraken-cli.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
