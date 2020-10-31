import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '12px',
      },
    },
  },
  typography: {
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 18,
    },
    fontSize: 16,
  },
});
