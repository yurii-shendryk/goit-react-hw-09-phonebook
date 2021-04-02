import React from 'react';
import Contact from '../Contact';
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} name={name} number={number} />
    ))}
  </ul>
);

export default ContactList;
