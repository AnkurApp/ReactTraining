import React, { Component } from "react";
import "./index.css";
import ShowcaseContainer from "../Components/ShowcaseContainer/showcaseContainer";
import Creditcard from "../Components/Cards/creditcard";
import DogecoinBanner from "../Components/DogecoinBanner/DogecoinBanner";
// import Signupcard from "../Components/Cards/Signup";
// import Whydogecoin from "../Components/WhyDogecoin/whyDogecoin";

class XcoinsPage extends Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <ShowcaseContainer />

        <div className={"cardsContainer"}>
          <Creditcard />
        </div>

        <div className={"dogecoinContainer"}>
          <DogecoinBanner />
          {/* <Signupcard /> */}
        </div>
        {/* <Whydogecoin /> */}
      </div>
    );
  }
}

export default XcoinsPage;
