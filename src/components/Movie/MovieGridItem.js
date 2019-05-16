import React from 'react';
import propTypes from 'prop-types';
import style from './Movies.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <div className={style.movieCard}>
    <img src={posterUrl} alt="" />
    <div className={style.content}>
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: propTypes.string.isRequired,
  posterUrl: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
};

export default MovieGridItem;
