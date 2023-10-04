import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../services/MovieService";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data for the specified movie ID
    async function fetchMovieDetails() {
      try {
        const data = await getMovies();
        const selectedMovie = data.find((m) => m.id === parseInt(id));
        setMovie(selectedMovie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movie Details</h1>
      <h2>{movie.name}</h2>
      <p>Rating: {movie.rating}</p>
      <p>Released Date: {movie.releasedDate}</p>
    </div>
  );
}

export default MovieDetails;
