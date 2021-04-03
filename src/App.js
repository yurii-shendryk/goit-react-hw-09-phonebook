import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  // Додаємо об'єкт
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };
  // Видаляємо об'єкт
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // змінюємо інпут фільтрації
  changeFilter = ({ currentTarget }) => {
    this.setState({
      filter: currentTarget.value,
    });
  };
  // Фільтруємо існуючі контакти
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          {/* форма для введення контактних даних  */}
          <ContactForm onSubmitForm={this.addContact} />
          {/* якщо контакти є, то відображаємо список і фільтр */}
          {contacts.length > 0 && (
            <>
              <h2>Contacts</h2>
              {/* фільтрація контактів */}
              <Filter filter={filter} onChangeFilter={this.changeFilter} />
              {/* список контактів */}
              <ContactList
                contacts={this.getFilteredContacts()}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
        </Container>
      </>
    );
  }
}

export default App;
