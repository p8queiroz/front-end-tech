/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import BooksComponentProvider from './context';
import useStyles from './styles';
import { BooksDetails } from './BookDetails';

export type Book = {
  id: number;
  author: string;
  title: number;
  price: string;
}

type BooksComponentProps = {
  books: Book[] | undefined
};


export const BooksComponent: React.FC<BooksComponentProps> = ({
 books
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState<
    { value: string } | undefined
  >(undefined);


  return (
        <Grid container justifyItems="flex-end">
          <Grid item xs={12}>
              <Typography  variant="subtitle1">
                Your List of Books
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <BooksComponentProvider
            id={0}
            author="Test..."
            price={100}
            title="The lord of the rings"
            >
                <BooksDetails book={undefined}></BooksDetails>
            </BooksComponentProvider>
          </Grid>        
        </Grid>
    );
};
