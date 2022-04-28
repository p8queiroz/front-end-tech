import React from 'react';
import { Box, BoxProps } from '../../components/MaterialUIBase';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
/**
 * DetailLayout: organises presentation for details box
 */

type HeightType = {
  minHeight: string;
};

const useStyles = makeStyles((theme: Theme) => {
  const heightObject = theme.overrides?.MuiAppBar?.root as HeightType;
  return {
    root: {
      // minHeight: `calc(99.5% - ${
      //   heightObject.minHeight
      //     ? heightObject.minHeight
      //     : `${theme.mixins.toolbar.minHeight?.toString()}px`
      // })`,
      margin: theme.spacing(1),
    },
  };
});

const DetailLayout: React.FC<BoxProps> = ({ children, alignItems, justifyContent, ...props }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={classes.root}
      {...props}
    >
      {children}
    </Box>
  );
};
DetailLayout.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
};

DetailLayout.displayName = 'DetailLayout.detailContent';

export default DetailLayout;
