import { IBalanceDataDTO, IBalanceParams } from './types';
import balanceData from './mock-balances.json';

export class BalanceService {
  async getBalance(balanceParams?: IBalanceParams): Promise<IBalanceDataDTO[]> {
    return Promise.resolve(
      balanceData.data.collection as unknown as IBalanceDataDTO[],
    );
  }
}
