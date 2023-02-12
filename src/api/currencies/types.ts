import { IPaginated } from '../types';

export interface ICurrencyDataDTO {
  currencyId: string;
  currencyName: string;
  precision: number;
}

export interface IUsersResponse {
  data: IPaginated<ICurrencyDataDTO>;
  timestamp: number;
}
