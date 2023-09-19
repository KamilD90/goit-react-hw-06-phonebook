import { React, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  loadContactsFromLocalStorage,
} from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import Form from './form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './filter/Filter.jsx';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const fetchContactsFromLocalStorage = () => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  };

  useEffect(() => {
    const loadedContacts = fetchContactsFromLocalStorage();
    dispatch(loadContactsFromLocalStorage(loadedContacts));
  }, [dispatch]);

  const saveContactsToLocalStorage = contacts => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const filterContacts = value => {
    dispatch(setFilter(value));
  };

  const addContactHandler = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const updatedContacts = [...contacts, newContact];
    dispatch(addContact(newContact));
    saveContactsToLocalStorage(updatedContacts);
  };

  const deleteContactHandler = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContact(id));
    saveContactsToLocalStorage(updatedContacts);
  };

  return (
    <div className={css.wrapper}>
      <Form onSubmit={addContactHandler} />
      <Filter filterContacts={filterContacts} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContactHandler}
      ></ContactList>
    </div>
  );
}
