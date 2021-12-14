import React, { useEffect, useState } from "react";
import Category from "./lib/Category";
import Search from "./lib/Search";
import Loading from "./../../lib/Loading";
import { API_URL_OMBD } from "./../../config";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(`${API_URL_OMBD}&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`${API_URL_OMBD}&s=air`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Search searchMovies={searchMovies} />
      {loading ? <Loading /> : <Category movies={movies} />}
    </div>
  );
};

export default Movies;
