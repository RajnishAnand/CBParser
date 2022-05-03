export function CBParser (str:string):CBParserType{
  const reg =  /```(\S*)?(?:\s+)?\n((?:(?!```)[^])+)```/g;
  return [...str.matchAll(reg)]
    .map(e=>({lang:e[1],code:e[2]}));
}

type CBParserType = {
  lang: string|undefined;
  code: string;
}[]
