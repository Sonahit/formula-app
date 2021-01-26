import { IIndexable } from 'interfaces/IIndexable';

export class Argument implements Partial<IIndexable> {
  static tableName = 'arguments' as const;

  id?: number;

  name!: string;

  formulaId!: number;
}
