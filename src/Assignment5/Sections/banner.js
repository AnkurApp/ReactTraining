import React from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

import CardSection from "./cardSection";
import DataTable from "./table";
import Parasection from "./parasection";
import Stepper from "./stepperSection";
import Footer from "./footer";

const useStyles = makeStyles({
  contentContainer: {
    marginTop: "75px",
    marginLeft: "85px",
    backgroundColor: "#f4f6f8",
    width: "93%",
    margin: "auto",
    padding: "1rem 1rem",
  },

  horizontalLine: {
    width: "100%",
    height: "1px",
    margin: " 2rem auto",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },

  buyTable: {
    margin: "2rem 0",
  },

  tableHeading: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    marginLeft: "145px",
  },
});

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <CardSection />

      <div className={classes.buyTable}>
        <Typography variant={"h4"} className={classes.tableHeading}>
          {"Buy Monero online in India"}
        </Typography>
        <DataTable columnOne={"Seller"} />
      </div>

      <div className={classes.buyTable}>
        <Typography variant={"h4"} className={classes.tableHeading}>
          {"Sell Monero online in India"}
        </Typography>
        <DataTable columnOne={"Buyer"} />
      </div>

      <div className={classes.horizontalLine}></div>

      <Parasection />

      <div className={classes.horizontalLine}></div>

      <Stepper />

      <div className={classes.horizontalLine}></div>

      <Footer />
    </div>
  );
}
