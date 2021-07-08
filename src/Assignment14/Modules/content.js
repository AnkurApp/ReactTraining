import React from "react";

import { makeStyles, Box, Divider, Typography } from "@material-ui/core";
import Schedule from "./schedule";
import Days from "../Components/weekdays";
import Calendar from "./calendar";

const useStyles = makeStyles({
  mainContainer: {
    marginLeft: "15.7%",
    marginTop: "5rem",
  },

  divider: {
    margin: "2rem 0 1rem",
  },

  cafeSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5rem 0 2rem",
  },

  cafeName: {
    marginRight: "5rem",
    fontWeight: "bold",
  },

  daysSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default function Content() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Schedule />
      <Divider className={classes.divider} />

      <Box className={classes.cafeSection}>
        <Typography variant="h5" className={classes.cafeName}>
          {"Lilli's Cafe"}
        </Typography>

        <Days day={" Mon 11"} />
        <Days day={" Tue 12"} />
        <Days day={" Wed 13"} activeDay={true} />
        <Days day={" Thur 14"} />
        <Days day={" Fri 15"} />
        <Days day={" Sat 16"} />
        <Days day={" Sun 17"} />
      </Box>

      <Divider className={classes.divider} />

      <Calendar />
    </Box>
  );
}
