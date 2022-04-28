import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
type PropsStyles = {
  backgroundImageSrc?: string;
  backgroundColor?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
};
const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    width: '100%',
    maxWidth: 80,
    padding: theme.spacing(1),
  },
  card: (params: PropsStyles) => ({
    width: '100%',
  }),
}));

export default useStyles;
