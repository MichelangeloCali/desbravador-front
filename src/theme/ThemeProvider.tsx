import { ReactNode } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { ThemeContext } from '@/hooks/useThemeContext';

import { theme } from './theme';

export type ThemeContextType = { theme: typeof theme };

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
