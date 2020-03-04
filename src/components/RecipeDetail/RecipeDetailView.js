import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Container, Col } from "react-bootstrap";

import { ConvertTime } from "../common/ConvertTime";
import { LoadingAnimation } from "../common/LoadingAnimation";
import { ErrorAlert } from "../common/ErrorAlert";
import { DirectionsListView } from "../RecipeDetail/ViewComponents/DirectionsListView";
import { IngredientsListView } from "../RecipeDetail/ViewComponents/IngredientsView";

export function RecipeDetailView(props) {
  const { isLoading, recipe, error } = props;
  const { _id, preparationTime, title } = recipe || {};

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
    <Container>
      <Row>
        <Col xs>
          <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <ConvertTime time={preparationTime}/>
            </Card.Subtitle>
            <Card.Text>
              <DirectionsListView
                recipeOrders={recipe} />
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          </Card>
          </Col>
        <Col xs={{ order: 12 }}>
          <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <ConvertTime time={preparationTime}/>
            </Card.Subtitle>
            <Card.Text>
              <IngredientsListView
                recipeOrders={recipe} />
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card></Col>
        </Row>
    </Container>




  );
}

RecipeDetailView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  recipe: PropTypes.object,
  error: PropTypes.string,

};
