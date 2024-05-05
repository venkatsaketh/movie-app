import React, { useEffect, useRef } from "react";
import { options } from "../utils/constants";
import { addSearchMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const Search = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const list = useSelector((store) => store.movie.searchedMovies);
  // console.log(list);
  const handleSearch = async (e) => {
    e.preventDefault();
    const Mname = searchText.current.value;
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${Mname}&release_date.gte=1990&sort_by=popularity.desc&include_adult=false&language=en-US&page=1`,
      options
    );
    data = await data.json();
    dispatch(addSearchMovies(data.results));
  };
  // const getGener = async () => {
  //   let data = await fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
  //     options
  //   );
  //   data = await data.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getGener();
  // }, []);

  return (
    <div className={"mt-5 bg-black min-h-screen mx-auto"}>
      {/* search bar */}
      <form className="flex p-3 mx-auto max-w-7xl" onSubmit={handleSearch}>
        <input
          type="text"
          className="bg-gray-600 w-3/4 rounded-lg p-4 text-white outline-none"
          ref={searchText}
        ></input>
        <button className="border ml-2 w-1/4 border-black bg-slate-100 rounded-lg p-4">
          Search
        </button>
      </form>
      {/* display movies */}
      <div className="flex flex-wrap justify-center mt-8">
        {list?.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            back_drop={movie.backdrop_path}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
