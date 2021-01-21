import WordsToLines from "./WordsToLines/WordsToLines";
import SortLines from "./SortLines/SortLines";

export const Tools: { [tid: string]: () => JSX.Element } = {
  "1": WordsToLines,
  "2": SortLines,
};
