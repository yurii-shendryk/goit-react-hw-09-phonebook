import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
let cx = classNames.bind(styles);
const initialState = {
  name: '',
  number: '',
};

const getContacts = ({ contacts: { items } }) => items;
const load = ({ contacts: { loading } }) => loading;
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoadingContacts = useSelector(load);
  const [contactsState, setContactsState] = useState(initialState);

  const { name, number } = contactsState;

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setContactsState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const unavailableName = contacts.some(contact => contact.name === name);
    if (!unavailableName) {
      dispatch(addContact(name, number));
      setContactsState(initialState);
      return;
    }
    alert(`${name} is already in contacts`);
  };

  const nameClasses = cx('ContactForm_label', 'ContactForm_label--name');
  const numberClasses = cx('ContactForm_label', 'ContactForm_label--number');
  const btnClasses = cx('ContactForm_button', {
    'ContactForm_button--disabled': isLoadingContacts,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.ContactForm}>
      <label className={nameClasses}>
        Name
        <input
          type="text"
          name="name"
          className={styles.ContactForm__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder=" "
          required
          value={name}
          onChange={handleInputChange}
          disabled={isLoadingContacts}
        />
      </label>
      <label className={numberClasses}>
        Nubmer
        <input
          type="tel"
          name="number"
          className={styles.ContactForm__input}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          placeholder=" "
          required
          value={number}
          onChange={handleInputChange}
          disabled={isLoadingContacts}
        />
      </label>

      <button type="submit" className={btnClasses} disabled={isLoadingContacts}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
