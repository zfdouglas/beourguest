import React from "react";
import Placeholder from "./epcot.png";
import "./Results.css";

function SingleResultBox(props) {
  return (
    <div className="singleResultBox">
      <img className="restaurantImage" alt="placeholder" src={Placeholder} />
      <div className="restaurantTitle">{props.restaurantName}</div>
      <div className="restaurantDescription">{props.description}</div>
    </div>
  );
}

export default SingleResultBox;
