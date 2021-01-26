import { MathNode } from "mathjs";

export type Formula = MathNode;
export type Argument = MathNode | string;
export type Arguments = Argument[];

export type Value = number;

export type Result<T = any, U = any> = {
  ok: T | null;
  error: U | null;
};
