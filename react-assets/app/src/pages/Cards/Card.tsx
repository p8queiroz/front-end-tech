import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import CardInfoMedia from '../../components/Cards/CardInfoMedia';
import CardInfoText from '../../components/Cards/CardInfoText';
import CardWithMedia from '../../components/Cards/CardWithMedia';

const useStyles = makeStyles((theme: Theme) => ({
  root: { margin: 20 },
  flexContainer: { display: 'flex', justifyContent: 'center' },
  flexItems: { margin: 10 },
}));

const Card: React.FC = () => {
  const classes = useStyles();
  const cards = [1, 2];

  return (
    <div className={classes.root}>
      <div className={classes.flexContainer}>
        {cards.map((item) => (
          <div className={classes.flexItems} key={item}>
            <CardInfoMedia />
          </div>
        ))}
      </div>
      <div className={classes.flexContainer}>
        {cards.map((item) => (
          <div className={classes.flexItems} key={item}>
            <CardInfoText />
          </div>
        ))}
      </div>
      <div className={classes.flexContainer}>
        {cards.map((item) => (
          <div className={classes.flexItems} key={item}>
            <CardWithMedia />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
