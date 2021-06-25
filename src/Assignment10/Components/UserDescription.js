import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";

import Navbar from "../Components/Navbar";
import DeleteModal from "./DeleteModal";


const useStyles = makeStyles({
  descContainer: {
    width: "60%",
    margin: "100px auto 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  descImage: {
    width: "40%",
    height: "60%",
  },

  cardContent: {
    width: "40%",
    padding: "1rem 3rem",
    textAlign: "center",
  },

  description: {
    margin: "1rem 0",
    fontWeight: "550",
  },

  btnSection: {
    width: "40%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },

  editBtn: {
    backgroundColor: "#86c306",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#fff",
    padding: "0.5rem 2rem",
    margin: "1rem",

    "&:hover": {
      background: "#78AF05",
    },
  },

  cancelBtn: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "0.5rem 2rem",
    margin: "0.5rem",

    "&:hover": {
      background: "#86c306",
      color: "#fff",
    },
  },
});

export default function UserDescription(props) {
  const classes = useStyles();
  const { Id } = useParams();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const data = JSON.parse(localStorage.getItem("UserData"));
  console.log(data);

  const selectedData = data[Id - 1];
  return (
    <>
      <Navbar />
      <Card className={classes.descContainer}>
        <CardMedia
          className={classes.descImage}
          component="img"
          image={selectedData.avatar}
          alt="Image"
        />

        <CardContent className={classes.cardContent}>
          <Typography variant="h4" className={classes.description}>
            {`First Name: ${selectedData.first_name}`}
          </Typography>
          <Typography variant="h4" className={classes.description}>
            {`Last Name: ${selectedData.last_name}`}
          </Typography>
          <Typography variant="h6" className={classes.description}>
            {`Email: ${selectedData.email}`}
          </Typography>
        </CardContent>

        <CardActions className={classes.btnSection}>
          <Button
            variant="contained"
            className={classes.editBtn}
            color="default"
          >
            {"Edit"}
          </Button>
          <Button
            variant="contained"
            className={classes.cancelBtn}
            color="default"
            onClick={() => {
              setDeleteModalOpen(true);
            }}
          >
            {"Delete"}
          </Button>
        </CardActions>
      </Card>

      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={() => {
          setDeleteModalOpen(false);
        }}
        index={Id}
        data={data}
      />
    </>
  );
}
