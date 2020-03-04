import React from "react";
import PropTypes from "prop-types";
// import {map} from "react-bootstrap/cjs/ElementChildren";

export function IngredientsListView(props) {
  const { recipeIng } = props;
  const {  ingredients } = recipeIng || {};



  return (
    <div>
      Nase ingrediencie
    </div>
  );
}

IngredientsListView.propTypes = {
  recipeIng: PropTypes.array,

};
