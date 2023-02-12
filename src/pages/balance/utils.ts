import Decimal from 'decimal.js';
import { keyBy } from 'lodash';

import { IBalanceDataDTO } from '../../api/balance/types';
import { ICurrencyDataDTO } from '../../api/currencies/types';
import { IUsersDataDTO } from '../../api/users/types';
import { IBalanceRowData } from './types';

const getAmount = (
  fundsAvailable: string,
  { precision }: ICurrencyDataDTO,
): string => {
  Decimal.set({ precision: 30 });
  const value = new Decimal(fundsAvailable).div(10 ** precision);
  return value.toString();
};

export const prepareTableData = (
  data: [IBalanceDataDTO[], IUsersDataDTO[], ICurrencyDataDTO[]],
): IBalanceRowData[] => {
  const [balance, users, currencies] = data;
  const usersMap = keyBy(users, ({ userId }) => userId);
  const currenciesMap = keyBy(currencies, ({ currencyId }) => currencyId);

  return balance.map(
    ({
      balanceId,
      balanceType,
      createdAt,
      userId,
      fundsAvailable,
      currencyId,
    }) =>
      ({
        id: balanceId,
        user: usersMap[userId].userName,
        amount: getAmount(fundsAvailable, currenciesMap[currencyId]),
        currency: currenciesMap[currencyId].currencyName,
        actionType: balanceType,
        date: createdAt,
      } as IBalanceRowData),
  );
};
