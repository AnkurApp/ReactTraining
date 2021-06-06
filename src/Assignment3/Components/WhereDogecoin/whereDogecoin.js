import React from "react";
import Dogecoin from "../DogecoinBanner/Dogecoin";

function WhereDogecoin() {
  return (
    <div className={"whereContainer"}>
      <Dogecoin
        heading={"Where Can I Spend my Dogecoin?"}
        para={
          "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
        }
      />

      <div className={"whereFlex"}>
        <div className={"whereFlexchild"}>
          <div>
            <img
              src={"Assignment3Images/junko-nakase-Q-72wa9-7Dg-unsplash.png"}
              alt=""
            />
          </div>
          <p>{"Clothing Stores"}</p>
        </div>

        <img src={"Assignment3Images/Group 3346.png"} alt="" />
        <img src={"Assignment3Images/Group 3345.png"} alt="" />
      </div>
    </div>
  );
}

export default WhereDogecoin;
