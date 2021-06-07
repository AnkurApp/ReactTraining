import React, { Component } from "react";
import "./index.css";

import ShowcaseContainer from "../Components/ShowcaseContainer/showcaseContainer";
import Creditcard from "../Components/Cards/creditcard";
import DogecoinBanner from "../Components/DogecoinBanner/DogecoinBanner";
import Whydogecoin from "../Components/WhyDogecoin/whyDogecoin";
import Whatdogecoin from "../Components/WhatDogecoin/whatDogecoin";
import WhereDogecoin from "../Components/WhereDogecoin/whereDogecoin";
import Isdogecoin from "../Components/IsDogecoin/Isdogecoin";
import Dogecoin from "../Components/DogecoinBanner/Dogecoin";
import Footer from "../Components/Footer/footer";

class XcoinsPage extends Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <ShowcaseContainer />

        <div className={"cardsContainer"}>
          <Creditcard
            clsName={"masterCard"}
            image={"Assignment3Images/Mastercard-logo.png"}
            num={"4287"}
            holdername={"George Dux"}
            date={"09/05/2025"}
          />
          <Creditcard
            clsName={"visaCard"}
            image={"Assignment3Images/g4158.png"}
            num={"8257"}
            holdername={"John Connor"}
            date={"09/05/2025"}
          />

          <div className={"exchangeCard"}>
            <Dogecoin
              heading={"Exchange your Dogecoin Instantly!"}
              para={
                "Buy & sell your Doge using your Visa or Mastercard debit or credit card."
              }
            />
          </div>
        </div>

        <div className={"dogecoinContainer"}>
          <DogecoinBanner />
        </div>
        <Whydogecoin />

        <Whatdogecoin />

        <div className={"gradientContainer"}>
          <WhereDogecoin />
          <Isdogecoin />
        </div>

        <Footer />
      </div>
    );
  }
}

export default XcoinsPage;
