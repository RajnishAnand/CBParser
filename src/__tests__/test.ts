import {CBParser} from '../index';

const code = "```js\nconsole.log(`Hello Void!`)```\n```py \nprint('Hello Void!')```";

test("CB Parser",()=>{
  expect(CBParser(code)).toStrictEqual([
    {
      lang: "js",
      code: "console.log(`Hello Void!`)"
    },
    {
      lang: "py",
      code: "print('Hello Void!')"
    }
  ])
})
