import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Col, Card,} from "react-bootstrap";

import {ConvertTime} from "../common/ConvertTime";

export function RecipeListItem(props) {
  const {title, time, slug, sideDish} = props;

  return (

    <Col xs="12" sm="6" md="4" lg="3" className="recipe">
      <Link to={`/recipe/${slug}`}>
        <Card text={"info"}>
          <Card.Header>
              <span>
                <i className="fa fa-cutlery"/>
              </span>
            <span className="recipe-title">{title}</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ConvertTime time={time}/>
            </Card.Text>
            {sideDish != null ?
              <Card.Footer
                className="text-muted">Príloha: {sideDish}
              </Card.Footer>
              : <Card.Footer className="text-muted">Bez prílohy.</Card.Footer>}
          </Card.Body>
        </Card>
      </Link>
    </Col>

  );
}

RecipeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

RecipeListItem.defaultProps = {
  time: 0
};
