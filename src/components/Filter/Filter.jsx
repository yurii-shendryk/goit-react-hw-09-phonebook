import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import './Filter.scss';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

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
