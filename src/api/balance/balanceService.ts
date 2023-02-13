import { IBalanceDataDTO, IBalanceParams } from './types';
import balanceData from './mock-balances.json';

export class BalanceService {
  async getBalance({
    filters: { daysBack },
  }: IBalanceParams): Promise<IBalanceDataDTO[]> {
    const data = balanceData.data.collection as unknown as IBalanceDataDTO[];

    if (daysBack) {
      const minDate = Date.now() - daysBack * 1000 * 60 * 60 * 24;
      return Promise.resolve(data.filter((item) => item.createdAt > minDate));
    }

    return Promise.resolve(data);
  }
}
