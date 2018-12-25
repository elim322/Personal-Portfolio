import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const NavigationMenu = ({ classes }) => {
  return (
    <div className={classes.Root}>
      <Toolbar className={classes.Tool}>
        <Typography variant="h6" color="inherit">
          Einer Lim
          <br /> Full Stack Front End Developer
        </Typography>
        <Typography variant="h6" color="inherit">
          Home
        </Typography>
        <Typography variant="h6" color="inherit">
          About
        </Typography>
        <Typography variant="h6" color="inherit">
          Projects
        </Typography>
        <Typography variant="h6" color="inherit">
          Resume
        </Typography>
      </Toolbar>
    </div>
  );
};

export default withStyles(styles)(NavigationMenu);
