import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { popularMovies: null, TopRated: null, upcoming: null },
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
  },
});

export const { addPopular, addTopRated, addUpComing } = movieSlice.actions;
export default movieSlice.reducer;
