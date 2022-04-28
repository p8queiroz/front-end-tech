import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {
    '&.MuiAvatar-colorDefault': {
      backgroundColor: `#005544 !important`,
      color: `#000509 !important`,
    },
    marginRight: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('md')]: {
      margingRight: 0,
    },
    fontSize: '3.2rem',
  },
  styleMobile: {
    [theme.breakpoints.up('xs')]: {
      padding: 0,
    },
  },
  arrowIcon: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1, 1, 0),
    },
  },
  typographyProfile: {
    textTransform: 'none',
    paddingLeft: '1em',
    paddingRight: '1em',
    alignItems: 'center',
  },
  boxIconContainer: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: 20,
    maxWidth: 20,
  },
}));

export default useStyles;
