import React from "react";
import Header from "../Header/header";
import Cryptocard from "../Cards/Cryptocard";

function ShowcaseContainer() {
  return (
    <div className={"showcaseContainer"}>
      <Header />

      <div className={"banner"}>
        <div className={"textSection"}>
          <h1>{"Buy & sell Dogecoin Online"}</h1>
          <h3>{"Add Doge to your crypto wallet"}</h3>
          <p>
            {
              "Instant, fun, and free from the traditional banking system. Buy Dogecoin with your debit or credit card today."
            }
          </p>
        </div>

        <Cryptocard />
      </div>
    </div>
  );
}

export default ShowcaseContainer;
