import React from 'react';
import useStyles from './styles';

import {
  Grid,
  List,
  ListItem,
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '../MaterialUIBase';

import OppositeContentTimeline from '../Dashboard/components/Trainning/components/TrainingProgress';

type NotebookWidgetProps = {
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

const Notebook: React.FC<NotebookWidgetProps> = ({
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

  // if (isLoading) {
  //   return <WidgetLoader maxHeight={maxHeight} />;
  // }

  return (
    <Grid container xs={12} spacing={2}>
      <Grid item key="breadcrumb" xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/#/">
            <Typography variant="h5">Home</Typography>
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Card
          key={`notebook-id-${contentWidgetId}`}
          elevation={2}
          className={classes.card}
          data-testid="notebook-widget-card"
        >
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} justifyContent="flex-start">
                <Typography>Afirmações positivas para BOA SAÚDE!</Typography>
              </Grid>
              <Grid container xs={12} sm={6} justifyContent="flex-start">
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      secondary="Amo cada célula do meu corpo."
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Desejo ter uma velhice saudável e para isso, hoje, cuido com amor do meu corpo."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Agradeço pelo meu corpo saudável. Adoro a vida."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Escolho sempre o profissional de saúde certo para as minhas necessidades."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Meu corpo dedica-se da melhor forma possível a criar uma saúde perfeita."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Mantenho a saúde do meu corpo dando-lhe tudo o que precisa a todos os níveis."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Estou sempre a descobrir novas formas de melhorar a minha saúde."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Eu sou um poço de saúde!"
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Eu amo o meu corpo!"
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      //primary="Brunch this weekend?"
                      // secondary={
                      //   <React.Fragment>
                      //     <Typography
                      //       component="span"
                      //       variant="body2"
                      //       //    className={classes.inline}
                      //       color="textPrimary"
                      //     >
                      //       Ali Connors
                      //     </Typography>
                      //     {" — I'll be in your neighborhood doing errands this…"}
                      //   </React.Fragment>
                      // }
                      secondary="Eu sou feliz e minha saúde é perfeita!"
                    />
                  </ListItem>
                </List>
                <Divider variant="inset" />
              </Grid>
              {/* <Grid container xs={12} sm={6} justifyContent="flex-start">
                <OppositeContentTimeline />
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Notebook;
