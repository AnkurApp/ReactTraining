import React from "react";


export default class OddContent extends React.Component {
  render() {
    const { image, heading, para } = this.props;
    return (
      <div className={"oddContainer"}>
        <img src={image} />

        <div className={"textSection"}>
          <h3>{heading}</h3>
          <p>{para}</p>
        </div>
        
      </div>
    );
  }
}
