// src/App.js
import React from 'react';
import MovieCard from './Component/MovieCard';
import movies from './Component/movie.json'







'./movies.json'  // Make sure to put your JSON file in the appropriate folder

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;
