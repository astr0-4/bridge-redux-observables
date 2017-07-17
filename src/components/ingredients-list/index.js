import React from 'react';

const IngredientsList = ({ingredients}) => {
	console.log("ingredients: ", ingredients)
	return (
		<div>
		{ingredients.map((ingredient) => {
			return (<li>
					{ingredient}
					</li>
			)
		})
	}
		</div>
	)
}

export default IngredientsList;
	// 	renderList() {
	// 	return this.props.recipes.map((recipe) => {
	// 		return (
	// 			<RecipeListItem 
	// 			key={recipe.uri} 
	// 			onRecipeSelect={() => this.props.selectRecipe(recipe)}
	// 			recipe={recipe} />
	// 		)
	// 	})
	// }