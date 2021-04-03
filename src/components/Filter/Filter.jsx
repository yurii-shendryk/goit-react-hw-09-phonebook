import React from 'react';
import styles from './Filter.module.css';
const Filter = ({ filter, onChangeFilter }) => (
  <div className={styles.Filter}>
    <label className={styles.Filter__label}>
      find contacts by name
      <input
        value={filter}
        onChange={onChangeFilter}
        className={styles.Filter__input}
      />
    </label>
  </div>
);

export default Filter;
