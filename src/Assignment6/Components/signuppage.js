import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core";

import LoginPage from "./loginpage";

const useStyles = makeStyles({
  signupContainer: {
    width: "100%",
    position: "relative",
  },

  signupCard: {
    width: "30%",
    margin: "auto",
    position: "absolute",
    padding: "1rem 2rem",
    top: "250px",
    left: "33%",
    backgroundColor: "#F5F5F5",
  },

  signupHeading: {
    fontWeight: "bold",
    marginBottom: ".8rem",
  },

  signupInput: {
    width: "100%",
    margin: "1rem auto",
    backgroundColor: "#fff",
  },

  signupBtn: {
    width: "100%",
    margin: "1.2rem auto",
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

export default function SignupPage() {
  const classes = useStyles();

  // const validate = () => {
  //   console.log(document.getElementById("username").value);
  // };
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const checkSignUp = () => {
    setIsSignUp(false);
    setIsLogin(true);
  };

  return (
    <>
      {isSignUp && (
        <div className={classes.signupContainer}>
          <Card className={classes.signupCard}>
            <CardContent>
              <Typography
                align={"center"}
                variant={"h4"}
                className={classes.signupHeading}
              >
                {"Sign Up Form"}
              </Typography>
              <form onSubmit={checkSignUp} autoComplete="off">
                <TextField
                  id="username"
                  label="Username"
                  className={classes.signupInput}
                  type={"text"}
                  variant="outlined"
                  name="userName"
                  required
                />
                <TextField
                  id="email"
                  label="Email Address"
                  className={classes.signupInput}
                  type={"email"}
                  variant="outlined"
                  required
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.signupInput}
                  variant="outlined"
                  type={"password"}
                  required
                />
                <Button
                  className={classes.signupBtn}
                  variant="contained"
                  color="default"
                  type="submit"
                >
                  {"Sign Up"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
      {isLogin && <LoginPage />}
    </>
  );
}
