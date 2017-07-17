import React from 'react';
import './style.css'
import IngredientList from '../ingredients-list/index';

const RecipeDetail = ({ recipe }) => {
	console.log(recipe)
	return (
		<div className="recipe-container">
			<h3 className="recipe-title">{recipe.label}</h3>
			<div className="img-container"><img src={recipe.image}/></div>
			<IngredientList ingredients={recipe.ingredientLines} />
		</div>
	)
}

// return this.props.recipes.map((recipe) => {
// 			return (
// 				<RecipeListItem 
// 				key={recipe.uri} 
// 				onRecipeSelect={() => this.props.selectRecipe(recipe)}
// 				recipe={recipe} />
// 			)
// 		})

export default RecipeDetail;