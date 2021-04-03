import PropTypes from 'prop-types';
import Contact from '../Contact';
import styles from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={styles.ContactList__wrap}>
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
