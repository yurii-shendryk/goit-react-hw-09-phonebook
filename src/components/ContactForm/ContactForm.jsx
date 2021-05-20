import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import classNames from 'classnames';
import './ContactForm.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameClasses = classNames(
    'ContactForm_label',
    'ContactForm_label--name',
  );

  const phoneNumberClasses = classNames(
    'ContactForm_label',
    'ContactForm_label--number',
  );
  const btnClasses = classNames('ContactForm_button', {
    'ContactForm_button--disabled': isLoadingContacts,
  });

  const updateName = ({ currentTarget }) => {
    setName(currentTarget.value);
  };

  const updateNumber = ({ currentTarget }) => {
    setNumber(currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const unavailableName = contacts.some(
      contact => contact.name === name.trim(),
    );
    if (!unavailableName) {
      dispatch(contactsOperations.addContact(name, number));
      setName('');
      setNumber('');
      return;
    }
    alert(`${name.trim()} is already in contacts`);
  };

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <label className={nameClasses}>
        Name
        <input
          type="text"
          name="name"
          className="ContactForm__input"
          pattern="^\s*[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*\s*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder=" "
          required
          value={name}
          onChange={updateName}
          disabled={isLoadingContacts}
        />
      </label>
      <label className={phoneNumberClasses}>
        Nubmer
        <input
          type="tel"
          name="number"
          className="ContactForm__input"
          pattern="^\s*(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          placeholder=" "
          required
          value={number}
          onChange={updateNumber}
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
