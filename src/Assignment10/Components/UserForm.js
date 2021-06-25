import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

const useStyles = makeStyles({
  modalContainer: {
    width: "40%",
    margin: "10rem auto",
    border: "1px solid black",
    borderRadius: "20px",
    padding: "2rem 0",
    backgroundColor: "#ffffff",
  },

  heading: {
    fontSize: "30px",
    textAlign: "center",
  },

  primaryColor: {
    color: "#86c306",
    fontWeight: "bold",
  },

  formContainer: {
    width: "80%",
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 1rem",
  },

  formInput: {
    width: "80%",
    margin: "0.5rem auto",
  },

  btn: {
    width: "30%",
    padding: "0.5rem 0",
    margin: "1.5rem auto",
    backgroundColor: "#86c306",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",
    border: "none",

    "&:hover": {
      background: "#78AF05",
    },
  },
});

export default function FormModal(props) {
  const classes = useStyles();

  // const data = JSON.parse(localStorage.getItem("UserData"));
  const [userId, setUserId] = useState();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser();
  };

  const createUser = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/users/", {
        payLoad: {
          id: userId,
          first_name: values.fname,
          last_name: values.lname,
          email: values.email,
        },
      });

      const { payLoad } = response.data;
      let Data = JSON.parse(localStorage.getItem("UserData"));
      Data.push(payLoad);
      localStorage.setItem("Data", JSON.stringify(Data));
      props.setUserData([...props.userData, payLoad]);
      props.setModalOpen();
      setValues({ fname: "", lname: "", email: "" });
      setUserId(userId + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      className={classes.modalContainer}
      isOpen={props.modalOpen}
      ariaHideApp={false}
      onRequestClose={() => props.setModalOpen(false)}
    >
      <Typography className={classes.heading}>
        <span className={classes.primaryColor}>{props.formType}</span>
        {" Data"}
      </Typography>

      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          name="fname"
          label="First Name"
          className={classes.formInput}
          placeholder={props.placeholderFname}
          required
        />
        <TextField
          variant="outlined"
          type="text"
          name="lname"
          label="Last Name"
          className={classes.formInput}
          placeholder={props.placeholderLname}
          required
        />
        <TextField
          variant="outlined"
          type="email"
          name="email"
          label="Email"
          className={classes.formInput}
          placeholder={props.placeholderEmail}
          required
        />

        <Button
          className={classes.btn}
          color="default"
          variant="outlined"
          type="submit"
        >
          {props.btnName}
        </Button>
      </form>
    </Modal>
  );
}
