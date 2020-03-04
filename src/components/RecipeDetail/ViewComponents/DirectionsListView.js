import React from "react";
import PropTypes from "prop-types";
// import {map} from "react-bootstrap/cjs/ElementChildren";

export function DirectionsListView(props) {
  const { recipeOrders } = props;
  const {  directions } = recipeOrders || {};
  //este vylepsit
  // console.log(typeof directions);
  // console.log(directions);


  const directionList = directions.split('\n').map((ch,index) => {
    return <div character={ch} key={index}>{index + 1 + "." + ch.substring(ch.length,ch.indexOf(' '))}</div>;
  });

  // console.log(typeof directionList);
  // console.log(directions);

  // const dir = map(directions.split('\n'));
  // const listDirections = dir.map((number, index) => <div>{number}</div>);


  return (
    <div>
      { directionList }
    </div>
  );
}

DirectionsListView.propTypes = {
  recipeOrders: PropTypes.object,

};
