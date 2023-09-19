import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addcontact');
export const deleteContact = createAction('contacts/deleteContact');

const initialState = [];

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export default contactsReducer;
