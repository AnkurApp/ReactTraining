import React from "react";

function Creditcard(props) {
  return (
    <div className={props.clsName}>
      <div className={"creditCard"}>
        <img src={props.image} alt="" />

        <div className={"cardNumber"}>
          <div className={"cardNumber1"}>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
          </div>
          <div className={"cardNumber1"}>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
          </div>
          <div className={"cardNumber1"}>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
            <div className={"dot"}></div>
          </div>
          <div className={"cardNumber1"}>
            <p>{props.num}</p>
          </div>
        </div>
        <div className={"cardDetails"}>
          <div className={"holderName"}>
            <p>{"Card Holder"}</p>
            <p>{props.holdername}</p>
          </div>

          <div className={"expiryDate"}>
            <p>{"Expiry date"}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creditcard;
