import React from "react";
import MovieCard from "./MovieCard";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import { useRef } from "react";
const MovieList = ({ movies }) => {
  const movie_card = useRef(null);
  const carousel_ele = useRef(null);
  const handleLeft = () => {
    carousel_ele.current.scrollLeft -= 2 * movie_card.current.offsetWidth;
  };
  const handleRight = () => {
    carousel_ele.current.scrollLeft += 2 * movie_card.current.offsetWidth;
  };

  return (
    <div className="mt-4 flex">
      <button
        className="text-white text-2xl translate-x-5 my-3 bg-prev z-20"
        onClick={handleLeft}
      >
        <PiCaretLeftBold className="" />
      </button>
      <div
        className="flex overflow-x-scroll carousel scroll-smooth"
        ref={carousel_ele}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movRef={movie_card}
            poster_path={movie.poster_path}
            movie={movie}
          />
        ))}
      </div>
      <button
        className="text-white text-2xl -translate-x-5 my-3 bg-next z-20"
        onClick={handleRight}
      >
        <PiCaretRightBold className="" />
      </button>
    </div>
  );
};

export default MovieList;
