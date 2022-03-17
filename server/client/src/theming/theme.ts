import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: colors.accent1,
          color: colors.white,

          '&:hover': {
            background: colors.accent2,
          },
        },
      },
    },
  },
});

export { theme };
