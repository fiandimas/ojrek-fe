import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  palette: {
    primary: {
      main: '#2563EB', // blue-600
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 14,
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        slotProps: {
          formHelperText: {
            sx: {
              marginLeft: 0,
              color: 'red'
            }
          }
        }
      }
    }
  }
});

export default theme;
