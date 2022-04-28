import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white', //appColors.white3,
  },
  gridContainer: {
    padding: theme.spacing(2.5),
  },
}));

export default useStyles;
