import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

import { makeStyles, Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  deleteModal: {
    width: "30%",
    margin: "2rem auto",
    marginTop: "100px",
    textAlign: "center",
    padding: "2rem 0",
    backgroundColor: "aliceblue",
  },
  btnSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2rem",
  },
  btn: {
    backgroundColor: "rgb(180, 178, 178)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "0.5rem 2rem",
    margin: "1rem",

    "&:hover": {
      background: "#86c306",
      color: "#fff",
    },
  },
});

export default function DeleteModal(props) {
  const classes = useStyles();
  const history = useHistory();

  const DeleteRequest = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("UserData"));
      const response = await axios.delete("https://reqres.in/api/users/");
      if (response.status === 204) {
        console.log(data);
        console.log(props.index);
        data.splice(props.index, 1);
        console.log(data);
        localStorage.setItem("UserData", JSON.stringify(data));
        alert("User Deleted");
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={props.deleteModalOpen}
      ariaHideApp={false}
      className={classes.deleteModal}
      onRequestClose={() => props.setDeleteModalOpen()}
    >
      <Typography variant={"h6"} align={"center"}>
        {"Are you sure you want to delete the User?"}
      </Typography>
      <Box className={classes.btnSection}>
        <Button
          variant="contained"
          color="default"
          className={classes.btn}
          onClick={DeleteRequest}
        >
          {"Yes"}
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.btn}
          onClick={() => props.setDeleteModalOpen()}
        >
          {"Cancel"}
        </Button>
      </Box>
    </Modal>
  );
}
