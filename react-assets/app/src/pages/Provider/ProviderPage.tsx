import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Typography } from '../../components/MaterialUIBase';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // flexGrow: 1,
  },
}));

const ProviderPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">Provider page</Typography>
      Examples Dynamic Contex
    </div>
  );
};

export default ProviderPage;
