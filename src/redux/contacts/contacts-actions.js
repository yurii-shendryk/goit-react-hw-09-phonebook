import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    id: shortid.generate(),
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export { addContact, deleteContact, changeFilter };
