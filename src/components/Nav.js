import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const onNavClick = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="header">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            id="responsive-nav-title"
          >
            Tyler Broadway
          </Typography>
          <Button color="inherit" onClick={() => onNavClick("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => onNavClick("/projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => onNavClick("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
