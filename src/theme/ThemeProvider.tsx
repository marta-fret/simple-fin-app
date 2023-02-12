import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeMode } from './types';
import { darkTheme, lightTheme } from './theme';

interface IThemeProviderValue {
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
}

const ThemeModeContext = createContext<IThemeProviderValue | undefined>(
  undefined,
);

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const value = useMemo(() => ({ themeMode, setThemeMode }), [themeMode]);

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const value = useContext(ThemeModeContext);

  if (value === undefined) {
    throw new Error(
      "Can't access ThemeModeContext - no proper provider in the ancestors tree",
    );
  }

  return value;
};
