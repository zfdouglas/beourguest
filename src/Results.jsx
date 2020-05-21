import React from "react";
import "./Results.css";
import RestaurantData from "./restaurantData.json";
import SingleResultBox from "./SingleResultBox.jsx";
function Results(props) {
  function getTopMatch(list) {
    let allTops = [];
    allTops.push({ Name: list[0][0].Restaurant, Points: list[0][0].Points });
    console.log(allTops);
    allTops.push({ Name: list[1][0].Restaurant, Points: list[1][0].Points });
    allTops.push({ Name: list[2][0].Restaurant, Points: list[2][0].Points });
    allTops.push({ Name: list[3][0].Restaurant, Points: list[3][0].Points });
    allTops.push({ Name: list[4][0].Restaurant, Points: list[4][0].Points });
    return allTops.sort((a, b) => {
      return b.Points - a.Points;
    });
  }
  function getDescriptinator(list) {
    const topArray = getTopMatch(list);
    const nameToLookUp = topArray[0].Name;
    console.log(nameToLookUp);
    var result = RestaurantData.locations.filter((obj) => {
      return obj.Restaurant === nameToLookUp;
    });
    return result[0].Description;
  }
  return (
    <div className="Results">
      <h1 className="congratsBanner">Congratulations! You Got...</h1>
      <SingleResultBox
        restaurantName={getTopMatch(props.resultData)[0].Name}
        description={getDescriptinator(props.resultData)}
      />
    </div>
  );
}

export default Results;
