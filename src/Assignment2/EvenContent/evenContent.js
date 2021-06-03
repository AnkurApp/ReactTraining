import React from "react";

export default class EvenContent extends React.Component {
  render() {
    const { image, heading, para } = this.props;
    return (
      <div className={"evenContainer"}>
        <div className={"textSection"}>
          <h3>{heading}</h3>
          <p>{para}</p>
        </div>

        <img src={image} />
      </div>
    );
  }
}
