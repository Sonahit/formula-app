import { IIndexable } from '../interfaces/IIndexable';

export class Formula implements Partial<IIndexable> {
  static tableName = 'formulas' as const;

  id?: number;

  name!: string;

  description?: string;

  expression!: string;
}
