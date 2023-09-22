import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { options } from "../utils/constants";
const Movie = () => {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  console.log(ID);
  const getData = async () => {
    let movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${ID}?language=en-US`,
      options
    );
    movieData = await movieData.json();
    console.log(movieData);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>Movie</div>;
};

export default Movie;
