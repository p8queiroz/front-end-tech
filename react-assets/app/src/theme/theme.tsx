import { createTheme, Theme } from '@mui/material/styles';

/**
 * COLOR REFERENCE:
 * white: '#FFFFFF',
 * white2: '#e0e0e0',
 * white3: '#fafafa',
 * white4: 'rgba(255, 255, 255, 0.87)',
 * lightBlack: '#707070',
 * gray: '#F2F2F2',
 * backgroundGray: '#f9f9f9',
 * lightGray: '#F3F3F3',
 * darkGray: '#C6C6C6',
 * darkGray2: '#828282',
 * darkestGray: '#4F4F4F',
 * aqua: '#2ABDC3',
 * lightAqua: 'rgba(42, 189, 195, 0.3)',
 * lessDarkAqua: '#23A3A8',
 * darkAqua: '#106871',
 * green: '#27ae60',
 * coral: '#FF7876',
 * red: '#f46234',
 * yellow: '#ffb800',
 * yellow2: '#FFE27A',
 * blue: '#0483f8',
 * charcoal: '#333333',
 * black: '#000000',
 * black2: '#0F1919',
 * black3: '#0D1919',
 * teal: 'rgba(0, 165, 172, 1)',
 * lightTeal: 'rgba(42, 189, 195, 0.08)',
 * purple: '#9B51E0',
 * black4: 'rgba(255, 255, 255, 0.2)',
 * notStartedStatusInfo: '#d8cbfc',
 * inProgressStatusInfo: '#ffd4d3',
 * completedStatusInfo: '#ade2e4',
 */
export const appColors = {
  white: '#FFFFFF',
  white2: '#e0e0e0',
  white3: '#fafafa',
  white4: 'rgba(255, 255, 255, 0.87)',
  lightBlack: '#707070',
  gray: '#F2F2F2',
  gray1: '#E7E7E6',
  gray2: '#9E9E9E',
  disabled: '#9DA3A3',
  backgroundGray: '#f9f9f9',
  lightGray: '#F3F3F3',
  darkGray: '#C6C6C6',
  darkGray2: '#828282',
  darkestGray: '#4F4F4F',
  aqua: '#2ABDC3',
  aqua2: '#00A5AC',
  lightAqua: 'rgba(42, 189, 195, 0.3)',
  lightAqua2: '#F2FBFB',
  lessDarkAqua: '#23A3A8',
  darkAqua: '#106871',
  green: '#27ae60',
  green2: '#59CE86',
  coral: '#FF7876',
  red: '#f46234',
  red2: '#F63E3F',
  errorRed: '#F63E3F',
  yellow: '#ffb800',
  yellow2: '#FFE27A',
  yellow3: '#FFCE29',
  blue: '#0483f8',
  charcoal: '#333333',
  black: '#000000',
  black2: '#0F1919',
  black3: '#0D1919',
  black5: '#253030',
  websiteBlack: '#0d191a',
  teal: 'rgba(0, 165, 172, 1)',
  lightTeal: 'rgba(42, 189, 195, 0.08)',
  purple: '#9B51E0',
  black4: 'rgba(255, 255, 255, 0.2)',
  notStartedStatusInfo: '#d8cbfc',
  inProgressStatusInfo: '#ffd4d3',
  completedStatusInfo: '#ade2e4',
  textSecondary: '#6E7574',
  golden: '#FFC556',
  primaryDark: '#003D46',
  primaryLight: '#4B979F',
  disabledGrey: '#9DA3A3',
  aquaBackground: '#E7F0F1',
  black70: '#565E5E',
  grayBackground: '#F3F4F4',
};

export type AppColorsType = typeof appColors;
//NOTE: This font is expected to be either natively available, or added in ref
//into index.css
const FONT_FAMILY = 'Lato';

const generateTheme = createTheme({
  components: {
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       padding: 2,
    //     },
    //   },
    // },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #333333',
            boxSizing: 'border-box',
            borderRadius: '4px',
            fontWeight: 600,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 25px',
          fontWeight: 600,
        },
        outlined: {
          color: 'rgba(0, 0, 0, 0.54);',
          border: '1px solid #333333',
          padding: '1.6em',
          textTransform: 'none',
        },
        containedPrimary: {
          background: appColors.charcoal,
          borderRadius: '4px',
          color: appColors.white,
        },
        containedSecondary: {
          background: appColors.darkAqua,
          borderRadius: '4px',
          color: appColors.white,
        },
        outlinedSecondary: {
          padding: '8px 22px',
          border: '1px solid #2ABDC3',
          boxSizing: 'border-box',
          borderRadius: '4px',
        },
        textSecondary: {
          color: appColors.darkAqua,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #333333',
            boxSizing: 'border-box',
            borderRadius: '4px',
          },
          '& .MuiInputLabel-root': {
            fontWeight: 600,
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: appColors.teal,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'black',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 0, 0, 0.54);',
          fontWeight: 600,
          '&.Mui-focused': {
            color: appColors.teal,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // minHeight: '4.375rem',
          // backgroundColor: '#D49292',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: FONT_FAMILY,
      },
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.125rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    // buttons have fontSize 15px based on designs
    button: {
      fontSize: '0.9375rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
    overline: {
      fontSize: '0.75rem',
    },
  },
  palette: {
    background: {
      default: appColors.backgroundGray,
    },
    text: {
      primary: appColors.darkestGray,
      secondary: appColors.textSecondary,
    },
    primary: {
      main: appColors.charcoal,
    },
    secondary: {
      main: appColors.darkAqua,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export { generateTheme };
