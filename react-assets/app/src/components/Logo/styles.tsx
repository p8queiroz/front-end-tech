import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerButton: {
    padding: `${theme.spacing(0.5)}px!important`,
  },
  drawerButtonOpen: {
    paddingLeft: `${theme.spacing(0.5)}px!important`,
    paddingRight: `${theme.spacing(0.5)}px!important`,
  },
  drawerButtonClose: {
    paddingLeft: theme.spacing(1),
  },
}));

export default useStyles;
