import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
type PropsStyles = {
  maxHeight?: number | string;
  maxWidth?: number | string;
};

const useStyles = makeStyles((theme: Theme) => ({
  skeleton: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  },
  widgetContainer: (params: PropsStyles) => ({
    height: '100%',
    maxHeight: params.maxHeight,
    maxWidth: params.maxWidth,
  }),
}));

export default useStyles;
