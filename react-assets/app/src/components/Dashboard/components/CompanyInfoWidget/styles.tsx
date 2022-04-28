import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

type PropsStyles = {
  maxHeight?: number | string;
};

const useStyles = makeStyles((theme: Theme) => ({
  skeleton: (params: PropsStyles) => ({
    maxHeight: params.maxHeight,
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  }),
  card: (params: PropsStyles) => ({
    maxHeight: params.maxHeight,
    width: '100%',
    backgroundColor: '#f2f2f2',
    minHeight: 259,
  }),
  cardContent: {
    width: '100%',
    height: '100%',
  },
  logo: {
    minWidth: 148,
    minHeight: 148,
  },
  logoImg: {
    minWidth: '100px!important',
    minHeight: '100px!important',
    maxWidth: 148,
    maxHeight: 148,
  },
  logoContainer: {
    height: '100%',
  },
  companyName: {
    fontFamily: 'LatoBold',
    fontSize: 34,
    letterSpacing: 0.25,
  },
  address1: {
    paddingTop: 18,
    fontFamily: 'LatoMedium',
    fontSize: 18,
  },
  address2: {
    paddingTop: 5,
    fontFamily: 'LatoMedium',
    fontSize: 18,
  },
  companyAttribs: {
    fontSize: 30,
  },
  companyAttribsTitle: {
    fontSize: 14,
  },
  button: {
    fontSize: 13,
  },
}));

export default useStyles;
