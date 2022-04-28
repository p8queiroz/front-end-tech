import React from 'react';
import { Card, Grid, Typography, CardContent } from '../../../MaterialUIBase';
import useStyles from './styles';
import WidgetLoader from '../../../WidgetLoader';

type PomodoroWidgetProps = {
  isLoading?: boolean;
  contentWidgetId?: number;
  internalId?: string;
  content?: string;
  backgroundImageSrc?: string;
  backgroundColor?: string;
  color?: string;
  name?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
};

const PomodoroWidget: React.FC<PomodoroWidgetProps> = ({
  contentWidgetId,
  content,
  backgroundImageSrc,
  backgroundColor = '#FFFF',
  color,
  isLoading,
  maxHeight,
  maxWidth,
}) => {
  const classes = useStyles({ backgroundImageSrc, backgroundColor, maxHeight, maxWidth });

  if (isLoading) {
    return <WidgetLoader maxHeight={maxHeight} />;
  }

  return (
    <Card
      key={`pomodoro-id-${contentWidgetId}`}
      elevation={2}
      className={classes.card}
      data-testid="pomodoro-widget-card"
    >
      <CardContent>
        <Grid>
          <Grid container xs={12} justifyContent="center">
            <Typography>Pomodoro</Typography>
          </Grid>
          <Grid container xs={12} justifyContent="center">
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default PomodoroWidget;
