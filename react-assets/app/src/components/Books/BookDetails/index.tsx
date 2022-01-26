
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Book } from '..';
import useStyles from './styles';

export type BooksDetailsProps = {
  book: Book | undefined
};


export const BooksDetails: React.FC<BooksDetailsProps> = ({
 book
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState<
    { value: string } | undefined
  >(undefined);


  return (
        <Grid container justifyItems="flex-end">
          <Grid item xs={12}>
              <Typography  variant="subtitle1">
                Details of your selected Book
              </Typography>
          </Grid>
          <Grid item xs={1}>
                Details ...
          </Grid>        
        </Grid>
    );
};
