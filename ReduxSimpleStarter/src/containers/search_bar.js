import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		// binds the context of this to SearchBar on the .onInputChange method
		// prevously we used the fat arrow method that changes the scope of this
		// so it was not needed before
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a Five Day Forecast In Your Favorite Cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}