// imported into /containers/book-list.js to be called when
// an action occurs
export function selectBook(book) {
	// select book is an ActionCreator, and needs to return an action
	// an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}

}