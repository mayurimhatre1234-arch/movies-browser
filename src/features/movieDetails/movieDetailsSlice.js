import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieDetails",
  initialState: {
    content: null,
    credits: {},
    similarMovies: [],
  },
  reducers: {
    setMovieDetails: (state, { payload: content }) => {
      state.content = content;
    },
    setCredits: (state, { payload: credits }) => {
      state.credits = credits;
    },
    setSimilarMovies: (state, { payload: movies }) => {
      state.similarMovies = movies;
    },
  },
});

export const { setMovieDetails, setCredits, setSimilarMovies } =
  moviesSlice.actions;

const selectMovieDetailsState = (state) => state.movieDetails;
export const selectMovieDetailsContent = (state) =>
  selectMovieDetailsState(state).content;
export const selectMovieDetailsCredits = (state) =>
  selectMovieDetailsState(state).credits;
export const selectMovieDetailsCreditsCast = (state) =>
  selectMovieDetailsCredits(state).cast;
export const selectMovieDetailsCreditsCrew = (state) =>
  selectMovieDetailsCredits(state).crew;
export const selectSimilarMovies = (state) =>
  selectMovieDetailsState(state).similarMovies;

export default moviesSlice.reducer;
