import React, { useState } from "react";

import Modal from "react-modal";
import DataForm from "../Components/form";
import DataTable from "../Components/Datatable";

import "./index.css";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  year: "",
  branch: "",
};

export default function Assignment8() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [inputValues, setInputValues] = useState(initialValues);
  const [errorValues, setErrorValues] = useState("");

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputValues.fname &&
      !inputValues.lname &&
      !inputValues.email &&
      !inputValues.year &&
      !inputValues.branch
    ) {
      setErrorValues("This field is required");
    } else {
      let arr = data;
      arr.unshift(inputValues);
      setData([...arr]);
      setModalOpen(false);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"headerSection"}>
        <h1>{"Student Details"}</h1>
        <button
          className={"btn"}
          type="submit"
          onClick={() => setModalOpen(true)}
        >
          {"Add Student"}
        </button>
      </div>

      <Modal
        className={"modalContainer"}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <h2>
          <span className={"primaryColor"}>{"ADD "}</span>
          {"Data"}
        </h2>

        <DataForm
          fname={"fname"}
          lname={"lname"}
          email={"email"}
          year={"year"}
          branch={"branch"}
          placeholderFname={"Enter First Name"}
          placeholderLname={"Enter Last Name"}
          placeholderEmail={"Enter Email"}
          placeholderYear={"Enter Year"}
          placeholderBranch={"Enter Branch"}
          change={handleChange}
          submit={handleSubmit}
          error={errorValues}
          setModal={setModalOpen}
          data={data}
          setData={setData}
        />
      </Modal>

      <DataTable data={data} />
    </div>
  );
}
