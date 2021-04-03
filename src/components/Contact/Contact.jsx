import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.Contact__item}>
      <p className={styles.Contact_text}>
        <span className={styles.Contact__name}>{name}</span>:{' '}
        <span className={styles.Contact__number}>{number}</span>
      </p>

      <button
        className={styles.Contact__button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
