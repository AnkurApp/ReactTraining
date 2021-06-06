import React from "react";
// import Signupcard from "../Cards/Signup";

function Whydogecoin() {
  return (
    <div className={"why"}>
      <img src={"Assignment3Images/shutterstock_1230912331.png"} alt=""/>

      <div className={"textSection"}>
        <h1>{"Why Buy & Sell Dogecoin with Xcoins?"}</h1>

        <div className={"whyFlex"}>
          <img src={"Assignment3Images/12-Lock.png"} alt="" />
          <h3>{"Encryption technology"}</h3>
        </div>
        <p>
          {
            "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
          }
        </p>

        <div className={"whyFlex"}>
          <img src={"Assignment3Images/noun_message_965435.png"} alt="" />
          <h3>{"Customer Care"}</h3>
        </div>
        <p>
          {
            "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team."
          }
        </p>
        {/* <Signupcard /> */}
      </div>
    </div>
  );
}

export default Whydogecoin;
