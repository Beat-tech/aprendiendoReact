import { createMuiTheme } from '@material-ui/core';

import '@fontsource/mulish';

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const ORANGE = '#FF723D';
const LIGHT_GREY = '#C4C4C4';
const DARK_GREY = '#232323';
const MEDIUM_GREY = '#5C5C5C';
const DUSTY_WHITE = '#ECECEC';
const MEDIUM_LIGHT_GREY = '#8D8D8D';
const BLACK70 = '#00000095';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: ORANGE,
    },
    secondary: {
      main: WHITE,
    },
    grey: {
      50: DUSTY_WHITE,
      200: LIGHT_GREY,
      900: DARK_GREY,
      700: BLACK70,
      500: MEDIUM_GREY,
      300: MEDIUM_LIGHT_GREY
    }
  },
  typography: {
    fontFamily: 'Mulish',
    h1: {
      fontSize: 40,
      fontWeight: 900,
      color: WHITE,
    },
    h2: {
      fontSize: 36,
      color: WHITE,
    },
    h3: {
      fontSize: 32,
      fontWeight: 900,
      color: LIGHT_GREY,
    },
    h4: {
      fontSize: 24,
      fontWeight: 900,
      color: BLACK,
    },
    h5: {
      fontSize: 22,
      fontWeight: 900,
      color: WHITE,
      lineHeight: '32px',
      letterSpacing: '2px',
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 900,
      color: BLACK,
    },
    subtitle2: {
      fontSize: 18,
      color: ORANGE,
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
    },
    body2: {
      fontSize: 15,
    },
    caption: {
      fontSize: 14,
      color: LIGHT_GREY,
    },
    button: {
      fontSize: 15,
      fontWeight: 900,
      color: DARK_GREY,
    },
  }
});

export default theme;