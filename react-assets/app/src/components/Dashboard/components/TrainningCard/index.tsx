import React from 'react';

import ZenImage from '../../../../assets/care.png';
import { CardActionArea, Card, Grid, Typography, CardMedia } from '../../../MaterialUIBase';
import useStyles from './styles';

interface ownProps {
  title?: number;
  description?: string;
  emptyState?: boolean;
  content?: string;
  miniCard?: boolean;
}

const CardInfoMedia: React.FC<ownProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActionArea className={classes.root} href="/notebook">
      <Card className={classes.card}>
        <Grid item container xs={12} spacing={2} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="h6">Afirmações positivas para boa saúde</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia className={classes.media} image={ZenImage} title="Afirmações Positivas" />
          </Grid>
          <Grid item xs={6} sm={9}>
            Repita essas frases por 21 dias e passe a compreender melhor a sua vida.
          </Grid>
          <Grid item xs={12}>
            Use o nosso contador
          </Grid>
        </Grid>

        {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Link href="/notebook">{'Afirmações positivas para mente tranquila'}</Link> //similarly use `a` if not using react-router
        }
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={'/img/landscape-meditation.jpg'}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
      </Card>
    </CardActionArea>
  );
};

export default CardInfoMedia;
