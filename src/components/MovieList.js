import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import { useRef } from "react";

const MovieList = ({ movies }) => {
  const movie_card = useRef(null);
  const carousel_ele = useRef(null);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  let scrollEle;
  const handleScroll = (event) => {
    if (event.target.scrollLeft > 0) {
      setLeft(true);
    } else if (event.target.scrollLeft === 0) setLeft(false);

    if (
      event.target.scrollLeft >=
      carousel_ele.current.scrollWidth - carousel_ele.current.offsetWidth - 1
    )
      setRight(false);
    else if (
      event.target.scrollLeft <
      carousel_ele.current.scrollWidth - carousel_ele.current.offsetWidth - 1
    )
      setRight(true);
  };

  useEffect(() => {
    scrollEle = carousel_ele.current;
    carousel_ele.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLeft = () => {
    carousel_ele.current.scrollLeft -= 2 * movie_card.current.offsetWidth;
  };
  const handleRight = () => {
    carousel_ele.current.scrollLeft += 2 * movie_card.current.offsetWidth;
  };

  return (
    <div className="mt-4 ml-3 mr-3 flex c-list relative">
      {left && (
        <button
          className={"text-white text-3xl mb-1 bg-prev z-10 w-10 pr-1"}
          onClick={handleLeft}
        >
          <PiCaretLeftBold />
        </button>
      )}
      <div
        className="flex overflow-x-scroll carousel scroll-smooth"
        ref={carousel_ele}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movRef={movie_card}
            poster_path={movie.poster_path}
            back_drop={movie.backdrop_path}
            movie={movie}
          />
        ))}
      </div>
      {right && (
        <button
          className="text-white text-3xl my-1 bg-next w-10 z-10 pl-1"
          onClick={handleRight}
        >
          <PiCaretRightBold />
        </button>
      )}
    </div>
  );
};

export default MovieList;
