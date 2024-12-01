import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, ReactNode, useContext } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b7280',
    },
    secondary: {
      main: '#374151',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f3f4f6',
            },
            '&:hover fieldset': {
              borderColor: '#e5e7eb',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6b7280',
            },
          },
        },
      },
      defaultProps: {
        InputLabelProps: {
          style: {
            color: '#e5e7eb',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#e5e7eb',
          '&:hover': {
            borderColor: '#e5e7eb',
            backgroundColor: 'transparent',
          },
          '&.Mui-focused': {
            borderColor: '#6b7280',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        },
        notchedOutline: {
          borderColor: '#f3f4f6',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#e5e7eb',
          '&.Mui-focused': {
            borderColor: '#6b7280',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

type ThemeContextType = {
  theme: typeof theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
