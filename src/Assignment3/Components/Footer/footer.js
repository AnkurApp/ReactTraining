import React from "react";

function Footer() {
  return (
    <div className={"footerContainer"}>
      <div className={"horizontalLine"}></div>
      <footer>
        <div className={"sectionA"}>
          <div className={"sectionALeft"}>
            <img src={"Assignment3Images/logo.svg"} alt="" />
            <img src={"Assignment3Images/review.png"} alt="" />
            <p>{"14 East, Level 8, Sliema Road, GZR1639, Malta"}</p>
          </div>

          <div className={"sectionARight"}>
            <div className={"Link"}>
              <ul>
                <li>{"Company"}</li>
                <li>
                  <a href="https://xcoins.com/en/about-us">{"About us"}</a>
                </li>
                <li>
                  <a href="https://xcoins.com/en/about-us">{"Careers"}</a>
                </li>
                <li>
                  <a href="https://xcoins.com/en/about-us">{"Press kit"}</a>
                </li>
              </ul>
            </div>
            <div className={"Link"}>
              <ul>
                <li>{"Support"}</li>
                <li>
                  <a href="https://xcoins.com/en/about-us">{"Help Center"}</a>
                </li>
                <li>
                  <a href="https://xcoins.com/en/about-us">{"Contact"}</a>
                </li>
              </ul>
            </div>
            <div className={"Link"}>
              <ul>
                <li>{"Social"}</li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/instagram-brands.svg"} alt="" />
                  <p>
                    <a href="https://xcoins.com/en/about-us">{"Blog"}</a>
                  </p>
                </li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/twitter.svg"} alt="" />
                  <p>
                    <a href="https://xcoins.com/en/about-us">{"Twitter"}</a>
                  </p>
                </li>
                <li className={"socialFlex"}>
                  <img src={"Assignment3Images/facebook.svg"} alt="" />
                  <p>
                    <a href="https://xcoins.com/en/about-us">{"Facebook"}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"sectionB"}>
          <div className={"sectionBLink"}>
            <ul>
              <li>
                <a href="">&copy;Xcoins.com</a>
              </li>
              <li>
                <a href="">{"Terms of Service"}</a>
              </li>
              <li>
                <a href="">{"Privacy Policy"}</a>
              </li>
              <li>
                <a href="">{"Legal Notice"}</a>
              </li>
              <li>
                <a href="">{"Sitemap"}</a>
              </li>
            </ul>

            <div className={"select"}>
              <p>{"Language:"}</p>
              <select>
                <option value="0">English</option>
              </select>
            </div>
          </div>

          <p>
            {
              "Xcoins is property of CF Technologies Ltd - Company #204616970 4 East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective owners. All rights reserved."
            }
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
