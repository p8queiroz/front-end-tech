import React from 'react';
import {
  CardActionArea,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
} from '../../../MaterialUIBase';

import useStyles from './styles';
import ZenImage from '../../../../assets/zen.png';

import WidgetLoader from '../../../../components/WidgetLoader';
//import sanitizeHtml from 'sanitize-html';

type WelcomeWidgetProps = {
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

const WelcomeWidget: React.FC<WelcomeWidgetProps> = ({
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
      key={`widget-id-${contentWidgetId}`}
      elevation={2}
      className={classes.card}
      data-testid="welcome-widget-card"
    >
      <CardContent>
        <Grid container xs={12} justifyContent="center">
          <Grid container xs={12} sm={3} justifyContent="center">
            <img src={ZenImage} alt="logo" className={classes.logo} />
          </Grid>
          <Grid container xs={12} sm={9}>
            <Grid item xs={12}>
              <Typography variant="h6">Olá, Paulo! Vamos meditar?!</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Confira as meditações, afirmações positivas e técnicas para te ajudar a ter uma
                mente mais tranquila!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default WelcomeWidget;
