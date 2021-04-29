import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/contacts/contacts-actions';
import './Filter.scss';

const getFilter = ({ contacts: { filter } }) => filter;

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className="Filter">
      <label className="Filter__label">
        find contacts by name
        <input
          value={filter}
          onChange={handleChangeFilter}
          className="Filter__input"
        />
      </label>
    </div>
  );
};

export default Filter;
