import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .classButton': {
      fontSize: '1rem',
      color: 'white',
      padding: '5px',
      margin: 0,
      fontFamily: 'arial',
      border: 0,
    },
    '& .wrapper:before, .wrapper:after': {
      content: '""',
      width: '100px',
      height: '1px',
      margin: '0 10px',
      verticalAlign: 'super',
      backgroundColor: 'blue',
      display: 'inline-block',
    },
  },
}));

const Playground: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="wrapper">
        <button className="classButton" type="submit">
          Find Classes Now!
        </button>
      </div>
    </div>
  );
};

export default Playground;
