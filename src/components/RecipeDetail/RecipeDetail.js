import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

import { LoadingAnimation } from "../common/LoadingAnimation";
import { ErrorAlert } from "../common/ErrorAlert";
import { ConvertTime } from "../common/ConvertTime";
import {RecipeListItem} from "../RecipeList/RecipeListItem";
import {RecipeDetailView} from "../RecipeDetail/RecipeDetailView";

export function RecipeDetail(props) {
  const { isLoading, recipe, error } = props;
  const { preparationTime, title, directions, ingredients } = recipe || {};


  if (error) {
    return <ErrorAlert />;
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (!recipe) {
    return null;
  }

  return (

    <Jumbotron>
      <h1>{title}</h1>
      <ConvertTime time={preparationTime}/>
      <p>{directions}</p>

    </Jumbotron>
  );
}

RecipeDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  recipe: PropTypes.object,
  error: PropTypes.string,


};
