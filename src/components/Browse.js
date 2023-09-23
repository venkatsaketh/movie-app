import React, { useState } from "react";
import { useSelector } from "react-redux";
import FirstPopular from "./FirstPopular";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

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
    <div className="bg-black h-fit pb-4">
      {movies && (
        <>
          {movies?.popularMovies && (
            <FirstPopular movie={movies?.popularMovies?.[0]} />
          )}
          <select
            className="m-7 border outline-none border-gray-400 rounded-lg bg-black font-serif text-sky-400 text-2xl p-4"
            onChange={(e) => handleFilter(e)}
          >
            <option value="popular">Popular</option>
            <option value="toprated">Top Rated</option>
            <option value="upcoming">Up Coming</option>
          </select>
          {type === "popular" && <MovieList movies={movies.popularMovies} />}
          {type === "toprated" && <MovieList movies={movies.TopRated} />}
          {type === "upcoming" && <MovieList movies={movies.upcoming} />}
        </>
      )}
    </div>
  );
};

export default Browse;
