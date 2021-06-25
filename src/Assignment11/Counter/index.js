import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementNum, decrementNum } from "./action";
import {
  makeStyles,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    width: "30%",
    height: "200px",
    margin: "10rem auto",
    textAlign: "center",
    padding: "3rem 1rem ",
  },

  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "5rem",
  },

  btnSection: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  btn: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "0.5rem 2rem",
    margin: "0.5rem",

    "&:hover": {
      background: "#86c306",
      border: "none",
      color: "#fff",
    },
  },
});
export default function Counter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.Reducer);

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography className={classes.heading}>
          {"Counter: "}
          {count}
        </Typography>
      </CardContent>

      <CardActions className={classes.btnSection}>
        <Button
          className={classes.btn}
          color="default"
          variant="outlined"
          type="submit"
          onClick={() => {
            dispatch(incrementNum(1));
          }}
        >
          {"INCREMENT"}
        </Button>

        <Button
          className={classes.btn}
          color="default"
          variant="outlined"
          type="submit"
          onClick={() => {
            dispatch(decrementNum(1));
          }}
        >
          {"DECREMENT"}
        </Button>
      </CardActions>
    </Card>
  );
}
