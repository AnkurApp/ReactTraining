import React from "react";

export default function DataTable(props) {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>{"First Name"}</th>
            <th>{"Last Name"}</th>
            <th>{"Email"}</th>
            <th>{"Year"}</th>
            <th>{"Branch"}</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((current, index) => (
            <tr key={index}>
              <td>{current.fname}</td>
              <td>{current.lname}</td>
              <td>{current.email}</td>
              <td>{current.year}</td>
              <td>{current.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
