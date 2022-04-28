import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

type PropsStyles = {
  backgroundImageSrc?: string;
  backgroundColor?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(1),
  },
  avatar: {
    backgroundColor: red[500],
  },

  card: (params: PropsStyles) => ({
    width: '100%',
  }),
}));

export default useStyles;
