import React, { useState } from "react";

import { makeStyles, Grid, Button, Box } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import UserCard from "../Components/UserCard";
import Navbar from "../Components/Navbar";
import FormModal from "../Components/UserForm";

const useStyles = makeStyles({
  userContainer: {
    width: "100%",
    marginTop: "100px",
    textAlign: "center",
  },

  cardContainer: {
    width: "90%",
    margin: "auto",
    padding: "1rem 3rem",
  },

  addBtn: {
    backgroundColor: "#86c306",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#fff",
    padding: "0.5rem 1rem",

    "&:hover": {
      background: "#78AF05",
    },
  },
});

export default function UserDashboard(props) {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);

  return (
    <Box className={classes.userContainer}>
      <Navbar />

      <Button
        variant="contained"
        startIcon={<PersonAddIcon />}
        className={classes.addBtn}
        color="default"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {"Add User"}
      </Button>

      <Grid className={classes.cardContainer} container spacing={8}>
        {props.userData.map((current) => (
          <Grid key={current.id} item lg={4} xs={12}>
            <UserCard
              index={current.id}
              src={current.avatar}
              fname={current.first_name}
              data={props.userData}
            />
          </Grid>
        ))}
      </Grid>

      <FormModal
        formType={"ADD"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        placeholderFname={"Enter Your First Name"}
        placeholderLname={"Enter Your Last Name"}
        placeholderEmail={"Enter Your Email"}
        btnName={"ADD"}
        userData={props.userData}
        setUserData={props.setUserData}
      />
    </Box>
  );
}
