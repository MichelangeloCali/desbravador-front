import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#f3f4f6' },
    secondary: { main: '#9ca3af' },
    success: { main: '#10b981' },
    action: { disabled: '#9ca3af' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-disabled': {
            backgroundColor: '#9ca3af',
            color: '#f9fafb',
          },
        },
        contained: {
          '&:not(.Mui-disabled)': {
            backgroundColor: '#10b981',
            '&:hover': {
              backgroundColor: '#059669',
            },
          },
        },
      },
    },
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
