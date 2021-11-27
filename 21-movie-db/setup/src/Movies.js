import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { state } = useGlobalContext();

  if (state.loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {state.movies.map((movie) => {
        return (
          <Link
            className="movie"
            to={`/movies/${movie.imdbID}`}
            key={movie.imdbID}
          >
            <article>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : url}
                alt={movie.Title}
              />
              <div className="movie-info">
                <h4 className="title">{movie.Title}</h4>
                <p>{movie.Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
