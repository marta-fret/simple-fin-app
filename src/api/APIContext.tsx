import React, { useContext, useMemo } from 'react';
import { BalanceService } from './balance/balanceService';
import { CurrenciesService } from './currencies/usersService';
import { UsersService } from './users/usersService';

const APIContext = React.createContext<APIContextValue | undefined>(undefined);

interface APIContextProviderProps {
  children?: React.ReactNode;
}

interface APIContextValue {
  balanceService: BalanceService;
  usersService: UsersService;
  currenciesService: CurrenciesService;
}

export const APIContextProvider: React.FC<APIContextProviderProps> = ({
  children,
}) => {
  const services = useMemo(
    () => ({
      balanceService: new BalanceService(),
      usersService: new UsersService(),
      currenciesService: new CurrenciesService(),
    }),
    [],
  );

  return (
    <APIContext.Provider value={services}> {children} </APIContext.Provider>
  );
};

export const useAPIContext = (): APIContextValue | never => {
  const value = useContext(APIContext);

  if (value === undefined) {
    throw new Error('useAPIContext must be used within APIContextProvider');
  }

  return value;
};
