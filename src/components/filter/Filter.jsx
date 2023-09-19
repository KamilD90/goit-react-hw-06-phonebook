import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.section_filter}>
      <h4 className={css.title}>Wyszukaj w kontaktach</h4>
      <input
        className={css.search_box}
        type="text"
        onChange={handleInputChange}
        placeholder="Imię..."
      />
    </div>
  );
};

export default Filter;
