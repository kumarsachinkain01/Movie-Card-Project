import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-container'>
    <div className="movie-card">
      <div className="movie-image">
        <img src={movie.image} alt={movie.name} />
      </div>
      <div className="movie-content">
        <h2>{movie.name}</h2>
        <p>{movie.year}, {movie.director}</p>
        <p>{movie.duration}</p>
        <p>{movie.genre.join(', ')}</p>
        <p>{movie.description}</p>
      </div>
    </div>
    </div>
  );
};

export default MovieCard;

