import React, { useState } from "react";

import objectData from "./Data";
import BikeScreen from "./Bikescreen";
import CarScreen from "./CarScreen";

export default function FormSection() {
  const [isPage, setIsPage] = useState(true);
  const [item, setItem] = useState("");
  const [model, setModel] = useState("");

  if (localStorage.getItem("BikesData") === null)
    localStorage.setItem("BikesData", JSON.stringify(objectData.Bikes));

  if (localStorage.getItem("CarsData") === null)
    localStorage.setItem("CarsData", JSON.stringify(objectData.Cars));

  const BikesData = JSON.parse(localStorage.getItem("BikesData"));
  const CarsData = JSON.parse(localStorage.getItem("CarsData"));

  const checkPage = () => {
    setIsPage(false);
  };

  const handleItem = () => {
    const itemValue = document.getElementById("keyItem").value;
    // console.log(itemValue);
    setItem(itemValue);
  };

  const handleModel = () => {
    const modelValue = document.getElementById("keyModel").value;
    setModel(modelValue);
  };

  // console.log(item);

  return (
    <>
      {isPage ? (
        <div className={"cardContainer"}>
          <form className={"formContainer"} onSubmit={checkPage}>
            <select
              id={"keyItem"}
              onChange={handleItem}
              className={"selectPicker"}
              required
            >
              <option value="">{"Select an Option"}</option>
              <option value="Bikes">{"Bikes"}</option>
              <option value="Cars">{"Cars"}</option>
            </select>

            <select
              id={"keyModel"}
              placeholder={"Select a Model"}
              onChange={handleModel}
              className={"selectPicker"}
              required
            >
              <option value="">{"Select a Model"}</option>
              {item === "Bikes"
                ? BikesData.map((current, index) => {
                    return (
                      <option key={index} value={current.model}>
                        {current.model}
                      </option>
                    );
                  })
                : null}

              {item === "Cars"
                ? CarsData.map((current, index) => {
                    return (
                      <option key={index} value={current.Name}>
                        {current.Name}
                      </option>
                    );
                  })
                : null}
            </select>

            <button className={"btn"} type={"submit"}>
              {"Click"}
            </button>
          </form>
        </div>
      ) : (
        <>
          {item === "Bikes" && <BikeScreen model={model} />}
          {item === "Cars" && <CarScreen model={model} />}
        </>
      )}
    </>
  );
}
