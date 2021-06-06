import React from "react";
import Dogecoin from "../DogecoinBanner/Dogecoin";

function Isdogecoin() {
  return (
    <div className={"isDogecoinContainer"}>
      <img src={"Assignment3Images/shutterstock_1230912331.png"} alt="" />

      <div className={"textSection"}>
        <Dogecoin
          heading={"Is Dogecoin For Me?"}
          para={
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "
          }
        />
      </div>
    </div>
  );
}

export default Isdogecoin;
