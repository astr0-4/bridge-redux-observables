import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName, updateSearchText } from './redux/actions/recipe.actions';
import RecipeList from './containers/recipe-list';
import SearchBar from './containers/search-bar/index';
import RecipeDetailContainer from './containers/recipe-detail-container/index'
import './style.css'

const App = props =>
  (
    <div className="App">
      <div className="search-container">
        <SearchBar value={props.searchText} onClick={() => props.getRecipeByName(props.searchText)} onChange={event => props.updateSearchText(event.target.value)}/>
      </div>
      <div className="main-container">
        <div className="recipe-list-container">
          <RecipeList recipes={props.recipeList.list}/>
        </div>
        <div className="recipe-detail-container">
          <RecipeDetailContainer />
        </div>
      </div>
    </div>
    console.log(props)
  );

const connectConfig = connect(state => ({
  recipeList: state.recipe.list,
  searchText: state.recipe.searchText
}), {
  getRecipeByName, updateSearchText
});

export default connectConfig(App);
// <p className="App-intro">
//         <button onClick={() => props.getRecipeByName('omelet')}>Click me for Omelet</button>
//       </p>
//       {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
      // <div className="App-header">
      //   {props.test}
      //   <h2>Search Below for Some Tasty Recipes!</h2>
      // </div>
