import React from "react";

import { makeStyles } from "@material-ui/core";
import Header from "../Sections/header";
import Sidebar from "../Sections/sidedrawer";
import Banner from "../Sections/banner";

const styles = makeStyles({
  maincontainer: {
    backgroundColor: "#f4f6f8",
  },
});

export default function MaterialMonero() {
  const classes = styles();
  return (
    <div className={classes.maincontainer}>
      <Sidebar />
      <Header />
      <Banner />
    </div>
  );
}
