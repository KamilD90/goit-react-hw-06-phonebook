import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    loadContactsFromLocalStorage: (state, action) => {
      return action.payload;
    },

    addContact: (state, action) => {
      return [...state, action.payload];
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { loadContactsFromLocalStorage, addContact, deleteContact } =
  contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
