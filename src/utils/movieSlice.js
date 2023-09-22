import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popularMovies: null,
    TopRated: null,
    upcoming: null,
    searchedMovies: null,
  },
  reducers: {
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.upcoming = action.payload;
    },
    addSearchMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { addPopular, addTopRated, addUpComing, addSearchMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
