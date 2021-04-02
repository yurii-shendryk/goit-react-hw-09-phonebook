import React from 'react';

const Filter = ({ filter, onChangeFilter }) => (
  <label>
    find contacts by name
    <input value={filter} onChange={onChangeFilter} />
  </label>
);

export default Filter;
