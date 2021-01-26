import parser from "./parser";
import { Formula, Result, Value } from "types";

const evaluate = (
  formula: Formula,
  args: Record<string, Value>
): Result<Value, string> => {
  try {
    const result = formula.compile().evaluate(args);
    return { ok: result, error: null };
  } catch (e) {
    return { ok: null, error: e.message };
  }
};

export default evaluate;
