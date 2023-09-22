import React, { useRef } from "react";
import { options } from "../utils/constants";
import { addSearchMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const Search = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const list = useSelector((store) => store.movie.searchedMovies);
  console.log(list);
  const handleSearch = async () => {
    const Mname = searchText.current.value;
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${Mname}&include_adult=false&language=en-US&page=1`,
      options
    );
    data = await data.json();
    dispatch(addSearchMovies(data.results));
  };
  return (
    <div className={"mt-5 w-11/12 sm:w-10/12 md:w-8/12 mx-auto"}>
      {/* search bar */}
      <div className="flex">
        <input
          type="text"
          className="bg-gray-600 w-3/4 rounded-lg p-4 text-white outline-none"
          ref={searchText}
        ></input>
        <button
          className="border ml-2 w-1/4 border-black bg-slate-100 rounded-lg p-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* display movies */}
      <div className="flex flex-wrap justify-center mt-10 pb-4">
        {list?.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
