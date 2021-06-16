import React from "react";

export default function ArrayForm(props) {
  return (
    <form className={"formContainer"}>
      <input
        type={"text"}
        id={props.id1}
        className={"input"}
        placeholder={props.placeholder1}
      />

      <input
        type={"text"}
        id={props.id2}
        className={"input"}
        placeholder={props.placeholder2}
      />

      <input
        type={"text"}
        id={props.id3}
        className={"input"}
        placeholder={props.placeholder3}
      />

      <button className={"btn"} type="submit" onClick={props.handle}>
        {"Save Data"}
      </button>
    </form>
  );
}
