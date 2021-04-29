import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { contactsSelectors } from '../../redux/contacts';
import './ContactList.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <div className="ContactList__wrap">
      <ul className="ContactList">
        {contacts.map(({ id }) => (
          <Contact key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
