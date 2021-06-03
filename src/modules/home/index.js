// imports
// component declare/define.
// html

import React, { Component } from "react";
import "./index.css";
import ResuableBox from "../../components/resuableBox";

// Class Component
class Home extends Component {
  renderBox(heading, buttonTitle, extraClass = "", color = "") {
    return (
      <div className={"itemContainer"}>
        <h3 className={extraClass}>{heading}</h3>
        <button style={{ backgroundColor: color }}>{buttonTitle}</button>
      </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>

        {/* <div className={"itemContainer"}>
          <h3>{"First Container"}</h3>
          <button>{"Click me"}</button>
        </div>

        <div className={"itemContainer"}>
          <h3>{"First Container"}</h3>
          <button>{"Click me"}</button>
        </div>

        <div className={"itemContainer"}>
          <h3>{"First Container"}</h3>
          <button>{"Click me"}</button>
        </div> */}

        {this.renderBox("First Container", "Click Me First", "colorRed")}
        {this.renderBox("Second Container", "Click Me Second","", "blue")}
        {this.renderBox("Third Container", "Click Me Third")}
        
        <ResuableBox
          heading={"Fourth Container"}
          buttonTitle={"Click Me Fourth"}
        />
      </div>
    );
  }
}

export default Home;
// export Home;
