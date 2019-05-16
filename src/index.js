import React from 'react';
import ReactDOM from 'react-dom';
import MoviePage from './components/Movie/MoviePage';

const App = () => <MoviePage />;

ReactDOM.render(<App />, document.querySelector('#root'));
