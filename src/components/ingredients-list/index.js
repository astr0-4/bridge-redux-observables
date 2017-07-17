import React from 'react';
import './style.css'
const IngredientsList = ({ingredients}) => {
	console.log("ingredients: ", ingredients)
	return (
		<div className="ingredients-container">
		{ingredients.map((ingredient) => {
			return (<li className="ingredient-item">
					{ingredient}
					</li>
			)
		})
	}
		</div>
	)
}

export default IngredientsList;
