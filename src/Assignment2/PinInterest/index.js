import React, { Component } from "react";
import "./index.css";
import OddContent from "../OddContent/oddContent";
import EvenContent from "../EvenContent/evenContent";

import image1 from "./developerIcon.png";
import image2 from "./appIcon.svg";
import image3 from "./storybookIcon.png";
import image4 from "./guidelistIcon.png";

import skypeIcon from "./skypeIcon.png";
import mailIcon from "./envelope-solid.svg";

class PinInterest extends Component {
  header() {
    return (
      <div className={"headerContainer"}>
        <p>
          <span>{"9 React Developer Tools "}</span>
          {"to Create Better Apps Faster"}
        </p>
      </div>
    );
  }

  footer() {
    return (
      <div className={"footerContainer"}>
        <div className={"contact"}>
          <img src={skypeIcon} />
          <p>{"anonymous_12"}</p>
        </div>

        <div className={"verticalLine"}></div>

        <div className={"contact"}>
          <img src={mailIcon} className={"colorWhite"} />
          <p>{"biz@anonymous.com"}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={"mainContainer"}>
        {this.header()}
        <div className={"contentContainer"}>
          <OddContent
            image={image1}
            heading={"1) React Developer Tools"}
            para={
              "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage"
            }
          />

          <EvenContent
            heading={"2) Create React App"}
            para={"Tool used in the process of setting up a React IDE"}
            image={image2}
          />

          <OddContent
            image={image3}
            heading={"3) Storybook"}
            para={"Online app that lets you create UI components"}
          />

          <EvenContent
            heading={"4) React Styleguidist"}
            para={"It offers an interactive way of creating and sharing UI"}
            image={image4}
          />

          <OddContent
            image={image1}
            heading={"5) Bit"}
            para={
              "CLI tool and online platform that enables you to publish React Components"
            }
          />

          <EvenContent
            heading={"6) React Bootstrap"}
            para={
              "Powerful toolkit that comprises HTML, CSS and JavaScript tools to help you create webpage and applications"
            }
            image={image2}
          />

          <OddContent
            image={image3}
            heading={"7) React Sight"}
            para={
              "Chrome extension for a visual illustration of all components of your app in a live tree structure"
            }
          />

          <EvenContent
            heading={"8) Why did you render"}
            para={
              "It alerts you in the console when an avoidable render occurs"
            }
            image={image4}
          />

          <OddContent
            image={image1}
            heading={"9) React Proto"}
            para={
              "Lets you drag and drop the components your way to create a UI instead of coding"
            }
          />
        </div>

        {this.footer()}
      </div>
    );
  }
}

export default PinInterest;
