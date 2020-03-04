import React, {Component} from "react";
import PropTypes from "prop-types";
import {Container, ButtonToolbar, Button} from "react-bootstrap"

import {api} from "../api";
import {RecipeDetailView} from "../components/RecipeDetail/RecipeDetailView";
import {RecipeDetailEdit} from "../components/RecipeDetail/RecipeDetailEdit";

export class RecipeDetailPage extends Component {
  state = {
    isLoading: false,
    recipe: null,
    error: null,
    isEditable: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    const {params} = this.props.match || {};
    const {slug} = params || {};

    api.get(`/recipes/${slug}`).then(response => {
      const {data, problem} = response;
      this.setState({
        isLoading: false,
        recipe: data,
        error: problem
      });
    });
  }

  editRecipeHandler = (event) => {
    const doesEdit = this.state.isEditable;
    this.setState({
      isEditable: !doesEdit
    });
  }


  render() {
    const {isLoading, recipe, error} = this.state;

    let showContent = (<RecipeDetailView
      isLoading={isLoading}
      recipe={recipe}
      error={error}/>);

    if (this.state.isEditable) {
      showContent = (
        <RecipeDetailEdit/>
      );
    }

    return (
      <Container>
        <ButtonToolbar>
          <Button
            style={{marginBottom: '10px'}}
            variant="warning"
            onClick={this.editRecipeHandler}>Edit recipe
          </Button>
        </ButtonToolbar>
        {showContent}
      </Container>
    );
  }
}

RecipeDetailPage.propTypes = {
  match: PropTypes.object.isRequired
};
