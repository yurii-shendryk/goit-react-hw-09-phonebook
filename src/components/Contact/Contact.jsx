import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

Contact.propTypes = {};

export default Contact;
