import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    let movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    movies = await movies.json();
    dispatch(addTopRated(movies.results));
  };
  useEffect(() => {
    getPopular();
  }, []);
};

export default useTopRated;
