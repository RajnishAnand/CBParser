# CBParser : Code Block Parser
<img src="https://media.discordapp.net/attachments/906985861525155880/971070275523330078/cooltext410041309984105.png" width="100%" alt="banner"/>

![npm version](https://img.shields.io/npm/v/cbparser.svg?maxAge=3600)
![npm downloads](https://img.shields.io/npm/dt/cbparser.svg?maxAge=3600)
---
## About 
CBParser or Code Block parser is a parser to extract multiple code blocks from text, Specially Discord Code blocks.

- Completely Written in Typescript 🌟
- 0 Dependencies ✨
- Very Small in Size 🍫
- Easy to use 🍭

> `node ^v12` required.

## Installation 
Using npm:
```sh-session
npm install cbparser
```
using yarn:
```sh-session
yarn add cbparser
```
using pnpm:
```sh-session
pnpm add cbparser
```

## Importing
```js
const {CBParser} = require ('cbparser');
```
or using import :
```js
import {CBParser} from 'cbparser';
```

## Documentation:
**Parameter:**
- `str` : string 

**returns:**
- `Array<[Object]>`
  - `lang` ?: string
  - `code` : string

## Example:
code:
```js
const {CBParser} = require ('cbparser');

const code = "```js\nconsole.log('Hello Void!')```"
console.log(CBParser(code));
```
output:
```js
[{lang:"js", code: "console.log('Hello Void!')"}]
```
---
Check out [Regex](https://regexr.com/6krj0) being used to parse code blocks.

