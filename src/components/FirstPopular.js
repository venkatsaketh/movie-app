import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import No_Picture from "../No_Picture.jpg";

const FirstPopular = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-white relative">
        <img
          alt="Backdrop Pic"
          className="w-full h-[500px] sm:h-[700px] object-fill hidden min-[426px]:inline"
          src={movie.backdrop_path ? IMG_CDN + movie.backdrop_path : No_Picture}
        />
        <img
          alt="Movie Card"
          className="w-full h-[500px] sm:h-[700px] object-fill min-[426px]:hidden"
          onClick={() => navigate("/movie/" + movie.id)}
          src={movie.poster_path ? IMG_CDN + movie.poster_path : No_Picture}
        />
        <div className="absolute w-full bottom-0 left-0 pb-6 sm:px-12 px-5 bg-gradient-to-t from-black ">
          <h1
            className=" min-[426px]:inline hidden sm:text-4xl text-2xl mb-1 font-bold text-sky-400 cursor-pointer hover:underline"
            onClick={() => navigate("/movie/" + movie.id)}
          >
            {movie.original_title +
              " (" +
              movie.release_date.substring(0, 4) +
              ")"}
          </h1>
          <p className="hidden sm:block">{movie.overview}</p>
          <div className="flex items-center mt-8">
            <p className=" sm:text-2xl text-xl font-bold">RATING - </p>
            <p className=" text-xl ml-2 p-1 bg-sky-400 text-black font-bold rounded-xl w-fit">
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute right-0 bottom-0 h-full bg-gradient-to-l from-black flex py-auto w-[30px] sm:w-[40px] hover:sm:w-[50px] duration-500"
        onClick={() => {
          setInd((ind + 1) % movies.length);
        }}
        id="Slider"
      >
        <div className="my-auto px-2">
          <img src={next}></img>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default FirstPopular;
