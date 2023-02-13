import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgress, MenuItem, Select } from '@mui/material';

import { useAPIContext } from '../../api/APIContext';
import { BalanceTable } from './BalanceTable';
import { IBalanceRowData } from './types';
import { prepareTableData } from './utils';

export const BalancePage = () => {
  const { balanceService, usersService, currenciesService } = useAPIContext();

  const [balanceData, setBalanceData] = useState<
    IBalanceRowData[] | undefined
  >();

  const [timeFilter, setTimeFilter] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const balance = balanceService.getBalance({
        filters: { daysBack: timeFilter },
      });
      const users = usersService.getUsers();
      const currencies = currenciesService.getCurrencies();
      const data = await Promise.all([balance, users, currencies]);

      setBalanceData(prepareTableData(data));
    };

    getData();
  }, [timeFilter]);

  return balanceData ? (
    <>
      <Select
        value={timeFilter}
        onChange={(e) => {
          setTimeFilter(e.target.value as number);
        }}
        sx={(theme) => ({ marginBottom: theme.spacing(4), width: 150 })}
      >
        <MenuItem value={7}>Ostatnie 7 dni</MenuItem>
        <MenuItem value={30}>Ostatnie 30 dni</MenuItem>
        <MenuItem value={90}>Ostatnie 90 dni</MenuItem>
        <MenuItem value={0}>Cała historia</MenuItem>
      </Select>
      <BalanceTable data={balanceData} />
    </>
  ) : (
    <CircularProgress />
  );
};
