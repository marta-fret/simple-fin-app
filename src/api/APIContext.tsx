import React, { useContext, useMemo } from 'react';
import { BalanceService } from './balance/balanceService';

const APIContext = React.createContext<APIContextValue | undefined>(undefined);

interface APIContextProviderProps {
  children?: React.ReactNode;
}

interface APIContextValue {
  balanceService: BalanceService;
}

export const APIContextProvider: React.FC<APIContextProviderProps> = ({ children }) => {
  const balanceService = useMemo(() => new BalanceService(), []);

  return <APIContext.Provider value={{ balanceService }}> {children} </APIContext.Provider>;
};

export const useAPIContext = (): APIContextValue | never => {
  const value = useContext(APIContext);

  if (value === undefined) {
    throw new Error('useAPIContext must be used within APIContextProvider');
  }

  return value;
};
