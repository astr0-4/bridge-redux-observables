import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeDetail from '../../components/recipe-detail/index'

class RecipeDetailContainer extends Component {
	render() {
		console.log("PROPS:", this.props)
		if (!this.props.recipe) {
			return <div>Search for a Recipe to get started</div>
		}
		return (
			<RecipeDetail recipe={this.props.recipe} />
		);
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.selectedRecipe
	}
}

export default connect(mapStateToProps)(RecipeDetailContainer)
