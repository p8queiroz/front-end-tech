import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { drawerClosedWidth, drawerWidth } from '../../layout/SideBarLayout';
//import { drawerWidth, drawerClosedWidth } from '../../layout/SidebarLayout';
//import BlueLeafs from '../../assets/blue-leafs.svg';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    // backgroundImage: `url('${BlueLeafs}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: drawerClosedWidth,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8.5),
    },

    [theme.breakpoints.down('xs')]: {
      width: 0,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icoImage: {
    width: '1.2rem',
    height: '1.2rem',
  },
  logoImage: {
    width: '11rem',
    height: '100%',
  },
  drawerButton: {
    padding: 0,
  },
  drawerButtonOpen: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  drawerButtonClose: {
    paddingLeft: theme.spacing(1),
  },
  boxSeparator: {
    minHeight: theme.spacing(6),
    '&.smallSeparator': {
      minHeight: theme.spacing(1),
    },
  },
  blueLeafs: {
    width: '200px',
  },
}));

export default useStyles;
