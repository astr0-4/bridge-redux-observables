import combineReducers from 'redux/es/combineReducers';
import recipeReducer from './recipe.reducer';
import selectedRecipe from './recipe.selected.reducer';


// heres an example of using combineReducers to make a larger reducer! the object it gets represents
// your final global state object, so you can structure this in a way that makes sense
// but keep it as flat as possible!
export default combineReducers({
  recipe: recipeReducer,
  selectedRecipe: selectedRecipe,
  // testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});

// import { combineReducers } from 'redux';
// import RecipesReducer from './reducer_recipes';
// import ActiveRecipe from './reducer_active_recipe';

// // telling redux how to create our app state
// const rootReducer = combineReducers({
//   recipes: RecipesReducer,
//   activeRecipe: ActiveRecipe
// });

// export default rootReducer;
