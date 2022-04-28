import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  gridContainer: {
    margin: theme.spacing(2),
  },
  card: {
    paddingRight: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // borderRadius: theme.spacing(6),
    width: '60%',
    //maxWidth: ,
  },
}));

export default useStyles;
