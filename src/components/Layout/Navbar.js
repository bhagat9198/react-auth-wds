import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

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

export default function Navbar(props) {
  const classes = useStyles();
  let links;
  if (props?.page === "Home" || props?.page === "ForgotPassword") {
    links = (
      <>
        <Link to="/signup" style={{color: "white", textDecoration: "none"}}>
          <Button color="inherit">SignUp</Button>
        </Link>
        <Link to="signin" style={{color: "white", textDecoration: "none"}}>
          <Button color="inherit">SignIn</Button>
        </Link>
      </>
    );
  }

  if (props?.page === "Signin") {
    links = (
      <Link to="/signup" style={{color: "white", textDecoration: "none"}}>
        <Button color="inherit">SignUp</Button>
      </Link>
    );
  }

  if (props?.page === "Signup") {
    links = (
      <Link to="/signin" style={{color: "white", textDecoration: "none"}}>
        {" "}
        <Button color="inherit">SignIn</Button>
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{color: "white", textDecoration: "none"}}> React Auth WDS </Link>
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
}
