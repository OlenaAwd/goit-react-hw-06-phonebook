import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './FilterForm/FilterForm';
import uuid from '../../node_modules/uuid/dist/v4';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (name === '') {
      toast.error(`Please, enter contact's name`);
      return;
    }

    if (number === '') {
      toast.error(`Please, enter contact's number`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={deleteContact}
      />
      <Toaster position="top-center" autoClose={3000} />
    </Container>
  );
}
