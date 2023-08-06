import Form from './form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './filter/Filter.jsx';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import {useState, useEffect} from 'react';

export default function App () {

const [contacts, setContacts]=useState([]);
const [filter, setFilter] = useState("");


 useEffect(() => {
     const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts( JSON.parse(storedContacts));
    }
  }, []);


useEffect(()=> {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])

const filterContacts = value => {
  setFilter(value);
}

const deleteContact = id => {
 setContacts (prevContacts => prevContacts.filter(contact => contact.id !==id)
 );
};
   
const addContact = (name, number) => {
  const doesContactExist = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (doesContactExist) {
    alert("Kontakt o takim imieniu już istnieje !");
    return;
  }

  const newContact= {id: nanoid(), name, number};
  setContacts(prevContacts => [...prevContacts, newContact])
};  

  return (
    <div className={css.wrapper}>
      <Form
        onSubmit={addContact}
      />
      <Filter filterContacts={filterContacts} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );


}
