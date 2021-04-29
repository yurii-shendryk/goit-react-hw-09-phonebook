import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    toast.error(`${error.message}. Please, try again later`);
    dispatch(deleteContactError(error.message));
  }
};

export { addContact, deleteContact, fetchContacts };
