import { useSelector } from 'react-redux';
import Contact from '../Contact';
import Container from '../Container';
import { contactsSelectors } from '../../redux/contacts';
import './ContactList.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <ul className="ContactList">
      {contacts.map(({ id }) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
