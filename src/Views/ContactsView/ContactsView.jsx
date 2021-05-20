import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import { authSelectors } from '../../redux/auth';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactsView = () => {
  const name = useSelector(authSelectors.getName);
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Container>
        <h1>{name}'s phonebook</h1>
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

export default ContactsView;
