import React from 'react';
import { Typography, Grid, IconButton, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DropDownMenu from '../DropDownMenu';
import useStyles from './styles';
//import { useFlags } from 'launchdarkly-react-client-sdk';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
//import { useAdb2cDataAdapter } from 'contexts/UserProfileInformation';

const AppBarMenu: React.FC = () => {
  // const { enableLogoutOnMenu } = useFlags();
  const enableLogoutOnMenu = true;

  const classes = useStyles();

  const theme = useTheme();

  const { width, height } = useWindowDimensions();
  React.useEffect(() => {
    // on windows resize will close menu
    handleClose();
  }, [width, height]);

  const { familyName = 'Queiroz', givenName = 'Paulo' } = {}; //useAdb2cDataAdapter();
  // media query to get screen size and select correct component to render
  const screenSize = useMediaQuery(theme.breakpoints.up('md'));

  const [anchorElement, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorElement);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName = `${givenName} ${familyName}`;

  if (enableLogoutOnMenu) {
    return (
      <Grid container alignItems="center" justifyContent="flex-end">
        {screenSize && <Typography noWrap={true}>{userName}</Typography>}
        <IconButton
          type="button"
          aria-label="Open Profile Menu"
          onClick={handleOpenMenu}
          data-testid="profile-id-button"
          color="secondary"
          className={classes.styleMobile}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        <DropDownMenu openMenu={openMenu} handleClose={handleClose} anchorElement={anchorElement} />
      </Grid>
    );
  }

  return null;
};

export default AppBarMenu;
