import React from "react";

function Header() {
  return (
    <div className={"headerContainer"}>
      <img src={"Assignment3Images/logo.svg"} alt="Xcoins Logo" />

      <div className={"verticalLine"}></div>

      <nav className={"navbarContainer"}>
        <a href="https://xcoins.com/en/bitcoin">Buy Bitcoin</a>
        <a href="https://xcoins.com/en/bitcoin">Sell Bitcoin</a>
        <a href="https://xcoins.com/en/blog">Blog</a>
        <a href="https://xcoins.com/en/about-us">About Us</a>
      </nav>

      <div className={"loginSection"}>
        <select>
          <option value="0">ENG</option>
          <option value="0">ES</option>
        </select>

        <button className={"btn"}>Login</button>
        <button className={"btn signup"}>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
