import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'



const NavigationMenu = ({ classes }) => {
  return (
    <div className={classes.root}>

        <Toolbar className={classes.Tool}>
        <Typography variant="h6" color="inherit">
            I'm the Navigation Bar
          </Typography>
        </Toolbar>

    </div>
  );
};

export default withStyles(styles)(NavigationMenu);