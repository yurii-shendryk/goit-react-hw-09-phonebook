import { createSelector } from '@reduxjs/toolkit';
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.loading;

const getContact = id =>
  createSelector([getAllContacts], allContacts => {
    return allContacts.find(contact => contact.id === id);
  });

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
// eslint-disable-next-line
export default {
  getAllContacts,
  getFilter,
  getIsLoading,
  getContact,
  getFilteredContacts,
};
