import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const NavigationMenu = ({ classes }) => {
  return (
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
  );
};

export default withStyles(styles)(NavigationMenu);
