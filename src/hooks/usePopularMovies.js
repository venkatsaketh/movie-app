import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    let movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    movies = await movies.json();
    dispatch(addPopular(movies.results));
  };
  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopularMovies;
