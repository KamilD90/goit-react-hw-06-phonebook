import css from './ContactList.module.css';
import React from 'react';

const ContactList = ({ contacts, filter, deleteContact }) => {
  if (!Array.isArray(contacts)) {
    return null; // lub wyświetl jakiś komunikat błędu
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Sprawdź, czy filtr pasuje do jakiegokolwiek kontaktu
  const isFilterMatch = filteredContacts.length > 0;

  // Jeśli filtr nie pasuje do żadnego kontaktu, zwróć pustą listę
  if (!isFilterMatch) {
    return null;
  }

  return (
    <div className={css.container}>
      <h2 className={css.section_title}>Lista kontaktów</h2>

      <ul className={css.contact_list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.list_item}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button
              className={css.btn_delete}
              onClick={() => deleteContact(id)}
            >
              Usuń z kontaktów
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
