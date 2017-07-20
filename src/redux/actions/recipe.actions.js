export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
  'RECIPE_SELECTED': 'RECIPE_SELECTED',
  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = recipeName => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName
});

export const updateSearchText = searchText => ({
	type: RECIPE_ACTIONS.UPDATE_SEARCH_TEXT,
	payload: searchText
})

export const selectRecipe = selectedRecipe => ({
	type: RECIPE_ACTIONS.RECIPE_SELECTED,
	payload: selectedRecipe
})