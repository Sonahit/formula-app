import * as mathjs from "mathjs";
import { Arguments, Formula, Result } from "types";

const parse = (src: string): Result<[Formula, Arguments?]> => {
  try {
    const expression = mathjs.parse(src);
    return {
      ok: [expression, expression.args],
      error: null,
    };
  } catch (e) {
    return {
      ok: null,
      error: e.message,
    };
  }
};

export default parse;
