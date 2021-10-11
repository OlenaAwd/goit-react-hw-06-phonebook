import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './FilterForm/FilterForm';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { getContacts } from '../redux/contacts/contacts-selectors';


export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <Filter />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}
      <ContactList />
      <Toaster position="top-right" />
    </Container>
  );
}

