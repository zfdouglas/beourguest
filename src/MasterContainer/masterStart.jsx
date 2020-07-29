import React from "react";
import "./mastercontainer.css";

const StartButton = (props) => {
  return (
    <div className="StartButton">
      <div>{props.buttonTitle}</div>
    </div>
  );
};

export default StartButton;
