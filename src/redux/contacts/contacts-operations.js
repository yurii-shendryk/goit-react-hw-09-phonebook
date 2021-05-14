import axios from 'axios';
import { toast } from 'react-toastify';
import contactsActions from './contacts-actions';
import 'react-toastify/dist/ReactToastify.css';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name: name.trim(),
    number: number.trim(),
  };

  dispatch(contactsActions.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(contactsActions.deleteContactError(error.message));
  }
};
// eslint-disable-next-line
export default { addContact, deleteContact, fetchContacts };
