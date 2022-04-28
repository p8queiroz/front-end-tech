import React from 'react';
import { Grid } from '../../../../components/MaterialUIBase';
import useStyles from './styles';

type LayoutContainerProps = {
  welcomeWidget: React.ReactNode;
  configWidget: React.ReactNode;
  trainingWidget: React.ReactNode;
  pomodoroWidget: React.ReactNode;
};

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  welcomeWidget: WelcomeWidget,
  configWidget: ConfigWidget,
  trainingWidget: TrainingWidget,
  pomodoroWidget: PomodoroWidget,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      className={classes.container}
      data-testid="dashboard-component"
    >
      <Grid container item xs={12} md={12} sm={12}>
        {WelcomeWidget}
      </Grid>
      <Grid container item xs={12} md={12} sm={12}>
        {PomodoroWidget}
      </Grid>
      <Grid container item xs={12} md={12} sm={12}>
        {TrainingWidget}
      </Grid>
      <Grid container item>
        <Grid container justifyContent="space-between" item xs={12} spacing={4}>
          <Grid container item justifyContent="center" alignItems="flex-start" md={6} sm={12}>
            {ConfigWidget}
          </Grid>
          <Grid container item justifyContent="center" alignItems="flex-start" md={6} sm={12}>
            {ConfigWidget}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LayoutContainer;
