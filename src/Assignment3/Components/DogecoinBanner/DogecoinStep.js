import React from "react";

function Step(props) {
  return (
    <div className={"steps"}>
      <img src={props.image} />

      <div className={"stepName"}>
          <div>{props.number}</div>
          <h3>{props.stepName}</h3>
      </div>

      <p>{props.para}</p>
    </div>
  );
}

export default Step;