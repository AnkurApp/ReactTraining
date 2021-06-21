import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DataForm from "./form";

export default function ModalComponent(props) {
  const [inputValues, setInputValues] = useState({
    fname: "",
    lname: "",
    email: "",
    year: "",
    branch: "",
  });

  const [errorValues, setErrorValues] = useState([]);

  useEffect(() => {
    if (props.formType === "EDIT") {
      setInputValues(props.data[props.ArrayIndex]);
    }
  }, [props.formType]);

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
      let arr = props.data;
      arr.unshift(inputValues);
      props.setData([...arr]);
      props.modalOpen(false);
      props.setFormType();
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.modalOpen(false);
    props.setFormType();
    handleEditData(inputValues, props.ArrayIndex);
  };

  const handleEditData = (editedArray, index) => {
    props.data[index] = editedArray;
    props.setData(props.data);
  };

  return (
    <Modal
      className={"modalContainer"}
      isOpen={props.ModalOpen}
      onRequestClose={() => props.modalOpen(false)}
    >
      <h2>
        <span className={"primaryColor"}>{props.formType}</span>
        {" Data"}
      </h2>
      {props.formType === "ADD" && (
        <DataForm
          fname={"fname"}
          lname={"lname"}
          email={"email"}
          year={"year"}
          branch={"branch"}
          placeholderFname={"Enter First Name"}
          placeholderLname={"Enter Last Name"}
          placeholderEmail={"Enter your Email"}
          placeholderYear={"Enter your Year"}
          placeholderBranch={"Enter your Branch"}
          submit={handleSubmit}
          change={handleChange}
          error={errorValues}
          formButton={"Add"}
          setModal={props.setModal}
          data={props.data}
          setData={props.setData}
        />
      )}
      {props.formType === "EDIT" && (
        <DataForm
          fname={"fname"}
          lname={"lname"}
          email={"email"}
          year={"year"}
          branch={"branch"}
          placeholderFname={props.data[props.ArrayIndex].fname}
          placeholderLname={props.data[props.ArrayIndex].lname}
          placeholderEmail={props.data[props.ArrayIndex].email}
          placeholderYear={props.data[props.ArrayIndex].year}
          placeholderBranch={props.data[props.ArrayIndex].branch}
          submit={handleEdit}
          change={handleChange}
          error={errorValues}
          formButton={"Edit"}
          setModal={props.setModal}
          data={props.data}
          setData={props.setData}
        />
      )}
    </Modal>
  );
}
