import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import No_Picture from "../No_Picture.jpg";

const MovieCard = ({ poster_path, back_drop, movie, movRef }) => {
  const navigate = useNavigate();
  // if (!poster_path) return;
  // const getDate = (date) => {
  //   const dd = new Date(date);
  //   const month = dd.toLocaleString("default", { month: "short" });
  //   return month + ", " + date.slice(0, 4);
  // };

  return (
    <div
      ref={movRef}
      className="w-52 p-1 transition lg:p-3 duration-500 flex-grow-0 flex-shrink-0 ease-in-out hover:cursor-pointer rounded-md text-white hover:-translate-y-3 first-letter:hover:scale-100"
      onClick={() => navigate("/movie/" + movie.id)}
    >
      <img
        alt="Movie Card"
        className="rounded-lg w-fit hidden lg:inline"
        src={poster_path ? IMG_CDN + poster_path : No_Picture}
      />
      <img
        alt="Movie Card"
        className="rounded-lg w-fit lg:hidden"
        src={back_drop ? IMG_CDN + back_drop : No_Picture}
      />
      {/* <div className="flex mt-2 items-center justify-between">
        <div>
          <p>{movie.original_title}</p>
          <p>{movie.release_date ? getDate(movie.release_date) : "NA"}</p>
        </div>
        <p className="bg-gray-700 w-9 ml-2 text-center p-1 mt-1 rounded-full text-xl">
          {movie.vote_average
            ?.toString()
            .slice(0, movie.vote_average.toString().indexOf(".") + 2)}
        </p>
      </div> */}
    </div>
  );
};

export default MovieCard;
