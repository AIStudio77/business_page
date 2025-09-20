import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useStores, useStoreState } from '../../providers/AppProviders';

// Create Material-UI theme based on our design system
const createMuiTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? 'hsl(214, 84%, 56%)' : 'hsl(214, 84%, 56%)',
      contrastText: mode === 'light' ? 'hsl(210, 100%, 98%)' : 'hsl(210, 100%, 98%)',
    },
    secondary: {
      main: mode === 'light' ? 'hsl(185, 84%, 65%)' : 'hsl(185, 84%, 65%)',
      contrastText: mode === 'light' ? 'hsl(220, 91%, 25%)' : 'hsl(185, 84%, 85%)',
    },
    background: {
      default: mode === 'light' ? 'hsl(210, 100%, 98%)' : 'hsl(220, 91%, 8%)',
      paper: mode === 'light' ? 'hsl(210, 100%, 96%)' : 'hsl(220, 91%, 12%)',
    },
    text: {
      primary: mode === 'light' ? 'hsl(220, 91%, 18%)' : 'hsl(210, 100%, 95%)',
      secondary: mode === 'light' ? 'hsl(220, 50%, 35%)' : 'hsl(210, 40%, 75%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  },
});

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

export function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  const { themeStore } = useStores();
  const themeState = useStoreState(themeStore);
  
  const theme = createMuiTheme(themeState.mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}