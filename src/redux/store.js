import { createStore } from 'redux';
import initialState from './initialState.js';
import shortid from 'shortid';


const reducer = (state, action) => {
  
  switch(action.type) {
      case 'ADD_COLUMN':
        return {...state, columns: [ ...state.columns, { ...action.newColumn, id: shortid() } ]};
      case 'ADD_CARD':
        return {...state, cards: [ ...state.cards, { ...action.newCard, id: shortid() } ]};
      default:
        return state;
  }
  
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;