import React from "react";

import { makeStyles, Box, Typography, Button } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const useStyles = makeStyles({
  flexStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  scheduleContainer: {
    padding: "1rem 5rem 0 2rem",
  },

  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginRight: "5px",
  },

  colorHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2f73eb",
    marginRight: "5px",
  },

  icon: {
    color: "#909090",
  },

  calendarSection: {
    marginRight: "6rem",
  },

  dateSection: {
    width: "15rem",
    backgroundColor: "#f5f7fa",
    borderRadius: "30px",
    padding: ".5rem 3rem",
    marginRight: "1rem",
  },

  date: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    wordSpacing: "2px",
  },

  roundBorder: {
    backgroundColor: "#f5f7fa",
    borderRadius: "50%",
    padding: ".5rem .8rem",
    height: '35px',
  },

  btn: {
    border: "2px solid #2f73eb",
    borderRadius: "28px",
    padding: ".5rem 2rem",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "inherit",
    color: "#2f73eb",
    marginLeft: "1.2rem",
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <Box className={`${classes.scheduleContainer} ${classes.flexStyle}`}>
      <Box className={` ${classes.flexStyle} ${classes.schedule}`}>
        <Typography variant="h6" className={classes.heading}>
          {"Schedule: "}
        </Typography>
        <Typography variant="h6" className={classes.colorHeading}>
          {"Week"}
        </Typography>
        <ExpandMoreIcon className={classes.icon} />
      </Box>

      <Box className={`${classes.calendarSection} ${classes.flexStyle} `}>
        <Box className={`${classes.dateSection} ${classes.flexStyle}`}>
          <ChevronLeftIcon className={classes.icon} />

          <Box className={`${classes.date}  ${classes.flexStyle} `}>
            <Typography variant="h6" className={classes.date}>
              {"July1 - July10"}
            </Typography>
            <Typography variant="h6" style={{ color: "#909090" }}>
              {", 2021"}
            </Typography>
          </Box>

          <ChevronRightIcon className={classes.icon} />
        </Box>

        <DateRangeOutlinedIcon
          className={`${classes.icon} ${classes.roundBorder}`}
        />
      </Box>

      <Box className={classes.flexStyle}>
        <SearchRoundedIcon
          className={`${classes.icon} ${classes.roundBorder} `}
        />
        <Button variant="outlined" className={classes.btn}>
          {"Action"}
        </Button>
      </Box>
    </Box>
  );
}
