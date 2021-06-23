import React from "react";

export default function DataForm(props) {
  return (
    <form className={"formContainer"} onSubmit={props.submit}>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.fname}
          placeholder={props.placeholderFname}
          onChange={props.change}
        />
        <span className={"error"}>{props.error}</span>
      </div>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.lname}
          placeholder={props.placeholderLname}
          onChange={props.change}
        />
        <span className={"error"}>{props.error}</span>
      </div>
      <div className={"formInput"}>
        <input
          type="email"
          name={props.email}
          placeholder={props.placeholderEmail}
          onChange={props.change}
        />
        <span className={"error"}>{props.error}</span>
      </div>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.year}
          placeholder={props.placeholderYear}
          onChange={props.change}
        />
        <span className={"error"}>{props.error}</span>
      </div>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.branch}
          placeholder={props.placeholderBranch}
          onChange={props.change}
        />
        <span className={"error"}>{props.error}</span>
      </div>

      <div className={"btnSection"}>
        <button className={"btn"} type="submit">
          {props.formButton}
        </button>
        <button className={"btn Cancel"} onClick={() => props.setModal(false)}>
          {"Cancel"}
        </button>
      </div>
    </form>
  );
}
