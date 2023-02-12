import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { useAPIContext } from '../../api/APIContext';
import { BalanceTable } from './BalanceTable';
import { IBalanceRowData } from './types';
import { prepareTableData } from './utils';

export const BalancePage = () => {
  const { balanceService, usersService, currenciesService } = useAPIContext();

  const [balanceData, setBalanceData] = useState<
    IBalanceRowData[] | undefined
  >();

  useEffect(() => {
    const getData = async () => {
      const balance = balanceService.getBalance();
      const users = usersService.getUsers();
      const currencies = currenciesService.getCurrencies();
      const data = await Promise.all([balance, users, currencies]);

      setBalanceData(prepareTableData(data));
    };

    getData();
  }, []);

  return balanceData ? (
    <BalanceTable data={balanceData} />
  ) : (
    <CircularProgress />
  );
};
