import React from "react";
import { IMG_CDN, IMG_CDN_500 } from "../utils/constants";

const FirstPopular = ({ movie }) => {
  return (
    <div className="h-96 text-white">
      <img
        alt="Backdrop Pic"
        className="w-full h-96 object-cover absolute"
        src={IMG_CDN + movie.backdrop_path}
      />
      <div className=" relative top-48 sm:top-20 lg:top-32 p-4 pl-8 sm:pl-16 bg-black bg-opacity-60">
        <h1 className="text-4xl mb-1 font-bold text-sky-400">
          {movie.original_title +
            " (" +
            movie.release_date.substring(0, 4) +
            ")"}
        </h1>
        <p className="hidden sm:block">{movie.overview}</p>
        <div className="flex items-center mt-8">
          <p className=" text-2xl font-bold">RATING - </p>
          <p className=" text-xl ml-2 p-1 bg-sky-400 text-black font-bold rounded-xl w-fit">
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPopular;
