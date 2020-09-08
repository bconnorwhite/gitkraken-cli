<div align="center">
  <h1>gitkraken-cli</h1>
  <a href="https://npmjs.com/package/gitkraken-cli">
    <img alt="npm" src="https://img.shields.io/npm/v/gitkraken-cli.svg">
  </a>
  <a href="https://github.com/bconnorwhite/gitkraken-cli">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/gitkraken-cli.svg">
  </a>
  <a href="https://github.com/bconnorwhite/gitkraken-cli">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/gitkraken-cli?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> CLI to launch GitKraken from a given path.


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
Usage: kraken [options] [directory]

open repository with GitKraken

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

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/gitkraken-cli.svg"></h2>

- [@bconnorwhite/exec](https://www.npmjs.com/package/@bconnorwhite/exec): Execute commands while keeping flags easily configurable as an object
- [commander](https://www.npmjs.com/package/commander): the complete solution for node.js command-line programs

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/gitkraken-cli.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/gitkraken-cli.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
