// main reducer that aggregates all the reducers (data) together

import { combineReducers } from 'redux';

//import the books reducer file
import BooksReducer from './reducer_books';

import ActiveBook from './reducer_active_book';


//telling Redux how to combine the application state
// we set the key books to the returned value of BooksReducer (reducer_books.js)
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
