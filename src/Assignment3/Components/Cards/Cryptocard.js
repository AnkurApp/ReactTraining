import React from "react";
import Button from "../Buttons/Button";

function Cryptocard() {
  return (
    <div className={"cryptoCard"}>
      <h3>{"Get your crypto now!"}</h3>
      <button className={"buy"}>Buy</button>
      <button className={"sell"}>Sell</button>

      <div className={"cryptoFlex1"}>
        <img src={"https://xcoins-preprod-bucket.s3.eu-west-1.amazonaws.com/flags/usa.svg"} alt="Flag" />
        <p>{"100"}</p>
        <div className={"verticalLine"}></div>
        <select>
            <option value="0" selected>USD</option>
            <option value="0">GBP</option>
            <option value="0">EUR</option>
            <option value="0">AUD</option>
            <option value="0">CAD</option>
        </select>
      </div>

      <div className={"horizontalLine"}></div>

      <div className={"cryptoFlex2"}>
        <img src={"Assignment3Images/bitcoinIcon.jpeg"}  />
        <div>
          <p>{"0.00174681"}</p>
        </div>
        <div className={"verticalLine"}></div>
        <select>
            <option value="0" selected>BTC</option>
            <option value="0">ETH</option>
            <option value="0">LTC</option>
            <option value="0">XRP</option>
            <option value="0">BCH</option>
            <option value="0">DOGE</option>
        </select>
      </div>

      <Button btnText={"Buy Doge"} />

    </div>
  );
}

export default Cryptocard;
