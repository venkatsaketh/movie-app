import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path, movie }) => {
  const getDate = (date) => {
    const dd = new Date(date);
    const month = dd.toLocaleString("default", { month: "short" });
    return month + ", " + date.slice(0, 4);
  };

  return (
    <div className="w-52 mr-3 p-3 hover:bg-gray-600 hover:cursor-pointer rounded-md text-white">
      <img
        alt="Movie Card"
        className="rounded-lg"
        src={IMG_CDN + poster_path}
      />
      <div className="flex items-center justify-between">
        <p>{getDate(movie.release_date)}</p>
        <p className="bg-gray-700 w-9 ml-2 text-center p-1 mt-1 rounded-full text-xl">
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
