import React from "react";

import { makeStyles, Box, } from "@material-ui/core";

import CalendarTop from "../Components/calendarTop";

const useStyles = makeStyles({
  calendarContainer: {
    padding: "1rem 5rem 0 2rem",
  },
});

export default function Calendar() {
  const classes = useStyles();
  return (
    <Box className={classes.calendarContainer}>
      <CalendarTop name={"Bar"} no_of_employees={"2 employees"} />
    </Box>
  );
}
