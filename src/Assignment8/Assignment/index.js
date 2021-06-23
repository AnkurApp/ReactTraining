import React, { useState } from "react";

import DataTable from "../Components/Datatable";
import ModalComponent from "../Components/Addmodal";

import "./index.css";

export default function Assignment8() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [ArrayIndex, setArrayIndex] = useState(0);
  const [formType, setFormType] = useState("");
  return (
    <div className={"mainContainer"}>
      <div className={"headerSection"}>
        <h1>{"Student Details"}</h1>
        <button
          className={"btn"}
          type="submit"
          onClick={() => {
            setModalOpen(true);
            setFormType("ADD");
          }}
        >
          {"Add Student"}
        </button>
      </div>
      <ModalComponent
        ModalOpen={modalOpen}
        modalOpen={setModalOpen}
        formType={formType}
        setFormType={() => {
          setFormType("");
        }}
        setModal={setModalOpen}
        data={data}
        setData={setData}
        ArrayIndex={ArrayIndex}
        setArrayIndex={setArrayIndex}
      />

      <DataTable
        data={data}
        setData={setData}
        ArrayIndex={ArrayIndex}
        setArrayIndex={setArrayIndex}
        setFormType={setFormType}
        setModal={setModalOpen}
      />
    </div>
  );
}
