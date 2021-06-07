import React from "react";
import Dogecoin from "../DogecoinBanner/Dogecoin";
import Signupcard from "../Cards/Signup";

function Isdogecoin() {
  return (
    <div className={"isDogecoinContainer"}>
      <img src={"Assignment3Images/isDogeCoinForMeImg.png"} alt="" />

      <div className={"textSection"}>
        <Dogecoin
          heading={"Is Dogecoin For Me?"}
          para={
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. "
          }
        />
        <Signupcard />
      </div>
    </div>
  );
}

export default Isdogecoin;
