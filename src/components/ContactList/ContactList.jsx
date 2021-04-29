import { useSelector } from 'react-redux';
import Contact from '../Contact';
import './ContactList.scss';

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
const getContacts = ({ contacts: { items, filter } }) =>
  getFilteredContacts(items, filter);

const ContactList = () => {
  const contacts = useSelector(getContacts);
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
