import React, { Component } from 'react';

// const Component = React.Component;

//class based component
// define a new class SearchBar and give it all 
// the functionality that the React.Component has
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' }
	}

    render() {
    	return (
    		<div className="search-bar">
    		  <input 
    		    value={this.state.term}
    		    onChange={event => this.onInputChange(event.target.value)} />
    		</div>
    	);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}



// class SearchBar extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { term: '' }
// 	}

//     render() {
//     	return (
//     		<div>
//     		  <input onChange={event => this.setState({ term: event.target.value })} />
//     		  Value of the Input: {this.state.term}
//     		</div>
//     	);
//     }
// }


// class SearchBar extends Component {
//     render() {
//     	return <input onChange={this.onInputChange} />;
//     }

//     onInputChange(event) {
//     	console.log(event.target.value);
    	
//     }
// }


// // functional complonent
// const SearchBar = () => {
// 	return <input />;
// }

export default SearchBar;