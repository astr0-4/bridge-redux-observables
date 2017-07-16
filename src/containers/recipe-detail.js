import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeDetail extends Component {
	render() {
		if (!this.props.recipe) {
			return <div>Search for a Recipe to get started</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.recipe.label}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.activeRecipe
	}
}

export default connect(mapStateToProps)(RecipeDetail)
