import React, { useEffect } from "react";
import {
  makeStyles,
  Box,
  CardContent,
  Typography,
  Grid,
  Card,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { colorsApi } from "../Modules/action";

const useStyles = makeStyles({
  cardContainer: {
    width: "100%",
    margin: "auto",
    backgroundColor: "#D3D3D3",
    padding: "5rem",
    height: "100vh",
  },
  colorCard: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "250px",
  },
  bgColor: {
    width: "10rem",
    height: "80%",
  },

  text: {
    textTransform: "uppercase",
  },
});

export default function Assignment12() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.colorReducer);

  useEffect(() => {
    dispatch(colorsApi());
  }, []);
  return (
    <Box>
      <Grid className={classes.cardContainer} container spacing={8}>
        {color?.map((current, index) => (
          <Grid key={index} item lg={4} xs={12}>
            <Card className={classes.colorCard}>
              <Box
                className={classes.bgColor}
                style={{ backgroundColor: current.color }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                >
                  {current.name}
                </Typography>
                <Typography variant="h5" align="center">
                  {current.color}
                </Typography>
                <Typography variant="h5" align="center">
                  {current.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
