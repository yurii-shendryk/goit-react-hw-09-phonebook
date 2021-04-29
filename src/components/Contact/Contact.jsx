import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import styles from './Contact.module.css';

const getContact = id => state =>
  state.contacts.items.find(contact => contact.id === id);

const Contact = ({ id }) => {
  const { name, number } = useSelector(getContact(id));
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={styles.Contact__item}>
      <p className={styles.Contact_text}>
        <span className={styles.Contact__name}>{name}</span>:
        <span className={styles.Contact__number}>{number}</span>
      </p>

      <button
        className={styles.Contact__button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Contact;
