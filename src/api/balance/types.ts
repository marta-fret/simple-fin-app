import { BalanceType } from '../../types/general/generalTypes';
import { IPaginated } from '../types';

export interface IBalanceDataDTO {
  userId: string;
  balanceId: string;
  currencyId: string;
  balanceType: BalanceType;
  balanceName: string;
  fundsAvailable: string;
  updatedAt: number;
  createdAt: number;
}

export interface IBalanceResponse {
  data: IPaginated<IBalanceDataDTO>;
  timestamp: number;
}
export interface IBalanceParams {}
