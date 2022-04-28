import React from 'react';
import { Menu } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
//import TabsControllerProvider from 'contexts/TabsControllerProvider';
//import UserProfileInModal from 'components/UserProfile';
import MenuItem from '@material-ui/core/MenuItem';
//import { useModal } from 'components/modals/ModalProvider';
//import { useFlags } from 'launchdarkly-react-client-sdk';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';

type DropDownMenuType = {
  anchorElement: HTMLElement | null;
  openMenu: boolean;
  handleClose: () => void;
};

const DropDownMenu: React.FC<DropDownMenuType> = ({ anchorElement, openMenu, handleClose }) => {
  //const { openModal, closeModal } = useModal();
  //const { enableUserProfile } = useFlags();
  const enableUserProfile = false;

  const history = useHistory();
  const classes = useStyles();

  function navigateTo(pathToNavigate: string) {
    handleClose();
    history.push(pathToNavigate);
  }
  const handleClickOnUserProfile = () => {
    // handleClose();
    // openModal(
    //   <TabsControllerProvider>
    //     <UserProfileInModal closeModal={closeModal} />
    //   </TabsControllerProvider>,
    //   {
    //     disableEscapeKeyDown: true,
    //     scroll: 'paper',
    //     // will set full screen always on mobile
    //     fullScreenOnMobile: true,
    //   }
    // );
    // return;
  };

  const logout = () => {
    navigateTo('/logout');
    return;
  };

  // React.useEffect(() => {
  //   openModal(
  //     <TabsControllerProvider>
  //       <UserProfileInModal closeModal={closeModal} />
  //     </TabsControllerProvider>,
  //     {
  //       disableEscapeKeyDown: true,
  //       scroll: 'paper',
  //     }
  //   );
  // }, []);

  return (
    <Menu
      id="menu-appbar"
      role="menu"
      anchorEl={anchorElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      classes={{ paper: classes.paper, list: classes.list }}
      open={openMenu}
      onClose={handleClose}
    >
      {enableUserProfile && <MenuItem onClick={handleClickOnUserProfile}>My profile</MenuItem>}
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );
};

export default DropDownMenu;
