import React from 'react';
import { Grid, Paper } from '../components/MaterialUIBase';

import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

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

const GridPage3: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container sm={12}>
        <Grid item sm={8}>
          <Grid container sm={12}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <ul>
                  <li>Carosel 1</li>
                  <li>aa</li>
                  <li>bb</li>
                  <li>cc</li>
                </ul>
              </Paper>
            </Grid>

            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <ul>
                  <li>Matrix</li>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>e</li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <ul>
              <li>Carosel Direita</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>8</li>
              <li>8</li>
              <li>8</li>
              <li>8</li>
              <li>8</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridPage3;
