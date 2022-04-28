import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(4, 4, 4, 4),
  },
  firstRow: {
    [theme.breakpoints.up('sm')]: {
      minHeight: 221,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 141 + 164 + 40,
    },
    paddingBottom: theme.spacing(5),
  },
  widgetContainerSeparatorOne: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 5, 0),
    },
  },
  widgetContainerSeparatorTwo: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 0, 0, 3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  // second row styles
  secondRow: {
    // minimun the container can be
    minHeight: 370 + 40,
    // backgroundColor: '#3399FF',
    padding: theme.spacing(0, 0, 5, 0),
  },
  // thrid row styles
  thirdRow: {
    // backgroundColor: '#8333FF',
    [theme.breakpoints.up('sm')]: {
      // 430 from designs
      // minimun the container can be
      minHeight: 260,
    },
    [theme.breakpoints.down('sm')]: {
      // minimun the container can be
      minHeight: 260 + 260 + 8,
    },
  },
  thridRowContainerSeparatorOne: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 4, 0),
      minHeight: 270,
    },
  },
  thridRowContainerSeparatorTwo: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 0, 0, 5),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
}));

export default useStyles;
