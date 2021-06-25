import React from "react";
import cardData from "./Data";
import MobileCard from "../Components/Card";
import Navbar from "../Components/Navbar";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    marginTop: "100px",
    padding: "1rem 3rem",
  },
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid className={classes.cardContainer} container spacing={8}>
        {cardData.map((current) => (
          <Grid key={current.id} item lg={4} xs={12}>
            <MobileCard
              index={current.id}
              src={current.src}
              title={current.title}
              data={cardData}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
