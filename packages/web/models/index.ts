import { Argument } from './Argument';
import { Formula } from './Formula';
import { User } from './User';

export * from './Argument';
export * from './Formula';
export * from './User';

export type Models = {
  users: typeof User;
  arguments: typeof Argument;
  formula: typeof Formula;
};
