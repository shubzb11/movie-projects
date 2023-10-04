import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.name}</h2>
      <p>Rating: {movie.rating}</p>
      <p>Released Date: {movie.releasedDate}</p>
    </div>
  );
}

export default MovieCard;
