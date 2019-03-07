// react
import { createContext } from 'react';

// check for previous summary setting 
const checkStorage = () => {
  try {
    const result = JSON.parse(localStorage.getItem('cocos_bungalows_summary'));
    if (result) {
      return result;
    } else {
      return null;
    }
  } catch {
    // no support for storage
    return null;
  }
}

//initial state, returns saved data or new
export const initialBookingSummaryValue = checkStorage() || {
  room: null,
  quantity: 1,
  adults: 1,
  children: 0
};

// context provider
export const BookingSummary = createContext();

//export reducer
export const bookingSummaryReducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    // action handlers
    case 'SET_DATES':
      return { ...state, ...payload };

    case 'SET_SELECTED_ROOM':
      return { ...state, room: payload };

    case 'SET_ROOM_QUANTITY':
      return { ...state, quantity: payload };

    case 'UPDATE_PREFERENCES':
      return { ...state, ...payload };

    default:
      return state;
  }
}