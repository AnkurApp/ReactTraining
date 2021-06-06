import React from "react";
import Whatcard from "../Cards/whatcard";

function Whatdogecoin() {
  return (
    <div className={"whatDoge"}>
      <Whatcard
        clsName={"whatCard1"}
        image={"Assignment3Images/noun_connection_463091.png"}
        heading={"Decetralized"}
      />

      <div className={"whatContainer"}>
        <h2>{"What is Dogecoin?"}</h2>
        <p>
          {
            "Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "
          }
        </p>
      </div>

      <Whatcard
        clsName={"whatCard2"}
        image={"Assignment3Images/Your Icons.png"}
        heading={"Peer-to-peer"}
      />
    </div>
  );
}

export default Whatdogecoin;
