import { Model, ModelObject } from 'objection';
import { Transfer } from '@/interfaces/transfers.interface';

export class Transfers extends Model implements Transfer {
  id!: number;
  user_id!: string;
  wallet_id!: string;
  amount!: number;
  transaction_id!: string;
  created_at!: Date;

  static tableName = 'transfers';
  static idColumn = 'id';
}

export type TransfersShape = ModelObject<Transfers>;
