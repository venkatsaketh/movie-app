import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    let movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    movies = await movies.json();
    dispatch(addUpComing(movies.results));
  };
  useEffect(() => {
    getPopular();
  }, []);
};

export default useUpComing;
