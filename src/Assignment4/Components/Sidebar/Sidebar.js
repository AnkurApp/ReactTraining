import React from "react";

function Sidebar() {
  return (
    <div className={"sideBar"}>
      <img src={"logo.svg"} className={"logo"} alt="" />
      <p>{"Topics"}</p>

      <a href="#">{"Buy Currency"}</a>
      <a href="#">{"Verification"}</a>
      <a href="#">{"Orders"}</a>
      <a href="#">{"Wallet"}</a>
      <a href="#">{"Payment methods"}</a>
      <a href="#">{"Others"}</a>
      <a href="#">{"Security"}</a>
      <a href="#">{"Referral Programme"}</a>
      <a href="#">{"My Xcoin Account"}</a>
    </div>
  );
}

export default Sidebar;
