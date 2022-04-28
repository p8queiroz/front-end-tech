import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  FavoriteIcon,
} from '../../../MaterialUIBase';
//import AppBarMenu from './components/AppBarMenu';

import { useLayout } from '../../../AppLayout/context/LayoutProvider';
import useStyles from '../../styles';

type AppBarType = {
  handleDrawerToggle?: () => void;
};

const AppBarComponentTop: React.FC<AppBarType> = ({ handleDrawerToggle }) => {
  const { dispatch, isLeftSideOpen } = useLayout();
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar style={{ backgroundColor: '#D99C9C' }}>
        <Grid container xs={12}>
          <Grid xs={11} item container justifyContent="center">
            <Typography
              variant="h6"
              component="div"
              sx={{ pt: 1, color: 'white', fontWeight: 'bold' }}
            >
              PRÁTICAS
            </Typography>
          </Grid>
          <Grid xs={1} item>
            <IconButton sx={{ color: 'white' }} aria-label="favorite">
              <FavoriteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponentTop;
