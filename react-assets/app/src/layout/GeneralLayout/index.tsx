import React from 'react';
import { Box } from '../../components/MaterialUIBase';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

/**
 * GeneralLayout: organises presentation components
 * and allows to align components for general layout
 * Returns a component that wrapps children on a Container component
 * Exports Content component to be used to wrap page content in a section tag.
 * Also provides an AppBarSeparator to avoid overlapping
 * of Appbar and section  content
 */

const useStyles = makeStyles(
  (theme: { overrides: { MuiAppBar: { root: any } }; mixins: { toolbar: any } }) => ({
    root: {
      // display: 'flex',
      // minHeight: '100%',
    },
    sectionContent: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minHeight: '100%',
    },
    // using separating defined in the theme file from material-ui-context
    // if it's not defined defauls to mixins.toolbar value
    toolbar: {}, // theme.overrides?.MuiAppBar?.root || theme.mixins.toolbar,
  })
);

const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      {children}
    </Box>
  );
};

const AppBarSeparator: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.toolbar}>
      {children}
    </Box>
  );
};

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.sectionContent}>{children}</section>;
};

type GeneralLayoutType = {
  Content: React.FC;
  AppBarSeparator: React.FC;
};

const GeneralLayout: React.FC & GeneralLayoutType = ({ children }) => {
  return <Container>{children}</Container>;
};

GeneralLayout.Content = Content;
GeneralLayout.Content.displayName = 'GeneralLayout.Content';

GeneralLayout.AppBarSeparator = AppBarSeparator;
GeneralLayout.AppBarSeparator.displayName = 'GeneralLayout.AppBarSeparator';

export default GeneralLayout;
