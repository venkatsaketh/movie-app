import React, { useEffect, useState } from "react";
import Header from "./Header";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";
import FirstPopular from "./FirstPopular";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import { useSearchParams } from "react-router-dom";

const Browse = () => {
  const movies = useSelector((store) => store.movie);
  usePopularMovies();
  useTopRated();
  useUpComing();
  const [type, setType] = useState("popular");
  const handleFilter = (e) => {
    setType(e.target.value);
  };
  return (
    <div className="bg-black h-full pb-4">
      <Header />
      {movies && (
        <>
          {movies?.popularMovies && (
            <FirstPopular movie={movies?.popularMovies?.[0]} />
          )}
          <select
            className="m-7 border border-gray-400 rounded-lg bg-black font-serif text-purple-400 text-2xl p-4"
            onClick={(e) => handleFilter(e)}
          >
            <option value="popular">Popular</option>
            <option value="toprated">Top Rated</option>
            <option value="upcoming">Up Coming</option>
          </select>
          {type == "popular" && <MovieList movies={movies.popularMovies} />}
          {type == "toprated" && <MovieList movies={movies.TopRated} />}
          {type == "upcoming" && <MovieList movies={movies.upcoming} />}
        </>
      )}
    </div>
  );
};

export default Browse;
