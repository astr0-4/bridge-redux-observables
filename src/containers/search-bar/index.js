import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipeByName }  from '../../redux/actions/recipe.actions';
import './style.css'
 

const SearchBar = (props) => {
	console.log("props:", props)
	return (
		<form onSubmit={props.onFormSubmit}>
				<input 
					className="search-input"
					placeholder="Search..."
					value={props.value}
					onChange={props.onChange}
				/>
				<span>
					<button type="submit" id="submit">Search Recipes!</button>
				</span>
			</form>
		)
}

export default SearchBar;

// class SearchBar extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { term: '' };
// 		this.onInputChange = this.onInputChange.bind(this);
// 		this.onFormSubmit = this.onFormSubmit.bind(this);
// 	}

// 	onInputChange(event) {
// 		this.setState({ term: event.target.value })
// 	}

// 	onFormSubmit(event) {
// 		event.preventDefault();
// 		this.props.getRecipeByName(this.state.term);
// 		this.setState( { term: '' });
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.onFormSubmit}>
// 				<input 
// 					className="search-input"
// 					placeholder="Search..."
// 					value={this.state.term}
// 					onChange={this.onInputChange}
// 				/>
// 				<span>
// 					<button type="submit" id="submit">Search Recipes!</button>
// 				</span>
// 			</form>
// 		)
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ getRecipeByName }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);