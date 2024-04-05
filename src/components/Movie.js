import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IMG_CDN, IMG_CDN_500, options } from "../utils/constants";
import No_Picture from "../No_Picture.jpg";

const Movie = () => {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const [data, setData] = useState(null);
  const getData = async () => {
    let movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${ID}?language=en-US`,
      options
    );
    movieData = await movieData.json();
    // console.log(movieData);
    setData(movieData);
  };
  useEffect(() => {
    getData();
  }, []);
  const getGenres = (obj) => {
    let d = obj.map((x) => x.name);
    return d.join(", ");
  };
  if (!data) return null;
  return (
    <div className="p-6 md:p-11 pb-5 bg-white text-black">
      <div className="lg:flex flex-wrap justify-between items-center">
        <img
          className=" lg:w-6/12 lg:h-96 rounded-lg object-cover"
          src={data.backdrop_path ? IMG_CDN + data?.backdrop_path : No_Picture}
          alt="poster"
        />
        <div className="lg:w-6/12 lg:pl-8 lg:mt-0 mt-4">
          <p className="text-4xl font-bold text-sky-400">
            {data.original_title +
              " (" +
              data.release_date.substring(0, 4) +
              ")"}
          </p>
          <p className="ml-1 font-serif">{getGenres(data.genres)}</p>
          <p className="mt-4">{data.overview}</p>
          <div className="mt-7 flex justify-around">
            <div>
              <p className="text-xl">Rating</p>
              <p className="rounded-full mt-2 ml-2  bg-gray-600 text-white w-10 font-bold text-center text-lg">
                {data.vote_average
                  ?.toString()
                  .slice(0, data.vote_average.toString().indexOf(".") + 2)}
              </p>
            </div>
            <div>
              <p className="text-xl">Runtime</p>
              <p className="rounded-full mt-2 ml-4 bg-gray-600 text-white  w-10 font-bold text-center text-lg">
                {data.runtime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex text-2xl text-white flex-wrap justify-around bg-gray-600 p-2 font-mono">
        <p>Budget : ${data.budget / 1000000}M</p>
        <p className="">Revenue : ${Math.floor(data.revenue / 1000000)}M</p>
      </div>
      {data.production_companies.length > 0 && (
        <div className="mt-8">
          <h1 className="text-2xl mb-4 font-bold">Production Companies</h1>
          <div className="p-6 rounded-md flex-wrap justify-between bg- text-black">
            {data.production_companies.map((prod) => {
              return (
                <div key={prod.id} className=" flex items-center mb-8">
                  <img
                    className="w-20"
                    src={prod.logo_path ? IMG_CDN + prod.logo_path : No_Picture}
                  />
                  <span className="ml-10">{prod.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
