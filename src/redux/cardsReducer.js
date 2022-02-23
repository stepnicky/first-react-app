import shortid from "shortid";
import strContains from "../utils/strContains.js";

// selectors

export const getFilteredCards = ({cards, cardPicker}, columnId) => 
    cards.filter(card => card.columnId === columnId && strContains(card.title, cardPicker));
export const getFavouritedCards = ({ cards }) => cards.filter(card => card.isFavourite === true);

// actions

const ADD_CARD = 'app/cards/ADD_CARD';
const TOGGLE_CARD_FAVOURITE = 'app/cards/TOGGLE_CARD_FAVOURITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

//action creators


export const addCard = payload => ({type: ADD_CARD, payload});
export const toggleCardFavourite = payload => ({type: TOGGLE_CARD_FAVOURITE, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVOURITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card);
      case REMOVE_CARD:
          return statePart.filter(card => card.id !== action.payload);
      default:
        return statePart;
    }
}

export default cardsReducer;