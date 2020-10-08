import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
  },
  typography: {
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 16,
    },
    fontSize: 16,
  }
});
