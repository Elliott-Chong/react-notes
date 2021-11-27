import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = (props) => {
  const {
    match: { params },
  } = props;
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchSingleMovie = async () => {
      setLoading(true);
      const yes = await fetch(API_ENDPOINT + `&i=${id}`);
      const response = await yes.json();
      setMovie(response);
      setLoading(false);
      console.log(response);
    };
    fetchSingleMovie();
  }, [id]);
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="single-movie">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="single-movie-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>{movie.Year}</p>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
