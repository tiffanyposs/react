import React, { Component } from 'react';

//import 'connect' from the react-redux module (only part of the library)
// this is the glue between react and redux
import { connect } from 'react-redux';

// get the selectBook Functions
import  { selectBook } from '../actions/index';
// this function from redux makes sure the actions flow through all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	//helper function that maps over an array of books
	renderList() { 
		// this.props.books comes from redux. We wire it up below
		// with the connect function and matStateToProps
		return this.props.books.map((book) => {
			return (
				<li 
				  key={book.title} 
				  onClick={() => this.props.selectBook(book)}
				  className="list-group-item">
				  {book.title}
				</li>
			);
		});
	}

	// returns a ul that calls the helper function that returns li
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}


// this is the function that will be passed to 'react-redux'
// whatever is returned will become props in the container / smart component
function mapStateToProps(state) {
	// Whatever get returned will show up as props for BookList
	// state is passed from the reducers, see in ./reducers/index.js we set up the books property
	// thats where state.books comes from
	return {
		books: state.books
	};
}

// anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// bindActionCreators
	// whenever selectBook is called, the result should be passed to all the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// connect takes a function and a component to produce a container
// a container is a component that is away of the state in Redux (aka smart component)
// Promote BookList from component to container
// It needs to know about this new dispatch method selectBook (in mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);




