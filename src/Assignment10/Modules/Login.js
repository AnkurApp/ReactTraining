import React from "react";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  formContainer: {
    width: "40%",
    margin: "10rem auto",
    padding: "2rem",
    border: "1px solid #000",
  },

  formSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 0",
  },

  formInput: {
    width: "80%",
    margin: "1rem",
  },

  btn: {
    width: "80%",
    padding: "0.5rem 0",
    margin: "1.5rem",
    backgroundColor: "#86c306",
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

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "token",
      "asdjiwefbcnsdjisdiodsmclsdfiusdfsdnczsdkcjsd"
    );
    history.push("/dashboard");
  };

  return (
    <Container className={classes.formContainer}>
      <Typography align="center" variant="h3">
        {"Login Form"}
      </Typography>

      <form className={classes.formSection} onSubmit={handleSubmit}>
        <TextField
          type="email"
          id="email"
          className={classes.formInput}
          label="Email"
          variant="outlined"
          required
        />

        <TextField
          type="password"
          id="password"
          className={classes.formInput}
          label="Password"
          variant="outlined"
          required
        />

        <Button
          className={classes.btn}
          color="default"
          variant="outlined"
          type="submit"
        >
          {"Login"}
        </Button>
      </form>
    </Container>
  );
}
