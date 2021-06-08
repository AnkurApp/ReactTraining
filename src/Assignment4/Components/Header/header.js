import React from "react";

function Header() {
  return (
    <div className={"headerContainer"}>
      <div className={"toggle"}>
        <div className={"toggleLine"}></div>
        <div className={"toggleLine"}></div>
        <div className={"toggleLine"}></div>
      </div>
      <img src={"logo.svg"} className={"logo"} alt="" />

      <div className={"headerRight"}>
        <img src={"settings.png"} alt="" />
        <img src={"bell.png"} alt="" />
        <img
          src={"Assignment3Images/shutterstock_1230912331.png"}
          className={"profile"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
