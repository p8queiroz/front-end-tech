import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  MenuIcon,
  Toolbar,
  SettingsOutlinedIcon,
  SearchIcon,
  DarkModeOutlinedIcon,
  AutoAwesomeMosaicOutlinedIcon,
  SpaOutlined,
  PermIdentityOutlinedIcon,
  Typography,
  Grid,
} from '../../../MaterialUIBase';

import { useLayout } from '../../../AppLayout/context/LayoutProvider';
import useStyles from '../../styles';

type AppBarType = {
  handleDrawerToggle?: () => void;
};

//TODO - interessante
// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

const AppBarComponentBottom: React.FC<AppBarType> = ({ handleDrawerToggle }) => {
  const { dispatch, isLeftSideOpen } = useLayout();
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ top: 'auto', bottom: 0, height: 90, overflowX: 'scroll' }}
    >
      <Toolbar
        sx={{
          margin: 'auto',
        }}
      >
        <IconButton color="inherit" aria-label="meditate">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <SpaOutlined />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>Meditar</Typography>
            </Grid>
          </Grid>
        </IconButton>
        <IconButton color="inherit" aria-label="toggle dark mode">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <DarkModeOutlinedIcon />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>dormir</Typography>
            </Grid>
          </Grid>
        </IconButton>
        <IconButton color="inherit" aria-label="open tools">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <AutoAwesomeMosaicOutlinedIcon />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>ferramentas</Typography>
            </Grid>
          </Grid>
        </IconButton>
        <IconButton color="inherit" aria-label="open settings">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <SettingsOutlinedIcon />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>configurações</Typography>
            </Grid>
          </Grid>
        </IconButton>
        <IconButton color="inherit" aria-label="open profile">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <PermIdentityOutlinedIcon />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>perfil</Typography>
            </Grid>
          </Grid>
        </IconButton>
        <IconButton color="inherit" aria-label="open drawer">
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <MenuIcon />
            </Grid>
            <Grid item xs={12} className={classes.iconTitle}>
              <Typography>mais</Typography>
            </Grid>
          </Grid>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponentBottom;
