import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Loader from './components/Loader';
import { fetchContacts } from './redux/contacts/contacts-operations';

const getContacts = ({ contacts: { items } }) => items;
const load = ({ contacts: { loading } }) => loading;
const App = () => {
  const contacts = useSelector(getContacts);
  const isLoadingContacts = useSelector(load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer />
      <Container>
        <h1>Phonebook</h1>
        {/* форма для введення контактних даних  */}
        <ContactForm />
        {/* якщо контакти є, то відображаємо список і фільтр */}
        {contacts.length > 0 && <h2>Contacts</h2>}

        {contacts.length > 1 && (
          <>
            {/* фільтрація контактів */}
            <Filter />
            {/* список контактів */}
          </>
        )}
        {isLoadingContacts ? <Loader /> : <ContactList />}
      </Container>
    </>
  );
};

export default App;
