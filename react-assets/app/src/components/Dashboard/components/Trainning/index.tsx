import React from 'react';
import { Card, CardContent, Grid, Typography } from '../../../MaterialUIBase';

import useStyles from './styles';
import WidgetLoader from '../../../WidgetLoader';
import TrainningCard from '../TrainningCard';

type TrainningWidgetProps = {
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

const TrainningWidget: React.FC<TrainningWidgetProps> = ({
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
      key={`meditation-id-${contentWidgetId}`}
      elevation={2}
      className={classes.card}
      data-testid="meditation-widget-card"
    >
      <CardContent>
        <Grid>
          <Grid container xs={12} justifyContent="flex-start">
            <Typography variant="h5">Treinamentos</Typography>
          </Grid>
          <Grid container xs={12} justifyContent="flex-start">
            <TrainningCard />
            <TrainningCard />
            <TrainningCard />
            <TrainningCard />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default TrainningWidget;
