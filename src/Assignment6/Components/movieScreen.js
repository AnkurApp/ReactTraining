import React, { useState } from "react";

import MovieCard from "./movieCard";
import movieData from "./Data";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  movieContainer: {
    width: "100%",
    margin: "1rem auto",
    textAlign: 'center',
  },
  
  movieHeading: {
    fontSize: "35px",
    fontWeight: "600",
    textTransform: "uppercase",
    display: "inline-block",
  },

  headingColor: {
    color: "#78AF05",
    fontWeight: "bold",
    fontSize: "45px",
    display: "inline-block",
  },

  movieCardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function Moviescreen() {
  const classes = useStyles();

  const [rating4, setRating4] = useState(movieData[4].rating);
  const [rating5, setRating5] = useState(movieData[5].rating);

  setTimeout(() => {
    setRating4(Math.round((rating4 + 0.1) * 10) / 10);
    setRating5(Math.round((rating5 + 0.1) * 10) / 10);

    movieData[4].rating = rating4;
    movieData[5].rating = rating5;
  }, 10000);
  return (
    <div className={classes.movieContainer}>
      <Typography variant="h2" className={classes.movieHeading} align="center">
        {"Movie"}
      </Typography>
        <Typography variant="h2" className={classes.headingColor}>
          {"Center"}
        </Typography>
      <div className={classes.movieCardContainer}>
        {movieData.map((current, index) => (
          <MovieCard key={index} object={current} />
        ))}
      </div>
    </div>
  );
}
