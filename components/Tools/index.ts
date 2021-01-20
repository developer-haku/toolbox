import WordsToLines from "./WordsToLines/WordsToLines";

export const Tools: { [tid: string]: () => JSX.Element } = {
  "1": WordsToLines,
};
