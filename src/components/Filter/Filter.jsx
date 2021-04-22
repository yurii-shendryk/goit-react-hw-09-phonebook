import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const getFilter = ({ contacts: { filter } }) => filter;
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={styles.Filter}>
      <label className={styles.Filter__label}>
        find contacts by name
        <input
          value={filter}
          onChange={handleChangeFilter}
          className={styles.Filter__input}
        />
      </label>
    </div>
  );
};

export default Filter;
