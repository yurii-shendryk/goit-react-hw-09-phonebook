import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
  });

  useEffect(() => {
    const contactsData = localStorage.getItem('contacts');
    const ParsedContactsData = JSON.parse(contactsData);
    if (ParsedContactsData) {
      setState(prevState => ({
        ...prevState,
        contacts: ParsedContactsData,
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, [state.contacts]);

  const { contacts, filter } = state;

  // Додаємо об'єкт
  const addContact = ({ name, number }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(`${name}is already in contacts`);
      return;
    }
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };

    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, contact],
    }));
  };

  // Видаляємо об'єкт
  const deleteContact = contactId => {
    setState(prevState => ({
      ...prevState,
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // змінюємо інпут фільтрації
  const changeFilter = ({ currentTarget }) => {
    setState({
      ...state,
      filter: currentTarget.value,
    });
  };
  // Фільтруємо існуючі контакти
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        {/* форма для введення контактних даних  */}
        <ContactForm onSubmitForm={addContact} />
        {/* якщо контакти є, то відображаємо список і фільтр */}
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            {/* фільтрація контактів */}
            <Filter filter={filter} onChangeFilter={changeFilter} />
            {/* список контактів */}
            <ContactList
              contacts={getFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
