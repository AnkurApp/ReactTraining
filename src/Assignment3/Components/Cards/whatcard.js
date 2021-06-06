import React from "react";

function Whatcard(props) {
  return (
    <div className={props.clsName}>
      <div className={"whatCard"}>
        <img src={props.image} alt="" />

        <div className={"whatFlex"}>
          <img src={"Assignment3Images/noun_tick_4538.png"} alt="" />
          <h3>{props.heading}</h3>
        </div>
      </div>
    </div>
  );
}

export default Whatcard;
