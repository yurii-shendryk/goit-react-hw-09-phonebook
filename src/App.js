import { useSelector } from 'react-redux';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const getContacts = ({ contacts: { items } }) => items;

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        {/* форма для введення контактних даних  */}
        <ContactForm />
        {/* якщо контакти є, то відображаємо список і фільтр */}
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            {/* фільтрація контактів */}
            <Filter />
            {/* список контактів */}
            <ContactList />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
