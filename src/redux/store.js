import { createStore } from 'redux';
import initialState from './initialState.js';
import shortid from 'shortid';
import strContains from '../utils/strContains.js';


const reducer = (state, action) => {
  
  switch(action.type) {
      case 'ADD_COLUMN':
        return {...state, columns: [ ...state.columns, { ...action.payload, id: shortid() } ]};
      case 'ADD_CARD':
        return {...state, cards: [ ...state.cards, { ...action.payload, id: shortid() } ]};
      case 'UPDATE_CARDPICKER':
        return {...state, cardPicker: action.payload.title}
      default:
        return state;
  }
  
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//selectors

export const getFilteredCards = ({cards, cardPicker}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, cardPicker));
export const getAllColumns = state => state.columns;

//action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const findCard = payload => ({type: 'UPDATE_CARDPICKER', payload});

export default store;