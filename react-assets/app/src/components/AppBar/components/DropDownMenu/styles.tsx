import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    // based on designs
    width: '210px',
    top: '70px !important',
  },
  list: {
    height: '100%',
  },
  button: {
    '&.MuiButton-outlined': {
      padding: theme.spacing(1),
    },
    margin: theme.spacing(1),
  },
  gridContainer: {
    height: '100%',
  },
  userName: {
    fontWeight: 700,
  },
  userRole: {
    color: '#333333', //appColors.darkGray2,
  },
}));

export default useStyles;
