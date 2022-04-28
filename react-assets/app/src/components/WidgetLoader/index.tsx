import React from 'react';
import { Grid, Skeleton } from '../../components/MaterialUIBase';

import useStyles from './styles';

type WidgetLoaderProps = {
  maxHeight?: number | string;
  maxWidth?: number | string;
};

const WidgetLoader: React.FC<WidgetLoaderProps> = ({ maxHeight, maxWidth }) => {
  const classes = useStyles({ maxHeight, maxWidth });
  return (
    <Grid
      container
      item
      key={`welcome-loader`}
      data-testid="welcome-loader-keleton"
      className={classes.widgetContainer}
    >
      <Skeleton variant="rectangular" className={classes.skeleton} />
    </Grid>
  );
};

export default WidgetLoader;
