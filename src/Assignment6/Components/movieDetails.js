import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "320px",
    display: "block",
  },

  movieName: {
    fontSize: '25px',
    fontWeight: 'bold',
  }
});

export default function Moviedetails(props) {
  const classes = useStyles();
  return (
    <>
      <img src={props.src} alt="" className={classes.image} />
      <h3 className={classes.movieName}>{props.name}</h3>
      <p>{`Release Date: ${props.releaseDate}`}</p>
    </>
  );
}
