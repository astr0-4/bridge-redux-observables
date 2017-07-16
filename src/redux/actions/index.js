const selectRecipe = (recipe) => {
	return {
		type: 'RECIPE_SELECTED',
		payload: recipe
	}
}

export { selectRecipe }