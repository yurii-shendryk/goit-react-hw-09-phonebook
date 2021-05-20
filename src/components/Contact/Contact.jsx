import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsActions,
  contactsSelectors,
} from '../../redux/contacts';
import './Contact.scss';

const Contact = ({ id }) => {
  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);
  const { name, number } = useSelector(contactsSelectors.getContact(id));
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (visibleContacts.length < 2) {
      dispatch(contactsActions.clearFilter(''));
    }
    dispatch(contactsOperations.deleteContact(id));

    return;
  };
  return (
    <li className="Contact__item">
      <p className="Contact_text">
        <span className="Contact__name">{name} </span>
        <span className="Contact__number">{number}</span>
      </p>

      <button className="Contact__button" type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
