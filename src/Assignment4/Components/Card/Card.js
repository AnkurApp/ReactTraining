import React from "react";

function Card(props) {
  return (
    <div className={"card"}>
      <h3>{props.heading}</h3>
      <ul>
          <li><a href="#">{props.link1}</a></li>
          <li><a href="#">{props.link2}</a></li>
          <li><a href="#">{props.link3}</a></li>
      </ul>

      <a href="#">{"See all articles"}</a>
    </div>
  );
}

export default Card;
