import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2b4a', // Navy
      light: '#3d5a80',
      dark: '#0d1929',
    },
    secondary: {
      main: '#8b7355', // Brown
      light: '#b5a090',
      dark: '#5c4a37',
    },
    background: {
      default: '#faf8f5', // Off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5c5c5c',
    },
    accent: {
      lightBlue: '#b8d4e8',
    },
  },
  typography: {
    fontFamily: '"Stack Sans Notch", "Georgia", serif',
    h1: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Stack Sans Notch", "Helvetica Neue", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: '"Stack Sans Text", "Helvetica", sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontFamily: '"Stack Sans Text", "Helvetica", sans-serif',
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(26, 43, 74, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(26, 43, 74, 0.15)',
          },
        },
      },
    },
  },
});

export default theme;
