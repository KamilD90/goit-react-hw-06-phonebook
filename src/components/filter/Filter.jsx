import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filterContacts }) => {
  const handleInputChange = event => {
    filterContacts(event.target.value);
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
