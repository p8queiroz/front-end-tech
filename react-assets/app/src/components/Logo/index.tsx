import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useLayout, ACTIONS_TYPES } from '../../../AppLayout/context/LayoutProvider';
import useStyles from './styles';
import classnames from 'classnames';
import LogoImage from '../LogoImage';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { CloseIcon } from '../MaterialUIBase';

const LogoComponent: React.FC = () => {
  const classes = useStyles();
  const { dispatch, isLeftSideOpen } = useLayout();
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.toolbar}>
      <LogoImage type={isLeftSideOpen ? 'logo' : 'ico'} />
      <IconButton
        color="secondary"
        className={classnames(classes.drawerButton, {
          [classes.drawerButtonOpen]: isLeftSideOpen,
          [classes.drawerButtonClose]: !isLeftSideOpen,
        })}
        onClick={(e) => {
          e.preventDefault();
          return dispatch({ type: ACTIONS_TYPES.OPEN_CLOSE_LEFT_SIDE });
        }}
      >
        {isLeftSideOpen ? (
          screenSize ? (
            <ChevronLeftIcon fontSize="small" />
          ) : (
            <CloseIcon fontSize="small" />
          )
        ) : (
          <ChevronRightIcon fontSize="small" />
        )}
      </IconButton>
    </div>
  );
};

export default LogoComponent;
