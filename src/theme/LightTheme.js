import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a lightTheme instance.
const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: '#1c1c1c'
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily : 'Montserrat, sans-serif',
    lineHeight: '1px',
    h1: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '22px',
    },
    h6: {
      fontSize: '1.3rem',
    }
  }
});

export default lightTheme;
