import React, { Component } from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import style from './Movies.module.css';
import movies from './movies.json';

const filterMoviesItems = (moviesItems, filterQuery) =>
  moviesItems.filter(
    items =>
      items.title.toLowerCase().includes(filterQuery) ||
      items.overview.toLowerCase().includes(filterQuery),
  );

export default class MoviePage extends Component {
  state = {
    moviesItems: [...movies],
    filter: '',
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { moviesItems, filter } = this.state;
    const filterMovies = filterMoviesItems(moviesItems, filter);

    return (
      <div className={style.container}>
        <SearchBar value={filter} onChange={this.changeFilter} />
        <MovieGrid items={filterMovies} />
      </div>
    );
  }
}
