import React, { useState } from "react";

import ArrayForm from "./Arrayform";

export default function BikeScreen(props) {
  const [searchedModel, setSearchedModel] = useState(props.model);
  const BikesData = JSON.parse(localStorage.getItem("BikesData"));
  // console.log(BikesData.model);

  const objectModel = BikesData.find((current) => {
    return current.model === searchedModel;
  });

  const modelIndex = BikesData.findIndex((current) => {
    return current.model === searchedModel;
  });
 
  const [BikePrice, setBikePrice] = useState(objectModel.price);
  const [BikeModel, setBikeModel] = useState(objectModel.model);
  const [BikePpd, setBikePpd] = useState(objectModel.ppd);

  const handleSaveData = (e) => {
    e.preventDefault();
    const modelVal = document.getElementById("model").value;
    const priceVal = document.getElementById("price").value;
    const ppdVal = document.getElementById("ppd").value;

    // console.log(ppdVal);

    if (modelVal !== "") {
      BikesData[modelIndex].model = modelVal;
      setSearchedModel(modelVal);
      setBikeModel(modelVal);
    }
    if (priceVal !== "") {
      BikesData[modelIndex].price = priceVal;
      setBikePrice(priceVal);
    }
    if (ppdVal !== "") {
      BikesData[modelIndex].ppd = ppdVal;
      setBikePpd(ppdVal);
    }
    localStorage.setItem("BikesData", JSON.stringify(BikesData));
  };

  return (
    <div className={"bikeScreen"}>
      <div className={"tableContainer"}>
        <table>
          <thead>
            <tr>
              <th>{"Model"}</th>
              <th>{"Price"}</th>
              <th>{"Registration date"}</th>
              <th>{"Expire"}</th>
              <th>{"PPD"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{BikeModel}</td>
              <td>{BikePrice}</td>
              <td>{BikesData[modelIndex].reg}</td>
              <td>{BikesData[modelIndex].expire}</td>
              <td>{BikePpd}</td>
            </tr>
          </tbody>
        </table>
        {/* <button className={"btn"}>{"Edit Data"}</button> */}
      </div>

      <div className={"editContainer"}>
        <ArrayForm
          id1={"model"}
          id2={"price"}
          id3={"ppd"}
          placeholder1={BikesData[modelIndex].model}
          placeholder2={BikesData[modelIndex].price}
          placeholder3={BikesData[modelIndex].ppd}
          handle={handleSaveData}
        />
      </div>
    </div>
  );
}
