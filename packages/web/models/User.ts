import { IIndexable } from '../interfaces/IIndexable';

export class User implements Partial<IIndexable> {
  static tableName = 'users' as const;

  id?: number;

  name!: string;
}
