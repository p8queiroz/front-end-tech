import React from 'react';
import './App.css';
import RouterApp from './Route';

import makeStyles from '@mui/styles/makeStyles';

import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { generateTheme } from './theme/theme';

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const App: React.FC = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // const list = (anchor: Anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['welcome', 'carousel', 'home'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <Link to={`/${text}`}>{text}</Link>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  return (
    <div className="wrapper">
      <ThemeProvider theme={generateTheme}>
        <RouterApp />
      </ThemeProvider>
    </div>
  );
};

export default App;
