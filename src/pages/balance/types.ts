import { BalanceType } from '../../types/general/generalTypes';

export interface IBalanceRowData {
  id: string;
  date: number;
  user: string;
  amount: string;
  currency: string;
  actionType: BalanceType;
  clientOrService?: string;
}
