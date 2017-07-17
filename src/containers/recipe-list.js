import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../redux/actions/index';
import { bindActionCreators } from 'redux';
import RecipeListItem from '../components/recipe-list-item/index'

class RecipeList extends Component {
	renderList() {
		return this.props.recipes.map((recipe) => {
			return (
				<RecipeListItem 
				key={recipe.uri} 
				onRecipeSelect={() => this.props.selectRecipe(recipe)}
				recipe={recipe} />
			)
		})
	}

	render() {
		return (
			<ul>
			{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipe.list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectRecipe: selectRecipe }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
