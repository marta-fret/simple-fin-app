import { ICurrencyDataDTO } from './types';
import currenciesData from './mock-currencies.json';

export class CurrenciesService {
  async getCurrencies(): Promise<ICurrencyDataDTO[]> {
    return Promise.resolve(
      currenciesData.data.collection as unknown as ICurrencyDataDTO[],
    );
  }
}
