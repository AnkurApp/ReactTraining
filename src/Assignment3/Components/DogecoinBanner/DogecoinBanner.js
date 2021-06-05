import React from "react";
import Dogecoin from "../DogecoinBanner/Dogecoin";
import Step from "../DogecoinBanner/DogecoinStep";
import Button from "../Buttons/Button";

function DogecoinBanner() {
  return (
    <div className={"dogecoinBanner"}>
      <div className={"buyDogecoin"}>
        <Dogecoin heading={"How to Buy Dogecoin"} />

        <img className={"downloadIcon"} src={"Assignment3Images/noun_Download_241367.png"} />
        <div className={"stepsFlex"}>
          <Step
            image={"Assignment3Images/noun_tick_453824.png"}
            number={"1"}
            stepName={"Get verified quickly"}
            para={
              "Just sign up, upload your verification documents and open your account."
            }
          />

          <Step
            image={"Assignment3Images/noun_Wallet_1573162.png"}
            number={"2"}
            stepName={"Buy Dogecoin"}
            para={
              "Select which coins you would like to buy and how much you want to purchase. "
            }
          />

          <Step
            image={"Assignment3Images/noun_timer_290492.png"}
            number={"3"}
            stepName={"Receive Coins"}
            para={
              "We will send your coins to your wallet within 15 minutes of payment approval."
            }
          />
        </div>
        <Button btnText={"Buy Dogecoin"} />
      </div>

      <div className={"sellDogecoin"}>
        <Dogecoin heading={"How to Sell Dogecoin"} />

        <img className={"downloadIcon"} src={"Assignment3Images/noun_Download_2413679.png"} />
        <div className={"stepsFlex"}>
          <Step
            image={"Assignment3Images/noun_tick_45382.png"}
            number={"1"}
            stepName={"Get verified quickly"}
            para={
              "Just sign up, upload your verification documents and open your account."
            }
          />
          <Step
            image={"Assignment3Images/noun_Wallet_157316.png"}
            number={"2"}
            stepName={"Buy Dogecoin"}
            para={
              "Select Dogecoin under the “sell” tab and decide how much you want to sell."
            }
          />

          <Step
            image={"Assignment3Images/noun_timer_2904924.png"}
            number={"3"}
            stepName={"Receive Coins"}
            para={
              "We will send your coins to your wallet within 15 minutes of payment approval."
            }
          />
        </div>
        <Button btnText={"Sell Dogecoin"} />
      </div>
    </div>
  );
}

export default DogecoinBanner;
