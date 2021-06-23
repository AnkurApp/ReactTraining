import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  mobileCard: {
    height: "400px",
  },
  image: {
    width: "100%",
    margin: "auto",
    height: "250px",
    objectFit: "contain",
  },

  remove: {
    margin: "0",
    padding: "0",
  },

  btn: {
    margin: "0 13rem",
    padding: "0.5rem 2rem",
    backgroundColor: "#86c306",

    "&:hover": {
      background: "#78AF05",
    },
  },

  btnLink: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#fff",
    border: "none",
    textDecoration: "none",
  },
});

export default function MobileCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.mobileCard}>
      <CardMedia
        className={classes.image}
        component="img"
        image={props.src}
        alt="Mobile"
      />

      <CardContent align="center">
        <Typography variant={"h6"}>{props.title}</Typography>
      </CardContent>

      <CardActions align="center" className={classes.remove}>
        <Button className={classes.btn}>
          <Link
            to={`/mobileDescription/${props.index}`}
            className={classes.btnLink}
          >
            {"Click"}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
