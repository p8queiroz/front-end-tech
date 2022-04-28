import React from 'react';
import Logo from '../../../../assets/sustainIco.svg';
import sustainLogo from '../../../../assets/sustainLogo-small.svg';

import classnames from 'classnames';
import useStyles from './styles';
import Box from '@material-ui/core/Box';

type LogoIcoImageType = {
  type: 'logo' | 'ico';
};
const LogoIcoImage: React.FC<LogoIcoImageType> = ({ type }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        data-testid="logo-home-page"
        className={classnames(classes.logoContainer, type)}
      >
        <img src={sustainLogo} className={classnames(classes.logoImage, type)} alt="Logo Icon" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        data-testid="logo-home-page"
        className={classnames(classes.icoContainer, type)}
      >
        <img src={Logo} className={classnames(classes.icoImage, type)} alt="Logo Icon" />
      </Box>
    </>
  );
};

export default LogoIcoImage;
