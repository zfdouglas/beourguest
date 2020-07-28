import React from "react";
import "./Results.css";
import Placeholder from "./img/epcot.png";
import MK from "./img/mk2.jpg";
import AK from "./img/ak2.jpg";
import HS from "./img/hs2.jpg";
import EP from "./img/ep2.jpg";
import NaP from "./img/misc2.jpg";
import $ from "./img/money1.png";
import $$ from "./img/money2.png";
import $$$ from "./img/money3.png";
import $$$$ from "./img/money4.png";
import BLDS from "./img/BLDS.png";
import B from "./img/B.png";
import BD from "./img/BD.png";
import BDS from "./img/bds.png";
import BLD from "./img/BLD.png";
import D from "./img/D.png";
import L from "./img/L.png";
import LDS from "./img/LDS.png";
import S from "./img/BLDS.png";
import LD from "./img/LD.png";

//Sets the color based off of the result box based off of the result
function SingleResultBox(props) {
  function getInfoColorinator(park) {
    if (park === "MK") {
      return "#6796f2";
    } else if (park === "AK") {
      return "#6e9961";
    } else if (park === "HS") {
      return "#e77328";
    } else if (park === "EP") {
      return "#5c4780";
    } else if (park === "NaP") {
      return "#feecba";
    } else {
      return "#6796f2";
    }
  }
  //Sets the header for the result box based off of the result
  function getHeaderinator(park) {
    if (park === "MK") {
      return MK;
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
  //Sets the price for the result box based off of the result
  function getPriceinator(mon) {
    if (mon === "$") {
      return $;
    } else if (mon === "$$") {
      return $$;
    } else if (mon === "$$$") {
      return $$$;
    } else if (mon === "$$$$") {
      return $$$$;
    } else {
      return $;
    }
  }
  //Sets the font color of the header based off of result
  function getMiscHeaderColorinator(park) {
    if (park === "NaP") {
      return "cornflowerblue";
    } else {
      return "white";
    }
  }
  //Sets the meal artefact based off of the result
  function getMealinator(meal) {
    if (meal === "B") {
      return B;
    } else if (meal === "BD") {
      return BD;
    } else if (meal === "BLD") {
      return BLD;
    } else if (meal === "BLDS") {
      return BLDS;
    } else if (meal === "S") {
      return S;
    } else if (meal === "LDS") {
      return LDS;
    } else if (meal === "BDS") {
      return BDS;
    } else if (meal === "D") {
      return D;
    } else if (meal === "L") {
      return L;
    } else {
      return LD;
    }
  }
  return (
    <div className="singleResultBox">
      <div
        className="restaurantImage"
        style={{
          backgroundImage: `url(` + getHeaderinator(props.park) + `)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="restaurantSuper"
          style={{ color: getMiscHeaderColorinator(props.park) }}
        >
          {props.restaurantName}
        </h1>
      </div>
      <div className="restaurantDescription">{props.description}</div>
      <div
        className="restaurantInfoBox"
        style={{ backgroundColor: getInfoColorinator(props.park) }}
      >
        <img
          className="restaurantMoney"
          alt="price"
          src={getPriceinator(props.money)}
        />
        <img
          className="restaurantMoney"
          alt="meal"
          src={getMealinator(props.meals)}
        />
      </div>
    </div>
  );
}

export default SingleResultBox;
