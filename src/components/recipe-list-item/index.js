import React from 'react';
import './style.css'

const RecipeListItem = ({recipe, onRecipeSelect}) => {
	return (
		<li className="recipe-item" onClick={() => onRecipeSelect(recipe)}>
		<div>
			<h4>{recipe.label}</h4>
		</div>
		</li>
	)
}

export default RecipeListItem;