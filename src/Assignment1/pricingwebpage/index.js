import React, { Component } from "react";
import "./index.css";
import image from "./assignment1_image.png";

class PricingWebpage extends Component {
  render() {
    return (
      <div className={"main-container"}>
        <div className={"container"}>
          <div className={"section-A"}>
            <div className={"text-section"}>
              <p className={"heading"}>
                {"Save your"} <span className={"bold"}>{"money now."}</span>
              </p>
              <p>
                {
                  "Manage your company Bot in few easy steps, join our Pro plan to try a 360* experience of our service."
                }
              </p>
              <p>
                {
                  "Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for free."
                }
              </p>
            </div>

            <div className={"img-section"}>
              <img src={image} alt="Image" />
            </div>
          </div>

          <div className={"section-B"}>
            <div className={"B-freePlan"}>
              <p>
                {"Start now"}
                <span className="line">
                  {"your"} <span className={"bold"}>{"free plan."}</span>
                </span>
              </p>

              <div>
                <p>{"Are you a corporate?"}</p>
                <a href="#">{"Contact us"}</a>
              </div>
            </div>

            <div className={"plans-section"}>
              <div class="LitePlan">
                <div className={"planHeader"}>
                  <div className={"planName"}>
                    <h1>{"Lite"}</h1>
                    <div></div>
                  </div>
                  <div className={"planCost"}>
                    <h6>{"Free"}</h6>
                    <p>{"with restrictions"}</p>
                  </div>
                </div>

                <p>{"Plan includes:"}</p>

                <div className={"planFeatures"}>
                  <div className="tick"></div>
                  <p>{"Manage conversation directly from your website."}</p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick"></div>
                  <p>{"Bot without the AI service."}</p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick"></div>
                  <p>{"Achieved chat for 30 days."}</p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick"></div>
                  <p>{"Free, for always."}</p>
                </div>

                <div className={"planButton"}>
                  <p>{"View all the features."}</p>
                  <a href="#" className={"btn color-white"}>
                    {"Start 14 days of free Pro plan"}
                  </a>
                </div>
              </div>

              <div className="ProPlan">
                <div className={"planHeader"}>
                  <div className={"planName"}>
                    <h1 className={"color-white"}>{"Pro"}</h1>
                    <div></div>
                  </div>
                  <div className={"planCost"}>
                    <h6 className={"color-white"}>{"29$"}</h6>
                    <p className={"color-white"}>{"monthly"}</p>
                  </div>
                </div>

                <p className={"color-white"}>{"All of Lite Plus:"}</p>

                <div className={"planFeatures"}>
                  <div className="tick-white"></div>
                  <p className={"color-white"}>
                    {
                      "Bot with AI that can recognize the user's behaviour and can automatize the sentences."
                    }
                  </p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick-white"></div>
                  <p className={"color-white"}>
                    {"Unlimited conversational flows."}
                  </p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick-white"></div>
                  <p className={"color-white"}>
                    {"Facebook, Twitter, Instagram and Linkedin integration."}
                  </p>
                </div>

                <div className={"planFeatures"}>
                  <div className="tick-white"></div>
                  <p className={"color-white"}>
                    {"Achieved chat without limits"}
                  </p>
                </div>

                <div className={"planButton"}>
                  <p className={"color-white"}>{"View all the features."}</p>
                  <a href="#" className={"btn"}>
                    {"Start 14 days of free Pro plan"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingWebpage;
