import React from 'react';
import './style.css'

const RecipeDetail = ({ recipe }) => {
	return (
		<div className="recipe-container">
		<h3 className="recipe-title">{recipe.label}</h3>
		</div>
	)
}

export default RecipeDetail;