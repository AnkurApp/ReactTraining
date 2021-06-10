import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

const usestyles = makeStyles({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginLeft: "85px",
  },

  switch: {
    marginTop: "10px",
  },
  signUp: {
    backgroundColor: "#388538",
    color: "#ffffff",
    marginRight: "20px",
    fontSize: "15px",
    padding: "8px 25px",
    fontWeight: "600",
  },
  logIn: {
    backgroundColor: "#1564c0",
    color: "#ffffff",
    padding: "8px 25px",
    fontSize: "15px",
    fontWeight: "600",
  },
});

export default function Header() {
  const classes = usestyles();
  return (
    <AppBar position={"fixed"}>
      <Toolbar className={classes.headerContainer}>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value={"On"}
              control={<Switch className={classes.switch} />}
              label={"On"}
              labelPlacement="bottom"
            />
          </FormGroup>
        </FormControl>
        <div className={classes.btn}>
          <Button
            variant="contained"
            startIcon={<PersonAddOutlinedIcon />}
            className={classes.signUp}
          >
            {"Sign up Free"}
          </Button>
          <Button
            variant="contained"
            startIcon={<FingerprintIcon />}
            className={classes.logIn}
          >
            {"Log in"}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
