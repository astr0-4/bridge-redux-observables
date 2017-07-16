import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './redux/actions/recipe.actions';
import RecipeList from './containers/recipe-list';
import SearchBar from './containers/search-bar';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
const App = props =>
  (
    <div className="App">
      <div className="App-header">
        {props.test}
        <h2>Search Below for Some Tasty Recipes!</h2>
      </div>
      <SearchBar />
      <RecipeList />
    </div>
  );



const connectConfig = connect(state => ({
  test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
}), {
  getRecipeByName: getRecipeByName // how can we simplify this, do we remember?
});

export default connectConfig(App);
// <p className="App-intro">
//         <button onClick={() => props.getRecipeByName('omelet')}>Click me for Omelet</button>
//       </p>
//       {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
