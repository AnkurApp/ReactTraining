import React, { useState } from "react";

import ArrayForm from "./Arrayform";

export default function CarScreen(props) {
  const [searchedModel, setSearchedModel] = useState(props.model);
  const CarsData = JSON.parse(localStorage.getItem("CarsData"));

  //   console.log(CarsData);

  const objectModel = CarsData.find((current) => {
    return current.Name === searchedModel;
  });
  // console.log(objectModel);

  const modelIndex = CarsData.findIndex((current) => {
    return current.Name === searchedModel;
  });

  const [CarName, setCarName] = useState(objectModel.Name);
  const [CarMiles, setCarMiles] = useState(objectModel.Miles);
  const [CarAcceleration, setCarAcceleration] = useState(
    objectModel.Acceleration
  );

  const handleSaveData = (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("carName").value;
    const milesVal = document.getElementById("carMiles").value;
    const accelerationVal = document.getElementById("acceleration").value;

    if (nameVal !== "") {
      CarsData[modelIndex].Name = nameVal;
      setSearchedModel(nameVal);
      setCarName(nameVal);
    }
    if (milesVal !== "") {
      CarsData[modelIndex].Miles = milesVal;
      setCarMiles(milesVal);
    }
    if (accelerationVal !== "") {
      CarsData[modelIndex].Acceleration = accelerationVal;
      setCarAcceleration(accelerationVal);
    }
    localStorage.setItem("CarsData", JSON.stringify(CarsData));
  };


  return (
    <div className={"editScreen"}>
      <div className={"tableContainer"}>
        <table>
          <thead>
            <tr>
              <th>{"Name"}</th>
              <th>{"Miles"}</th>
              <th>{"Displacement"}</th>
              <th>{"Horsepower"}</th>
              <th>{"Acceleration"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{CarName}</td>
              <td>{CarMiles}</td>
              <td>{CarsData[modelIndex].Displacement}</td>
              <td>{CarsData[modelIndex].Horsepower}</td>
              <td>{CarAcceleration}</td>
            </tr>
          </tbody>
        </table>
        {/* <button className={"btn"}>{"Edit Data"}</button> */}
      </div>
      <div className={"editContainer"}>
        <ArrayForm
          id1={"carName"}
          id2={"carMiles"}
          id3={"acceleration"}
          placeholder1={CarsData[modelIndex].Name}
          placeholder2={CarsData[modelIndex].Miles}
          placeholder3={CarsData[modelIndex].Acceleration}
          handle={handleSaveData}
        />
      </div>
    </div>
  );
}
