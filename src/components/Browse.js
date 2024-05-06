import React from "react";
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
  // const [type, setType] = useState("popular");
  // const handleFilter = (e) => {
  //   setType(e.target.value);
  // };
  return (
    <div className=" h-fit pb-8">
      {movies && (
        <>
          {movies?.popularMovies && (
            <FirstPopular movie={movies?.popularMovies[0]} />
          )}
          {/* <select
            className="m-7 border outline-none border-gray-400 rounded-lg bg-black font-serif text-sky-400 text-xl p-2"
            onChange={(e) => handleFilter(e)}
          >
            <option value="popular">Popular</option>
            <option value="toprated">Top Rated</option>
            <option value="upcoming">Up Coming</option>
          </select> */}
          {/* {type === "popular" && <MovieList movies={movies.popularMovies} />}
          {type === "toprated" && <MovieList movies={movies.TopRated} />}
          {type === "upcoming" && <MovieList movies={movies.upcoming} />} */}
          <h2 class="text-white font-bold text-2xl p-2 pb-0 ml-4 mt-5 underline">
            Popular
          </h2>
          {movies.popularMovies && <MovieList movies={movies.popularMovies} />}
          <h2 class="text-white font-bold text-2xl p-2 pb-0 ml-4 mt-3 underline">
            Top Rated
          </h2>
          {movies.TopRated && <MovieList movies={movies.TopRated} />}
          <h2 class="text-white font-bold text-2xl p-2 pb-0 ml-4 mt-3 underline">
            Upcoming
          </h2>
          {movies.upcoming && <MovieList movies={movies.upcoming} />}
        </>
      )}
    </div>
  );
};

export default Browse;
