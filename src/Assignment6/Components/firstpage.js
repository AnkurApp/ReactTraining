import React, { useState } from "react";

import LoginPage from "./loginpage";
import SignupPage from "./signuppage";

import {
  makeStyles,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  pageContainer: {
    width: "100%",
    position: "relative",
  },

  pageCard: {
    width: "30%",
    margin: "auto",
    position: "absolute",
    padding: "1rem 2rem",
    top: "200px",
    left: "33%",
    backgroundColor: "#F5F5F5",
  },

  pageHeading: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  btnSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: "60%",
    margin: " 1rem 0",
    padding: ".6rem 0",
    backgroundColor: "#86c306",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",

    "&:hover": {
      background: "#78AF05",
    },
  },
});

export default function Firstpage() {
  const classes = useStyles();

  const [isHome, setIsHome] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const checkLogin = () => {
    setIsHome(false);
    setIsLogin(true);
  };

  const checkSignUp = () => {
    setIsHome(false);
    setIsSignUp(true);
  };

  return (
    <>
      {isHome && (
        <div className={classes.pageContainer}>
          <Card className={classes.pageCard}>
            <CardContent>
              <Typography
                align={"center"}
                variant={"h5"}
                className={classes.pageHeading}
              >
                {"Movie Center"}
              </Typography>
            </CardContent>

            <CardActions className={classes.btnSection}>
              <Button
                className={classes.btn}
                variant="contained"
                color="default"
                type="submit"
                onClick={checkLogin}
              >
                {"Login"}
              </Button>
              <Typography
                align={"center"}
                variant={"body1"}
                className={classes.pagePara}
              >
                {"Or"}
              </Typography>
              <Button
                className={classes.btn}
                variant="contained"
                color="default"
                type="submit"
                onClick={checkSignUp}
              >
                {"Sign Up"}
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
      {isLogin && <LoginPage />}
      {isSignUp && <SignupPage />}
    </>
  );
}
