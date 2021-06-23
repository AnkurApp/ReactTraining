import React from "react";
import { useParams } from "react-router-dom";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import cardData from "../Modules/Data";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles({
  descContainer: {
    width: "80%",
    margin: "100px auto 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  descImage: {
    width: "50%",
    height: "80%",
  },

  cardContent: {
    padding: "1rem 3rem",
  },

  descriptionHeading: {
    fontWeight: "600",
    marginBottom: "1.5rem",
  },

  description: {
    margin: "1rem 0",
    fontWeight: "550",
  },
});

export default function Description() {
  const classes = useStyles();
  const { Id } = useParams();

  const selectedData = cardData.find((data) => data.id === Id);
  return (
    <>
      <Navbar />
      <Card className={classes.descContainer}>
        <CardMedia
          className={classes.descImage}
          component="img"
          image={selectedData.src}
          alt="Image"
        />

        <CardContent className={classes.cardContent}>
          <Typography variant="h3" className={classes.descriptionHeading}>
            {selectedData.title}
          </Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`Price: ${selectedData.Price}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`Features: ${selectedData.Features}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`Processor: ${selectedData.Processor}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`Battery: ${selectedData.Battery}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`RearCamera: ${selectedData.RearCamera}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`FrontCamera: ${selectedData.FrontCamera}`}</Typography>
          <Typography
            variant="h6"
            className={classes.description}
          >{`Description: ${selectedData.description}`}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
