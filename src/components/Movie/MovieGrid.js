import React from 'react';
import propTypes from 'prop-types';
import MovieGridItem from './MovieGridItem';
import style from './Movies.module.css';

const MovieGrid = ({ items }) => (
  <div className={style.movieGrid}>
    {items.length === 0 ? (
      <span className={style.noResult}>No matching results!</span>
    ) : (
      items.map(item => (
        <MovieGridItem
          key={item.id}
          title={item.title}
          posterUrl={item.posterUrl}
          overview={item.overview}
        />
      ))
    )}
  </div>
);

MovieGrid.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      posterUrl: propTypes.string.isRequired,
      overview: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
