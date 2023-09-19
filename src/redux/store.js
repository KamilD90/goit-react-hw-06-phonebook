import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './contactsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterReducer,
  },
});
