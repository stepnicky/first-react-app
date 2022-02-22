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
        return {...state, cardPicker: action.payload.title};
      case 'ADD_LIST':
        return {...state, lists: [...state.lists, {...action.payload, id: shortid() } ]};
      case 'TOGGLE_CARD_FAVOURITE':
        return {...state, cards: state.cards.map(card => card.id === action.payload ? {...card, isFavourite: !card.isFavourite} : card )};
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
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;
export const getFavouritedCards = ({ cards }) => cards.filter(card => card.isFavourite === true);

//action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const findCard = payload => ({type: 'UPDATE_CARDPICKER', payload});
export const addList = payload => ({type: 'ADD_LIST', payload});
export const toggleCardFavourite = payload => ({type: 'TOGGLE_CARD_FAVOURITE', payload});

export default store;