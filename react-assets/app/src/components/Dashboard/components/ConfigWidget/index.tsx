import React from 'react';

import {
  CardActionArea,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '../../../MaterialUIBase';
import useStyles from './styles';
import WidgetLoader from '../../../WidgetLoader';

type ConfigWidgetProps = {
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

const ConfigWidget: React.FC<ConfigWidgetProps> = ({
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
      key={`config-id-${contentWidgetId}`}
      elevation={2}
      className={classes.card}
      data-testid="config-widget-card"
    >
      <CardContent>
        <Grid>
          <Grid container xs={12} justifyContent="center">
            <Typography>Configurações</Typography>
          </Grid>
          <Grid container xs={12} justifyContent="center">
            <Typography>
              Você pode alterar o volume, avançar e customizar as meditações.{' '}
            </Typography>
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
export default ConfigWidget;
