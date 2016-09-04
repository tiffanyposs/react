// state argument is not application state
// only the state this reducer is responsible for
// must return null for the initial pageload
export default function(state = null, action) {

	// if the action type is BOOK_SELECTED
	// then return action.payload (new data)
	// else just return the state as the default
	switch(action.type) {
	case 'BOOK_SELECTED':
	  return action.payload;
	}
	return state;
}