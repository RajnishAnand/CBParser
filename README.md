# CBParser : Code Block Parser
<img src="https://media.discordapp.net/attachments/906985861525155880/971070275523330078/cooltext410041309984105.png" width="100%" alt="banner"/>

![npm version](https://img.shields.io/npm/v/cbparser.svg?maxAge=3600)
![npm downloads](https://img.shields.io/npm/dt/cbparser.svg?maxAge=3600)
---
## 🤍 About 
CBParser or Code Block parser is a parser to extract multiple code blocks from text, Specially Discord Code blocks.

- Completely Written in Typescript 🌟
- 0 Dependencies ✨
- Very Small in Size 🍫
- Easy to use 🍭

## 🗜️ Installation 
```sh-session
npm install cbparser
```
```sh-session
yarn add cbparser
```
```sh-session
pnpm add cbparser
```
## 🧰 Example 
Code :
```js
const {CBParser} = require ('cbparser');

const code = "```js\nconsole.log('Hello Void!')```"
console.log(CBParser(code));
```
Output : 
![output](https://media.discordapp.net/attachments/906985861525155880/971080712558092288/IMG_20220503_213729.jpg)

## 🍜 Return type 
returns array of code & lang matched in the text.
`Array<[Object]>`
- `lang ?: string`
- `code : string`

---
Check out [Regex](https://regexr.com/6krj0) being used to parse code blocks.

