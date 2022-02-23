// actions

const UPDATE_CARDPICKER = 'app/cardPicker/UPDATE_CARDPICKER';

// action creators

export const findCard = payload => ({type: UPDATE_CARDPICKER, payload});

const cardPickerReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_CARDPICKER:
        return action.payload
      default:
        return statePart;
    }
}

export default cardPickerReducer;