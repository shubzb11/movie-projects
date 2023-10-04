import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/MovieService";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data when the component mounts
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
