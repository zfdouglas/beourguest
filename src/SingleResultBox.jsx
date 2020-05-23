import React from "react";
import Placeholder from "./epcot.png";
import "./Results.css";
import MK from "./mk.jpg";
import AK from "./ak.jpg";
import HS from "./hs.jpg";
import EP from "./ep.jpg";
import NaP from "./misc.jpg";

function SingleResultBox(props) {
  function getHeaderinator(park) {
    if (park === "MK") {
      return { MK };
    } else if (park === "AK") {
      return AK;
    } else if (park === "HS") {
      return HS;
    } else if (park === "EP") {
      return EP;
    } else if (park === "NaP") {
      return NaP;
    } else {
      return Placeholder;
    }
  }
  return (
    <div className="singleResultBox">
      <img
        className="restaurantImage"
        alt="placeholder"
        src={getHeaderinator(props.park)}
      />
      <div className="restaurantTitle">{props.restaurantName}</div>
      <div className="restaurantDescription">{props.description}</div>
    </div>
  );
}

export default SingleResultBox;
