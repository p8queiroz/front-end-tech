import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

type PropsStyles = {
  backgroundImageSrc?: string;
  backgroundColor?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
};
const useStyles = makeStyles((theme: Theme) => ({
  card: (params: PropsStyles) => ({
    width: '100%',
  }),
}));

export default useStyles;
