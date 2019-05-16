import React from 'react';
import propTypes from 'prop-types';
import style from './Movies.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search..."
    value={value}
    onChange={onChange}
    className={style.input}
  />
);

SearchBar.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default SearchBar;
