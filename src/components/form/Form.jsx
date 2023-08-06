import css from './Form.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';

const Form = ({onSubmit}) => {
 
  const [name, setName]= useState("");
  const [number, setNumber]=useState("");

  const handleChange = event => {
    const { value, name } = event.target;
    if (name=== 'name') { 
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
   onSubmit(name, number);
   reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };


    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name" className={css.label}>
          Imię:
          <input
            id="name"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            className={css.input}
            pattern="^[a-zA-Z]+([-'\\s][a-zA-Z]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="..."
          />
        </label>
        <label htmlFor="number" className={css.label}>
          Numer telefonu:
          <input
            id="number"
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            className={css.input}
            pattern="^[a-zA-Z]+([-'\\s][a-zA-Z]+)*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Dodaj do kontaktów
        </button>
      </form>
    );
  }


export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
