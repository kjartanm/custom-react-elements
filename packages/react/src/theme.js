import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: 'hsla(336, 76%, 44%, 0.77)',
            contrastText: '#dfdfdf',
        },
        secondary: {
            main: 'hsla(193, 76%, 44%, 0.884)',
            contrastText: '#dfdfdf',
        },
        warning: {
            main: 'hsla(0, 76%, 54%, 0.884)',
            light: 'hsla(0, 86%, 64%, 0.884)',
            dark: 'hsla(0, 66%, 44%, 0.884)',
            contrastText: '#dfdfdf',
        },
    },
});