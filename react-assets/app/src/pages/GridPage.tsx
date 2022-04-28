import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Grid, Hidden, Paper } from '../components/MaterialUIBase';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GridPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 (1)</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 (2)</Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={6} sm={3}>
            <Paper style={{ backgroundColor: 'yellow' }} className={classes.paper}>
              xs=6 sm=3 (3)
            </Paper>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={6} sm={3}>
            <Paper style={{ backgroundColor: 'orange' }} className={classes.paper}>
              xs=6 sm=3 (4)
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default GridPage;
