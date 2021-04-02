import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = ({ currentTarget }) => {
    this.setState({
      filter: currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
