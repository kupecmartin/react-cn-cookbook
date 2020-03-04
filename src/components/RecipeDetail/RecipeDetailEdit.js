import React from "react";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {RecipeDetailView} from "./RecipeDetailView";

import { DirectionsListEdit } from "../RecipeDetail/EditComponents/DirectionsListEdit";
import { IngredientsListEdit } from "../RecipeDetail/EditComponents/IngredientsListEdit";


export function RecipeDetailEdit(props) {

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="User input for title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Preparation time</Form.Label>
        <Form.Control as="select">
          <option>15</option>
          <option>30</option>
          <option>45</option>
          <option>60</option>
          <option>90</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <IngredientsListEdit />
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <DirectionsListEdit />
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
}

RecipeDetailEdit.propTypes = {
  recipe: PropTypes.object,
 };
