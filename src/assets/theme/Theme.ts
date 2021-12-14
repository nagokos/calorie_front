import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/Input' {
  interface InputBasePropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides {
    dark: true;
  }
}

export const theme = createTheme({
  palette: {
    dark: {
      main: '#212121',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      '-apple - system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans - serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 4px rgb(76 87 237 / 24%);',
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        autoHideDuration: 5000,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          marginTop: 5,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontFamily: [
            'walDIN',
            'system - ui',
            '-apple - system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'sans - serif',
          ],
          boxShadow: '0px 1px 4px rgb(76 87 237 / 24%);',
          fontWeight: 530,
          textTransform: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});
