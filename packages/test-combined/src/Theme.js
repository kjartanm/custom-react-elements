import { createMuiTheme } from '@material-ui/core/styles';
import { green, orange, purple } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        secondary: {
          main: purple[800],
        },
      },
    status: {
      danger: orange,
    },
  });