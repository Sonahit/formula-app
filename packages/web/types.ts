export type Result<T = any, U = any> = {
  ok: T | null;
  error: U | null;
};
