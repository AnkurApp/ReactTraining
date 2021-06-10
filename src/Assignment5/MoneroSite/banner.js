import React from "react";
import {
  Button,
  makeStyles,
  TableContainer,
  TextField,
  Typography,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CountrySelect from "./selectcountry";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
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

  cardSection: {
    display: "flex",
    justifyContent: "center",
    width: "95%",
    margin: "auto",
    marginTop: "1rem",
    padding: " 1rem 3rem",
  },

  card: {
    width: "40%",
    backgroundColor: "#fff",
    padding: "1.5rem",
    marginRight: "20px",
  },
  cardFlex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },

  button: {
    width: "47%",
    padding: ".8rem 8rem",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  buyBtn: {
    backgroundColor: "#1564c0",
    width: "47%",
    padding: ".8rem 8rem",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  amount: {
    width: "47%",
    marginBottom: "20px",
    marginleft: "0",
    fontSize: "18px",
  },
  searchButton: {
    width: "98%",
    height: "50px",
    backgroundColor: "#1564c0",
  },

  text: {
    textAlign: "center",
    fontSize: "40px",
    lineHeight: "1.1",
    color: "#424242",
  },

  signUp: {
    marginTop: "1.5rem",
    backgroundColor: "#388538",
    color: "#ffffff",
    fontSize: "16px",
    padding: "13px 18px",
    fontWeight: "600",
  },

  horizontalLine: {
    width: "100%",
    height: "1px",
    margin: " 2rem auto",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
});

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <div className={classes.cardSection}>
        <div className={classes.card}>
          <div className={classes.cardFlex}>
            <Button
              startIcon={<ShoppingCartOutlinedIcon />}
              className={classes.button}
              className={classes.buyBtn}
              color={"primary"}
              variant={"contained"}
            >
              {"buy"}
            </Button>
            <Button
              startIcon={<ShoppingCartOutlinedIcon />}
              className={classes.button}
              variant={"outlined"}
            >
              {"Sell"}
            </Button>

            <TextField
              className={classes.amount}
              variant={"outlined"}
              label={"Amount"}
            ></TextField>

            <CountrySelect />
            <CountrySelect />
            <CountrySelect />
            <Button
              startIcon={<SearchOutlinedIcon />}
              color={"primary"}
              variant={"contained"}
              className={classes.searchButton}
            >
              {"Search"}
            </Button>
          </div>
        </div>

        <div className={classes.card}>
          <Typography className={classes.text} variant={"h4"}>
            {"Buy Monero."}
          </Typography>
          <Typography className={classes.text} variant={"h4"}>
            {"Sell Monero."}
          </Typography>
          <Typography className={classes.text} variant={"h4"}>
            {"Cash or Online."}
          </Typography>
          <Typography className={classes.text} variant={"h4"}>
            {"Anywhere."}
          </Typography>
          <Typography className={classes.text}>
            <Button
              variant={"contained"}
              startIcon={<PersonAddOutlinedIcon />}
              size="large"
              className={classes.signUp}
            >
              {"Sign Up Free"}
            </Button>
          </Typography>
        </div>
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
