import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>Genres: {movie.genres.map((genre) => {
          return (
            <li key={genre}>
              {genre}
            </li>
          )
        })}
        </ul>
      </div>
    )
  })

  
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;
