import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="px-6">
      <div className="flex overflow-x-scroll">
        <div className="flex py-10">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
