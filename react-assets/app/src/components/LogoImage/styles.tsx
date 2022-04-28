import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  icoImage: {
    width: '1.2rem',
    height: '1.2rem',
  },
  icoContainer: {
    visibility: 'hidden',
    '&.ico': {
      visibility: 'visible',
    },
  },
  logoImage: {
    width: '11rem',
    height: '100%',
  },
  logoContainer: {
    visibility: 'hidden',
    '&.logo': {
      visibility: 'visible',
    },
  },
}));

export default useStyles;
