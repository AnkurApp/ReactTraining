import React from "react";

import Moviedetails from "./movieDetails";
import MovieRating from "./movieRating";

import { makeStyles, Card, CardContent, Button } from "@material-ui/core";

const useStyles = makeStyles({
  movieCard: {
    width: "25%",
    margin: "1.5rem",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },

  btn: {
    width: "50%",
    backgroundColor: "#86c306",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",

    "&:hover": {
      background: "#78AF05",
    },
  },
});

export default function MovieCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.movieCard}>
      <CardContent>
        <Moviedetails
          src={props.object.src}
          name={props.object.name}
          releaseDate={props.object.releaseDate}
        />
        <MovieRating id={props.object.id} rating={props.object.rating} />

        <Button variant="contained" className={classes.btn} color="default">
          {"Click"}
        </Button>
      </CardContent>
    </Card>
  );
}
