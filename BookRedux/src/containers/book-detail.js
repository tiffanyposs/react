import React, { Component } from 'react';

//import 'connect' from the react-redux module (only part of the library)
// this is the glue between react and redux
import { connect } from 'react-redux';

// this function from redux makes sure the actions flow through all the reducers
import { bindActionCreators } from 'redux';



class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return <div>Select a Book to get Started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{ this.props.book.title }</div>
				<div>{ this.props.book.pages }</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}



export default connect(mapStateToProps)(BookDetail)