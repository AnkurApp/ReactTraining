import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core";

import Moviescreen from "./movieScreen";

const useStyles = makeStyles({
  loginContainer: {
    width: "100%",
    backgroundColor: "",
    position: "relative",
  },

  loginCard: {
    width: "30%",
    margin: "auto",
    position: "absolute",
    padding: "1rem 2rem",
    top: "200px",
    left: "33%",
    backgroundColor: "#F5F5F5",
  },

  loginHeading: {
    fontWeight: "bold",
    marginBottom: ".8rem",
  },

  formContainer: {
    width: "100%",
  },

  loginInput: {
    width: "100%",
    margin: "1rem auto",
    backgroundColor: "#fff",
  },

  loginBtn: {
    width: "100%",
    margin: "1.3rem auto",
    padding: ".6rem 0",
    marginBottom: "1.2rem",
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

export default function LoginPage() {
  const classes = useStyles();

  const [isMovie, setIsMovie] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const checkLogin = () => {
    setIsLogin(false);
    setIsMovie(true);
  };

  return (
    <>
      {isLogin && (
        <div className={classes.loginContainer}>
          <Card className={classes.loginCard}>
            <CardContent>
              <Typography
                align={"center"}
                variant={"h4"}
                className={classes.loginHeading}
              >
                {"Login Form"}
              </Typography>
              <form
                className={classes.formContainer}
                onSubmit={checkLogin}
                autoComplete="off"
              >
                <TextField
                  id="email"
                  label="Email Address"
                  className={classes.loginInput}
                  type={"email"}
                  variant="outlined"
                  required
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.loginInput}
                  variant="outlined"
                  type={"password"}
                  required
                />
                <Button
                  className={classes.loginBtn}
                  variant="contained"
                  color="default"
                  type="submit"
                >
                  {"Login"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
      {isMovie && <Moviescreen />}
    </>
  );
}
