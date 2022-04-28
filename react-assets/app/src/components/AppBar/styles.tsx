import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { drawerClosedWidth, drawerWidth } from '../../layout/SideBarLayout';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: drawerWidth,
    },
    '&.drawerClosed': {
      paddingLeft: drawerClosedWidth,
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 1, 0, 1),
      },
    },
    backgroundColor: 'white', //appColors.white,
  },
  appLogo: {
    width: '100%',
    maxWidth: 50,
  },
  appBarMenuContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  toolbar: {
    // similar to gutter
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2, 0, 2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  appBarButtonContainer: {
    width: '4,375rem',
  },
  iconTitle: {
    fontSize: 13,
  },
}));

export default useStyles;
