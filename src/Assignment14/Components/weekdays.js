import React from "react";

import { makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    padding: ".8rem 2rem",
    textTransform: "Capitalize",
    borderRadius: "30px",
    color: "#909090",
  },

  btnText: {
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "1rem",
  },
});

export default function Days(props) {
  const classes = useStyles();
  const { activeDay } = props;
  let activeStyle = {};
  if (activeDay) {
    activeStyle.color = "#fff";
    activeStyle.backgroundColor = "#2f73eb";
  }
  return (
    <Button className={classes.btn} style={activeStyle}>
      <Typography>{"+"}</Typography>
      <Typography className={classes.btnText}>{props.day}</Typography>
    </Button>
  );
}
