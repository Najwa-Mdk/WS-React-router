import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
<h3>{movie.title}</h3>
<h3>{movie.rate}</h3>
<h3>{movie.description}</h3>
<h3>{movie.posterUrl}</h3>
<h3>{movie.trailer}</h3>


</div>
  )
}


export default MovieCard