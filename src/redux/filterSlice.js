import { createAction, createReducer } from '@reduxjs/toolkit';
export const setFilter = createAction('filter/setFilter');
const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});

export default filterReducer;
