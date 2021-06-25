import React from "react";
import {
  makeStyles,
  AppBar,
  Button,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  navbarFlex: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },

  spanLogo: {
    textTransform: "uppercase",
    color: "#86c306",
  },

  listItem: {
    position: "relative",
  },

  navLink: {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    color: "#333",
    position: "absolute",
    right: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "1px",

    "&:hover": {
      background: "#D3D3D3",
    },
  },

  logBtn: {
    width: "50%",
    padding: "0.5rem 1rem",
    backgroundColor: "#86c306",
    marginLeft: "300px",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",
    border: "none",

    "&:hover": {
      background: "#78AF05",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    window.localStorage.clear();
    history.push("/");
  };
  return (
    <AppBar
      position="fixed"
      color="default"
      className={classes.navbarContainer}
    >
      <List className={classes.navbarFlex}>
        <Container className={classes.logo}>
          <span className={classes.spanLogo}>{"User "}</span>
          {"Details"}
        </Container>
        <ListItem className={classes.listItem}>
          <Link
            to={{ pathname: "/dashboard" }}
            exact
            className={classes.navLink}
          >
            {"Dashboard"}
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.logBtn}
            onClick={() => {
              handleClick();
            }}
          >
            {"Logout"}
          </Button>
        </ListItem>
      </List>
    </AppBar>
  );
}
