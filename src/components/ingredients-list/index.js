import React from 'react';
import './style.css'

const IngredientsList = ({ingredients}) => {
	console.log("ingredients: ", ingredients)
	return (
		<div className="ingredients-container">
		{ingredients.map((ingredient, index) => {
			return (<li key={index} className="ingredient-item">
					{ingredient}
					</li>
			)
		})
	}
		</div>
	)
}

export default IngredientsList;
