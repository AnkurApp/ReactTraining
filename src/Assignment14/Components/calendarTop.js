import React from "react";

import { makeStyles, Box, Button, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSide: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cafeImage: {
    display: "block",
    width: "50px",
    height: "50px",
    marginRight: "1rem",
  },

  btn: {
    border: "2px solid #2f73eb",
    borderRadius: "28px",
    padding: ".3rem 2.2rem",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "inherit",
    color: "#2f73eb",
  },

  heading: {
    fontWeight: "bolder",
  },

  subHeading: {
    marginTop: "-7px",
    color: "#808080",
    fontWeight: "bold",
  },
});

export default function CalendarTop(props) {
  const classes = useStyles();
  return (
    <Box className={classes.headingContainer}>
      <Box className={classes.leftSide}>
        <Avatar
          src="Assignment14Images/appinventivCafe.jpg"
          alt="AppImage"
          className={classes.cafeImage}
        />
        <Box>
          <Typography variant="h5" className={classes.heading}>
            {props.name}
          </Typography>
          <Typography variant="h6" className={classes.subHeading}>
            {props.no_of_employees}
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" className={classes.btn}>
        {"Action"}
      </Button>
    </Box>
  );
}
