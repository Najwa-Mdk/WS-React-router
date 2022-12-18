import React from 'react'
import MovieCard from './components/MovieCard'

const MovieList = (movies) => {
  return (

        <div> 
             {movies.map (movie => <MovieCard movie={movie} key ={movie.id} />)}
            </div>
  );
};

export default MovieList