import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

import { makeStyles, Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  deleteModal: {
    width: "30%",
    marginTop: "100px",
  },
});

export default function DeleteModal(props) {
  const classes = useStyles();
  const history = useHistory();

  const DeleteRequest = async () => {
    try {
      const response = await axios.delete("https://reqres.in/api/users/");
      if (response.status === 204) {
        props.data.splice(props.index, 1);
        localStorage.setItem("UserData", JSON.stringify(props.data));
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
          className={classes.cancelBtn}
          onClick={() => props.setDeleteModalOpen()}
        >
          {"Cancel"}
        </Button>
      </Box>
    </Modal>
  );
}
