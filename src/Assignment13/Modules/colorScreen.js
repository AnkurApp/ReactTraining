import React, { useContext } from "react";

import { ColorContext } from "./context";
import {
  makeStyles,
  Box,
  Switch,
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    width: "100%",
    margin: "auto",
    padding: "5rem",
  },

  colorCard: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "250px",
  },

  text: {
    textTransform: "uppercase",
  },

  btnSection: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
  },
});

export default function ColorScreen() {
  const classes = useStyles();

  const { state, dispatch } = useContext(ColorContext);
  const { colorState, themeState } = state;
  const { themeDispatch, colorDispatch } = dispatch;

  console.log(themeState);

  return (
    <Box
      style={{
        backgroundColor: themeState.background,
        color: themeState.color,
        height: "100vh",
      }}
    >
      <Switch
        color="secondary"
        onClick={() =>
          themeState.background === "white"
            ? themeDispatch({ type: "DARK" })
            : themeDispatch({ type: "LIGHT" })
        }
      />

      <Grid className={classes.cardContainer} container spacing={8}>
        {colorState.colorsData?.map((current, index) => (
          <Grid key={index} item lg={4} xs={12}>
            <Card
              className={classes.colorCard}
              style={{ backgroundColor: current.color }}
            >
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
      <Container className={classes.btnSection}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => colorDispatch({ type: "CHANGE_COLOR" })}
        >
          {"Change Year"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => colorDispatch({ type: "CHANGE_DEFAULT" })}
        >
          {"Change To Original"}
        </Button>
      </Container>
    </Box>
  );
}
