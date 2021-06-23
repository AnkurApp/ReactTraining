import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function DataTable(props) {
  const [search, setSearch] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (deleteIndex) => {
    let deleteData = props.data.filter((current, index) => {
      return deleteIndex !== index;
    });
    props.setData(deleteData);
  };

  const handleSearchInput = (e) => {
    if (e.target.value === "") setSearch(false);
    else {
      setSearch(true);
      let searchedValue = e.target.value;

      let arr = props.data.filter((current) => {
        return (
          current.fname.indexOf(searchedValue) > -1 ||
          current.email.indexOf(searchedValue) > -1
        );
      });
      setSearchedData(arr);
    }
  };

  return (
    <div className="tableContainer">
      <input
        className={"searchInput"}
        type={"text"}
        id={"search"}
        name={"search"}
        placeholder={"Search"}
        onKeyUp={handleSearchInput}
      />
      <table>
        <thead>
          <tr>
            <th>{"First Name"}</th>
            <th>{"Last Name"}</th>
            <th>{"Email"}</th>
            <th>{"Year"}</th>
            <th>{"Branch"}</th>
            <th>{"Actions"}</th>
          </tr>
        </thead>

        <tbody>
          {search ? (
            searchedData.length > 0 ? (
              searchedData?.map((current, index) => {
                return (
                  <tr key={index}>
                    <td>{current.fname}</td>
                    <td>{current.lname}</td>
                    <td>{current.email}</td>
                    <td>{current.year}</td>
                    <td>{current.branch}</td>

                    <td className={"tablebtnSection"}>
                      <button
                        className={"tableBtn"}
                        onClick={() => {
                          props.setModal(true);
                          props.setFormType("Edit");
                          props.setArrayIndex(index);
                        }}
                      >
                        {"Edit"}
                      </button>

                      <button
                        className={"tableBtn"}
                        onClick={() => {
                          props.DeleteModal(true);
                          props.setArrayIndex(index);
                        }}
                      >
                        {"Delete"}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">{"No records found"}</td>
              </tr>
            )
          ) : (
            props.data.map((current, index) => {
              return (
                <tr key={index}>
                  <td>{current.fname}</td>
                  <td>{current.lname}</td>
                  <td>{current.email}</td>
                  <td>{current.year}</td>
                  <td>{current.branch}</td>

                  <td className={"tablebtnSection"}>
                    <button
                      className={"tableBtn"}
                      onClick={() => {
                        props.setModal(true);
                        props.setFormType("EDIT");
                        props.setArrayIndex(index);
                      }}
                    >
                      {"Edit"}
                    </button>

                    <button
                      className={"tableBtn"}
                      onClick={() => {
                        setDeleteModal(true);
                        props.setArrayIndex(index);
                      }}
                    >
                      {"Delete"}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <DeleteModal
        arrIndex={props.ArrayIndex}
        handleDelete={handleDelete}
        deleteModal={deleteModal}
        setDeleteModal={ () => setDeleteModal(false)}
      />
    </div>
  );
}
