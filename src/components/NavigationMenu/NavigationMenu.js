import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const NavigationMenu = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.Tool}>
        <Typography variant="h6" color="inherit">
            I'm the Navigation Bar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationMenu;