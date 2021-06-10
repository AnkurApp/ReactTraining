import React from "react";
import MobileStepper from "./stepper";
import { makeStyles, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles({
  stepperContainer: {
    width: "50%",
    borderRadius: "6px",
    margin: "3rem auto",
    padding: "2rem 3rem",
    paddingBottom: '10px',
    backgroundColor: "#ffffff",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)",
  },
  LatestNews: {
    display: "flex",
    alignItems: "center",
  },

  heading: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#424242",
    marginLeft: "10px",
  },

  heading2: {
    color: "#424242",
    width: "90%",
    fontSize: "25px",
    lineHeight: '1.3',
    marginTop: "10px",
  },

  dateTime: {
    color: "#424242",
    fontWeight: "300",
  },
  paragraph: {
    width: "95%",
    color: "#424242",
    fontSize: '17px',
    letterSpacing: '.5px',
    marginTop: "20px",
    fontWeight: "400",
  },
});

export default function Stepper() {
  const classes = useStyles();
  return (
    <div className={classes.stepperContainer}>
      <div className={classes.LatestNews}>
        <DescriptionIcon color={"primary"} />
        <Typography className={classes.heading} variant={"h6"}>
          {"Latest News"}
        </Typography>
      </div>
      <Typography variant={"h5"} className={classes.heading2}>
        {
          "LocalMonero/AgoraDesk now allows you to import reputation from LocalBitcoins and/or Paxful!"
        }
      </Typography>
      <Typography className={classes.dateTime}>
        {"2020-12-06 12:00 UTC"}
      </Typography>
      <Typography varient={"body1"} className={classes.paragraph}>
        {
          "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
        }
      </Typography>
      <MobileStepper />
    </div>
  );
}
